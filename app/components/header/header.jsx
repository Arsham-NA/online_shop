"use client";
import "./_header.scss";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { usePathname } from "next/navigation";
import HeaderSearchBar from "./components/header_search_bar";
import { Badge } from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/app/redux/slices/user_slice";
import { useRouter } from "next/navigation";


const Header = () => {
	const pathname = usePathname();
	const router = useRouter()
	const {user} = useSelector((state) => state.user_slice);
	const {cart_items} = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	return (
		<header className="w-full h-[80px] flex justify-center items-center px-5 lg:px-10 py-3 bg-white/70 backdrop-blur-[2rem] shadow-[0px_0px_10px_rgba(0,0,0,0.05)] z-10 rounded-b-xl">

			{/* left section */}
			<div className="w-2/4 lg:w-1/4 flex justify-start items-center">
				<Link href={"/"} className="text-lg lg:text-2xl font-semibold text-primary text-nowrap flex justify-center items-center gap-x-2"><span className="text-white bg-primary px-2 rounded">O</span> Shop</Link>
			</div>

			{/* navbar */}
			<nav className="navlinks w-3/4 hidden lg:flex justify-center items-center ">
				<ul className="flex justify-center items-center gap-x-10 text-nowrap font-medium">
					<li><Link href={"/products"} className={pathname === "/products" ? "active" : undefined}>Products</Link></li>
					<li><Link href={"/about-us"} className={pathname === "/about-us" ? "active" : undefined}>About us</Link></li>
					<li><Link href={"/faq"} className={pathname === "/faq" ? "active" : undefined}>FAQ</Link></li>
					<li><Link href={"/contact-us"} className={pathname === "/contact-us" ? "active" : undefined}>Contact us</Link></li>
				</ul>
			</nav>

			{/* right section */}
			<div className="hidden w-2/4 lg:w-1/4 lg:flex justify-end items-center">
				<div className="p-1 border border-gray-300 rounded-xl flex justify-center items-center gap-x-2 h-[50px]">
					{
						user !== null ? (
							<Dropdown>
								<DropdownTrigger>
									<div className="flex justify-center items-center w-[50px] px-4 py-2 rounded-lg hover:bg-gray-200">
										<AiOutlineUser className="min-w-6 min-h-6 cursor-pointer hover:scale-110 duration-150"/>
									</div>
								</DropdownTrigger>
								<DropdownMenu aria-label="Static Actions" color="primary">
									<DropdownItem key="dashboard" onClick={() => router.push("/profile/dashboard")}>Dashboard</DropdownItem>
									<DropdownItem key="favorits" onClick={() => router.push("/profile/favorits")}>Favorits</DropdownItem>
									<DropdownItem key="delete" className="text-danger" color="danger" onClick={() => dispatch(logout())}>Log out</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						) : (
							<Link href={"/login"} className="flex justify-center items-center min-w-[50px] px-4 py-2 rounded-lg hover:bg-gray-200 font-medium text-nowrap">Login / Sign up</Link>
						)
					}
					<div className="h-[75%] w-[1px] bg-gray-300"></div>
					<Badge content={cart_items.length > 0 ? cart_items.length : undefined} color="primary" placement="top-right" showOutline={false}>
						<Link href={"/profile/cart"} className="flex justify-center items-center w-[50px] px-4 py-2 rounded-lg hover:bg-gray-200"><FiShoppingBag className="min-w-6 min-h-6 cursor-pointer hover:scale-110 duration-150"/></Link>
					</Badge>
				</div>
			</div>
			{/* search bar */}
			<div className="lg:hidden w-2/4 lg:w-1/4 felx justify-center items-center">
				<HeaderSearchBar />
			</div>
		</header>
	);
};

export default Header;