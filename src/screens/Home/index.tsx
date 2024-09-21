import { Button } from "@components/Button";
import { PercentualCard } from "@components/cards/PercentualCard";
import { HeaderHome } from "@components/headers/HeaderHome";
import { View } from "react-native";
import { Container, NewMealTitle } from "./styles";

export function Home(){
  return (
    <Container>
      <HeaderHome />

      <PercentualCard
        indiet
      />

      <View>
        <NewMealTitle>Refeições</NewMealTitle>

        <Button icon="PLUS" />
      </View>
    </Container>
  )
}