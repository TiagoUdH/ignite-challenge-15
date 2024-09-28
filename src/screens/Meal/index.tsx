import { Button } from "@components/Button";
import { HeaderForm } from "@components/headers/HeaderForm";
import { Modal } from "@components/Modal";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MealDTO } from "@storage/meal/MealDTO";
import { useState } from "react";
import { ButtonGroup, Container, Content, Data, Description, Icon, Section, Subtitle, Tag, TagText, Title } from "./styles";
import { mealDelete } from "@storage/meal/mealDelete";

type RouteParams = {
  date: string;
  meal: MealDTO;
}

export function Meal(){
  const [isOpen, setIsOpen] = useState(false)

  const navigation = useNavigation()

  const route = useRoute()
  const { date, meal } = route.params as RouteParams

  const formattedDate = date.replace(/\./g, "/")

  function handleEditMeal(){
    navigation.navigate("newEditMeal", { date, meal })
  }

  async function onRemoveMeal(){
    await mealDelete(meal.id, meal.inDiet)

    navigation.navigate("home")
  }

  return (
    <>
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
              onPress={() => setIsOpen(true)}
            />
          </ButtonGroup>
        </Content>
      </Container>

      {isOpen && <Modal onCloseModal={() => setIsOpen(false)} onRemoveMeal={onRemoveMeal} />}
    </>
  )
}