import AsyncStorage from "@react-native-async-storage/async-storage";
import { generalDataBeforeNewMeal } from "@storage/general/generalDataBeforeNewMeal";
import { sectionsGetAll } from "@storage/sections/sectionsGetAll";
import { sequenceAfterNewMeal } from "@storage/sequence/sequenceAfterNewMeal";
import { SECTIONS_COLLECTION } from "@storage/storageConfig";
import { MealDTO } from "./MealDTO";

export async function mealCreate(title: string, meal: MealDTO) {
  const storedSections = await sectionsGetAll()

  const titleFormatted = title.replace(/\//g, ".")

  const titleExists = storedSections.find(section => section.title === titleFormatted)

  if(titleExists){
    const updatedSections = storedSections.map(section => {
      if (section.title === titleFormatted){
        return {
          ...section,
          data: [meal, ...section.data]
        }
      }

      return section
    })

    const storage = JSON.stringify(updatedSections)

    await AsyncStorage.setItem(SECTIONS_COLLECTION, storage)
  }
  else {
    const item = {
      title: titleFormatted,
      data: [meal]
    }

    const storage = JSON.stringify([item, ...storedSections])

    await AsyncStorage.setItem(SECTIONS_COLLECTION, storage)
  }

  await generalDataBeforeNewMeal(meal.inDiet)
  await sequenceAfterNewMeal(meal.id, meal.inDiet)
}