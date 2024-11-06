import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const favorite = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favorites Screen</Text>
    </View>
  );
};
// Trần Đình Khánh - 21520984

export default favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
  },
});
