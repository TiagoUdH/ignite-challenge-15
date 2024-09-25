import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type StatisticStypeProps = {
  inDiet: boolean;
}

export const Container = styled(SafeAreaView)<StatisticStypeProps>`
  flex: 1;

  background-color: ${({ theme, inDiet }) => inDiet ? theme.COLORS["green-light"] : theme.COLORS["red-light"]};
`

export const Content = styled.View`
  flex: 1;
  gap: 23px;

  padding: 33px 24px 24px;
  border-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS["gray-7"]};
`
export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS["gray-1"]};
    line-height: ${theme.FONT_SIZE.SM * 1.3}px;
  `}

  text-align: center;
`

export const CardGroup = styled.View`
  gap: 12px;
`

export const CardInlineGroup = styled(CardGroup)`
  flex-direction: row;
`