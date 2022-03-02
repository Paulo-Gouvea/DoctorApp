import React from "react";
import { Entypo } from '@expo/vector-icons';

import {
    Container,
    InputBox,
    InputButton,
} from './styles';

import { useTheme } from "styled-components/native";

export function SearchInput(){
    const { COLORS } = useTheme();

    return(
        <Container>
            <InputBox />
            <InputButton>
                <Entypo 
                    name='magnifying-glass'
                    size={32}
                    color={COLORS.BLACK}
                />
            </InputButton>
        </Container>
    )
}