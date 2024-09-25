import { HeaderStatistics } from "@components/headers/HeaderStatistics";
import { useRoute } from "@react-navigation/native";
import { GeneralDataDTO } from "@storage/general/GeneralDataDTO";
import { Container } from "./styles";
import { View } from "react-native";

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
    </Container>
  )
}