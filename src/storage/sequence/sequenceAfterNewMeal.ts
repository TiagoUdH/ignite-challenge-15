import AsyncStorage from "@react-native-async-storage/async-storage"
import { SEQUENCE_COLLECTION } from "@storage/storageConfig"
import { Sequence } from "./Sequence"
import { sequenceGet } from "./sequenceGet"

export async function sequenceAfterNewMeal(id: string, inDiet: boolean) {
  try {
    const storedSequence = await sequenceGet()

    const sequence: Sequence = {
      id,
      inDiet
    }

    const storage = JSON.stringify([...storedSequence, sequence])

    await AsyncStorage.setItem(SEQUENCE_COLLECTION, storage)
  }
  catch (error) {
    throw error
  }  
}