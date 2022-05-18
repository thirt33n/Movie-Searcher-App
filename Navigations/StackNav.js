import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import SearchResults from "../Screens/SearchResults";
import SearchScreen from "../Screens/SearchScreen";

const MainStack   =  createNativeStackNavigator();

export default function ReactStackNavigation(){
    return(
    <MainStack.Navigator >
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
        <MainStack.Screen name="SearchResults" component={SearchResults}
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
