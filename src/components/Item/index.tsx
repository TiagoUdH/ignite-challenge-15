import { View } from "react-native";
import { CircleIcon, Container, Hour, Meal, Name, Separator } from "./styles";

export function Item(){
  return (
    <Container>
      <Hour>20:00</Hour>

      <Separator />
      
      <Meal>
        <Name>X-tudo</Name>

        <CircleIcon indiet />
      </Meal>
    </Container>
  )
}