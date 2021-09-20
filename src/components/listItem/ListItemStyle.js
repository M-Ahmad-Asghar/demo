import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#d6d6d6",
        height:150
    },
    titleTxt:{
        color:"black",
        margin:10,
        fontSize:20,
        fontWeight:'bold',
        borderColor:"#7789",
        borderStyle:"solid",
        borderWidth:1,
        paddingLeft:10
    },
    btnCount:{
        flex:1,
        flexDirection:'row',
        
    },
    delBtn:{
        flex:1,
        backgroundColor:"#841584",
        height:50,
        alignItems:"center",
        justifyContent:"center",
        margin:10,
        color:'white',
        borderRadius:7
        
    },
    viewBtn:{
        flex:1,
        backgroundColor:'#4fa6e0',
        height:50,
        alignItems:"center",
        justifyContent:"center",
        margin:10,
        borderRadius:7
        
    },
    updBtn:{
        flex:1,
        backgroundColor:"#4fa6e0",
        height:50,
        alignItems:"center",
        justifyContent:"center",
        margin:10,
        borderRadius:7
        
    },
    btnText:{
        fontSize:15,
        fontWeight:"bold",
        fontFamily:'sans-sarif',
        color:'black'
    }
    ,
    btnTextDel:{
        fontSize:15,
        fontWeight:"bold",
        fontFamily:'sans-sarif',
        color:'white'
    }
})
