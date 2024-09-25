import { StatisticCard } from "@components/cards/StatisticCard";
import { HeaderStatistics } from "@components/headers/HeaderStatistics";
import { useRoute } from "@react-navigation/native";
import { GeneralDataDTO } from "@storage/general/GeneralDataDTO";
import { CardGroup, CardInlineGroup, Container, Content, Title } from "./styles";

type RouteParams = {
  generalData: GeneralDataDTO;
}

export function Statistics(){
  const route = useRoute()
  const { generalData } = route.params as RouteParams

  return (
    <Container inDiet={generalData.inDiet}>
      <HeaderStatistics
        percentage={generalData.inDietPercentage}
        inDiet={generalData.inDiet}
      />

      <Content>
        <Title>Estatísticas gerais</Title>

        <CardGroup>
          <StatisticCard type="PRIMARY" value={generalData.bestStreak} text="melhor sequência de pratos dentro da dieta" />

          <StatisticCard type="PRIMARY" value={generalData.mealAmount} text="refeições registradas" />

          <CardInlineGroup>
            <StatisticCard inCardGroup type="SECONDARY" value={generalData.inDietAmount} text="refeições dentro da dieta" />

            <StatisticCard inCardGroup type="TERTIARY" value={generalData.outDietAmount} text="refeições fora da dieta" />
          </CardInlineGroup>
        </CardGroup>
      </Content>
    </Container>
  )
}