import React from 'react'
const { createStackNavigator } = require("@react-navigation/stack");

const { default: WelcomeScreen } = require("../screens/WelcomeScreen");
const { default: RegisterScreen } = require("../screens/RegisterScreen");
const { default: LoginScreen } = require("../screens/LoginScreen");

const Stack = createStackNavigator()

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;