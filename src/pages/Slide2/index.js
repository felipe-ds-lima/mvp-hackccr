import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
} from './styles';

// import { Container } from './styles';

const Slide2 = ({ navigation }) => {
  const [voice, setVoice] = useState('1');

  function next() {
    navigation.navigate('Slide3');
  }
  function prev() {
    navigation.navigate('Slide1');
  }

  return (
    <Background>
      <LeftText>Escolha qual será minha voz</LeftText>
      <Selector selectedValue={voice} onValueChange={setVoice}>
        <Selector.Item label="Modelo de voz 1" value="1" />
        <Selector.Item label="Modelo de voz 2" value="2" />
      </Selector>
      <ButtonLink onPress={next}>
        <ArrowRight style={{ resizeMode: 'stretch' }} source={arrowRight} />
      </ButtonLink>
      <ButtonLink onPress={prev}>
        <ArrowLeft style={{ resizeMode: 'stretch' }} source={arrowLeft} />
      </ButtonLink>
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
