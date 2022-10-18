import {NavigationProp} from '@react-navigation/native';
import React, {memo, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Inputfield from '../components/Inputfield';
import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from '../utils/validators';
import {Navigation} from '../types';

type Props = {
  navigation: Navigation;
};

function Login({navigation}: Props) {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }

    navigation.navigate('Dummy_posts');
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'Rice',
      }}>
      <Text style={styles.img}>POSTMAN</Text>

      <View style={styles.inputContainer}>
        <Inputfield
          Label="Email"
          name="email"
          Lefticon="mail"
          ricon="mail"
          msgerr={email.error}
          value={email.value}
          onChangeText={text => setEmail({value: text, error: ''})}
        />
      </View>
      <View style={styles.inputContainer}>
        <Inputfield
          Label="Password"
          name="passward"
          Lefticon="lock-closed"
          ricon="eye-off"
          value={password.value}
          secureTextEntry
          msgerr={password.error}
          onChangeText={text => setPassword({value: text, error: ''})}
        />
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          _onLoginPressed();
        }}>
        <Text style={styles.btntext}>Login</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', marginVertical: 5}}>
        <Text style={{color: 'black'}}>Don't have a Account? </Text>
        <Text
          style={styles.ptext}
          onPress={() => navigation.navigate('Signup')}>
          {' '}
          Sign Up{' '}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center',
    marginHorizontal: 15,
  },
  img: {
    fontSize: 40,
    fontWeight: 'bold',
    //  fontFamily: 'Luminari, fantasy',
    color: 'red',
    marginBottom: 20,
  },
  //btn StyleS
  btn: {
    width: '90%',
    height: 50,
    borderColor: 'blue',
    backgroundColor: '#0148a4',
    // bordrRadius:10,//error
    marginVertical: 20,
    borderWidth: 0,
  },
  btntext: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    marginVertical: 10,
  },
  fpassword: {
    alignSelf: 'flex-end',
    color: '#000000',
  },
  ptext: {
    color: 'blue',
  },
  pstyle: {
    alignSelf: 'flex-end',
    marginVertical: 10,
    marginRight: 20,
  },
});

export default memo(Login);
