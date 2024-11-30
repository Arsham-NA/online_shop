"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";
import Image from "next/image";
import TopDesignersSliderLoading from "./top_designers_slider_loading";

const TopDesignersSlider = () => {

	const [designers, setDesigners] = useState([]);
	const [is_loading, setIs_loading] = useState(true);

	useEffect(() => {
		const fetch_data = async () => {
			await axios.get("https://reqres.in/api/users?page=1")
			.then(response => {
				setDesigners(response.data.data);
				setIs_loading(false);
			})
			.catch(error => {console.log(error);});
		};

		fetch_data();
;
	}, []);

	return (
		<Swiper
				className="!w-full !p-[1rem] !pb-[3rem] rounded-xl bg-white shadow-sm border"
				modules={[Navigation, Pagination]}
				spaceBetween={0}
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				breakpoints={{
					768: {
						slidesPerView: 2
					},
					992: {
						slidesPerView: 3
					}
				}}
			>

			{
				is_loading ? (
					<TopDesignersSliderLoading />
				) : (
					designers.map((designer) => {
						return (
							<SwiperSlide key={designer.id} className="!text-center p-3 cursor-grab">
								<div className="p-[1rem] rounded-lg shadow-sm bg-primary-light border">								
									<div className="flex justify-center items-center">
										<Image src={designer.avatar} alt="designer_avatar" width={100} height={100} className="rounded-full"/>
									</div>
									<h5 className="mt-3 font-semibold">{designer.first_name} {designer.last_name}</h5>
									<p>{designer.email}</p>
								</div>
							</SwiperSlide>
						)
					})
				)
			}

			</Swiper>
	);
};

export default TopDesignersSlider;