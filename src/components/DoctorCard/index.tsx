import React from "react";
import { TouchableOpacityProps } from "react-native";
import { 
    Container,
    Photo,
    Content,
    DoctorInfo,
    Title,
    Occupation,
    Footer,
    Rating,
    Situation,
    SituationTitle,
    SituationProps,
} from "./styles";

interface DoctorCardProps extends TouchableOpacityProps {
    situation?: SituationProps;
    photo: string;
    name: string;
    category: string;
    location: string;
}

export function DoctorCard({
    situation = 'Fechado',
    photo,
    name,
    category,
    location,
    ...rest
}: DoctorCardProps){
    return (
        <Container
            {...rest}
        >
            <Photo
                source={{uri: photo}}
            />
            <Content>
                <DoctorInfo>
                    <Title>Dr. {name}</Title>
                    <Occupation>{category} ⦁ {location}</Occupation>
                </DoctorInfo>
                <Footer>
                    <Rating>

                    </Rating>
                    <Situation
                        situation={situation}
                    >
                        <SituationTitle situation={situation}>{situation}</SituationTitle>
                    </Situation>
                </Footer>
            </Content>
        </Container>
    )
}