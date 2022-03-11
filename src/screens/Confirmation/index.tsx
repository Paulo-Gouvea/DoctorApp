import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
    Container,
    Welcome,
    ConfirmButton,
    ConfirmButtonText
} from "./styles";

import { LoadAnimation } from "../../components/LoadAnimation";

export function Confirmation() {
    const { navigate } = useNavigation();

    function handleSignIn(){
        navigate('signin');
    }

    return (
        <Container>
            <LoadAnimation/>
            <Welcome>Conta criada!</Welcome>
            <ConfirmButton
                onPress={handleSignIn}
            >
                <ConfirmButtonText>OK</ConfirmButtonText>
            </ConfirmButton>
        </Container>
    )
}