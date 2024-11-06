import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useAuth } from '../authProvider';
import { router } from 'expo-router';

const profile = () => {
  const { logout } = useAuth();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
      <Button
        title="Sign Out"
        onPress={() => {
          logout();
          router.navigate('/(drawer)/authen/login')
        }}
      />
    </View>
  );
};
// Trần Đình Khánh - 21520984

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
  },
});
