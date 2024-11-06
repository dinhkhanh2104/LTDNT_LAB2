import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import React from 'react';
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useAuth } from './authProvider';
import { Link } from 'expo-router';

const signup = () => {
  const { currentUser, register } = useAuth();
                          // Trần Đình Khánh - 21520984
  const handlePress = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.info}>
          <Image
            style={styles.image}
            source={{
              uri: "https://i.giphy.com/MkMRga5KgssikmwWwo.webp",
            }}
          />
          <View>
            <Text style={styles.name}>Create New Account</Text>
          </View>
        </View>
        <View style={styles.inputSection}>
          <View style={styles.inputField}>
            <FontAwesome name="user" size={24} color="black" />
            <TextInput
              placeholder="Enter username"
              selectionColor="#e67205"
              style={styles.textInput}
            />
          </View>
          <View style={styles.inputField}>
            <Fontisto name="email" size={24} color="black" />
            <TextInput
              placeholder="Enter email"
              selectionColor="#e67205"
              style={styles.textInput}
            />
          </View>
          <View style={styles.inputField}>
            <AntDesign name="lock" size={24} color="black" />
            <TextInput
              placeholder="Enter password"
              selectionColor="#e67205"
              style={styles.textInput}
            />
          </View>
          <View style={styles.inputField}>
            <AntDesign name="lock" size={24} color="black" />
            <TextInput
              placeholder="Confirm password"
              selectionColor="#e67205"
              style={styles.textInput}
            />
          </View>
        </View>

        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.textButton}>CREATE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginSection}>
          <Text style={styles.normalText}>Already have an account? </Text>
          <Link href={'/(drawer)/authen/login'}>
            <Text style={[styles.normalText, styles.textBlue]}>Login now!</Text>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  wrapper: {
    width: '90%',
    height: '86%',
    // borderWidth: 2,
    // borderColor: 'red',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 10,
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 1000,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  inputSection: {
    marginTop: 20,
    flexDirection: 'column',
    gap: 16,
    width: '90%',
  },
  inputField: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  forgotPass: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  forgotPassText: {
    color: '#ff1493',
    textAlign: 'right',
  },
  buttonSection: {
    width: '90%',
    marginTop: 15,
  },
  button: {
    backgroundColor: '#e67205',
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 14,
  },
  textButton: {
    color: '#fff',
    fontSize: 20,
  },
  thirdPartyAuth: {
    alignItems: 'center',
  },
  boldText: {
    margin: 10,
    fontSize: 20,
    fontWeight: '500',
  },
  logoSection: {
    margin: 10,
    flexDirection: 'row',
    gap: 30,
    alignItems: 'center',
  },
  logo1: {
    width: 57,
    height: 57,
    borderRadius: 500,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 500,
  },
  textInput: {
    fontSize: 16,
  },
  normalText: {
    fontSize: 18,
  },
  textBlue: {
    color: '#0000cd',
    fontWeight: '500',
  },
  loginSection: {
    marginTop: 10,
    flexDirection: 'row',
  },
});
