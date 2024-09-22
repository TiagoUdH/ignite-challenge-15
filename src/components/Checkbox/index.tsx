import { TouchableOpacityProps } from "react-native";
import { CheckboxStyleProps, CircleProps, Container, Icon, Label } from "./styles";

type Props = TouchableOpacityProps & CheckboxStyleProps & {
  type?: CircleProps
  label: string
}

export function Checkbox({ label, isChecked = false, type = "INDIET", ...rest }: Props){
  return (
    <Container isChecked={isChecked} type={type} {...rest}>
      <Icon type={type} />

      <Label>{label}</Label>
    </Container>
  )
}