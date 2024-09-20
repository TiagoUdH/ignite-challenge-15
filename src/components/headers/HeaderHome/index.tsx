import { Image } from "react-native";

import elipseImg from "@assets/ellipse.png";
import logoImg from "@assets/logo.png";
import { Container } from "./styles";

export function HeaderHome(){
  return (
    <Container>
      <Image source={logoImg} />

      <Image source={elipseImg} />
    </Container>
  )
}