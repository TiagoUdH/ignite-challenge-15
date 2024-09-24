import AsyncStorage from "@react-native-async-storage/async-storage"
import { SECTIONS_COLLECTION } from "@storage/storageConfig"
import { SectionsDTO } from "./SectionsDTO"

export async function sectionsGetAll() {
  try{
    const storage = await AsyncStorage.getItem(SECTIONS_COLLECTION)

    const sections: SectionsDTO = storage ? JSON.parse(storage) : []

    return sections
  }
  catch(error){
    throw error
  }
}