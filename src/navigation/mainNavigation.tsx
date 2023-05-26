import React, { FC } from "react";
import { TabIcon } from "./components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Notifications, Jobs, Profile } from "../screens";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

/* const mainScreenOptions: StackNavigationOptions = {
    headerRight: () => { return <View style={{ marginRight: 15 }}><SettingsApp /></View> },
} */

export const ProfileStack = () => {
    return (
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

export const JobsStack = () => {
    return (
        <Stack.Navigator initialRouteName="Jobs">
            <Stack.Screen name="Jobs" component={Jobs} />
        </Stack.Navigator>
    )
}

export const NotificationsStack = () => {
    return (
        <Stack.Navigator initialRouteName="Notifications">
            <Stack.Screen name="Notifications" component={Notifications} />
        </Stack.Navigator>
    )
}

const MainTabNavigation: FC = ({  }) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: true,
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: 'black',
                tabBarLabelStyle: {
                    fontSize: 12
                },
                headerShown: false
            }}
            initialRouteName="ProfileStack"
        >
            <Tab.Screen
                name="ProfileStack"
                component={ProfileStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <TabIcon icon="person-outline" iconFocused="person" focused={focused} />
                    },
                    tabBarLabel: 'Profile'
                }}
            />
            <Tab.Screen
                name="JobsStack"
                component={JobsStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <TabIcon icon="search-outline" iconFocused="search" focused={focused} />
                    },
                    tabBarLabel: 'Jobs'
                }}
            />
            <Tab.Screen
                name="NotificationsStack"
                component={NotificationsStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <TabIcon icon="notifications-outline" iconFocused="notifications" focused={focused} />
                    },
                    tabBarLabel: 'Notifications',
                    tabBarBadge: 1
                }}
            />
        </Tab.Navigator>
    )
}

export default MainTabNavigation;