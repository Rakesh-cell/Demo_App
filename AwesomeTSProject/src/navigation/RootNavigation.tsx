import { View, Text } from 'react-native'
import React ,{useState,useEffect}from 'react'
import { theme } from '../utils/theme'
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Init } from '../redux/actions';

// import {Dummy_posts,Post_Detail} from '../screens/index'

import Login from '../screens/Login';
import Registration from '../screens/Registration';
import Dummy_posts from '../screens/Dummy_posts';
import Post_Detail from '../screens/Post_Detail';

import { ActivityIndicator } from 'react-native';
import { useAppSelector} from '../utils/hook'
import AsyncStorage from '@react-native-async-storage/async-storage';


const RootStack = createStackNavigator();
type Props = {}

const RootNavigation = () => {
  // const token = useAppSelector(state=>state.authToken)
  const token=AsyncStorage.getItem('token')
  console.log(token);
  const [loading, setloading] = useState(false)

  
 useEffect(()=>{
   
  
 },[token])
  
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }
  return (
    <NavigationContainer theme={theme}>
       <RootStack.Navigator>
         {token===null?
         <>
        <RootStack.Screen name="Login" component={Login}  options={{headerShown:false}}/>
        <RootStack.Screen name="Registration" component={Registration} options={{headerShown:false}}/>
        </>:<>
        <RootStack.Screen name="Dummy_posts" component={Dummy_posts} options={{title: 'Home',headerBackTitleVisible: false}} />
        <RootStack.Screen name="Post_Detail" component={Post_Detail}/>
        </>}
    </RootStack.Navigator>
        {/* content */}
    </NavigationContainer>
  )
}

export default RootNavigation