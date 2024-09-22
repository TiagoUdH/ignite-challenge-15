import { Circle } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type CircleIconStyleProps = {
  indiet?: boolean
}

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  padding: 14px 16px 14px 12px;
  margin-top: 8px;

  flex-direction: row;
  align-items: center;
  gap: 12px;

  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS["gray-5"]};
`

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS["gray-1"]};
    line-height: ${theme.FONT_SIZE.XS * 1.3}px;
  `}
`

export const Separator = styled.View`
  height: 14px;
  background-color: ${({ theme }) => theme.COLORS["gray-4"]};
  width: 1px;
`

export const Meal = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS["gray-2"]};
    line-height: ${theme.FONT_SIZE.MD * 1.3}px;
  `}
`

export const CircleIcon = styled(Circle).attrs<CircleIconStyleProps>(({ theme, indiet }) => ({
  size: 18,
  weight: "fill",
  color: indiet ? theme.COLORS["green-mid"] : theme.COLORS["red-mid"]
}))``