import React from "react";
import LottieView from "lottie-react-native";

import Animation from "../../assets/load_animation.json";

import {
    Container,
} from "./styles";

export function LoadAnimation(){
    return (
        <Container>
            <LottieView
                autoPlay
                loop
                resizeMode="contain"
                source={Animation}
                style={{
                    width: 200,
                    height: 200
                }}
            />
        </Container>
    )
}