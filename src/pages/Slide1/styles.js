import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Image = styled.Image`
  width: 144px;
  height: 176px;
  margin: 0px auto 64px;
`;

export const ButtonLink = styled(TouchableOpacity)`
  margin: 16px 0;
  width: 100%;
`;

export const ArrowRight = styled.Image`
  width: 80px;
  height: 80px;
  margin: 0 16px 0 auto;
`;

export const ArrowLeft = styled.Image`
  width: 80px;
  height: 80px;
  opacity: 0;
`;

export const LeftText = styled.Text`
  margin: 40px 40px 16px 16px;
  font-size: 40px;
`;

export const BoldText = styled.Text`
  font-weight: bold;
`;
