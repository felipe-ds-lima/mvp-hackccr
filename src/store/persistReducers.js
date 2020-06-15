import { persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'gobarber',
      storage: AsyncStorage,
      whitelist: ['auth', 'user'],
    },
    reducers
  );

  return persistedReducer;
};
