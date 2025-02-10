"use client";
import { Skeleton } from "@heroui/react";

const TopDesignersSliderLoading = () => {
	return (
		<div className="flex justify-start md:justify-between items-center gap-x-20 md:gap-x-0 overflow-x-auto px-7">
			{
				Array(4).fill({}).map((value, index) => {
					return (
						<div className="flex flex-col justify-center items-center" key={index}>
							<Skeleton className="w-[100px] h-[100px] mb-4 rounded-full"/>
							<Skeleton className="w-full h-[10px] rounded-md mb-3"/>
							<Skeleton className="w-full h-[10px] rounded-md"/>
						</div>
					)
				})
			}
		</div>
	)
}



export default TopDesignersSliderLoading;