import { Button } from "@components/Button";
import { HeaderForm } from "@components/headers/HeaderForm";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MealDTO } from "@storage/meal/MealDTO";
import { ButtonGroup, Container, Content, Data, Description, Icon, Section, Subtitle, Tag, TagText, Title } from "./styles";

type RouteParams = {
  date: string;
  meal: MealDTO;
}

export function Meal(){
  const navigation = useNavigation()

  const route = useRoute()
  const { date, meal } = route.params as RouteParams

  const formattedDate = date.replace(/\./g, "/")

  function handleEditMeal(){
    navigation.navigate("newEditMeal", { date, meal })
  }

  return (
    <Container inDiet={meal.inDiet}>
      <HeaderForm title="Refeição" />

      <Content>
        <Data>
          <Section>
            <Title>{meal.name}</Title>

            <Description>{meal.description}</Description>
          </Section>

          <Section>
            <Subtitle>Data e hora</Subtitle>

            <Description>{formattedDate} às {meal.hour}</Description>
          </Section>

          <Tag>
            <Icon inDiet={meal.inDiet} />

            <TagText>{meal.inDiet ? "dentro da dieta" : "fora da dieta"}</TagText>
          </Tag>
        </Data>

        <ButtonGroup>
          <Button
            icon="PENCIL"
            title="Editar refeição"
            onPress={handleEditMeal}
          />

          <Button
            type="SECONDARY"
            icon="TRASH"
            title="Excluir refeição"
          />
        </ButtonGroup>
      </Content>
    </Container>
  )
}