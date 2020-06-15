/* eslint-disable no-console */
import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import base64 from 'react-native-base64';
import { ASSISTANT_URL, ASSISTANT_APIKEY } from 'react-native-dotenv';
import Voice from '@react-native-community/voice';
import Tts from 'react-native-tts';

import Axios from 'axios';
import Background from '~/components/Background';
import binoImg from '~/assets/images/bino-head.png';
import arrowRight from '~/assets/images/check.png';
import arrowLeft from '~/assets/images/arrow-backward.png';
import {
  Image,
  LeftText,
  BoldText,
  ArrowRight,
  ArrowLeft,
  ButtonLink,
  ButtonView,
} from './styles';

const Slide3 = ({ navigation }) => {
  const [backendEndpoint] = useState(`${ASSISTANT_URL}/sessions`);
  const [version] = useState('?version=2020-04-01');
  const [userSession, setUserSession] = useState();
  const [text, setText] = useState();
  const [userPayload] = useState({
    headers: {
      Authorization: `Basic ${base64.encode(`apikey:${ASSISTANT_APIKEY}`)}`,
    },
  });

  const init = useCallback(
    async session => {
      try {
        const initialPayload = {
          input: {
            message_type: 'text',
            text: '',
          },
        };
        const response = await Axios.post(
          `${backendEndpoint}/${session}/message${version}`,
          initialPayload,
          userPayload
        );
        Tts.speak(response.data.output.generic[0].text);
        Tts.speak('É só tocar no meu Ícone que eu te atendo');

        setText(response.data.output.generic[0].text);
      } catch (err) {
        console.log('Failed to retrive data from Watson API', err);
      }
    },
    [backendEndpoint, userPayload, version]
  );

  const sendMessage = useCallback(
    async payload => {
      try {
        const inputPayload = {
          input: {
            message_type: 'text',
            text: payload,
          },
        };

        const response = await Axios.post(
          `${backendEndpoint}/${userSession}/message${version}`,
          inputPayload,
          userPayload
        );
        console.log(response.data);
        setText(response.data.output.generic[0].text);
        Tts.speak(response.data.output.generic[0].text);
      } catch (err) {
        console.log('Failed to send data to Watson API', err);
      }
    },
    [userSession, backendEndpoint, userPayload, version]
  );

  function prev() {
    navigation.navigate('Slide2');
  }

  function next() {
    navigation.navigate('Default');
  }

  const speak = useCallback(() => {
    Tts.stop();
    Voice.stop();
    Voice.start('pt-BR');
  }, []);

  const getSession = useCallback(async () => {
    // navigation.navigate('Slide4');
    try {
      const response = await Axios.post(
        `${backendEndpoint}${version}`,
        {},
        userPayload
      );
      setUserSession(response.data.session_id);
      init(response.data.session_id);
    } catch (err) {
      console.log('error', err);
    }
  }, [userPayload, backendEndpoint, init, version]);

  useEffect(() => {
    Voice.onSpeechResults = result => {
      setText(result.value[0]);
      sendMessage(result.value[0]);
    };
  }, [sendMessage]);

  useEffect(() => {
    Tts.setDefaultLanguage('pt-BR');
    Tts.setDefaultVoice('pt-BR-language');
    Tts.stop();
    getSession();
  }, [getSession]);

  return (
    <Background>
      <LeftText>{text}</LeftText>
      <LeftText>
        É só tocar no meu <BoldText>Ícone</BoldText> que eu te atendo
      </LeftText>
      <ButtonView isRight>
        <ButtonLink onPress={next}>
          <ArrowRight style={{ resizeMode: 'stretch' }} source={arrowRight} />
        </ButtonLink>
      </ButtonView>
      <ButtonView>
        <ButtonLink onPress={prev}>
          <ArrowLeft style={{ resizeMode: 'stretch' }} source={arrowLeft} />
        </ButtonLink>
      </ButtonView>
      <ButtonLink onPressIn={speak}>
        <Image style={{ resizeMode: 'stretch' }} source={binoImg} />
      </ButtonLink>
    </Background>
  );
};

Slide3.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Slide3;
