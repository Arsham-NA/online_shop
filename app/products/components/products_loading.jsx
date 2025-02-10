"use client";
import { Skeleton } from "@heroui/react";

const ProductsLoading = () => {
	return (
		Array(6).fill({}).map((value, index) => {
			return (
				<div key={index} className="p-5 flex flex-col justify-between items-start gap-y-5">
					<Skeleton className="w-full h-[200px] rounded-xl"/>
					<Skeleton className="w-full h-[16px] rounded-xl"/>
					<Skeleton className="w-full h-[16px] rounded-xl"/>
					<Skeleton className="w-full h-[16px] rounded-xl"/>
				</div>
			)
		})
	);
};

export default ProductsLoading;