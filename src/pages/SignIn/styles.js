import styled from 'styled-components/native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';

export const Image = styled.Image`
  width: 113px;
  height: 138px;
  margin: 56px auto 64px;
`;

export const Input = styled.TextInput`
  border-bottom-color: #333333;
  border-bottom-width: 2px;
  width: 80%;
  margin: 0 auto 40px;
  font-size: 24px;
`;

export const Button = styled(RectButton)`
  background-color: #333;
  width: 80%;
  height: 56px;
  align-items: center;
  justify-content: center;
  margin: 0 auto 40px;
`;

export const ButtonText = styled.Text`
  text-align: center;
  font-size: 32px;
  color: #f8f7fd;
`;

export const ButtonLink = styled(TouchableOpacity)`
  margin: 40px 0;
`;

export const ButtonLinkText = styled.Text`
  text-align: center;
  font-size: 20px;
`;
