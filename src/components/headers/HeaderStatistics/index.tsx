import { useNavigation } from "@react-navigation/native";
import { Button, Container, Icon, Subitle, Title } from "./styles";

type Props = {
  percentage: number;
  inDiet: boolean;
}

export function HeaderStatistics({ percentage, inDiet }: Props) {
  const navigation = useNavigation()

  function handleHome(){
    navigation.navigate("home")
  }

  return(
    <Container>
      <Button onPress={handleHome}>
        <Icon inDiet={inDiet} />
      </Button>

      <Title>{percentage.toFixed(2).replace(".", ",")}%</Title>

      <Subitle>das refeições dentro da dieta</Subitle>
    </Container>
  )
}