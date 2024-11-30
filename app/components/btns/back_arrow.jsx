"use client";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const BackArrow = () => {

	const router = useRouter();
	
	return (
		<FaArrowLeft className="min-w-[16px] min-h-[16px] w-[16px] h-[16px] text-secondary absolute left-[1rem] top-[1rem] cursor-pointer" onClick={() => router.back()}/>
	);
};

export default BackArrow;