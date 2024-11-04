import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import React from 'react';
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';
import googlePicture from '~/assets/google.png';

const login = () => {
  const handlePress = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.info}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://i.pinimg.com/564x/01/de/1f/01de1f6348effbf9871b6a39146b89c6.jpg',
              //   uri: 'https://i.pinimg.com/564x/6a/75/85/6a7585ef5eafe25ab3a4793e743f38ab.jpg',
            }}
          />
          <View>
            <Text style={styles.name}>Welcome</Text>
          </View>
        </View>
        <View style={styles.inputSection}>
          <View style={styles.inputField}>
            <Fontisto name="email" size={24} color="black" />
            <TextInput placeholder="Email" style ={styles.textInput}/>
          </View>
          <View style={styles.inputField}>
            <AntDesign name="lock" size={24} color="black" />
            <TextInput placeholder="Password"  style ={styles.textInput} />
          </View>
        </View>
        <TouchableOpacity style={styles.forgotPass}>
          <Text style={styles.forgotPassText}>Forgot password?</Text>
        </TouchableOpacity>
        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.textButton}>LOG IN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.thirdPartyAuth}>
          <Text style={styles.boldText}>Or login with</Text>
          <View style={styles.logoSection}>
            <TouchableOpacity>
              <Image
                style={styles.logo1}
                source={{
                  uri: 'https://freepnglogo.com/images/all_img/facebook-circle-logo-png.png',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.logo} source={googlePicture} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.signUpSection}>
          <Text style={styles.normalText}>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={[styles.normalText, styles.textBlue]}>Sign up here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default login;

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
    borderWidth: 2,
    borderColor: 'red',
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
  textInput:{
    fontSize: 16
  },
  normalText: {
    fontSize: 18,
  },
  textBlue: {
    color: '#0000cd',
    fontWeight: '500',
  },
  signUpSection: {
    flexDirection: 'row',
  },
});
