import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './campersSlice';
import { filterReducer } from './filtersSlice';
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

import storage from 'redux-persist/lib/storage';

const camperPeristConfig = {
  key: 'camper',
  storage,
  whitelist: ['campers'],
};

export const store = configureStore({
  reducer: {
    campers: persistReducer(camperPeristConfig, campersReducer),
    filter: filterReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
