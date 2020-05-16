import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainComponent from './components/MainComponent';
import MyTab from './components/MytabComponent';
import Login from './components/LoginComponent';


export default function App() {
  return (
    <View styles={styles.container}>
      <MyTab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    flex: 1,
    backgroundColor: 'cyan',
    justifyContent: 'center',
  },
});
