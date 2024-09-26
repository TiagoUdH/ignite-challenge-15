import { useNavigation } from "@react-navigation/native";
import { MealDTO } from "@storage/meal/MealDTO";
import { CircleIcon, Container, Hour, Meal, Name, Separator } from "./styles";

type Props = {
  date: string;
  meal: MealDTO
}

export function Item({ date, meal }: Props){
  const navigation = useNavigation()

  function handleMeal(){
    navigation.navigate("meal", { date, meal })
  }

  return (
    <Container onPress={handleMeal} activeOpacity={0.7}>
      <Hour>{meal.hour}</Hour>

      <Separator />
      
      <Meal>
        <Name>{meal.name}</Name>

        <CircleIcon indiet={meal.inDiet} />
      </Meal>
    </Container>
  )
}