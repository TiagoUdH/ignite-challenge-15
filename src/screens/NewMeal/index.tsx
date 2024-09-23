import { Button } from "@components/Button"
import { Checkbox } from "@components/Checkbox"
import { Input } from "@components/Input"
import { HeaderForm } from "@components/headers/HeaderForm"
import { useNavigation } from "@react-navigation/native"
import React, { useRef, useState } from "react"
import { TextInput, View } from "react-native"
import { Container, Content, Form, InputGroup, Label } from "./styles"

export function NewMeal(){
  const [isActive, setIsActive] = useState <React.RefObject<TextInput> | null>(null)

  const [inDiet, setIndiet] = useState(true)

  const nameInputRef = useRef<TextInput>(null)
  const descriptionInputRef = useRef<TextInput>(null)
  const dateInputRef = useRef<TextInput>(null)
  const hourInputRef = useRef<TextInput>(null)

  const navigation = useNavigation()

  function handleSuccess(){
    navigation.navigate("success", { inDiet })
  }

  return (
    <Container>
      <HeaderForm title="Nova refeição" />

      <Content>
        <Form>
          <Input isActive={nameInputRef === isActive} inputRef={nameInputRef} onFocus={() => setIsActive(nameInputRef)} onBlur={() => setIsActive(null)} label="Nome" />

          <Input isActive={descriptionInputRef === isActive} inputRef={descriptionInputRef} onFocus={() => setIsActive(descriptionInputRef)} onBlur={() => setIsActive(null)} label="Descrição" multiline numberOfLines={5} textAlignVertical="top" />

          <InputGroup>
            <Input isActive={dateInputRef === isActive} inputRef={dateInputRef} onFocus={() => setIsActive(dateInputRef)} onBlur={() => setIsActive(null)} label="Data" inInputGroup />

            <Input isActive={hourInputRef === isActive} inputRef={hourInputRef} onFocus={() => setIsActive(hourInputRef)} onBlur={() => setIsActive(null)} label="Hora" inInputGroup />
          </InputGroup>

          <View>
            <Label>Está dentro da dieta?</Label>

            <InputGroup>
              <Checkbox label="Sim" isChecked={inDiet} onPress={() => setIndiet(true)} />

              <Checkbox label="Não" isChecked={!inDiet} onPress={() => setIndiet(false)} type="OUTDIET" />
            </InputGroup>
          </View>
        </Form>

        <Button
          title="Cadastrar refeição"
          onPress={handleSuccess}
        />
      </Content>
    </Container>
  )
}