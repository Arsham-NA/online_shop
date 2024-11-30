"use client";
import { useSwiper } from "swiper/react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const ImageSliderNavBtn = () => {

	const swiper = useSwiper();

	return (
		<>
			<button type="button" onClick={() => swiper.slidePrev()} className="z-[1] size-9 rounded-full border flex justify-center items-center bg-white/70 backdrop-blur-md hover:scale-[1.07] transition-all duration-150">
				<FaAngleLeft className="min-w-[16px] min-h-[16px] w-[16px] h-[16px] text-primary"/>
			</button>
			<button type="button" onClick={() => swiper.slideNext()} className="z-[1] size-9 rounded-full border flex justify-center items-center bg-white/70 backdrop-blur-md hover:scale-[1.07] transition-all duration-150">
				<FaAngleRight className="min-w-[16px] min-h-[16px] w-[16px] h-[16px] text-primary"/>
			</button>
		</>
	);
};

export default ImageSliderNavBtn;