"use client";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import { TbCloudCheck, TbCloudUp, TbCloudX } from "react-icons/tb";
import { IoExitOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { dashboard_list } from "../dashboard_list";
import { logout } from "@/app/redux/slices/user_slice";


const DashboardMobile = () => {

	const {user} = useSelector((state) => state.user_slice);
	const dispatch = useDispatch();

	return (
		<div className="lg:hidden bg-white px-5 rounded-xl border">

			{/* user info */}
			<div className="pt-4 flex justify-center items-center pb-4 border-b gap-x-3">
				<div className="w-4/12 flex flex-col justify-center items-center">
					<div className="size-[50px] rounded-full bg-slate-600 border mb-3"></div>
					<span className="w-full text-center font-semibold mb-1">{user.first_name} {user.last_name}</span>
				</div>
				<div className="w-8/12 flex flex-col justify-start items-start border-s ps-4 ">
					<span className="text-secondary mb-1">{user.phone_number}</span>
					<span className="text-sm text-secondary">{user.email}</span>
				</div>
			</div>

			{/* orders */}
			<div className="w-full mb-10 pt-4">
				<h2 className="text-xl font-semibold px-4 pb-2 border-b-2 border-primary inline-block">orders</h2>
			</div>

			<div className="grid grid-cols-3 gap-x-5 [&>div]:border [&>div]:rounded-xl [&>div]:shadow-sm [&>div]:p-4 pb-4 border-b">
				<div className="flex flex-col justify-start gap-y-2">
					<div className="flex justify-center items-center"><TbCloudCheck className="w-[2rem] h-[2rem] text-green-500"/></div>
					<div className="flex flex-col justify-center items-start">
						<span className="w-full font-semibold text-center">Received</span>
						<span className="w-full text-center">8</span>
					</div>
				</div>
				<div className="flex flex-col justify-start gap-y-2">
					<div className="flex justify-center items-center"><TbCloudUp  className="w-[2rem] h-[2rem] text-amber-500"/></div>
					<div className="flex flex-col justify-center items-start">
						<span className="w-full font-semibold text-center">Delivering</span>
						<span className="w-full text-center">0</span>
					</div>
				</div>
				<div className="flex flex-col justify-start gap-y-2">
					<div className="flex justify-center items-center"><TbCloudX  className="w-[2rem] h-[2rem] text-danger"/></div>
					<div className="flex flex-col justify-center items-start">
						<span className="w-full font-semibold text-center">Cancelled</span>
						<span className="w-full text-center">2</span>
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-y-3 py-4 border-b text-sm">
				<div className="flex justify-between items-center">
					<span className="font-bold">Balance</span>
					<span>0 $</span>
				</div>
				<div className="flex justify-between items-center">
					<span className="font-bold">Score</span>
					<span>0</span>
				</div>
			</div>

			{/* lists */}
			<div className="flex flex-col gap-y-3 py-4">
					{
						dashboard_list.map((item) => {
							return (
								<Link key={item.id} href={item.link} className="flex justify-between items-center cursor-pointer py-4 px-2 rounded-xl hover:bg-gray-100 transition-all duration-[.025] hover:pe-1">
									<span className="flex items-center gap-x-2 text-sm">{item.icon} {item.title}</span>
									<div><FaAngleRight className="w-[16px] h-[16px] text-secondary"/></div>
								</Link>
							)
						})
					}
					<div className="flex justify-between items-center cursor-pointer text-danger py-4 px-2 rounded-xl hover:bg-danger/10 transition-all duration-[.025] hover:pe-1"
					onClick={() => dispatch(logout())}
					>
						<span className="flex items-center gap-x-2 text-sm"><IoExitOutline className="w-[20px] h-[20px]"/>Logout</span>
						<div><FaAngleRight className="w-[16px] h-[16px] text-danger"/></div>
					</div>
				</div>
		</div>
	);
};

export default DashboardMobile;