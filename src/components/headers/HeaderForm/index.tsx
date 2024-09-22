import { useNavigation } from "@react-navigation/native";
import { Button, Container, Icon, Title } from "./styles";

type Props = {
  title: string;
}

export function HeaderForm({ title }: Props){
  const navigation = useNavigation()

  function handleHome(){
    navigation.navigate("home")
  }

  return (
    <Container>
      <Button onPress={handleHome}>
        <Icon />
      </Button>
      
      <Title>{title}</Title>
    </Container>
  )
}