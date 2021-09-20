import React from 'react'
import { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux'
import { loginAction, signupAction } from '../../../store/actions/AuthAtcion';

export default function SignUp({ navigation }) {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangepassword] = React.useState('');
    const [fullName, onChangeFullName] = React.useState('');
    const dispatch = useDispatch();
    const userSUp = useSelector(state => state.authReducer.user)
   
    return (
        <View>
            <Text>Email</Text>
            <TextInput  placeholder='Email' placeholderTextColor="gray" onChangeText={onChangeEmail}  value={email}/>
            <Text>Password</Text>
            <TextInput   placeholder='Password' placeholderTextColor="gray" onChangeText={ onChangepassword}  value={password}/>
            <Text>Full name</Text>
            <TextInput   placeholder='Full Name' placeholderTextColor="gray" onChangeText={ onChangeFullName}  value={fullName}/>
            
            <Button onPress={ ()=>{{email==='' ?  alert('Please fill all fields') : password==='' ?  alert('Please fill all fields')  : fullName==='' ?  alert('Please fill all fields'):dispatch(signupAction(email,password, fullName))}; ; 
            onChangeEmail(''); onChangepassword(''); onChangeFullName('')}}
                title="SignUp"
                color="#841500"/>
            <Button title="Log In" onPress={()=>navigation.navigate('Login')}  />

        </View>
    )
}
