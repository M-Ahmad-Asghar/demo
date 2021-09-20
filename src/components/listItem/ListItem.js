import React from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import { styles } from './ListItemStyle'
function ListItem(props) {
    return (
        <View style={styles.container}>

            <Text style={styles.titleTxt}>{props.name}</Text>
            <View style={styles.btnCount}>
            <TouchableOpacity 
            style={styles.viewBtn} 
            onPress={props.veiwPress}><Text style={styles.btnText}>View</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.delBtn} 
            onPress={props.delPress}><Text style={styles.btnTextDel}>Delete</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.updBtn} 
            onPress={props.updPress}><Text style={styles.btnText}>Update</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
export default React.memo(ListItem) 