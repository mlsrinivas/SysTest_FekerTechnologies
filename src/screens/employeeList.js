import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import details from '../loaders/empData';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../styles/employeeListStyles';

export default class EmployeeList extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isLoading: false,
          dataSource: [],
          fName:''
        } 
      }
      
    //   componentDidMount() {
    //     return fetch('jsonData')
    //       .then((response) => response.json())
    //       .then((responseJson) => {
    //        // just setState here e.g.
    //        this.setState({ dataSource: responseJson.data});
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //   }

    // empDetails = (item) => {
    //     this.setState({
    //         fName : item.firstName,
    //         lName : item.lastName
    //     }, ()=>{this.props.naviagtion.navigate('employeeDetails')})
    // }

    render(){
        if (this.state.isLoading) {
            return (
                <ActivityIndicator />              
            );
          }
          else{
            return(
                <View>
                    <FlatList
                    data={details.Employees}
                    renderItem={({item}) =>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('EmployeeDetails')}} 
                        style={styles.empCard}>
                        <View style={{flexDirection:'row'}}>
                            <Image source={require('../assets/emp1.jpeg')} style={styles.imgView}/>
                            <View style={styles.nameView}>
                                <Text style={{fontSize:20}}>{item.emp_id}</Text>
                                <Text >{item.emp_name}</Text>
                                <Text>{item.emp_address}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>}
                    keyExtractor={(item, index) => index.toString()}
                    />
                    <View style={styles.iconView}>
                    <TouchableOpacity style={styles.iconInnerView}>
                        <AntDesign name="filter" size={30} style={{color:'white'}}/>
                    </TouchableOpacity>
                    </View>
                </View>
                
            )}
    }
}