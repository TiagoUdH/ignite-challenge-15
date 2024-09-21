import { Button } from "@components/Button";
import { Item } from "@components/Item";
import { PercentualCard } from "@components/cards/PercentualCard";
import { HeaderHome } from "@components/headers/HeaderHome";
import { SectionList, View } from "react-native";
import { Container, NewMealTitle, SectionTitle } from "./styles";

const DATA = [
  {
    title: '21.09.24',
    data: ['Salsicha que sobrou do dogão', 'Macarronada', 'Pizza', 'a'],
  },
  {
    title: '20.09.24',
    data: ['Arroz', 'Pastel de Calabresa', '5 Kg de Frango', 'Carne que sobrou do churras'],
  },
];


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

      <SectionList
        sections={DATA}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>12.08.22</SectionTitle>
        )}
        renderItem={({ item }) => (
          <Item />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 100 }]}
      />
    </Container>
  )
}