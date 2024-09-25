import AsyncStorage from "@react-native-async-storage/async-storage"
import { GENERAL_DATA_COLLECTION } from "@storage/storageConfig"
import { GeneralDataDTO } from "./GeneralDataDTO"

const defaultData: GeneralDataDTO = {
  inDiet: false,
  inDietPercentage: 0,
  currentStreak: 0,
  bestStreak: 0,
  mealAmount: 0,
  inDietAmount: 0,
  outDietAmount: 0,
}

export async function generalDataGet() {
  try{
    const storage = await AsyncStorage.getItem(GENERAL_DATA_COLLECTION)

    const generalData: GeneralDataDTO = storage ? JSON.parse(storage) : defaultData

    return generalData
  }
  catch(error){
    throw error
  }
}