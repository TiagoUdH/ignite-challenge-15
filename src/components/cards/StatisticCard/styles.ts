import styled, { css } from "styled-components/native";

export type StatisticCardStyleProps = "PRIMARY" | "SECONDARY" | "TERTIARY"

type Props = {
  type: StatisticCardStyleProps,
  inCardGroup: boolean,
}

export const Container = styled.View<Props>`
  gap: 8px;
  align-items: center;
  
  padding: 16px;
  border-radius: 8px;

  ${({ inCardGroup }) => inCardGroup && css`
    flex: 1;
  `};

  ${({ theme, type }) => css`
    background-color: ${type === "PRIMARY" ? theme.COLORS["gray-6"] : type === "SECONDARY" ? theme.COLORS["green-light"] : theme.COLORS["red-light"]}
  `};
`

export const Number = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS["gray-1"]};
    line-height: ${theme.FONT_SIZE.XL * 1.3}px;
  `}
`

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS["gray-2"]};
    line-height: ${theme.FONT_SIZE.SM * 1.3}px;
  `}

  text-align: center;
`