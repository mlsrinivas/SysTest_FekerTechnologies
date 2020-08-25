import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'white', 
        height:'100%', 
        justifyContent:'center', 
        alignItems:'center', 
        width:'100%'
    },
    mainTxt:{
        fontSize:34, 
        color:'#A499BB', 
        fontWeight:'bold'
    },
    txtView:{
        borderColor:'black', 
        borderWidth:1, 
        height: 40, 
        width:'80%', 
        paddingHorizontal:10, 
        marginTop:100, 
        borderRadius:25
    },
    pwdTxtView:{
        borderColor:'black', 
        borderWidth:1, 
        height: 40, 
        width:'80%', 
        paddingHorizontal:10, 
        marginTop:20, 
        borderRadius:25
    },
    defaultLogin:{
        height:50, 
        backgroundColor:'gray', 
        width:'50%',
        justifyContent:'center', 
        alignItems:'center', 
        marginTop:60, 
        borderRadius:25
    },
    successLogin:{
        height:50, 
        backgroundColor:'#A499BB', 
        width:'50%',
        justifyContent:'center', 
        alignItems:'center', 
        marginTop:60, 
        borderRadius:25
    },
    loginTxt:{
        color:'black', 
        fontSize:20
    }

});

export default styles;


