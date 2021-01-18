import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import logger from 'redux-logger';

import {setAuthHeader, tokenSelector} from '../services';

//Reducer
import reducers from './reducers';

const store = configureStore({
  reducer: reducers,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
  ],
});

const persistor = persistStore(store);

store.subscribe(() => {
  const token = tokenSelector(store.getState());
  setAuthHeader(token);
});

export {store, persistor};
