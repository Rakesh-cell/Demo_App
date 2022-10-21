import {View, Text, Button, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {theme} from '../utils/theme';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import {Dummy_posts,Post_Detail} from '../screens/index'

import Login from '../screens/Login';
import Registration from '../screens/Registration';
import Dummy_posts from '../screens/Dummy_posts';
import Post_Detail from '../screens/Post_Detail';

import {ActivityIndicator} from 'react-native';
import {useAppSelector} from '../utils/hook';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootStackParamList} from '../types';
import {logout} from '../redux/reducers';
import {useDispatch} from 'react-redux';

const RootStack = createStackNavigator<RootStackParamList>();
type Props = {};

const RootNavigation = () => {
  const token = useAppSelector(state => state.authToken);
  const onetoken = AsyncStorage.getItem('token');
  console.log(token, onetoken);
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);

  const signout = () => {
    AsyncStorage.clear();
    dispatch(logout());
    Alert.alert('INFO', 'Your logged out');
  };

  useEffect(() => {}, [token]);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <NavigationContainer theme={theme}>
      <RootStack.Navigator>
        {!token || !onetoken ? (
          <>
            <RootStack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <RootStack.Screen
              name="Registration"
              component={Registration}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <RootStack.Screen
              name="Dummy_posts"
              component={Dummy_posts}
              options={{
                title: 'Home',
                headerBackTitleVisible: false,
                headerRight: () => (
                  <Button onPress={signout} title="Logout" color="#000" />
                ),
              }}
            />
            <RootStack.Screen name="Post_Detail" component={Post_Detail} />
          </>
        )}
      </RootStack.Navigator>
      {/* content */}
    </NavigationContainer>
  );
};

export default RootNavigation;
