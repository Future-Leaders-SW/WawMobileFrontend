import React, { FC, useState } from "react";
import { Image, Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import { Container, Header, MaterialButton, MaterialTextInput } from "../../components";
import { Button, TextInput } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from "../../common/constants";
import { WAW_ICON } from "../../assets";

interface IScreenProps {
    navigation: NativeStackNavigationProp<any>;
    route: any
}

const Login: FC<IScreenProps> = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [securePassword, setSecurePassowrd] = useState(true);

    const handleSecurePassword = () => {
        setSecurePassowrd(!securePassword);
    }


    return (
        <>
            <Container>
                <Header title="Welcome to WAW" />
                {/* Body */}
                <View
                    style={{
                        flexDirection: 'column',
                        flexGrow: 1,
                        justifyContent: 'space-between'
                    }}>
                    <View style={{ flex: 1 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                style={{
                                    height: 150,
                                    width: 150,
                                    resizeMode: 'contain'
                                }}
                                source={WAW_ICON}
                            />
                        </View>
                        <View
                            style={{
                                marginHorizontal: 30
                            }}>
                            <MaterialTextInput
                                value={email}
                                placeholder="Email"
                                onChange={setEmail}
                            />

                            <MaterialTextInput
                                value={password}
                                placeholder="Password"
                                onChange={setEmail}
                                isPassword
                                marginY={0}
                            />

                            <View
                                style={{
                                    marginTop: 15,
                                    marginLeft: 10
                                }}>
                                <Text
                                    onPress={() => console.log('forgot')}
                                    style={{
                                        color: colors.MAIN_COLOR,
                                        fontSize: 16,
                                        fontWeight: 'bold'
                                    }}>
                                    Forgot your password?
                                </Text>
                            </View>

                        </View>
                    </View>
                    {/* Footer */}
                    <View style={{ height: 100, justifyContent: 'center', marginHorizontal: 15 }}>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={{ color: colors.BLACK }}>
                                <Text>New to WAW? </Text>
                                <Text style={{ fontWeight: 'bold' }}>Join now for free</Text>
                            </Text>
                        </View>
                        <MaterialButton
                            text="Sign in"
                            onPress={() => console.log('Sign in pressed')}
                        />
                    </View>
                </View>
            </Container >
        </>
    )
}

export default Login;