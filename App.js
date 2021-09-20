import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native'
import AddRecord from './src/modules/addRecord/AddRecord';
import Home from './src/modules/home/Home';
import { Provider } from "react-redux";
import store from './src/config/Store';
import Login from './src/modules/auth/login/Login';
import SignUp from './src/modules/auth/signUp/SignUp';
import { useSelector, useDispatch } from 'react-redux'
import Navigation from './src/modules/navigation/Navigation';

export default function App() {

  return (
   
      <Provider store={store}>
        <Navigation />
    </Provider>
    
  )
}
