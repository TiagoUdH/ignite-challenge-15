import { PercentualCard } from "@components/cards/PercentualCard";
import { HeaderHome } from "@components/headers/HeaderHome";
import { Container } from "./styles";

export function Home(){
  return (
    <Container>
      <HeaderHome />

      <PercentualCard
        indiet
      />
    </Container>
  )
}