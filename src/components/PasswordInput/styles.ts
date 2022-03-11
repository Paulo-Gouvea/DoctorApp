import styled, { css } from "styled-components/native";

interface ContainerProps {
    isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
    width: 100%;
    height: 62px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};

    ${({ theme, isFocused }) => isFocused && css`
        border-bottom-width: 2px;
        border-bottom-color: ${theme.COLORS.RED};
    `};

    flex-direction: row;
`

export const IconContainer = styled.View`
    width: 60px;
    height: 100%;
    align-items: center;
    justify-content: center;
`

export const Line = styled.View`
    width: 2px;
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const InputBox = styled.TextInput`
    flex: 1;

    font-size: 14px;

    padding: 16px 0 19px 16px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.LATO_REGULAR};
        color: ${theme.COLORS.GRAY_DARK};
    `};
`;

export const TouchableIconContainer = styled.TouchableOpacity`
    width: 60px;
    height: 100%;
    align-items: center;
    justify-content: center;
`