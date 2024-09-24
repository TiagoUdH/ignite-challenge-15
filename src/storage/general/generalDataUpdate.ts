import { MealDTO } from "@storage/meal/MealDTO";
import { generalDataGet } from "./generalDataGet";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GENERAL_DATA_COLLECTION } from "@storage/storageConfig";

export async function generalDataUpdate(meal: MealDTO) {
  const storedGeneralData = await generalDataGet()

  storedGeneralData.mealAmount++;
  
  if(meal.inDiet) {
    storedGeneralData.inDietAmount++;
    storedGeneralData.currentStreak++;

    if(storedGeneralData.currentStreak > storedGeneralData.bestStreak){
      storedGeneralData.bestStreak = storedGeneralData.currentStreak;
    }
  }
  else{
    storedGeneralData.outDietAmount++;
  }

  storedGeneralData.inDietPercentage = storedGeneralData.inDietAmount / storedGeneralData.mealAmount;

  const storage = JSON.stringify(storedGeneralData)

  await AsyncStorage.setItem(GENERAL_DATA_COLLECTION, storage)
}