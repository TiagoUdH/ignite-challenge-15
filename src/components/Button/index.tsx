import type { TouchableOpacityProps } from "react-native";

import React, { useState } from "react";
import {
	type ButtonStyleProps,
	Container,
	PencilIcon,
	PlusIcon,
	Title,
	TrashIcon,
} from "./styles";

type Props = TouchableOpacityProps & ButtonStyleProps & {
	title: string;
	icon?: "PLUS" | "PENCIL" | "TRASH";
};

export function Button({ title, icon = undefined, type = "PRIMARY", ...rest }: Props) {
	const [isActive, setIsActive] = useState(false)

	return (
		<Container type={type} onPressIn={() => setIsActive(true)} onPressOut={() => setIsActive(false)} isActive={isActive} {...rest}>
			{icon === "PLUS" && <PlusIcon />}
			{icon === "TRASH" && <TrashIcon />}
			{icon === "PENCIL" && <PencilIcon />}

			<Title type={type}>{title}</Title>
		</Container>
	);
}
