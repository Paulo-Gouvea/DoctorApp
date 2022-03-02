import React from "react";
import { TextInputProps } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import {
    Container,
    InputBox,
    InputButton,
} from './styles';

import { useTheme } from "styled-components/native";

interface SearchInputProps extends TextInputProps {
    onSearch: () => void;
}

export function SearchInput({
    onSearch,
    ...rest
}: SearchInputProps){
    const { COLORS } = useTheme();

    return(
        <Container>
            <InputBox 
                placeholder="Procurar"
                {...rest}
            />
            <InputButton
                onPress={onSearch}
            >
                <Entypo 
                    name='magnifying-glass'
                    size={32}
                    color={COLORS.BLACK}
                />
            </InputButton>
        </Container>
    )
}