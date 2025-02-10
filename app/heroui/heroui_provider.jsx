"use client";
import { HeroUIProvider } from "@heroui/react";

export const HeroUiProvider = ({children}) => {
	return (
		<HeroUIProvider>
      {children}
    </HeroUIProvider>
	);
};

export default HeroUiProvider;