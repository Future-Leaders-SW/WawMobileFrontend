import React, { FC } from "react";
import { TabIcon } from "./components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Notifications, Jobs, Profile } from "../screens";
import { colors } from "../common/constants";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

/* const mainScreenOptions: StackNavigationOptions = {
    headerRight: () => { return <View style={{ marginRight: 15 }}><SettingsApp /></View> },
} */

export const ProfileStack = () => {
    return (
        <Stack.Navigator initialRouteName="Profile" screenOptions={{headerTitleAlign: 'center', headerTitle: 'WAW'}}>
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

export const JobsStack = () => {
    return (
        <Stack.Navigator initialRouteName="Jobs" screenOptions={{headerTitleAlign: 'center'}}>
            <Stack.Screen name="Jobs" component={Jobs} />
        </Stack.Navigator>
    )
}

export const NotificationsStack = () => {
    return (
        <Stack.Navigator initialRouteName="Notifications" screenOptions={{headerTitleAlign: 'center'}}>
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
                tabBarActiveTintColor: colors.MAIN_COLOR,
                tabBarInactiveTintColor: colors.MENU_COLOR,
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "bold"
                },
                headerShown: false,
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