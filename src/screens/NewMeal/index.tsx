import { Button } from "@components/Button"
import { Checkbox } from "@components/Checkbox"
import { Input } from "@components/Input"
import { HeaderForm } from "@components/headers/HeaderForm"
import { useNavigation } from "@react-navigation/native"
import { MealDTO } from "@storage/meal/MealDTO"
import { mealCreate } from "@storage/meal/mealCreate"
import React, { useRef, useState } from "react"
import { Alert, TextInput, View } from "react-native"
import { Container, Content, Form, InputGroup, Label } from "./styles"

export function NewMeal(){
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [data, setData] = useState<string>('')
  const [hour, setHour] = useState<string>('')
  const [inDiet, setIndiet] = useState(true)

  const [isActive, setIsActive] = useState <React.RefObject<TextInput> | null>(null)

  const nameInputRef = useRef<TextInput>(null)
  const descriptionInputRef = useRef<TextInput>(null)
  const dateInputRef = useRef<TextInput>(null)
  const hourInputRef = useRef<TextInput>(null)

  const navigation = useNavigation()

  async function handleSuccess(){
    try{
      if (name.trim().length === 0 || description.trim().length === 0 || data.trim().length === 0 || hour.trim().length === 0){
        return Alert.alert("Nova Refeição", "Informe todos os dados.")
      }

      const meal: MealDTO = {
        id: new Date().toISOString(),
        name,
        description,
        hour,
        inDiet,
      }

      await mealCreate(data, meal)

      navigation.navigate("success", { inDiet })
    }
    catch(error){
      Alert.alert("Nova Refeição", "Não foi possível criar uma nova refeição.")
    }
  }

  return (
    <Container>
      <HeaderForm title="Nova refeição" />

      <Content>
        <Form>
          <Input value={name} onChangeText={setName} isActive={nameInputRef === isActive} inputRef={nameInputRef} onFocus={() => setIsActive(nameInputRef)} onBlur={() => setIsActive(null)} label="Nome" />

          <Input value={description} onChangeText={setDescription} isActive={descriptionInputRef === isActive} inputRef={descriptionInputRef} onFocus={() => setIsActive(descriptionInputRef)} onBlur={() => setIsActive(null)} label="Descrição" multiline numberOfLines={5} textAlignVertical="top" />

          <InputGroup>
            <Input value={data} onChangeText={setData} isActive={dateInputRef === isActive} inputRef={dateInputRef} onFocus={() => setIsActive(dateInputRef)} onBlur={() => setIsActive(null)} label="Data" inInputGroup />

            <Input value={hour} onChangeText={setHour} isActive={hourInputRef === isActive} inputRef={hourInputRef} onFocus={() => setIsActive(hourInputRef)} onBlur={() => setIsActive(null)} label="Hora" inInputGroup />
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