import LoginScreen from "../Login/LoginScreen";
import CreateAcoount from "../Login/CreateAccount";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { View,Text } from 'react-native';
import React from 'react';
  
const Stack=createStackNavigator();

function jbm(){
    return(
        <View>
            <Text>Sarcasm</Text>
        </View>
    )
}

const ScreenNavigator=()=>{
    return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Create" component={CreateAcoount} />


        </Stack.Navigator>
    </NavigationContainer>
    );

};

export default ScreenNavigator;