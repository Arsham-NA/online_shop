import { GiDiamonds } from "react-icons/gi";
import { GoComment } from "react-icons/go";
import { FiShoppingBag } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { IoIosNotificationsOutline } from "react-icons/io";
import { PiClockCountdown } from "react-icons/pi";







export const dashboard_list = [
	{
		id: 1,
		title: "Plus",
		icon: <GiDiamonds className="w-[20px] h-[20px] text-primary"/>,
		link: "/profile/dashboard"
	},
	{
		id: 2,
		title: "Orders",
		icon: <FiShoppingBag className="w-[20px] h-[20px]"/>,
		link: "/profile/cart"
	},
	{
		id: 3,
		title: "Comments",
		icon: <GoComment className="w-[20px] h-[20px]"/>,
		link: "/profile/user-comments"
	},
	{
		id: 4,
		title: "Address",
		icon: <SlLocationPin className="w-[20px] h-[20px]"/>,
		link: "/profile/address"
	},
	{
		id: 5,
		title: "Notifications",
		icon: <IoIosNotificationsOutline className="w-[20px] h-[20px]"/>,
		link: "/profile/dashboard"
	},
	{
		id: 6,
		title: "Recent views",
		icon: <PiClockCountdown className="w-[20px] h-[20px]"/>,
		link: "/products"
	},
];