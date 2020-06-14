import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tts from 'react-native-tts';

import Background from '~/components/Background';
import binoImg from '~/assets/images/bino-head.png';
import arrowRight from '~/assets/images/arrow-forward.png';
import arrowLeft from '~/assets/images/arrow-backward.png';
import {
  Image,
  LeftText,
  ArrowRight,
  ArrowLeft,
  ButtonLink,
  Selector,
  ButtonView,
} from './styles';

const Slide2 = ({ navigation }) => {
  const [voice, setVoice] = useState('pt-BR-language');
  const options = [
    {
      id: 'pt-BR-language',
      language: 'pt-BR',
      latency: 200,
      name: 'Modelo de voz 1',
      networkConnectionRequired: false,
      notInstalled: false,
      quality: 400,
    },
    {
      id: 'pt-br-x-afs#male_3-local',
      language: 'pt-BR',
      latency: 200,
      name: 'Modelo de voz 2',
      networkConnectionRequired: false,
      notInstalled: false,
      quality: 400,
    },
    {
      id: 'pt-br-x-afs#female_3-local',
      language: 'pt-BR',
      latency: 200,
      name: 'Modelo de voz 3',
      networkConnectionRequired: false,
      notInstalled: false,
      quality: 400,
    },
    {
      id: 'pt-br-x-afs#female_2-local',
      language: 'pt-BR',
      latency: 200,
      name: 'Modelo de voz 4',
      networkConnectionRequired: false,
      notInstalled: false,
      quality: 400,
    },
    {
      id: 'pt-br-x-afs#female_1-local',
      language: 'pt-BR',
      latency: 200,
      name: 'Modelo de voz 5',
      networkConnectionRequired: false,
      notInstalled: false,
      quality: 400,
    },
    {
      id: 'pt-br-x-afs-local',
      language: 'pt-BR',
      latency: 200,
      name: 'Modelo de voz 6',
      networkConnectionRequired: false,
      notInstalled: false,
      quality: 400,
    },
    {
      id: 'pt-br-x-afs#male_2-local',
      language: 'pt-BR',
      latency: 200,
      name: 'Modelo de voz 7',
      networkConnectionRequired: false,
      notInstalled: false,
      quality: 400,
    },
    {
      id: 'pt-br-x-afs#male_1-local',
      language: 'pt-BR',
      latency: 200,
      name: 'Modelo de voz 8',
      networkConnectionRequired: false,
      notInstalled: false,
      quality: 400,
    },
  ];

  function next() {
    navigation.navigate('Slide3');
  }
  function prev() {
    navigation.navigate('Slide1');
  }

  useEffect(() => {
    Tts.stop();
    Tts.setDefaultLanguage('pt-BR');
    Tts.setDefaultVoice('pt-BR-language');
    Tts.speak('Escolha qual será minha voz');
  }, []);

  useEffect(() => {
    if (voice) {
      Tts.setDefaultVoice(voice);
      Tts.speak('O que acha dessa?');
    }
  }, [voice]);

  return (
    <Background>
      <LeftText>Escolha qual será minha voz</LeftText>
      <Selector selectedValue={voice} onValueChange={setVoice}>
        {options.map(option => (
          <Selector.Item
            label={option.name}
            value={option.id}
            key={option.id}
          />
        ))}
      </Selector>
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
      <Image style={{ resizeMode: 'stretch' }} source={binoImg} />
    </Background>
  );
};

Slide2.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Slide2;
