import { doctorDataProps } from "../screens/Home";

export interface DoctorNavigationProps {
    doctor: doctorDataProps;
}

export declare global {

    namespace ReactNavigation {

        interface RootParamList {
            signin: undefined;
            home: undefined;
            doctorinfo: DoctorNavigationProps;
        }
    }
}