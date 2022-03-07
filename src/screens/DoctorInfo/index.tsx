import React from "react";
import { View } from 'react-native';

import {
    Container,
    PhotoContainer,
    Photo,
    Content,
    Title,
    Category,
    Summary,
    DoctorRatings,
    RatingCard,
    RatingTitle,
    RatingValueContainer,
    RatingValue,
    RatingMeasurement,
    Line,
} from './styles';

import { useNavigation, useRoute } from '@react-navigation/native';

import { doctorDataProps } from "../Home";

import { GoBackButton } from "../../components/GoBackButton";
import { Button } from "../../components/Button";

interface Params {
    doctor: doctorDataProps;
}

export function DoctorInfo(){
    const { goBack } = useNavigation();
    const { params } = useRoute();
    const { doctor } = params as Params;

    function handleGoBack(){
        goBack();
    }

    return (
        <Container>
            <PhotoContainer>
                <View
                    style={{ position: "absolute", top: 60, left: 30, zIndex: 1 }}
                >
                    <GoBackButton 
                        onPress={handleGoBack}
                    />
                </View>
                <Photo 
                    source={{ uri: 'https://github.com/paulo-gouvea.png' }}   
                />
            </PhotoContainer>

            <Content>
                <Title>Dr. {doctor.name}</Title>

                <Category>{doctor.category} ⦁ {doctor.location}</Category>

                <Summary>
                    Dr. Fulano de Souza Silva is one of the best doctors in the Persahabatan Hospital. He has saved more than 1000 patients in the past 3 years. He has also received many awards from domestic and abroad as the best doctors. He is available on a private or schedule. 
                </Summary>

                <DoctorRatings>
                    <RatingCard>
                        <RatingTitle>Experiência</RatingTitle>
                        <RatingValueContainer>
                            <RatingValue>3</RatingValue>
                            <RatingMeasurement>anos</RatingMeasurement>
                        </RatingValueContainer>
                    </RatingCard>

                    <Line />

                    <RatingCard>
                        <RatingTitle>Pacientes</RatingTitle>
                        <RatingValueContainer>
                            <RatingValue>1225</RatingValue>
                            <RatingMeasurement>pacientes</RatingMeasurement>
                        </RatingValueContainer>
                    </RatingCard>

                    <Line />

                    <RatingCard>
                        <RatingTitle>Nota</RatingTitle>
                        <RatingValueContainer>
                            <RatingValue>5.0</RatingValue>
                        </RatingValueContainer>
                    </RatingCard>
                </DoctorRatings>

                <Button 
                    title='Agendar uma consulta'
                    onPress={() => console.log('hello')}
                />
            </Content>
        </Container>
    )
}