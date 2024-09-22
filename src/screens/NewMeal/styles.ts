import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS["gray-5"]};
`

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;

  padding: 40px 24px 24px;
  border-radius: 20px 20px 0 0;
  background-color: ${({ theme }) => theme.COLORS["gray-7"]};
`

export const Form = styled.View`
  gap: 24px;
`

export const InputGroup = styled.View`
  flex-direction: row;
  gap: 20px;
`