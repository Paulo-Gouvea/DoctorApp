import styled, { css } from "styled-components/native";

interface ButtonProps {
    color: string;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
    width: 300px;
    height: 70px;

    border-radius: 12px;
    align-items: center;
    justify-content: center;
    
    background-color: ${({ color }) => color};
`;

export const Title = styled.Text`
    font-size: 16px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.LATO_BOLD};
        color: ${theme.COLORS.WHITE};
    `};
`;