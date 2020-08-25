import React from 'react'
import { Component } from 'react';
import {  View, Text, TextInput, Button, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/loginStyles';

class Login extends Component{
    constructor(){
        super();
        this.state={
            userName:'',
            password:''
        }
    }

    userNameChange = (text) => {
        this.setState({
            userName : text
        })
    }

    passwordChange =(pwd) => {
        this.setState({
            password : pwd
        })
    }

    render(){
        return(
                <View style={styles.mainContainer}>
                    <View>
                        <Text style={styles.mainTxt}>Feker Technologies</Text>
                    </View>
                    <TextInput 
                        placeholder="UserName"
                        style={styles.txtView}
                        value={this.state.userName}
                        onChangeText={this.userNameChange}
                    />
                    <TextInput 
                        placeholder="Password"
                        style={styles.pwdTxtView}
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={this.passwordChange}
                    />

                    {(this.state.userName == '' || this.state.password == '') &&
                    <View style={styles.defaultLogin}>
                        <TouchableOpacity onPress={() => {Alert.alert('Enter valid credentials')}}>
                            <Text style={styles.loginTxt}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                    }

                    {(this.state.userName == 'Test' && this.state.password == 'Test') &&
                    <View style={styles.successLogin}>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('EmployeeList')}}>
                            <Text style={styles.loginTxt}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                    }
                </View>
        )
    }
}

export default Login;