import { GeneralDataDTO } from "@storage/general/GeneralDataDTO";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            statistics: {
                generalData: GeneralDataDTO;
            };
            newMeal: undefined;
            success: {
                inDiet: boolean;
            };
        }
    }
}