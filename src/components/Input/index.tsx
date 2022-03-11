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
} from './styles';

import { useTheme } from 'styled-components/native';

interface InputProps extends TextInputProps{
    iconName: React.ComponentProps<typeof AntDesign>['name'];
}

export function Input({
    iconName,
    ...rest
}: InputProps){
    const [isFocused, setIsFocused] = useState(false);
    const { COLORS } = useTheme();

    function handleInputFocus(){
        setIsFocused(true);
    }

    function handleInputBlur(){
        setIsFocused(false);
    }

    return (
        <Container
            isFocused={isFocused}
        >
            <IconContainer>
                <AntDesign
                    name={iconName}
                    size={28}
                    color={isFocused ? COLORS.RED : COLORS.BLACK}
                />
            </IconContainer>

            <Line />

            <InputBox 
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                {...rest}
            />
        </Container>
    );
}