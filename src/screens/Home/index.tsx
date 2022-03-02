import React, { useState } from "react";
import { FlatList } from "react-native";
import { Feather } from '@expo/vector-icons';

import {
    Container, 
    Header,
    AppointmentsButton,
    UserButton,
    UserImage,
    TitleContainer,
    Title,
    CategoryBox,
    DoctorListHeader,
    DoctorListTitle,
    DoctorListButton,
    DoctorListButtonTitle,
} from './styles';

import { CATEGORIES } from "../../utils/categories";
import { fakeDoctorData } from "../../utils/fakeDoctorData";

import { useTheme } from "styled-components/native";

import { SearchInput } from "../../components/SearchInput";
import { CategoryCard } from "../../components/CategoryCard";
import { DoctorCard } from "../../components/DoctorCard";
import { SituationProps } from "../../components/DoctorCard/styles";

type doctorDataProps = {
    id: number;
    photo: string;
    name: string;
    category: string;
    location: string;
    situation: SituationProps;
}

export function Home(){
    const [doctorData, setDoctorData] = useState<doctorDataProps[]>(fakeDoctorData as doctorDataProps[])

    const { COLORS } = useTheme();

    return(
        <Container>
            <Header>
                <AppointmentsButton>
                    <Feather
                        name='menu'
                        size={24}
                        color={COLORS.BLACK}
                    />
                </AppointmentsButton>

                <UserButton>
                    <UserImage
                        source={{uri: 'https://github.com/paulo-gouvea.png'}}
                    />
                </UserButton>
            </Header>

            <TitleContainer>
                <Title color={COLORS.BLACK} >Encontre</Title>
                <Title color={COLORS.GRAY_DARK} >seu doutor</Title>
            </TitleContainer>

            <SearchInput />

            <CategoryBox>
                {
                    CATEGORIES.map(element => {
                        return (
                            <CategoryCard 
                                key={element.id} 
                                title={element.name} 
                                color={element.color}
                                icon={element.icon}
                            />
                        )
                    })
                }
            </CategoryBox>

            <DoctorListHeader>
                <DoctorListTitle>Melhores Doutores</DoctorListTitle>
                <DoctorListButton>
                    <DoctorListButtonTitle>
                        Ver Todos
                    </DoctorListButtonTitle>
                </DoctorListButton>
            </DoctorListHeader>

            <FlatList 
                data={doctorData}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
                
                renderItem={({item}) => (
                    <DoctorCard 
                        photo={item.photo}
                        name={item.name}
                        category={item.category}
                        location={item.location}
                        situation={item.situation}
                    />
                )}
            />
            
        </Container>
    )
}