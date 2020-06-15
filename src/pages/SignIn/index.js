import React, { useState } from 'react';
import PropType from 'prop-types';

import binoImg from '~/assets/images/bino-head.png';
import Background from '~/components/Background';
import { setPhoneMask } from '~/utils/masks';

import {
  Image,
  Input,
  Button,
  ButtonText,
  ButtonLink,
  ButtonLinkText,
} from './styles';

const SignIn = ({ navigation }) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  function handleGoToRegister() {
    navigation.navigate('SignUp');
  }

  function handleGoToSlide() {
    navigation.navigate('Slide1');
  }

  return (
    <Background>
      <>
        <Image style={{ resizeMode: 'stretch' }} source={binoImg} />
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
          <ButtonText>Entrar</ButtonText>
        </Button>

        <ButtonLink onPress={handleGoToRegister}>
          <ButtonLinkText>Criar uma conta</ButtonLinkText>
        </ButtonLink>
        <ButtonLink>
          <ButtonLinkText>Esqueci a senha</ButtonLinkText>
        </ButtonLink>
      </>
    </Background>
  );
};

SignIn.propTypes = {
  navigation: PropType.shape({
    navigate: PropType.func,
  }).isRequired,
};

export default SignIn;
