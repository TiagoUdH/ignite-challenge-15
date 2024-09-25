import { Container, Description, Number, StatisticCardStyleProps } from "./styles";

type Props = {
  type: StatisticCardStyleProps;
  value: number;
  text: string;
  inCardGroup?: boolean;
}

export function StatisticCard({ type, value, text, inCardGroup = false }: Props) {
  return (
    <Container type={type} inCardGroup={inCardGroup}>
      <Number>{value}</Number>

      <Description>{text}</Description>
    </Container>
  )
}