import { Button } from "@components/Button";
import { Item } from "@components/Item";
import { Loading } from "@components/Loading";
import { PercentualCard } from "@components/cards/PercentualCard";
import { HeaderHome } from "@components/headers/HeaderHome";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { GeneralDataDTO } from "@storage/general/GeneralDataDTO";
import { generalDataGet } from "@storage/general/generalDataGet";
import { SectionsDTO } from "@storage/sections/SectionsDTO";
import { sectionsGetAll } from "@storage/sections/sectionsGetAll";
import { useCallback, useState } from "react";
import { Alert, SectionList, View } from "react-native";
import { Container, NewMealTitle, SectionTitle, Separator } from "./styles";

export function Home(){
  const [isLoading, setIsLoading] = useState(true)
  const [generalData, setGeneralData] = useState<GeneralDataDTO>({} as GeneralDataDTO)
  const [sections, setSections] = useState<SectionsDTO>([])

  const navigation = useNavigation()

  function handleNewMeal(){
    navigation.navigate("newMeal")
  }

  async function fetchGeneralData() {
    try {
      setIsLoading(true)

      const data = await generalDataGet()
      
      setGeneralData(data)
    }
    catch (error) {
      Alert.alert("Dados gerais", "Não foi possível carregar os dados gerais")
    }
    finally {
      setIsLoading(false)
    }
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

  useFocusEffect(useCallback(() => {
    fetchGeneralData()
    fetchSections()
  }, []))

  return (
    <Container>
      <HeaderHome />

      {isLoading ? <Loading /> : (
        <PercentualCard
          generalData={generalData}
        />
        )
      }

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
            keyExtractor={(item) => item.id}
            renderSectionHeader={({ section: { title } }) => (
              <SectionTitle>{title}</SectionTitle>
            )}
            renderItem={({ item }) => (
              <Item meal={item} />
            )}
            renderSectionFooter={() => <Separator />}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </Container>
  )
}