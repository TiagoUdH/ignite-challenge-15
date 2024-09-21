import { type ButtonStyleProps, Container, PencilIcon, PlusIcon, Title, TrashIcon } from "./styles";

type Props = {
	icon?: "PLUS" | "PENCIL" | "TRASH";
	type?: ButtonStyleProps;
};

export function Button({ icon = undefined, type = "PRIMARY" }: Props) {
	return (
		<Container type={type}>
			{icon === "PLUS" && <PlusIcon />}
      {icon === "TRASH" && <TrashIcon />}
      {icon === "PENCIL" && <PencilIcon />}

			<Title type={type}>
        Nova refeição
      </Title>
		</Container>
	);
}
