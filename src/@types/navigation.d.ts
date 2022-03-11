import { doctorDataProps } from "../screens/Home";

export interface DoctorNavigationProps {
    doctor: doctorDataProps;
}

export declare global {

    namespace ReactNavigation {

        interface RootParamList {
            signin: undefined;
            createaccount: undefined;
            confirmation: undefined;
            home: undefined;
            doctorinfo: DoctorNavigationProps;
        }
    }
}