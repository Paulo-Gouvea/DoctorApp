import styled, { css } from "styled-components/native";

type ButtonProps = {
    color: string;
}

export const Container = styled.TouchableOpacity`
    width: 70px;
    height: 81px;

    align-items: center;
    justify-content: space-between;

    margin: 0 10px;
`;

export const Button = styled.View<ButtonProps>`
    width: 56px;
    height: 56px;
    border-radius: 8px; 

    align-items: center;
    justify-content: center;

    background-color: ${({ color }) => color};
`;

export const Title = styled.Text`
    font-size: 10.5px;
    text-align: center;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.LATO_REGULAR};
        color: ${theme.COLORS.BLACK};
    `};
`;