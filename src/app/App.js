import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {StatusBar, Platform} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {store, persistor} from './store';
import {PersistGate} from 'redux-persist/es/integration/react';

// Components
import {LoaderLock} from '../features/loaderLock';
import {RootNavigation} from '../navigation';

const App = () => {
  useEffect(() => {
    if (Platform.OS !== 'ios') StatusBar.setBackgroundColor('#081E39');

    StatusBar.setBarStyle('light-content');
  }, []);
  return (
    <>
      <SafeAreaProvider>
        <Provider store={store}>
          <LoaderLock />
          <RootNavigation />
        </Provider>
      </SafeAreaProvider>
    </>
  );
};

export default App;
