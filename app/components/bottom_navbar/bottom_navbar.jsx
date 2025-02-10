"use client";
import Link from "next/link";
import { BsHouse, BsHouseFill, BsHandbag, BsHandbagFill } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineUser} from "react-icons/ai";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/react";
import { logout } from "@/app/redux/slices/user_slice";
import { useRouter } from "next/navigation";

const BottomNavbar = () => {

	const pathname = usePathname();
	const {user} = useSelector((state) => state.user_slice);
	const {cart_items} = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const router = useRouter()

	return (
		<div className="lg:hidden fixed left-0 bottom-0 w-full h-[60px] bg-white px-3 py-2 shadow-[0px_0px_10px_rgba(0,0,0,0.05)] grid grid-cols-4 font-medium text-xs rounded-t-xl z-10">
			<Link href={"/"}  className={`flex flex-col justify-center items-center gap-y-2 ${pathname === "/" ? "text-primary" : undefined}`}>
				{pathname === "/" ? <BsHouseFill className="min-w-[22px] min-h-[22px]" /> : <BsHouse className="min-w-[22px] min-h-[22px]"/>}
				<span>Home</span>
			</Link>
			<Link href={"/products"} className={`flex flex-col justify-center items-center gap-y-2 ${pathname === "/products" ? "text-primary" : undefined}`}>
				{pathname === "/products" ? <BsHandbagFill className="min-w-[22px] min-h-[22px]"/> : <BsHandbag className="min-w-[22px] min-h-[22px]"/>}
				<span>Products</span>
			</Link>
			<Link href={"/profile/cart"} className={`flex flex-col justify-center items-center gap-y-2 ${pathname === "/profile/cart" ? "text-primary" : undefined}`}>
			<Badge content={cart_items.length > 0 ? cart_items.length : undefined} color="primary" placement="top-right" showOutline={false}>
				<FiShoppingBag className="min-w-[22px] min-h-[22px]"/>
			</Badge>
				<span className={pathname === "/profile/cart" ? "text-primary" : undefined}>Cart</span>
			</Link>
			{
				user === null ? (
				<Link href={"/login"} className={`flex flex-col justify-center items-center gap-y-2 ${pathname === "/login" ? "text-primary" : undefined}`}>
					<AiOutlineUser className="min-w-[22px] min-h-[22px]"/>
					<span>Login</span>
				</Link>
					) : (
				<Dropdown backdrop="blur">
					<DropdownTrigger>
					<div className={`flex flex-col justify-center items-center gap-y-2 cursor-pointer ${pathname === "/profile/dashboard" ? "text-primary" : undefined}`}>
						<AiOutlineUser className="min-w-[22px] min-h-[22px]"/>
						<span>Profile</span>
				 </div>
					</DropdownTrigger>
					<DropdownMenu aria-label="Static Actions" color="primary">
						<DropdownItem key="dashboard" onClick={() => router.push("/profile/dashboard")}>Dashboard</DropdownItem>
						<DropdownItem key="favorits" onClick={() => router.push("/profile/favorits")}>Favorits</DropdownItem>
						<DropdownItem key="delete" className="text-danger" color="danger" onClick={() => dispatch(logout())}>Log out</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				)
			}
		</div>
	);
};

export default BottomNavbar;