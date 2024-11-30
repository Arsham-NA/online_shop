"use client"

import ImageSlider from "./image_slider/image_slider";

const BestSellers = () => {

	const data = [
		{
			id: 1,
			image: "/images/home/image_slider/image-1.avif",
			alt: "image-1"
		},
		{
			id: 2,
			image: "/images/home/image_slider/image-2.webp",
			alt: "image-2"
		},
		{
			id: 3,
			image: "/images/home/image_slider/image-3.avif",
			alt: "image-3"
		},
	];

	return (
		<ImageSlider data={data} nav={true}/>
	);
};

export default BestSellers;