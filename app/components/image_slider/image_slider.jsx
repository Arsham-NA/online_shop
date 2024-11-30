"use client";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";
import ImageSliderNavBtn from "./image_slider_nav_btn";


const ImageSlider = ({data , nav}) => {

	const router = useRouter()

	return (
		<Swiper 
			className="rounded-xl border shadow-sm relative flex justify-center items-center"
			modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
			style={{maxHeight: "350px"}}
		>
			{
				data.map((item) => {
					return (
						<SwiperSlide key={item.id} style={{cursor: "pointer"}} onClick={() => router.push("/products")}><Image src={item.image} alt={item.alt} width={2880} height={968} className="w-full h-full object-cover"/></SwiperSlide>
					)
				})
			}
			{
				nav ? (
					<div className="w-full absolute bottom-2 flex justify-between items-center z-[10] px-2">
						<ImageSliderNavBtn />
					</div>
				) : (
					undefined
				)
			}
		</Swiper>
	)
}

export default ImageSlider;

