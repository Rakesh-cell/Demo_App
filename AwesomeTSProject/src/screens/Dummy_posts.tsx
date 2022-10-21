import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppSelector} from '../utils/hook';
import CustomCard from '../components/CustomCard';
import {Navigation} from '../types';
import {useDispatch} from 'react-redux';

// const axios = require('axios').default
import {posts, postsObject} from '../redux/reducers';
type Props = {
  navigation: Navigation;
};

const Dummy_posts = ({navigation}: Props) => {
  const data = useAppSelector(state => state.data);

  const [postdata, setpostdata] = useState(data);
  console.log(data);

  const dispatch = useDispatch();
  // const handleScreenChange=(user:postsObject)=>{
  //   navigation.navigate("Post_Detail",{})
  // }

  useEffect(() => {
    FetchPosts();
  }, []);

  const FetchPosts = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setpostdata(json);

        dispatch(posts(json));
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {postdata ? (
          postdata.map(item => (
            <CustomCard
              userId={item?.userId}
              id={item?.id}
              title={item?.title}
              body={item?.body}
              navigation={navigation}
              // handleScreenChange={handleScreenChange(item)}
            />
          ))
        ) : (
          <Text
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              color: 'black',
            }}>
            {' '}
            Loading{' '}
          </Text>
        )}
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

});

export default Dummy_posts;
