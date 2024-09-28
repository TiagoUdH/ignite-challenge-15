import { sequenceStreaksGet } from "@storage/sequence/sequenceStreaksGet";
import { generalDataGet } from "./generalDataGet"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GENERAL_DATA_COLLECTION } from "@storage/storageConfig";

export async function generalDataAfterMealDelete(inDiet: boolean) {
  try{
    const generalDataStored = await generalDataGet()

    const { currentStreak, bestStreak } = await sequenceStreaksGet()

    generalDataStored.mealAmount--;

    if(inDiet){
      generalDataStored.inDietAmount--;
    }
    else {
      generalDataStored.outDietAmount--;
    }

    generalDataStored.inDietPercentage = generalDataStored.inDietAmount / generalDataStored.mealAmount * 100;
    generalDataStored.inDiet = generalDataStored.inDietAmount > generalDataStored.outDietAmount;

    generalDataStored.currentStreak = currentStreak;
    generalDataStored.bestStreak = bestStreak;

    await AsyncStorage.setItem(GENERAL_DATA_COLLECTION, JSON.stringify(generalDataStored))
  }
  catch(error){
    throw error
  }
}