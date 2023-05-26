import React from "react";
import {  } from "react-native";
import { Login } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const PublicStack = () => {
    return (
        <Stack.Navigator initialRouteName="login">
            <Stack.Screen name="login" component={Login} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}