import React, { Component } from 'react';
import 'react-native-gesture-handler';
import Login from './src/screens/login'
import EmployeeList from './src/screens/employeeList';
import EmployeeDetails from './src/screens/employeeDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false}}
        />
        <Stack.Screen 
          name="EmployeeList" 
          component={EmployeeList} 
          options={{title:'Employee Directory'}}
        />
        <Stack.Screen 
          name="EmployeeDetails" 
          component={EmployeeDetails} 
          options={{title:'Employee Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
