import { Button } from "@components/Button";
import { ButtonGroup, Container, Content, Title } from "./styles";

type Props = {
  onCloseModal: () => void,
  onRemoveMeal: () => void,
}

export function Modal({ onCloseModal, onRemoveMeal }: Props){
  return (
    <Container>
      <Content>
        <Title>Deseja realmente excluir o registro da refeição?</Title>

        <ButtonGroup>
          <Button
            title="Cancelar"
            type="SECONDARY"
            onPress={onCloseModal}
            inButtonGroup
          />

          <Button
            title="Sim, excluir"
            onPress={onRemoveMeal}
            inButtonGroup
          />
        </ButtonGroup>
      </Content>
    </Container>
  )
}