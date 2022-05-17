import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './Screens/Homepage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import SearchScreen from './Screens/SearchScreen';
import SearchResults from './Screens/SearchResults';
import { createNativeStackNavigator } from "@react-navigation/native-stack";



const MainStack = createNativeStackNavigator();

export function ReactStackNavigation(){
  return(
  <MainStack.Navigator>
      <MainStack.Screen name="SearchScreen"
       component={SearchScreen}
       options={()=>({
          headerStyle:
              {
                  backgroundColor:'#1DB953',
                  shadowColor: 'transparent', 
                  elevation: 0,
              },
              headerShadowVisible:false,   
              headerShown:false
                  })
              } 
              
          />
      <MainStack.Screen name="SearchResults" 
      component={SearchResults}
          options={()=>({
          headerStyle: 
              {
                  backgroundColor:'#1DB953',
                  shadowColor: 'transparent', 
                  elevation: 0,
              },
              headerShadowVisible:false,
              headerShown:false
              })
              } 
          />
  </MainStack.Navigator>
  );
}



const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
     
          screenOptions={({ route }) => ({
           tabBarIcon:({color,size})=>
           {

             if(route.name === 'Home'){
            
              return <Fontisto name="film" size={size} color={color} />
             }
              else if(route.name === 'Search'){
                
                return <FontAwesome name="search" size={size} color={color} />
              }
           },

            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            "tabBarHideOnKeyboard": "true",
            "tabBarStyle": [
              {
                "display": "flex"
              },
              null
            ]
          })}
        

      
      >
        <Tab.Screen name='Home' component={HomePage} />
        <Tab.Screen name='Search' component={ReactStackNavigation} />

      </Tab.Navigator>

    </NavigationContainer>

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14171A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
