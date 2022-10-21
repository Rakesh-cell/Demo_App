import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Navigation, RootStackParamList} from '../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
type Props = {
  navigation?: Navigation;
};
type Post_DetailProps = NativeStackScreenProps<
  RootStackParamList,
  'Post_Detail'
>;

const Post_Detail = ({route, navigation}: Post_DetailProps) => {
  // console.log('routes from', route);
  const {userId, id, title, body} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image
          source={require('../assets/employee_avatar.png')}
          style={styles.memberImage}
        />

        <Text style={styles.sender}>{title}</Text>
        <Text style={styles.sender}> USER ID: {userId}</Text>
      </View>

      <View style={styles.msgContainer}>
        <Text style={styles.msg}>{body}</Text>
        <Text style={styles.date}>POST ID: {id}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aligntxt: {
    flexDirection: 'column',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  title: {
    padding: 10,
    alignSelf: 'center',
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  msg: {
    padding: 5,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  info: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 6,
  },
  sender: {
    // padding: 5,
    justifyContent: 'center',
    margin: 5,
    fontSize: 16,
    color: 'black',
  },
  date: {
    padding: 5,
    fontSize: 12,
    color: 'black',
  },
  memberImage: {
    margin: 10,
    height: 40,
    width: 40,
    borderRadius: 30,
  },
  msgContainer: {
    marginVertical: 5,
  },
});

export default Post_Detail;
