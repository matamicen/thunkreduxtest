import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import peopleReducer from './src/reducers/peopleReducer';
//import Main from './src/components/Main';
import thunk from "redux-thunk"
import AppContainer from "./src/containers/AppContainer";

const createStoreWithMidddleware = applyMiddleware(thunk)(createStore);


const store = createStoreWithMidddleware(peopleReducer);

export default class App extends React.Component {



  render() {


    return (
      <Provider store={store}>
        <AppContainer />

      </Provider>
    );
  }
}



