import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Product from "../screens/Product";
import Home from '../screens/Home';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Stack.Screen options={{
          headerStyle: {
            backgroundColor: '#4bae32',
          },
          headerTintColor: '#fff'}} name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Ana Sayfa" component={Home} />
      <Stack.Screen options={{
          headerStyle: {
            backgroundColor: '#4bae32',
          },
          headerTintColor: '#fff'}} name="Product" component={Product} />
    </Stack.Navigator>
  );
}


export {MyStack,HomeStack};