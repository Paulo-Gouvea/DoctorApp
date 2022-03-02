import styled, { css } from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 60px;

    border-radius: 12px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};

    flex-direction: row;
`;

export const InputBox = styled.TextInput`
    height: 100%;
    width: 85%;

    font-size: 14px;

    padding: 16px 0 19px 16px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.LATO_REGULAR};
        color: ${theme.COLORS.GRAY_DARK};
    `};
`;

export const InputButton = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
`;