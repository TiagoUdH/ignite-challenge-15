import type { TouchableOpacityProps } from "react-native";

import {
	type ButtonStyleProps,
	Container,
	PencilIcon,
	PlusIcon,
	Title,
	TrashIcon,
} from "./styles";

type Props = TouchableOpacityProps & {
	icon?: "PLUS" | "PENCIL" | "TRASH";
	type?: ButtonStyleProps;
};

export function Button({ icon = undefined, type = "PRIMARY", ...rest }: Props) {
	return (
		<Container type={type} {...rest}>
			{icon === "PLUS" && <PlusIcon />}
			{icon === "TRASH" && <TrashIcon />}
			{icon === "PENCIL" && <PencilIcon />}

			<Title type={type}>Nova refeição</Title>
		</Container>
	);
}
