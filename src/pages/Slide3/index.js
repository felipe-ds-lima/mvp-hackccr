import React from 'react';
import PropTypes from 'prop-types';

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

const Slide3 = ({ navigation }) => {
  function next() {
    navigation.navigate('Slide4');
  }

  function prev() {
    navigation.navigate('Slide2');
  }

  return (
    <Background>
      <LeftText>
        A qualquer momento você pode me chamar. É só falar{' '}
        <BoldText>“Ei Bina”</BoldText> que eu te atendo
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
      <Image style={{ resizeMode: 'stretch' }} source={binoImg} />
    </Background>
  );
};

Slide3.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Slide3;
