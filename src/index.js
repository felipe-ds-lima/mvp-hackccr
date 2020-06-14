import React from 'react';
import { StatusBar, YellowBox } from 'react-native';
import Routes from './routes';

YellowBox.ignoreWarnings(['Require cycle:']);

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#f8f7fd" barStyle="dark-content" />
      <Routes />
    </>
  );
};

export default App;
