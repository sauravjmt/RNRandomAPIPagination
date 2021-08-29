/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppNavigatior from './src/navigation/AppNavigatior';

import store from './src/store/configStroe';

import { Provider } from 'react-redux';


const App = () => {
  return (

    <Provider  store={store}>

    <AppNavigatior/>

    </Provider>
    
  )
}

export default App





