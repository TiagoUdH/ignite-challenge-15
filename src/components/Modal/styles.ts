import { View } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(View)`
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.25);
`

export const Content = styled(View)`
  gap: 32px;

  background-color: ${({ theme }) => theme.COLORS["gray-7"]};
  opacity: 4;
  border-radius: 8px;
  padding: 40px 24px 24px;
  margin: 24px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS["gray-2"]};
    line-height: ${theme.FONT_SIZE.LG * 1.3}px;
  `}

  text-align: center ;
`

export const ButtonGroup = styled.View`
  flex-direction: row;
  gap: 12px;
`