import { PencilSimpleLine, Plus, Trash } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonStyleProps = "PRIMARY" | "SECONDARY"

type Props = {
  type: ButtonStyleProps
}

export const Container = styled(TouchableOpacity).attrs<Props>({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;

  padding: 16px;
  background-color: ${({ theme, type }) => type === "PRIMARY" ? theme.COLORS["gray-2"] : theme.COLORS["gray-7"]};
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

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${type === "PRIMARY" ? theme.COLORS.white : theme.COLORS["gray-1"]};

    line-height: ${theme.FONT_SIZE.SM * 1.3}px;
  `}
`