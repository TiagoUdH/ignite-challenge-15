import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  position: relative;
  padding: 24px;
`

export const Button = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  position: absolute;
  top: 24px;
  left: 24px;
  z-index: 1;
`

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS["gray-2"],
}))``

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS["gray-1"]};
    line-height: ${theme.FONT_SIZE.LG * 1.3}px;
  `}

  text-align: center;
`