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
	inButtonGroup?: boolean;
};

export function Button({ title, icon = undefined, type = "PRIMARY", inButtonGroup = false, ...rest }: Props) {
	const [isActive, setIsActive] = useState(false)

	return (
		<Container type={type} inButtonGroup={inButtonGroup} onPressIn={() => setIsActive(true)} onPressOut={() => setIsActive(false)} isActive={isActive} {...rest}>
			{icon === "PLUS" && <PlusIcon />}
			{icon === "TRASH" && <TrashIcon />}
			{icon === "PENCIL" && <PencilIcon />}

			<Title type={type}>{title}</Title>
		</Container>
	);
}
