import AsyncStorage from "@react-native-async-storage/async-storage"
import { SEQUENCE_COLLECTION } from "@storage/storageConfig"
import { sequenceGet } from "./sequenceGet"

export async function sequenceAfterEditMeal(id: string, inDiet: boolean) {
  try{
    const sequenceStored = await sequenceGet()

    const termRecieved = {
      id,
      inDiet
    }

    const storage = sequenceStored.map(term => {
      if(term.id === id){
        return termRecieved
      }

      return term
    })

    await AsyncStorage.setItem(SEQUENCE_COLLECTION, JSON.stringify(storage))
  }
  catch (error){
    throw error
  }
}