import { PencilSimpleLine, Plus, Trash } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type TextStyleProps = "PRIMARY" | "SECONDARY"

type TextProps = {
  type: TextStyleProps
}

export type ButtonStyleProps = {
  type?: TextStyleProps,
  isActive?: boolean,
}

type Props = TextProps & {
  isActive: boolean,
}

export const Container = styled(TouchableOpacity).attrs<Props>({
  activeOpacity: 1,
})`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;

  padding: 16px 24px;
  background-color: ${({ theme, type, isActive }) => isActive && type === "PRIMARY" ? theme.COLORS["gray-1"] : !isActive && type === "PRIMARY" ? theme.COLORS["gray-2"] : isActive ? theme.COLORS["gray-5"] : "transparent"};
  border-radius: 6px;

  ${({ theme, type }) => type === "SECONDARY" && css`
    border-width: 1px;
    border-color: ${theme.COLORS["gray-1"]};
  `};
`

export const PlusIcon = styled(Plus).attrs(({theme}) => ({
  size: 18,
  color: theme.COLORS.white,
}))``

export const PencilIcon = styled(PencilSimpleLine).attrs(({theme}) => ({
  size: 18,
  color: theme.COLORS.white,
}))``


export const TrashIcon = styled(Trash).attrs(({theme}) => ({
  size: 18,
  color: theme.COLORS["gray-1"],
}))``

export const Title = styled.Text<TextProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${type === "PRIMARY" ? theme.COLORS.white : theme.COLORS["gray-1"]};

    line-height: ${theme.FONT_SIZE.SM * 1.3}px;
  `}
`