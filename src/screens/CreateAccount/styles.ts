import styled, { css } from "styled-components/native";
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.COLORS.WHITE};

    padding: ${getStatusBarHeight() + 30}px 24px ${getBottomSpace()}px;
`;

export const Title = styled.Text`
    margin-top: 55px;
    font-size: 40px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.LATO_REGULAR};
        color: ${theme.COLORS.BLACK};
    `};
`;

export const SubTitle = styled.Text`
    margin-top: 16px;
    font-size: 14px;
    line-height: 25px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.LATO_REGULAR};
        color: ${theme.COLORS.GRAY_DARK};
    `};
`;

export const InputContainer = styled.View`
    height: 284px;
    justify-content: space-between;
    margin: 64px 0;
`

export const ButtonContainer = styled.View`
    width: 100%;
    align-items: center;
`;