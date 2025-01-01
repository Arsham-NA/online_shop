"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { GoCommentDiscussion } from "react-icons/go";

const UserComments = () => {
	return (
		<main className="container-fluid min-h-screen ">
			<div className="w-full rounded-xl p-4 flex flex-col justify-center items-center mt-[7rem] bg-white gap-y-2 shadow-sm">
				<div><GoCommentDiscussion  className="w-[5rem] h-[5rem]"/></div>
				<div className="font-medium">Your comments is empty</div>
				<p className="text-center mb-8 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, aspernatur.</p>
				<Link href={"/profile/dashboard"} className="btn-outline-primary gap-x-2">Dashboard<span className="flex justify-center items-center"><FaArrowRight className="w-[16px] h-[16px]"/></span></Link>
			</div>
		</main>
	);
};

export default UserComments;