import AsyncStorage from "@react-native-async-storage/async-storage"
import { SEQUENCE_COLLECTION } from "@storage/storageConfig"

export async function sequenceGet() {
  try{
    const storedSequence = await AsyncStorage.getItem(SEQUENCE_COLLECTION)

    const storage: string[] = storedSequence ? JSON.parse(storedSequence) : []

    return storage
  }
  catch(error){
    throw error
  }
}