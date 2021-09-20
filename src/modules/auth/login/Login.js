import React from 'react'
import { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux'
import { loginAction } from '../../../store/actions/AuthAtcion';

export default function Login({ navigation }) {
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangepassword] = React.useState('');
    const dispatch = useDispatch();
    // const user = useSelector(state => state.reducer.records)

    return (
        <View>
            <Text>Email</Text>
            <TextInput  placeholder='Email' placeholderTextColor="gray" onChangeText={onChangeEmail}  value={email}/>
            <Text>Password</Text>
            <TextInput  placeholder='Password' placeholderTextColor="gray" onChangeText={ onChangepassword}  value={password}/>
            <Button onPress={ ()=>{email==='' ?  alert('Please fill all fields') : password==='' ?  alert('Please fill all fields'):dispatch(loginAction(email,password));
            onChangeEmail(''); onChangepassword('')} }
                title="Log In"/>
            <Button onPress={ ()=>navigation.navigate('SignUp') }
                title="SignUp"
                color="#841500"/>
        </View>
    )
}
