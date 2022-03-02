import styled, { css } from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const PhotoContainer = styled.View`
    width: 100%;
    height: 45%;
    background-color: ${({theme}) => theme.COLORS.GRAY_SEMI_DARK};
    padding-top: ${getStatusBarHeight() + 20}px;
`

export const Photo = styled.Image`
    flex: 1;
`

export const Content = styled.View`
    flex: 1;
    align-items: center;
    padding: 24px;
`

export const Title = styled.Text`
    font-size: 24px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.LATO_BOLD};
        color: ${theme.COLORS.BLACK};
    `};
`

export const Category = styled.Text`
    margin: 16px 0;
    font-size: 14px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.LATO_REGULAR};
        color: ${theme.COLORS.GRAY_DARK};
    `};
`;

export const Summary = styled.Text`
    font-size: 17px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.SOURCESANSPRO_REGULAR};
        color: ${theme.COLORS.GRAY_DARK};
    `};
`;

export const DoctorRatings = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 32px 0 32px;
    height: 70px;
    width: 350px;
`

export const RatingCard = styled.View`
    width: 100px;
    height: 60px;

    padding: 0 2px;

    align-content: center;
    justify-content: space-between;
`;

export const RatingTitle = styled.Text`
    width: 100%;
    text-align: center;

    font-size: 16px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.LATO_REGULAR};
        color: ${theme.COLORS.BLACK};
    `};
`;

export const RatingValueContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const RatingValue = styled.Text`
    margin-right: 3px;

    font-size: 18px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.SOURCESANSPRO_REGULAR};
        color: ${theme.COLORS.BLUE};
    `};
`;

export const RatingMeasurement = styled.Text`
    font-size: 14px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.SOURCESANSPRO_REGULAR};
        color: ${theme.COLORS.GRAY_SEMI_DARK};
    `};
`;

export const Line = styled.View`
    height: 100%;
    width: 1px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_SEMI_DARK};
`
