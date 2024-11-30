"use client";
import { useSelector, useDispatch } from "react-redux";
import { BsPlus, BsDash } from "react-icons/bs";
import { add_item, dec_item, delete_cart, delete_item} from "@/app/redux/slices/cart_slice";
import { FaArrowRight } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import Link from "next/link";
import { useEffect, useState } from "react";
import DeleteCartModal from "./components/delete_cart_modal";
import Image from "next/image";


const Cart = () => {

	const {cart_items} = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const [total_price, setTotal_price] = useState(0);


	//total price
	useEffect(() => {
		if(cart_items.length === 0) {
			return;
		}
		else {
			let sum = 0;
			cart_items.forEach((item) => {
				sum += item.price * item.quantity;
				setTotal_price(sum);
		})
		}
	}, [cart_items])


	return (
		<main className="container-fluid w-full min-h-screen px-3">
			{
				//empty cart
				cart_items.length === 0 ? (
					<div className="w-full rounded-xl p-4 flex flex-col justify-center items-center mt-[7rem] bg-white gap-y-2 shadow-sm">
						<div><FiShoppingBag className="w-[5rem] h-[5rem] text-gray-600"/></div>
						<div className="font-medium">Your cart is empty</div>
						<p className="text-center mb-8 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, aspernatur.</p>
						<Link href={"/products"} className="btn-outline-primary gap-x-2">Start Shopping<span className="flex justify-center items-center"><FaArrowRight className="w-[16px] h-[16px]"/></span></Link>
					</div>
				) : (
					//cart is not empty
					<div className="w-full rounded-xl bg-white border shadow-sm mt-5 py-2">
						{
							cart_items?.map((item) => {
								return (
									<div key={item.id} className="border-b p-4 flex justify-center items-center gap-x-3">
										<div className="w-3/12 h-[70px]">
											<Image width={800} height={800} src={item.image} alt={item.title} className="w-full h-full object-contain"/>
										</div>
										<div className="w-5/12 flex flex-col justify-center items-start gap-y-1 lg:gap-y-2">
											<p className="text-xs lg:text-medium font-medium line-clamp-1">{item.title}</p>
											<p className="text-xs lg:text-medium text-secondary line-clamp-1">{item.description}</p>
										</div>
										<div className="w-4/12 flex flex-col justify-end items-center gap-y-2">
											<div className="flex justify-between items-center border rounded-xl p-1 gap-x-2 w-full max-w-[130px]">
												<button type="button" className="size-[30px] flex justify-center items-center !rounded-lg hover:bg-gray-200" onClick={() => dispatch(dec_item(item))}><BsDash className="w-[20px] h-[20px]"/></button>
												<div>{item.quantity}</div>
												<button type="button" className="size-[30px] flex justify-center items-center !rounded-lg hover:bg-gray-200" onClick={() => dispatch((add_item(item)))}><BsPlus className="w-[20px] h-[20px]" /></button>
											</div>
											<button className="btn-outline-primary w-full max-w-[130px] !h-[40px]" onClick={() => dispatch(delete_item(item))}>delete</button>
										</div>
									</div>
								)
							})
						}
						<div className="p-4 flex flex-col lg:flex-row justify-center items-center gap-y-5">
							<div className="w-full lg:w-6/12 order-2 lg:order-1 flex justify-start items-center">
								<DeleteCartModal />
							</div>
							<div className="w-full lg:w-6/12 flex justify-between lg:justify-end gap-x-5 items-center gap-y-2 order-1 lg:order-2">
								<p className="font-medium">Total Price: <span className="text-secondary font-normal">{total_price} $</span></p>
								<button type="button" className="btn-primary w-[120px] gap-x-2">Purchase <span><FaArrowRight className="w-[16px] h-[16px]"/></span></button>
							</div>
						</div>
					</div>
				)
			}
		</main>
	);
};

export default Cart;