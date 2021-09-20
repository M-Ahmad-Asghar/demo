import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { db } from '../../config/Firebase';
import { View, Text, Button, TextInput } from 'react-native'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addAction } from '../../store/actions/Action';
import { styles } from './AddRecordStyle';
import CalendarStrip from 'react-native-calendar-strip'
import moment from  'moment'
export default function AddRecord({ navigation }) {
    const userSUp = useSelector(state => state.authReducer.user)

    const [Title, onChangeText] = React.useState('');
    const [Details, onChangeDetails] = React.useState('');
    const [date, setdate] = useState()
    const dispatch = useDispatch();
    
    let alphabets='                                                                       '

    function hov(day) {
        return(
            
            console.log("Hov funcion", day)
        )
    }
    function ctaHandler() {
        navigation.navigate('Home'), dispatch(addAction(data, userSUp))

    }
    console.log(date);
    let data = {
        stName: Title,
        details: Details,
        date:date,
      }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Title</Text>
            <TextInput style={styles.inputs} placeholder='Title' placeholderTextColor="gray" onChangeText={text => onChangeText(text)}  value={Title}/>
            <Text style={styles.title}>Add Details</Text>
            <TextInput style={styles.inputs} placeholder='Details' placeholderTextColor="gray" onChangeText={text => onChangeDetails(text)}  value={Details}/>
            <Text style={styles.dateTitle}>   Select Date   </Text>

            <CalendarStrip 
            onDateSelected={(date)=>{hov(date), setdate(date.toString())}}
            
            numDaysInWeek={7}
            daySelectionAnimation={{type:"border", duration:'50', borderWidth:0.5, borderHighlightColor:'black'}}
            scrollable={true}
            calendarAnimation={{type: 'scroll', duration: 150}}
            style={{height:150, paddingTop: 20, paddingBottom: 10}}/>
            <Button 
            onPress={alphabets.includes(Title)? ()=>alert('Title is requird'):alphabets.includes(Details)? ()=>alert('Detail field is requird'):ctaHandler}
                title="Submit"
                color="#841500"
                accessibilityLabel="Learn more about this purple button" />
        </View>
    )
}
