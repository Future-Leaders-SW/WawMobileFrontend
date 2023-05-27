import React from "react";
import Setup from "./Setup.view";
import { DefaultTheme, Provider as RNPaperProvider } from "react-native-paper";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#3498db',
        accent: '#f1c40f',
    },
};

const App = () => {
    return (
        <>

            <RNPaperProvider theme={theme}>
                <Setup />
            </RNPaperProvider>
        </>
    )
}

export default App;