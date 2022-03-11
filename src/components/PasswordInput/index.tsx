import React, {
    useState,
} from "react";
import { 
    TextInputProps 
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import {
    Container, 
    IconContainer,
    Line,
    InputBox,
    TouchableIconContainer
} from './styles';

interface InputProps extends TextInputProps{}

export function PasswordInput({
    ...rest
}: InputProps){
    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);

    function handleInputFocus(){
        setIsFocused(true);
    }

    function handleInputBlur(){
        setIsFocused(false);
    }

    function handlePasswordVisibilityChange(){
        setIsPasswordVisible(previousState => !previousState);
    }

    return (
        <Container
            isFocused={isFocused}
        >
            <IconContainer>
                <AntDesign
                    name='lock'
                    size={28}
                />
            </IconContainer>

            <Line />

            <InputBox 
                secureTextEntry={isPasswordVisible}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                {...rest}
            />

            <TouchableIconContainer
                onPress={handlePasswordVisibilityChange}
            >
                <AntDesign
                    name={isPasswordVisible ? 'eyeo' : 'eye'}
                    size={28}
                />
            </TouchableIconContainer>
        </Container>
    );
}