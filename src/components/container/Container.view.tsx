import React, { FC } from "react";
import {
    StatusBar,
    SafeAreaView,
    ViewStyle,
    StatusBarStyle,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { colors } from "../../common/constants";

interface IScreenProps {
    containerStyle?: ViewStyle;
    barStyle?: StatusBarStyle;
    children: React.ReactNode;
}

const Container: FC<IScreenProps> = ({ barStyle = "dark-content", containerStyle, children }) => {

    const isIOS = Platform.OS === "ios";

    return (
        <>
            <StatusBar
                barStyle={barStyle}
                backgroundColor={isIOS ? 'transparent' : '#F2F2F2'}
            />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <SafeAreaView style={[{ flexDirection: "column", flex: 1, backgroundColor: colors.BACKGROUND_COLOR }, containerStyle]}>
                    {children}
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </>
    );
}

export default Container;