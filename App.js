import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/reducers/counterReducer';
import Main from './src/components/Main';

const store = createStore(reducer);

export default class App extends React.Component {



  render() {


    return (
      <Provider store={store}>
        <Main />

      </Provider>
    );
  }
}



