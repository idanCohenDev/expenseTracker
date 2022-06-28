import { Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import TabNavigator from './TabNavigator'
const Drawer = createDrawerNavigator()
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator}/>
    </Drawer.Navigator>
  )
}

