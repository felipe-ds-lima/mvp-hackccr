import React, { useState } from 'react';
import PropType from 'prop-types';

import Background from '~/components/Background';
import binoImg from '~/assets/images/bino-head.png';
import { setPhoneMask } from '~/utils/masks';

import {
  Image,
  Input,
  Button,
  ButtonText,
  ButtonLink,
  ButtonLinkText,
} from './styles';

// import { Container } from './styles';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  function handleGoToLogin() {
    navigation.navigate('SignIn');
  }

  function handleGoToSlide() {
    navigation.navigate('Slide1');
  }

  return (
    <Background>
      <>
        <Image style={{ resizeMode: 'stretch' }} source={binoImg} />
        <Input
          placeholder="Seu nome"
          autoCapitalize="words"
          value={name}
          onChangeText={setName}
        />
        <Input
          placeholder="Seu telefone"
          value={phone}
          keyboardType="phone-pad"
          onChangeText={value => setPhone(setPhoneMask(value))}
          maxLength={14}
        />
        <Input
          placeholder="Sua senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button onPress={handleGoToSlide}>
          <ButtonText>Criar conta</ButtonText>
        </Button>

        <ButtonLink onPress={handleGoToLogin}>
          <ButtonLinkText>Já tenho uma conta</ButtonLinkText>
        </ButtonLink>
      </>
    </Background>
  );
};

SignUp.propTypes = {
  navigation: PropType.shape({
    navigate: PropType.func,
  }).isRequired,
};

export default SignUp;
