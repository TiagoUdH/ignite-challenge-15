import AsyncStorage from "@react-native-async-storage/async-storage"
import { SEQUENCE_COLLECTION } from "@storage/storageConfig"
import { Sequence } from "./Sequence"

export async function sequenceGet() {
  try{
    const storedSequence = await AsyncStorage.getItem(SEQUENCE_COLLECTION)

    const storage: Sequence[] = storedSequence ? JSON.parse(storedSequence) : []

    return storage
  }
  catch(error){
    throw error
  }
}