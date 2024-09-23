import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Container, Hero, Highlight, Message, Title } from "./styles";

import inDietImg from "@assets/in-diet.png";
import outDietImg from "@assets/out-diet.png";

type RouteParams = {
  inDiet: boolean
}

export function Success() {
  const navigation = useNavigation()
  const route = useRoute()
  const { inDiet } = route.params as RouteParams

  function handleHome(){
    navigation.navigate("home")
  }

  return (
    <Container>
      {inDiet ? (
        <>
          <Title inDiet={inDiet}>Continue assim!</Title>

          <Message>Você continua <Highlight>dentro da dieta</Highlight>. Muito bem!</Message>

          <Hero source={inDietImg} />
        </>
      ) : (
        <>
          <Title inDiet={inDiet}>Que pena!</Title>
          
          <Message>Você <Highlight>saiu da dieta</Highlight> dessa vez, mas continue se esforçando e não desista!</Message>

          <Hero source={outDietImg} />
        </>
      )}

      <Button
        title="Ir para a página inicial"
        onPress={handleHome}
      />
    </Container>
  )
}