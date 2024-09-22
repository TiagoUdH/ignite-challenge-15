import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export type InputStyleProps = {
  isActive?: boolean,
}

export type ContainerStyleProps = {
  inInputGroup?: boolean,
}

type InputProps = {
  isActive: boolean,
}

type ContainerProps = {
  inInputGroup: boolean,
}

export const Container = styled.View<ContainerProps>`
  ${({ inInputGroup }) => inInputGroup && css`
    flex: 1;
  `}

  gap: 4px;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS["gray-2"]};
    line-height: ${theme.FONT_SIZE.SM * 1.3}px;
  `}
`

export const TxtInput = styled(TextInput).attrs<InputProps>(({ theme }) =>({
  cursorColor: theme.COLORS["gray-1"],
}))`
  padding: 14px;

  border-radius: 6px;
  border-width: 1px;

  ${({ theme, isActive }) => css`
    border-color: ${isActive ? theme.COLORS["gray-3"] : theme.COLORS["gray-5"]};

    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS["gray-1"]};
    line-height: ${theme.FONT_SIZE.MD * 1.3}px;
  `}
`