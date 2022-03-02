import styled, { css } from 'styled-components/native';

export type SituationProps = 'Aberto' | 'Fechado';

type Props = {
    situation: SituationProps;
}

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 100px;
    flex-direction: row;

    margin-bottom: 16px;
`;

export const Photo = styled.Image`
    height: 100%;
    width: 30%;
    border-radius: 12px;
`;

export const Content = styled.View`
    padding: 6px 0 6px 16px;
    justify-content: space-between;
`;

export const DoctorInfo = styled.View``;

export const Title = styled.Text`
    font-size: 15px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.LATO_BOLD};
        color: ${theme.COLORS.BLACK};
    `};
`;

export const Occupation = styled.Text`
    font-size: 11px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.SOURCESANSPRO_REGULAR};
        color: ${theme.COLORS.GRAY_DARK};
    `};
`;

export const Footer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Rating = styled.View`
    width: 125px;
    height: 25px;
    background-color: aqua;
`;

export const Situation = styled.View<Props>`
    width: 70px;
    height: 35px;

    border-radius: 6px;

    align-items: center;
    justify-content: center;

    ${({ theme, situation }) => situation === 'Aberto' ? css`
        background-color: ${theme.COLORS.GREEN_LIGHT};
    ` : css`
        background-color: ${theme.COLORS.RED_LIGHT};
    `};
`;

export const SituationTitle = styled.Text<Props>`
    font-size: 12px;

    ${({ theme, situation }) => css`
        font-family: ${theme.FONTS.LATO_REGULAR};
    ` && situation === 'Aberto' ? css`
        color: ${theme.COLORS.GREEN};
    ` : css`
        color: ${theme.COLORS.RED};
    `} 
`;