import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Image, Button } from 'react-native';
import details from '../loaders/empData';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../styles/employeeListStyles';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';

export default class EmployeeList extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isLoading: false,
          dataSource: [],
          isModalVisible: false,
          country:'uk'
        } 
      }

      toggleModal = () => {
        this.setState({isModalVisible: !this.state.isModalVisible});
      };
      
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
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('EmployeeDetails', item)}} 
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
                    <TouchableOpacity style={styles.iconInnerView} onPress={this.toggleModal}>
                        <AntDesign name="filter" size={30} style={{color:'white'}}/>
                    </TouchableOpacity>
                    </View>

                    <View style={{flex: 1}}>
                        <Modal isVisible={this.state.isModalVisible} style={{height:100, width:'90%', marginTop:300, marginBottom:300}}>
                        <View style={{flex: 1, backgroundColor:'white', height:100, alignItems:'center', justifyContent:'space-around'}}>
                        <DropDownPicker
                            items={[
                                {label: 'UK', value: 'uk'},
                                {label: 'France', value: 'france'},
                                {label: 'India', value: 'india'},
                            ]}
                            defaultValue={this.state.country}
                            containerStyle={{height: 50, width:'90%'}}
                            style={{backgroundColor: '#fafafa'}}
                            itemStyle={{
                                justifyContent: 'flex-start', 
                            }}
                            dropDownStyle={{backgroundColor: '#fafafa'}}
                            onChangeItem={(item) => this.setState({
                                country: item.target.value
                            })}
                        />
                            <Button title="Close" onPress={this.toggleModal} />
                        </View>
                        </Modal>
                    </View>
                </View>
            )}
    }
}