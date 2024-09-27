import { sectionsGetAll } from "@storage/sections/sectionsGetAll";
import { MealDTO } from "./MealDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SECTIONS_COLLECTION } from "@storage/storageConfig";
import { sequenceAfterEditMeal } from "@storage/sequence/sequenceAfterEditMeal";

export async function mealEdit(title: string, meal: MealDTO) {
  try{
    const storedSections = await sectionsGetAll()

    const sections = storedSections.map(section => {
      if(section.title === title){
        const updatedSection = section.data.map(item => {
          if(item.id === meal.id){
            return meal
          }

          return item
        })

        return updatedSection
      }
      else {
        const updatedSection = section.data.filter(item => item.id !== meal.id)

        return updatedSection
      }
    })

    const storage = storedSections.filter(section => section.data.length !== 0)

    await AsyncStorage.setItem(SECTIONS_COLLECTION, JSON.stringify(storage))

    await sequenceAfterEditMeal(meal.id, meal.inDiet)
  }catch(error){
    throw error
  }
}