import { View, Text } from 'react-native'
import React from 'react'
import { theme } from '../utils/theme'
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Login,Dummy_posts,Post_Detail,Registration} from '../screens/index'



const RootStack = createStackNavigator();
type Props = {}

const RootNavigation = () => {
  return (
    <NavigationContainer theme={theme}>
       <RootStack.Navigator>
        <RootStack.Screen name="Login" component={Login}  options={{headerShown:false}}/>
        <RootStack.Screen name="Registration" component={Registration} />
        <RootStack.Screen name="Post_Detail" component={Post_Detail}/>
        <RootStack.Screen name="Dummy_posts" component={Dummy_posts} options={{title: 'Home',headerBackTitleVisible: false}} />

    </RootStack.Navigator>
        {/* content */}
    </NavigationContainer>
  )
}

export default RootNavigation