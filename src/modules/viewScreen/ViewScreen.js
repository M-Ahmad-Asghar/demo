import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './ViewScreenStyle'
import { useSelector, useDispatch } from 'react-redux'
export default function ViewScreen() {
    const dispatch = useDispatch();
    const state1 = useSelector(state => state.reducer.resU)

    return (
        <View style={styles.container}>
            <Text style={styles.titleTxt}>
                Title
            </Text>
            <Text style={styles.titleDtl}>
            {state1.stName}
            </Text>
            <Text style={styles.titleTxt}>
                Details
            </Text>
            <Text style={styles.titleDtl}>
                {state1.details}
            </Text>
            <Text style={styles.titleDtl}>
                {state1.date}
            </Text>

        </View>
    )
}
