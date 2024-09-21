import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS["gray-7"]};
`

export const NewMealTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS["gray-1"]};
    line-height: ${theme.FONT_SIZE.MD * 1.3}px;
  `}

  margin-bottom: 8px;
`

export const SectionTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS["gray-1"]};
    line-height: ${theme.FONT_SIZE.LG * 1.3}px;
  `}

  margin-top: 32px;
`