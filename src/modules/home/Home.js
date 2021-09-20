import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { db } from '../../config/Firebase';
import { View, Text, Button, TextInput, ScrollView } from 'react-native'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { fetchFilterRecord, fetchRecord } from '../../store/actions/Action';
import { deleteAction } from '../../store/actions/Action';
import { updateAction0 } from '../../store/actions/Action';
import ListItem from '../../components/listItem/ListItem';
import CalendarStrip from 'react-native-calendar-strip'
import moment from  'moment'


import { signOutAction } from '../../store/actions/AuthAtcion';
export default function  Home ({ navigation }) {
    const userSUp = useSelector(state => state.authReducer.user)
    const [loading, setLoading] = useState(false);
    const [Name, setName] = useState();
    const [Item, setItem] = useState();
    const [value, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState(null);
    const dispatch = useDispatch();
    const recordss = useSelector(state => state.reducer.records)
    useEffect(() => {
        dispatch(fetchRecord(setLoading, userSUp))
    }, [])
    return (
<ScrollView horizontal={false}>
    {console.log("userHome", userSUp)}
        <View>
        <Button title="LogOut" onPress={()=>dispatch(signOutAction())} />
        <Button title="View All" color="#841584" onPress={()=>dispatch(fetchRecord(setLoading, userSUp))} />

            <CalendarStrip 
            onDateSelected={(date)=>{dispatch(fetchFilterRecord(setLoading, date.toString(), userSUp)) }}
            
            numDaysInWeek={7}
            daySelectionAnimation={{type:"border", duration:'50', borderWidth:0.5, borderHighlightColor:'black'}}
            scrollable={true}
            calendarAnimation={{type: 'scroll', duration: 150}}
            style={{height:150, paddingTop: 20, paddingBottom: 10}}/>

            <Button title="Add +" color="#841584" onPress={()=>navigation.navigate('AddRecord')} />
            
                {
                   recordss.length>0?  recordss.map((item) => {
                        return  <ListItem name={item.stName} 
                        delPress={() => dispatch(deleteAction(item, userSUp))} 
                        updPress={() => {navigation.navigate('UpdateRecord'); dispatch(updateAction0(item));}}
                        veiwPress={()=> {navigation.navigate('ViewScreen'); dispatch(updateAction0(item));}}
                        />

                    }):  <Text style={{margin:20,alignSelf:"center",color:"red"}}>No Records for this day!</Text> 
                }

                {loading && <Text>Loading....</Text>}
            
        </View>
        </ScrollView>


    )
    
}
// recordss.length<1? alert('No record to Show'):"a";