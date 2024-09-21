import { useNavigation } from "@react-navigation/native";
import { Button, Container, Icon, type PercentualCardStyleProps, SubTitle, Title } from "./styles";

type Props = PercentualCardStyleProps

export function PercentualCard({ indiet = false }: Props){
  const navigate = useNavigation()

  function handleStatistics(){
    navigate.navigate("statistics")
  }

  return(
    <Container indiet={indiet}>
      <Button onPress={handleStatistics}>
        <Icon indiet={indiet} />
      </Button>

      <Title>90,86%</Title>

      <SubTitle>das refeições dentro da dieta</SubTitle>
    </Container>
  )
}