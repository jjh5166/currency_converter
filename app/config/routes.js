import { StatusBar } from 'react-native';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import CurrencyList from '../screens/CurrencyList'
import Options from '../screens/Options'
import Themes from '../screens/Themes';

const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator
      headerMode='screen'
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={
          { header: () => null }
        }
      />
      <Stack.Screen
        name="Options"
        component={Options}
      />
      <Stack.Screen
        name="Themes"
        component={Themes}
      />
    </Stack.Navigator>
  )
}
function CurrencyListStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CurrencyList"
        component={CurrencyList}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  )
}
export default function RootStack() {
  return (
    <Stack.Navigator
      mode='modal'
      cardStyle={{ paddingTop: StatusBar.currentHeight }} //Android
      headerMode='none'
    >
      <Stack.Screen
        name="Home"
        component={HomeStack}
        options={
          { header: () => null }
        }
      />
      <Stack.Screen
        name="CurrencyListStack"
        component={CurrencyListStack}
      />
    </Stack.Navigator>
  );
}