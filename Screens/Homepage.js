import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Homepage up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14171A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
      color: 'white'
  }
});
