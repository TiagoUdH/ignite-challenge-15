import AsyncStorage from "@react-native-async-storage/async-storage"
import { generalDataAfterMealDelete } from "@storage/general/generalDataAfterMealDelete"
import { sectionsGetAll } from "@storage/sections/sectionsGetAll"
import { sequenceAfterDeleteMeal } from "@storage/sequence/sequenceAfterDeleteMeal"
import { SECTIONS_COLLECTION } from "@storage/storageConfig"

export async function mealDelete(id: string, inDiet: boolean) {
  try{
    const sectionsStored = await sectionsGetAll()

    const storage = sectionsStored.map(item => {
      const updatedData= item.data.filter(meal => meal.id !== id)

      return {
        ...item,
        data: updatedData,
      }    
    }).filter(item => item.data.length > 0)

    await AsyncStorage.setItem(SECTIONS_COLLECTION, JSON.stringify(storage))

    await sequenceAfterDeleteMeal(id)
    await generalDataAfterMealDelete(inDiet)
  }
  catch(error){
    throw error
  }
}