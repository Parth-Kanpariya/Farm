// import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView, Platform,StatusBar, Button  } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Login/LoginScreen';
import 'react-native-gesture-handler';

import CreateAcoount from './Login/CreateAccount';
import ScreenNavigator from './Navigation/ScreenNavigator';

 
// const Stack=createStackNavigator();

// function jbm(){
//   return(
//       <View>
//           <Text>Sarcasm</Text>
//       </View>
//   )
// }

export default function App() {
  return (
    
  //   <NavigationContainer>
  //    <Stack.Navigator>
  //       <Stack.Screen name="Login" component={jbm} />
  //   </Stack.Navigator>
  //  </NavigationContainer>
   
    
    //  <SafeAreaView style={styles.container}>
        
    //   </SafeAreaView>
   
       <ScreenNavigator />
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:Platform.OS==='android'? StatusBar.currentHeight : 0
  },
});
