import { Button } from "@components/Button";
import { Item } from "@components/Item";
import { Loading } from "@components/Loading";
import { PercentualCard } from "@components/cards/PercentualCard";
import { HeaderHome } from "@components/headers/HeaderHome";
import { useNavigation } from "@react-navigation/native";
import { SectionsDTO } from "@storage/sections/SectionsDTO";
import { sectionsGetAll } from "@storage/sections/sectionsGetAll";
import { useEffect, useState } from "react";
import { Alert, SectionList, View } from "react-native";
import { Container, NewMealTitle, SectionTitle, Separator } from "./styles";

const DATA = [
  {
    title: '21.09.24',
    data: ['Salsicha que sobrou do dogão', 'Macarronada', 'Pizza'],
  },
  {
    title: '20.09.24',
    data: ['Arroz', 'Pastel de Calabresa', '5 Kg de Frango', 'Carne que sobrou do churras'],
  },
];

export function Home(){
  const [isLoading, setIsLoading] = useState(true)
  const [sections, setSections] = useState<SectionsDTO>([])

  const navigation = useNavigation()

  function handleNewMeal(){
    navigation.navigate("newMeal")
  }

  async function fetchSections(){
    try{
      setIsLoading(true)

      const data = await sectionsGetAll()

      setSections(data)
    }
    catch(error){
      Alert.alert("Refeições", "Não foi possível carregar as refeições")
    }
    finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchSections()
  }, [])

  return (
    <Container>
      <HeaderHome />

      <PercentualCard
        indiet
      />

      <View>
        <NewMealTitle>Refeições</NewMealTitle>

        <Button
          title="Nova refeição"
          icon="PLUS"
          onPress={handleNewMeal}
        />
      </View>

      {isLoading ? <Loading /> : (
        <>
          <Separator />

          <SectionList
            sections={sections}
            renderSectionHeader={({ section: { title } }) => (
              <SectionTitle>{title}</SectionTitle>
            )}
            renderItem={({ item }) => (
              <Item meal={item} />
            )}
            renderSectionFooter={() => <Separator />}
            showsVerticalScrollIndicator={false}
          /></>
      )}
    </Container>
  )
}