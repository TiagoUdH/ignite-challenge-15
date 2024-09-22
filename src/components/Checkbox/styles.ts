import { Circle } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type CircleProps = "INDIET" | "OUTDIET"

type IconProps = {
  type: CircleProps
}

export type CheckboxStyleProps = {
  isChecked?: boolean,
}

type Props = IconProps & {
  isChecked: boolean,
}

export const Container = styled(TouchableOpacity).attrs<Props>({
  activeOpacity: 0.7,
})`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 6px;
  padding: 16px;

  border-width: 1px;

  ${({ theme, isChecked, type }) => css`
    background-color: ${!isChecked ? theme.COLORS["gray-6"] : type === "INDIET" ? theme.COLORS["green-light"] : theme.COLORS["red-light"]};
    border-color: ${!isChecked ? "transparent" : type === "INDIET" ? theme.COLORS["green-dark"] : theme.COLORS["red-dark"]};
  `}
`

export const Icon = styled(Circle).attrs<IconProps>(({ theme, type }) => ({
  size: 10,
  color: type === "INDIET" ? theme.COLORS["green-dark"] : theme.COLORS["red-dark"],
  weight: "fill",
}))``

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS["gray-1"]};
    line-height: ${theme.FONT_SIZE.SM * 1.3}px;
  `}
`