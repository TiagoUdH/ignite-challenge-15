
import { TextInput, type TextInputProps } from "react-native";
import { Container, type ContainerStyleProps, type InputStyleProps, Label, TxtInput } from "./styles";
import React from "react";

type Props = TextInputProps & InputStyleProps & ContainerStyleProps & {
  label: string;
  inputRef: React.RefObject<TextInput>
}

export function Input({ label, inputRef, isActive = false, inInputGroup = false, ...rest }: Props) {
	return (
    <Container inInputGroup={inInputGroup}>
      <Label>{label}</Label>

      <TxtInput ref={inputRef} cursorColor="black" isActive={isActive}  {...rest} />
    </Container>
  );
}