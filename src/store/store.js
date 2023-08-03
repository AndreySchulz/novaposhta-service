import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { infoReducer } from './ttn/ttn-slice';


const infoPersistConfig = {
  key: 'info',
  storage,
  blacklist: [
    'selectedNumber',
    'infoError',
    'departmentsError',
    'ttnInfo',
    'departmentsList',
    'page',
    'city',
    'isLoading',
  ],
};

export const store = configureStore({
  reducer: {
    info: persistReducer(infoPersistConfig, infoReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);