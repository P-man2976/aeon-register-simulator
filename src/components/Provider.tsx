"use client";

import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from "react";

type TTextContext = [string, Dispatch<SetStateAction<string>>];

export const TextContext = createContext(["", () => {}] as TTextContext);

export default function Provider({ children }: PropsWithChildren) {
	const [text, setText] = useState("");

	return <TextContext.Provider value={[text, setText]}>{children}</TextContext.Provider>;
}
