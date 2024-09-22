import { HeaderForm } from "@components/headers/HeaderForm"
import { Text } from "react-native"
import { Container, Content } from "./styles"

export function NewMeal(){
  return (
    <Container>
      <HeaderForm title="Nova refeição" />

      <Content>
        <Text>New Meal</Text>
      </Content>
    </Container>
  )
}