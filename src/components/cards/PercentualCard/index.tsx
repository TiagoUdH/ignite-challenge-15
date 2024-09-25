import { useNavigation } from "@react-navigation/native";
import { Button, Container, Icon, SubTitle, Title } from "./styles";
import { GeneralDataDTO } from "@storage/general/GeneralDataDTO";

type Props = {
  generalData: GeneralDataDTO;
}

export function PercentualCard({ generalData }: Props){
  const navigate = useNavigation()

  function handleStatistics(){
    navigate.navigate("statistics", { generalData })
  }

  return(
    <Container indiet={generalData.inDiet}>
      <Button onPress={handleStatistics}>
        <Icon indiet={generalData.inDiet} />
      </Button>

      <Title>{generalData.inDietPercentage.toFixed(2).replace(".", ",")}%</Title>

      <SubTitle>das refeições dentro da dieta</SubTitle>
    </Container>
  )
}