import AsyncStorage from "@react-native-async-storage/async-storage";
import { sequenceStreaksGet } from "@storage/sequence/sequenceStreaksGet";
import { GENERAL_DATA_COLLECTION } from "@storage/storageConfig";
import { generalDataGet } from "./generalDataGet";

export async function generalDataAfterMealEdit(inDietBefore: boolean, inDietAfter: boolean) {
  try{
    const generalDatastored = await generalDataGet()

    const { currentStreak, bestStreak } = await sequenceStreaksGet()

    generalDatastored.currentStreak = currentStreak;
    generalDatastored.bestStreak = bestStreak;

    if(inDietAfter && !inDietBefore){
      generalDatastored.inDietAmount++;
      generalDatastored.outDietAmount--;
    }

    if (!inDietAfter && inDietBefore) {
      generalDatastored.inDietAmount--;
      generalDatastored.outDietAmount++;
    }

    generalDatastored.inDietPercentage = generalDatastored.inDietAmount / generalDatastored.mealAmount * 100;
    generalDatastored.inDiet = generalDatastored.inDietAmount > generalDatastored.outDietAmount;

    await AsyncStorage.setItem(GENERAL_DATA_COLLECTION, JSON.stringify(generalDatastored))
  }
  catch(error){
    throw error
  }
}