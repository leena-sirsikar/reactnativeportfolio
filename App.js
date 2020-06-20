import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainComponent from './components/MainComponent';
import MyTab from './components/MytabComponent';
import Login from './components/LoginComponent';
import { Provider } from 'react-redux';
import { store } from './redux/store';


export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <MyTab />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: '10%',
    // alignItems: 'center',
    justifyContent: 'center',
    height:'100%'
  },
});