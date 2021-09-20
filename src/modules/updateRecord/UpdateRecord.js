import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, Button, TextInput } from 'react-native'
import { updateAction } from '../../store/actions/Action';
import {styles} from "./UpdateRecordStyle"
import { useState, useEffect } from "react";
import CalendarStrip from 'react-native-calendar-strip'

export default function UpdateRecord({ navigation }) {
  const dispatch = useDispatch();
    const state1 = useSelector(state => state.reducer.resU)
    const [Title, onChangeText] = React.useState(`${state1.stName}`);
    const [Details, onChangeDetails] = React.useState(`${state1.details}`);
    const [date, setdate] = useState()
    const userSUp = useSelector(state => state.authReducer.user)

    let alphabets='                                                                       '

    
    console.log('record items',state1);

    let data = {
      stName: Title,
      details: Details,
      date:date,
    }
   
    function ctaHandler() {date==null?alert("Please select a Date"):
      navigation.navigate('Home'),  dispatch(updateAction(state1,data, userSUp))

  }
    return (
      <View style={styles.container}>
      <Text style={styles.title}>Add Title</Text>
      <TextInput style={styles.inputs} placeholder='Title' placeholderTextColor="gray" onChangeText={text => onChangeText(text)}  value={Title}/>
      <Text style={styles.title}>Add Details</Text>
      <TextInput style={styles.inputs} placeholder='Details' placeholderTextColor="gray" onChangeText={text => onChangeDetails(text)}  value={Details}/>
      <CalendarStrip 
            onDateSelected={(date)=>{  setdate(date.toString())}}
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

