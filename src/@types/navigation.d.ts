import { GeneralDataDTO } from "@storage/general/GeneralDataDTO";
import { MealDTO } from "@storage/meal/MealDTO";

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
            meal: {
                date: string;
                meal: MealDTO;
            }
        }
    }
}