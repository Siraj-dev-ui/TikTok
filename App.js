/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Text,View, SafeAreaView , StatusBar} from 'react-native';
import Home from './src/screens/Home'
import Navigation from './src/navigation'


const App: () => Node = () => {
  
  return (
    <>
    <StatusBar barStyle='light-content'/>
      <SafeAreaView style={{flex: 1 , backgroundColor: 'black'}}>
        <Navigation/>
      </SafeAreaView>
    </>
  );
};



export default App;
