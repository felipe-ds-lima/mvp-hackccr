import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tts from 'react-native-tts';

import Background from '~/components/Background';
import binoImg from '~/assets/images/bino-head.png';
import arrowRight from '~/assets/images/arrow-forward.png';
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

// import { Container } from './styles';

const Slide1 = ({ navigation }) => {
  function next() {
    navigation.navigate('Slide2');
  }

  useEffect(() => {
    Tts.stop();
    Tts.setDefaultLanguage('pt-BR');
    Tts.setDefaultVoice('pt-BR-language');
    Tts.speak('Opa! Meu nome é Bina, e vou te ajudar nessa');
  }, []);

  return (
    <Background>
      <LeftText>
        Opa! Meu nome é <BoldText>Bina</BoldText> e vou te ajudar nessa
      </LeftText>
      <ButtonView>
        <ButtonLink onPress={next}>
          <ArrowRight style={{ resizeMode: 'stretch' }} source={arrowRight} />
        </ButtonLink>
      </ButtonView>
      <ButtonLink>
        <ArrowLeft style={{ resizeMode: 'stretch' }} source={arrowLeft} />
      </ButtonLink>
      <Image style={{ resizeMode: 'stretch' }} source={binoImg} />
    </Background>
  );
};

Slide1.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Slide1;
