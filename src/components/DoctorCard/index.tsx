import React from "react";
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

type DoctorCardProps = {
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
}: DoctorCardProps){
    return (
        <Container>
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