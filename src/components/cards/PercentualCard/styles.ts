import { ArrowUpRight } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonIconStyledProps = {
  indiet?: boolean
}

export const Container = styled.View<ButtonIconStyledProps>`
  position: relative;
  align-items: center;

  margin-top: 32px;
  margin-bottom: 40px;
  padding: 20px;

  background-color: ${({ theme, indiet }) => indiet ? theme.COLORS["green-light"] : theme.COLORS["red-light"]};
  border-radius: 8px;
`

export const Title = styled.Text`
   ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS["gray-1"]};

        line-height: ${theme.FONT_SIZE.XL * 1.3}px;
    `}
`

export const SubTitle = styled.Text`
   ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS["gray-2"]};

        line-height: ${theme.FONT_SIZE.SM * 1.3}px;
    `}
`

export const Button = styled(TouchableOpacity)`
  position: absolute;
  top: 8px;
  right: 8px;
`

export const Icon = styled(ArrowUpRight).attrs<ButtonIconStyledProps>(({ theme, indiet }) => ({
  size: 24,
  color: indiet ? theme.COLORS["green-dark"] : theme.COLORS["red-dark"]
}))``