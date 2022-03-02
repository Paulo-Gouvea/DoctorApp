import styled, { css } from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

type TitleProps = {
    color: string;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.WHITE};

    padding: ${getStatusBarHeight() + 56}px 24px 0;
`;

export const Header = styled.View`
    width: 100%;
    height: 45px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const AppointmentsButton = styled.TouchableOpacity`
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export const UserButton = styled.TouchableOpacity``;

export const UserImage = styled.Image`
    height: 100%;
    width: 45px;
    border-radius: 22px;
`;

export const TitleContainer = styled.View`
    width: 94%;

    flex-direction: row;
    justify-content: space-between;

    margin: 25px 0;
`;

export const Title = styled.Text<TitleProps>`
    font-size: 34px;
    font-family: ${({ theme }) => theme.FONTS.LATO_REGULAR};
    color: ${({ color }) => color};
`;

export const CategoryBox = styled.View`
    width: 100%;
    height: 175px;

    margin: 22px 0 24px;

    flex-direction: row;
    align-content: space-between;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const DoctorListHeader = styled.View`
    width: 100%;

    margin-bottom: 24px;
    
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
`;

export const DoctorListTitle = styled.Text`
    font-size: 20px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.LATO_BOLD};
        color: ${theme.COLORS.BLACK};
    `};
`;

export const DoctorListButton = styled.TouchableOpacity``;

export const DoctorListButtonTitle = styled.Text`
    font-size: 12px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.LATO_BOLD};
        color: ${theme.COLORS.BLUE};
    `};
`;
