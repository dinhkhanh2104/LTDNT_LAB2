import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const categories = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>Categories Screen</Text>
    </View>
  )
}
// Trần Đình Khánh - 21520984
export default categories

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "400"
  }
})