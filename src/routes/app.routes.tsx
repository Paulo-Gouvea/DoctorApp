import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import { SignIn } from "../screens/SignIn";
import { Home } from "../screens/Home";
import { DoctorInfo } from "../screens/DoctorInfo";

export function AppRoutes(){
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen 
                name="signin"
                component={SignIn}
            />

            <Screen 
                name="home"
                component={Home}
            />

            <Screen 
                name="doctorinfo"
                component={DoctorInfo}
            />
        </Navigator>
    )
}