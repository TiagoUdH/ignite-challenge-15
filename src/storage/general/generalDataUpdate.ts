import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealDTO } from "@storage/meal/MealDTO";
import { GENERAL_DATA_COLLECTION } from "@storage/storageConfig";
import { generalDataGet } from "./generalDataGet";

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
    storedGeneralData.currentStreak = 0;
  }

  storedGeneralData.inDietPercentage = storedGeneralData.inDietAmount / storedGeneralData.mealAmount * 100;
  storedGeneralData.inDiet = storedGeneralData.inDietAmount > storedGeneralData.outDietAmount;

  const storage = JSON.stringify(storedGeneralData)

  await AsyncStorage.setItem(GENERAL_DATA_COLLECTION, storage)
}