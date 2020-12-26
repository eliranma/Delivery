import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Item from './components/itemComponent/Item';

export default function App() {
  return (
    <View style={styles.container}>
      <Item categoryId='1'
         itemId='2'
         shortDesc='hello world'
         itemName='HELLO WORLD'
         itemPrice='25'
         />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
