import React, { Component } from 'react'
import {View, Text, TouchableOpacity, Image, navigation} from 'react-native'
import styles from '../styles/employeeDetailsStyles'

const EmployeeDetails = ({route, navigation}) => {
    const emp = route.params;
        return(
            <View style={{alignItems:'center'}}>
                <Image source={require('../assets/emp1.jpeg')} style={styles.imgView}/>
                <Text style={styles.empNameTxt}>Name : {emp.emp_name}</Text>
                <Text style={styles.empIdTxt}>I'd : {emp.emp_id}</Text>
                <View style={styles.borderLine}></View>
                <View style={styles.mainView}>
                    <Text style={styles.empExp}>Dept : {emp.emp_department}</Text>
                    <Text style={styles.empExp}>Desg : {emp.emp_designation}</Text>
                    <Text style={styles.empExp}>Sal : {emp.emp_salary}</Text>
                    <Text style={styles.empExp}>Mail : {emp.emp_address}</Text>
                    <Text style={styles.empExp}>Exp : {emp.emp_experience}</Text>
                </View>

                <View style={styles.defaultLogin}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
                        <Text style={styles.loginTxt}>LOGOUT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
export default EmployeeDetails;