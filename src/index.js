import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#f8f7fd" barStyle="dark-content" />
      <Routes />
    </>
  );
};

export default App;
