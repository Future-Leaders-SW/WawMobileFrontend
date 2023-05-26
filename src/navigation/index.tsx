import React, { FC, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator  } from "@react-navigation/native-stack";
import { PublicStack } from "./publicNavigation";
import { default as MainTabNavigation } from "./mainNavigation";


const Stack = createNativeStackNavigator();

interface INavigationProps {
    authenticated: boolean;
}

export const AppNavigation: FC<INavigationProps> = ({ authenticated }) => {

    const renderApp = () => {

        if (!authenticated) {
            return (
                <Stack.Screen
                    name="Public"
                    component={PublicStack}
                    options={{ headerShown: false }}
                />
            )
        }

        return (
            <Stack.Screen
                name="MainTabNavigation"
                component={MainTabNavigation}
                options={{ headerShown: false }}
            />
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {renderApp()}
            </Stack.Navigator>
        </NavigationContainer>
    )
}