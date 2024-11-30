"use client";
import { Spinner } from "@nextui-org/react";

const Loading = () => {
	return (
		<div className="absolute left-0 top-0 w-full h-screen backdrop-blur-sm flex justify-center items-center">
			<Spinner  />
		</div>
	);
};

export default Loading;