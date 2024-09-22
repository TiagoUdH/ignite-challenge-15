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
	title: string;
	icon?: "PLUS" | "PENCIL" | "TRASH";
	type?: ButtonStyleProps;
};

export function Button({ title, icon = undefined, type = "PRIMARY", ...rest }: Props) {
	return (
		<Container type={type} {...rest}>
			{icon === "PLUS" && <PlusIcon />}
			{icon === "TRASH" && <TrashIcon />}
			{icon === "PENCIL" && <PencilIcon />}

			<Title type={type}>{title}</Title>
		</Container>
	);
}
