import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 300px;
    height: 70px;

    border-radius: 12px;
    align-items: center;
    justify-content: center;
    
    background-color: ${({ theme }) => theme.COLORS.GREEN};
`;

export const Title = styled.Text`
    font-size: 16px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.LATO_BOLD};
        color: ${theme.COLORS.WHITE};
    `};
`;