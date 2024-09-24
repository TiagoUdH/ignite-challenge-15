import { MealDTO } from "@storage/meal/MealDTO"

export type SectionsDTO = {
  title: string,
  data: MealDTO[]
}[]