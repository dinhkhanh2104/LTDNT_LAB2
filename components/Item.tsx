import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { useState } from 'react';

export default function Item( title: string ) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Button title={isSelected ? 'Deselect' : 'Select'} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 10,
    fontSize: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
  },

  title: {
    fontSize: 18,
  },
});
