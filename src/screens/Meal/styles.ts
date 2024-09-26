import { Circle } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type MealStyleProps = {
  inDiet: boolean;
}

export const Container = styled(SafeAreaView)<MealStyleProps>`
  flex: 1;

  background-color: ${({ theme, inDiet }) => inDiet ? theme.COLORS["green-light"] : theme.COLORS["red-light"] };
`

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;

  border-radius: 20px;
  padding: 40px 24px 24px;

  background-color: ${({ theme }) => theme.COLORS["gray-7"]};
`

export const Data = styled.View`
  gap: 24px;
`

export const Section = styled.View`
  gap: 6px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.ML}px;
    color: ${theme.COLORS["gray-1"]};
    line-height: ${theme.FONT_SIZE.ML * 1.3}px;
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS["gray-1"]};
    line-height: ${theme.FONT_SIZE.SM * 1.3}px;
  `}
`

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS["gray-2"]};
    line-height: ${theme.FONT_SIZE.MD * 1.3}px;
  `}
`

export const Tag = styled.View`
  background-color: ${({ theme }) => theme.COLORS["gray-6"]};
  border-radius: 1000px;
  padding: 8px 16px;

  align-self: flex-start;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export const Icon = styled(Circle).attrs<MealStyleProps>(({ theme, inDiet }) => ({
  color: inDiet ? theme.COLORS["green-dark"] : theme.COLORS["red-dark"],
  weight: "fill",
  size: 10,
}))``

export const TagText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS["gray-1"]};
    line-height: ${theme.FONT_SIZE.SM * 1.3}px;
  `}
`

export const ButtonGroup = styled.View`
  gap: 9px;
`