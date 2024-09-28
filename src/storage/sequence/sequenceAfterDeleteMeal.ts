import AsyncStorage from "@react-native-async-storage/async-storage"
import { sequenceGet } from "./sequenceGet"
import { SEQUENCE_COLLECTION } from "@storage/storageConfig"

export async function sequenceAfterDeleteMeal(id: string) {
  try{
    const sequenceStored = await sequenceGet()

    const storage = sequenceStored.filter(term => term.id !== id)

    await AsyncStorage.setItem(SEQUENCE_COLLECTION, JSON.stringify(storage))
  }
  catch(error){
    throw error
  }
}