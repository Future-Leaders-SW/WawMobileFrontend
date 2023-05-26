import React, { FC } from "react";
import { Text } from "react-native";
import { Container } from "../../components";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface IScreenProps {
    navigation: NativeStackNavigationProp<any>;
    route: any
}

const Profile: FC<IScreenProps> = (props) => {

    return (
        <>
            <Container>
                <Text>
                    Profile Screen Is Working! {JSON.stringify(props.route.params)}
                </Text>
            </Container>
        </>
    )
}

export default Profile;