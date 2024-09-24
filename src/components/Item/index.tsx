import { MealDTO } from "@storage/meal/MealDTO";
import { CircleIcon, Container, Hour, Meal, Name, Separator } from "./styles";

type Props = {
  meal: MealDTO
}

export function Item({ meal: { hour, name, inDiet } }: Props){
  return (
    <Container>
      <Hour>{hour}</Hour>

      <Separator />
      
      <Meal>
        <Name>{name}</Name>

        <CircleIcon indiet={inDiet} />
      </Meal>
    </Container>
  )
}