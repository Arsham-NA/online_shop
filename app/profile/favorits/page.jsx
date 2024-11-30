"use client";
import { add_item } from "@/app/redux/slices/cart_slice";
import { set_favorits } from "@/app/redux/slices/user_slice";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { RiHeartAdd2Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { PiHeartFill, PiHeartLight } from "react-icons/pi";
import { BsStarFill } from "react-icons/bs";
import Image from "next/image";

const Favorits = () => {

	const router = useRouter();
	const {user} = useSelector((state) => state.user_slice);
	const dispatch = useDispatch();

	//item hayi ke too favorist hast ro check mikone, age bood object item ro mide, age nabood false mide
	const check_favorit_item = (product_id) => user.favorits.find((item) => item.id === product_id);

	return (
		<main className="container-fluid w-full min-h-screen px-3 mt-5">
			{
				user.favorits.length === 0 ? (
					<div className="w-full rounded-xl p-4 flex flex-col justify-center items-center mt-[7rem] bg-white gap-y-2 shadow-sm">
						<div><RiHeartAdd2Line className="w-[5rem] h-[5rem] text-danger"/></div>
						<div className="font-medium">Your favorits is empty</div>
						<p className="text-center mb-8 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, aspernatur.</p>
						<Link href={"/products"} className="btn-outline-primary gap-x-2">Add Product To Favorits<span className="flex justify-center items-center"><FaArrowRight className="w-[16px] h-[16px]"/></span></Link>
					</div>
				) : (
					<div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-3">
						{
							user.favorits.map((product) => {
								return (
									<div key={product.id} className="bg-white rounded-xl p-4 flex flex-col justify-between shadow-sm relative hover:scale-[1.01] duration-150 cursor-pointer">
										<Link  href={`/products/${product.id}`} className="w-full h-[200px] p-7 border-b">
											<Image width={800} height={800} src={product.image} className="w-full h-full object-contain" alt={product.title} onClick={() => router.push(`/products/${product.id}`)}/>
										</Link>
			
										{/* product info */}
										<Link href={`/products/${product.id}`} className="flex flex-col justify-center items-start gap-y-4 p-5">
											<p className="font-medium line-clamp-2">{product.title}</p>
											<p><span className="font-medium">Price</span>: <span className="text-secondary">{product.price}$</span></p>
											<p className="flex justify-center items-center gap-x-1">{product.rating.rate} <BsStarFill className="text-yellow-500"/></p>
											{product.rating.count > 0 ? <p className="text-green-700">Available</p> : <p className="text-danger">Unavailable</p>}
											
										</Link>
										<div className="w-full">
											<button className="btn-outline-primary w-full" onClick={() => {dispatch(add_item(product)); alert("added to cart");}}>Add To Cart</button>
										</div>
										{product.price > 100 ? <span className="bg-primary text-white absolute right-[.5rem] top-[.5rem] px-1 rounded-lg rounded-br-sm font-semibold">10%</span> : undefined}
											{
												check_favorit_item(product.id) ? (
													<PiHeartFill className="w-[24px] h-[24px] absolute top-[.6rem] left-[.6rem] text-danger hover:scale-[1.1] duration-150" onClick={() => dispatch(set_favorits(product))}/>
												) : (
													<PiHeartLight className="w-[24px] h-[24px] absolute top-[.6rem] left-[.6rem] text-danger hover:scale-[1.1] duration-150" onClick={() => dispatch(set_favorits(product))}/>
												)
											}
									</div>
								)
							})
						}
					</div>
				)
			}
		</main>
	);
};

export default Favorits;