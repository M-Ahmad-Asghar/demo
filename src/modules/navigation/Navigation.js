import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native'
import AddRecord from '../addRecord/AddRecord';
import Home from '../home/Home';
import Login from '../auth/login/Login';
import SignUp from '../auth/signUp/SignUp';
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from "react";
import UpdateRecord from '../updateRecord/UpdateRecord';
import ViewScreen from '../viewScreen/ViewScreen';

export default function Navigation  ()  {
    
    const Stack = createNativeStackNavigator();
    const authState = useSelector(state => state.authReducer.isUserLoggedIn)
    const [initializing, setInitializing] = useState(true);

     console.log('authentication state',authState);
    let isSignIn = authState
    return (
             <NavigationContainer>
      <Stack.Navigator>
      {isSignIn?
       <> 
        <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddRecord" component={AddRecord} />
      <Stack.Screen name="ViewScreen" component={ViewScreen} />
      <Stack.Screen name="UpdateRecord" component={UpdateRecord} />
      
      </> 
      :
      <>
     <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      </>
      }
      </Stack.Navigator>
    </NavigationContainer>
    )
}
