import React from "react";
import { SvgProps } from 'react-native-svg';

import {
    Container,
    Button,
    Title,
} from './styles';

import { useTheme } from 'styled-components/native';

type CategoryCardProps = {
    title: string;
    color: string;
    icon: React.FC<SvgProps>;
}

export function CategoryCard({
    title,
    color,
    icon: Icon
}: CategoryCardProps){
    const { COLORS } = useTheme();

    return (
        <Container>
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