import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type IconStyleProps = {
  inDiet: boolean;
}

export const Container = styled.View`
  position: relative;

  justify-content: center;
  align-items: center;

  padding: 34px 24px;
`

export const Button = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  position: absolute;
  top: 28px;
  left: 24px;
`

export const Icon = styled(ArrowLeft).attrs<IconStyleProps>(({ theme, inDiet }) => ({
  size: 24,
  color: inDiet ? theme.COLORS["green-dark"] : theme.COLORS["red-dark"]
}))``

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS["gray-1"]};
    line-height: ${theme.FONT_SIZE.XXL * 1.3}px;
  `}
`

export const Subitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS["gray-2"]};
    line-height: ${theme.FONT_SIZE.SM * 1.3}px;
  `}
`