import React from "react";
import { TouchableOpacityProps } from "react-native";

import {
    Container,
    Title,
} from './styles';

import { useTheme } from 'styled-components/native';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    color?: string;
}

export function Button({
    title,
    color = useTheme().COLORS.GREEN,
    ...rest
}: ButtonProps){
    return (
        <Container 
            color={color}
            {...rest} 
        >
            <Title>{title}</Title>
        </Container>
    )
}