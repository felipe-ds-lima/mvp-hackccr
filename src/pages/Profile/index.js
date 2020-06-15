import React from 'react';
import ReactVector from 'react-native-vector-icons/MaterialCommunityIcons';

import Background from '~/components/Background';

import avatar from '~/assets/images/avatar.png';
import binaImg from '~/assets/images/bino-head.png';

import {
  Image,
  Name,
  Row,
  Bold,
  Experience,
  Icon,
  LevelDesc,
  LevelPoints,
  Option,
  OptionText,
  YourPoints,
  Bar1,
  Bar2,
  ImageP,
} from './styles';

const Profile = () => {
  return (
    <Background>
      <Image source={avatar} style={{ resizeMode: 'stretch' }} />
      <Name>Truquinho</Name>
      <Row>
        <LevelDesc>Nível</LevelDesc>
        <LevelPoints>25</LevelPoints>
      </Row>
      <Row>
        <Bar1 />
        <Bar2 />
      </Row>
      <Row>
        <Experience>23000/28000</Experience>
      </Row>
      <Row>
        <YourPoints>
          Você tem <Bold>2300</Bold> pontos
        </YourPoints>
      </Row>
      <Option>
        <Icon>
          <ImageP
            source={binaImg}
            style={{
              resizeMode: 'stretch',
            }}
          />
        </Icon>
        <OptionText>Opções Bina</OptionText>
      </Option>
      <Option>
        <Icon>
          <ReactVector name="pause" size={30} />
        </Icon>
        <OptionText>Definir Paradas</OptionText>
      </Option>
      <Option>
        <Icon>
          <ReactVector name="food-fork-drink" size={30} />
        </Icon>
        <OptionText>Alimentação</OptionText>
      </Option>
    </Background>
  );
};

export default Profile;
