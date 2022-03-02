import React from "react";
import { TouchableOpacityProps } from "react-native";
import { SvgProps } from 'react-native-svg';

import {
    Container,
    Button,
    Title,
} from './styles';

import { useTheme } from 'styled-components/native';

interface CategoryCardProps extends TouchableOpacityProps {
    title: string;
    color: string;
    icon: React.FC<SvgProps>;
}

export function CategoryCard({
    title,
    color,
    icon: Icon,
    ...rest
}: CategoryCardProps){
    const { COLORS } = useTheme();

    return (
        <Container
            {...rest}
        >
            <Button
                color={color}
            >
                <Icon
                    width={30}
                    height={30}
                    color={COLORS.WHITE}
                >

                </Icon>
            </Button>

            <Title>{title}</Title>
        </Container>
    )
}