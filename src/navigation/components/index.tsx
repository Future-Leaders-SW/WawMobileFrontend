import React, { FC } from "react";
import { View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface ITabIconProps {
    focused?: boolean;
    color?: string;
    size?: number;
    icon: 'person-outline' | 'search-outline' | 'notifications-outline', 
    iconFocused: 'person' | 'search' | 'notifications'
}

export const TabIcon: FC<ITabIconProps> = ({ focused = false, color = "gray", size = 20, icon, iconFocused }) => {
    return (
        <>
            {focused && (
                <View style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'black',
                    width: '100%',
                    height: 3
                }}>
                </View>
            )}
            <Ionicons name={focused ? iconFocused : icon } size={size} color={focused ? 'black' : color} />
        </>
    )
}