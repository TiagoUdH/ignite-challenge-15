import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type Props = {
  inDiet: boolean
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 24px;
`

export const Title = styled.Text<Props>`
  ${({ theme, inDiet }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${inDiet ? theme.COLORS["green-dark"] : theme.COLORS["red-dark"]};
    line-height: ${theme.FONT_SIZE.XXL * 1.3}px;
  `}

  margin-bottom: 8px;
`

export const Message = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS["gray-1"]};
    line-height: ${theme.FONT_SIZE.MD * 1.3}px;
  `}

  text-align: center;
`

export const Highlight = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Hero = styled.Image`
  margin: 40px 0 32px;
`