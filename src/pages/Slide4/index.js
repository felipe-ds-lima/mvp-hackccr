import React from 'react';
import PropTypes from 'prop-types';

import Background from '~/components/Background';
import binoImg from '~/assets/images/bino-head.png';
import check from '~/assets/images/check.png';
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

const Slide4 = ({ navigation }) => {
  function next() {
    // navigation.navigate('Slide4');
  }

  function prev() {
    navigation.navigate('Slide3');
  }

  return (
    <Background>
      <LeftText firstLine>Tente falar</LeftText>
      <LeftText>
        <BoldText>“Ei Bina”</BoldText> agora!
      </LeftText>
      <ButtonView isRight>
        <ButtonLink onPress={next}>
          <ArrowRight style={{ resizeMode: 'stretch' }} source={check} />
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

Slide4.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Slide4;
