import { StyleSheet, Text, View, Button, Image, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Login from '~/app/pages/login';
import SignUp from '~/app/pages/signup';
import Home from '~/app/pages/home';
import Category from '~/app/pages/categories';
import Favorite from '~/app/pages/favorite';
import Profile from '~/app/pages/profile';



const index = () => {

  return (
    <View style = {styles.container}>
      {/* <Login /> */}
      {/* <SignUp /> */}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  }
});
