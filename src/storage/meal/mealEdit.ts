import AsyncStorage from "@react-native-async-storage/async-storage";
import { generalDataAfterMealEdit } from "@storage/general/generalDataAfterMealEdit";
import { sectionsGetAll } from "@storage/sections/sectionsGetAll";
import { sequenceAfterEditMeal } from "@storage/sequence/sequenceAfterEditMeal";
import { SECTIONS_COLLECTION } from "@storage/storageConfig";
import { MealDTO } from "./MealDTO";

export async function mealEdit(title: string, inDiet: boolean, meal: MealDTO) {
  try{
    const storedSections = await sectionsGetAll()

    const titleFormatted = title.replace(/\//g, ".")

    const updatedSections = storedSections.map(section => {
      if (section.title === titleFormatted) {
        const updatedData = section.data.map(item => item.id === meal.id ? meal : item);
        return { ...section, data: updatedData };
      } else {
        const filteredData = section.data.filter(item => item.id !== meal.id);
        return { ...section, data: filteredData };
      }
    }).filter(section => section.data.length > 0)

    await AsyncStorage.setItem(SECTIONS_COLLECTION, JSON.stringify(updatedSections))

    await sequenceAfterEditMeal(meal.id, meal.inDiet)

    await generalDataAfterMealEdit(inDiet, meal.inDiet)
  }catch(error){
    throw error
  }
}