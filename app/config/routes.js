import { StatusBar } from 'react-native';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import CurrencyList from '../screens/CurrencyList'

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      mode='modal'
      cardStyle={{paddingTop: StatusBar.currentHeight}} //Android
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={
          { header: () => null }
        }
      />
      <Stack.Screen
        name="CurrencyList"
        component={CurrencyList}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
}