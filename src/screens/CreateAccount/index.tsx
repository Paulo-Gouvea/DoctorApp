import React from "react";
import { 
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
    Container,
    Title,
    SubTitle,
    InputContainer,
    ButtonContainer
} from './styles';

import { GoBackButton } from "../../components/GoBackButton";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";
import { Button } from "../../components/Button";

export function CreateAccount(){
    const { navigate, goBack } = useNavigation();

    function handleConfirmation(){
        navigate('confirmation');
    }

    function handleGoBack(){
        goBack();
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior="position" enabled>
                <Container>
                    <GoBackButton 
                        onPress={handleGoBack}
                    />
                    <Title>
                        Crie sua{'\n'}conta conosco!
                    </Title>
                    <SubTitle>Faça o seu cadastro para{'\n'}começar a utilizar nossos serviços.</SubTitle>

                    <InputContainer>
                        <Input 
                            iconName="user"
                            placeholder="Digite o seu nome"
                        />
                        <Input
                            iconName="mail"
                            placeholder="Digite o seu e-mail"
                        />
                        <PasswordInput 
                            placeholder="Digite uma senha"
                        />
                        <PasswordInput 
                            placeholder="Confirme a senha"
                        />
                    </InputContainer>

                    <ButtonContainer>
                        <Button 
                            title="Criar conta"
                            onPress={handleConfirmation}
                        />
                    </ButtonContainer>
                </Container>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}