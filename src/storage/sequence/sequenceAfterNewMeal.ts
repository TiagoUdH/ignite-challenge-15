import AsyncStorage from "@react-native-async-storage/async-storage"
import { Sequence } from "./Sequence"
import { sequenceGet } from "./sequenceGet"
import { SEQUENCE_COLLECTION } from "@storage/storageConfig"

export async function sequenceAfterNewMeal(id: string, inDiet: boolean) {
  try {
    const storedSequence = await sequenceGet()

    const sequence: Sequence = {
      id,
      inDiet
    }

    const storage = storedSequence ? JSON.stringify([sequence, ...storedSequence]) : JSON.stringify([sequence])

    await AsyncStorage.setItem(SEQUENCE_COLLECTION, storage)
  }
  catch (error) {
    throw error
  }  
}