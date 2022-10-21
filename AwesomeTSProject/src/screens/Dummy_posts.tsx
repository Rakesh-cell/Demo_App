import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useAppSelector} from '../utils/hook';
import CustomCard from '../components/CustomCard';
import {Navigation} from '../types';
import {useDispatch} from 'react-redux';

import {posts} from '../redux/reducers';

type Props = {
  navigation: Navigation;
};

const Dummy_posts = ({navigation}: Props) => {
  const data = useAppSelector(state => state.data);

  const [postdata, setpostdata] = useState(data);
  console.log(data);

  const dispatch = useDispatch();

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
