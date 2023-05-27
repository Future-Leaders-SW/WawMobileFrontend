import React, { FC, useState } from "react";
import { View } from "react-native";
import { TextInput } from 'react-native-paper';
import { colors } from "../../common/constants";

interface IScreenProps {
    mode?: 'flat' | 'outlined';
    value: string;
    placeholder: string;
    textColor?: string;
    placeholderColor?: string;
    borderColor?: string;
    onChange: (val: string) => void;
    isPassword?: boolean;
    marginX?: number;
    marginY?: number;
}

const MaterialTextInput: FC<IScreenProps> = ({
    mode = "outlined",
    value,
    placeholder = "",
    textColor = colors.INPUT_TEXT_COLOR,
    placeholderColor = colors.INPUT_TEXT_COLOR,
    borderColor = colors.INPUT_BORDER_COLOR,
    onChange,
    isPassword = false,
    marginY = 10,
}) => {
    const [securePassword, setSecurePassowrd] = useState(isPassword);

    const handleSecurePassword = () => {
        setSecurePassowrd(!securePassword);
    }

    const renderPasswordIcon = () => {
        if (!isPassword) {
            return (
                <></>
            )
        }
        return (
            <TextInput.Icon
                onPress={handleSecurePassword}
                icon={securePassword ? "eye" : "eye-off"}
            />
        )
    }

    return (
        <>
            <TextInput
                style={{
                    marginVertical: marginY
                }}
                placeholder={placeholder}
                mode={mode}
                textColor={textColor}
                placeholderTextColor={placeholderColor}
                outlineColor={borderColor}
                selectionColor={colors.MAIN_COLOR}
                value={value}
                onChangeText={onChange}
                secureTextEntry={securePassword}
                right={renderPasswordIcon()}
            />
        </>
    )
}

export default MaterialTextInput;