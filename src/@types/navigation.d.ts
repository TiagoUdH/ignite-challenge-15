import { GeneralDataDTO } from "@storage/general/GeneralDataDTO";
import { MealDTO } from "@storage/meal/MealDTO";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            statistics: {
                generalData: GeneralDataDTO;
            };
            newEditMeal: {
                date: string;
                meal: MealDTO;
            } | undefined;
            success: {
                inDiet: boolean;
            };
            meal: {
                date: string;
                meal: MealDTO;
            };
        }
    }
}