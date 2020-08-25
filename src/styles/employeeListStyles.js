import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    empCard:{
        height:100, 
        backgroundColor:'#E9E9E6', 
        borderBottomWidth:0.5, 
        marginTop:5, 
        justifyContent:'center', 
        // borderTopColor:'black', 
        // borderTopWidth:1
    },
    imgView:{
        height:70, 
        width:70, 
        borderRadius:40, 
        marginLeft:'5%'
    },
    nameView:{
        justifyContent:'center', 
        marginLeft:'5%'
    },
    iconView:{
        justifyContent:'flex-end', 
        alignItems:'flex-end', 
        marginRight:'10%'
    },
    iconInnerView:{
        height:80, 
        width:80, 
        borderRadius:40, 
        backgroundColor:'#6E97E2', 
        position:'absolute', 
        justifyContent:'center', 
        alignItems:'center'
    }
});

export default styles;


