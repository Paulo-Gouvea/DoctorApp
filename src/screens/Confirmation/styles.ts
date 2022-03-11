import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.WHITE};

    align-items: center;
    justify-content: center;
`;

export const Welcome = styled.Text`
    margin-top: 50px;

    font-size: 30px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.LATO_REGULAR};
        color: ${theme.COLORS.BLACK};
    `};
`;

export const ConfirmButton = styled.TouchableOpacity`
    margin-top: 30px;
    border-radius: 12px;

    width: 80px;
    height: 55px;
    background-color: ${({ theme }) => theme.COLORS.GREEN};

    align-items: center;
    justify-content: center;
`;

export const ConfirmButtonText = styled.Text`
    font-size: 18px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.LATO_REGULAR};
        color: ${theme.COLORS.WHITE};
    `};
`;