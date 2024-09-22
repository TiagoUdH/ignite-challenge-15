import type { TouchableOpacity, TouchableOpacityProps } from "react-native";

import React from "react";
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
	buttonRef?: React.RefObject<TouchableOpacity>
};

export function Button({ title, buttonRef, icon = undefined, type = "PRIMARY", isActive = false, ...rest }: Props) {
	return (
		<Container type={type} isActive={isActive} ref={buttonRef} {...rest}>
			{icon === "PLUS" && <PlusIcon />}
			{icon === "TRASH" && <TrashIcon />}
			{icon === "PENCIL" && <PencilIcon />}

			<Title type={type}>{title}</Title>
		</Container>
	);
}
