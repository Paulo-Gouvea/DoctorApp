import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { 
    Container 
} from './styles';

interface GoBackButtonProps extends TouchableOpacityProps {

}


export function GoBackButton({
    ...rest
}){
    return (
        <Container {...rest}>
            <Ionicons 
                name='chevron-back-outline'
                size={36}
            />
        </Container>
    )
}