import React, { FC, useState } from "react";
import { Image, Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import { Container, Header, MaterialTextInput } from "../../components";
import { Button, TextInput } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from "../../common/constants";
import { WAW_ICON } from "../../assets";

interface IScreenProps {
    onPress: () => void;
    text: string;
}

const MaterialButton: FC<IScreenProps> = ({
    onPress,
    text = ""
}) => {

    return (
        <>
            <Button
                style={{
                    backgroundColor: colors.MAIN_COLOR,
                    borderRadius: 24,
                    marginVertical: 5
                }}
                labelStyle={{
                    fontWeight: 'bold',
                    fontSize: 16
                }}
                mode="contained"
                onPress={onPress}
            >
                {text}
            </Button>
        </>
    )
}

export default MaterialButton;