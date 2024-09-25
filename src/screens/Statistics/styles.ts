import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

type StatisticStypeProps = {
  inDiet: boolean;
}

export const Container = styled(SafeAreaView)<StatisticStypeProps>`
  flex: 1;

  background-color: ${({ theme, inDiet }) => inDiet ? theme.COLORS["green-light"] : theme.COLORS["red-light"]};
`