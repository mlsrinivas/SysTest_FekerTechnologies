import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    imgView:{
        height:150, 
        width:150, 
        borderRadius:80, 
        marginTop:30
    },
    empNameTxt:{
        fontSize:30,
        marginTop:20,
    },
    empIdTxt:{
        fontSize:26
    },
    borderLine:{
        borderBottomWidth:0.5,
        borderBottomColor:'black',
        marginTop:20,
        width:'100%'
    },
    empExp:{
        fontSize:14
    },
    mainView:{
        justifyContent:'flex-start', 
        marginTop:20
    },
    defaultLogin:{
        height:50, 
        backgroundColor:'#A499BB', 
        width:'50%',
        justifyContent:'center', 
        alignItems:'center', 
        marginTop:100, 
        borderRadius:25
    },
    loginTxt:{
        color:'black', 
        fontSize:20
    }


});

export default styles;


