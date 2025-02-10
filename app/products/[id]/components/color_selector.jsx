"use client";

import { Select, SelectItem } from "@heroui/react";


const ColorSelector = () => {

	const data = [
		{
			id: 1,
			title: "Black",
			code: "#000000",
		},
		{
			id: 2,
			title: "Gray",
			code: "#bbbbbd",
		},
		{
			id: 3,
			title: "White",
			code: "#ffffff",
		},
		{
			id: 4,
			title: "Blue",
			code: "#4c5dff",
		},
		{
			id: 5,
			title: "Red",
			code: "#ff2727",
		},
		{
			id: 6,
			title: "Pink",
			code: "#ffd4ff",
		},
	];

	return (
  	<Select label="Select your color" className="w-full border shadow-none rounded-xl bg-transparent" >
			{
				data.map((color) => {
					return (
						<SelectItem key={color.id} textValue={color.title} startContent={<div className="w-[1rem] h-[1rem] rounded-full border shadow-sm" style={{backgroundColor: color.code}}></div>}>
							<span className="text-small">{color.title}</span>
						</SelectItem>
					)
				})
			}
  	</Select>
	);
};
export default ColorSelector;