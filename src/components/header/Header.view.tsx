import React, { FC } from "react";
import { Text, View } from "react-native";
import { Container } from "../../components";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface IScreenProps {
    title: string,
    backButton?: boolean,
    backButtonAction?: () => void,
}

const Header: FC<IScreenProps> = (props) => {

    return (
        <>
            {/* Header */}
            <View
                style={{
                    height: 60,
                    justifyContent: 'center'
                }}>
                {/* Title */}
                <Text
                    style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 24,
                        color: 'black'
                    }}>
                    {props.title}
                </Text>
            </View>
        </>
    )
}

export default Header;