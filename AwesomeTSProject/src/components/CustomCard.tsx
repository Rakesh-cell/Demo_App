import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import React from 'react';
import {Navigation} from '../types';
// React.ComponentProps<typeof TouchableOpacity>&
type Props = {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
  navigation?: Navigation;
  // handleScreenChange?:(user:postsObject) => postsObject,
};

const CustomCard = (props: Props) => {
  const {userId, id, title, body} = props;

  const changescreen = () => {
    props.navigation.navigate('Post_Detail', {userId, id, title, body});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.infoContainer} onPress={changescreen}>
        <Image
          source={require('../assets/employee_avatar.png')}
          style={styles.memberImage}
        />
        <View>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            {' '}
            {title}
          </Text>
          <Text style={styles.email} numberOfLines={1} ellipsizeMode="tail">
            {' '}
            userId: {userId}{' '}
          </Text>

          <Text style={styles.email} numberOfLines={1} ellipsizeMode="tail">
            {' '}
            {body}{' '}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 7,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  infoContainer: {
    padding: 10,
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center',
  },

  name: {
    width: '50%',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  email: {
    width: '90%',
    fontSize: 12,
    color: 'grey',
  },
  memberImage: {
    height: 40,
    width: 40,
    marginHorizontal: 6,
    borderRadius: 20,
  },
});
