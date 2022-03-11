import React from "react";
import { 
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";

import {
    Container,
    Title,
    SubTitle,
    InputContainer,
    ButtonContainer,
} from './styles';

import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";
import { Button } from "../../components/Button";

export function SignIn(){
    const { COLORS } = useTheme();
    const { navigate } = useNavigation();

    function handleSignIn(){
        navigate('home');
    }

    function handleCreateAccount(){
        navigate('createaccount');
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior="position" enabled>
                <Container>
                    <Title>
                        Seja muito{'\n'}bem-vindo!
                    </Title>
                    <SubTitle>Faça o seu login e marque{'\n'}uma consulta conosco!</SubTitle>

                    <InputContainer>
                        <Input 
                            placeholder="E-mail"
                            iconName="mail"
                            keyboardType="email-address"
                            autoCorrect={false}
                            autoCapitalize="none"
                        />
                        <PasswordInput 
                            placeholder="Senha"
                        />
                    </InputContainer>

                    <ButtonContainer>
                        <Button 
                            title="Login"
                            onPress={handleSignIn}
                        />
                        <Button 
                            title="Criar nova conta"
                            color={COLORS.RED}
                            onPress={handleCreateAccount}
                        />
                    </ButtonContainer>
                </Container>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}