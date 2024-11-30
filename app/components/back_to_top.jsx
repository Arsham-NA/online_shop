"use client";
import { FaAngleUp } from "react-icons/fa6";
import { useState, useEffect } from "react";

const BackToTop = () => {

	const [back_to_top, setBack_to_top] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.scrollY > 400 ? setBack_to_top(true) : setBack_to_top(false)
		})
	}, []);

	const scroll_to_top = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<button type="button" className={`w-[2.5rem] h-[2.5rem] fixed bottom-[76px] lg:bottom-[1rem] right-[1rem] bg-primary border rounded-full flex justify-center items-center z-[10] hover:scale-110 duration-150 ${back_to_top === false ? "hidden" : undefined}`}
			onClick={() => scroll_to_top()}
		>
			<FaAngleUp className="w-[16px] h-[16px] text-white"/>
		</button>
	);
};

export default BackToTop;