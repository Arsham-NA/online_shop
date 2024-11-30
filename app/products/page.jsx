"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import ProductsLoading from "./components/products_loading";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { add_item } from "../redux/slices/cart_slice";
import Link from "next/link";
import { PiHeartFill, PiHeartLight } from "react-icons/pi";
import { set_favorits } from "../redux/slices/user_slice";
import Image from "next/image";
import AddToCartBtn from "@/app/components/btns/add_to_cart_btn";




const Products = () => {

	const router = useRouter();
	const {user} = useSelector((state) => state.user_slice);
	const dispatch = useDispatch();
	const [data, setData] = useState([]);
	const [Is_loading, setIs_loading] = useState(true);
	const [filter, setFilter] = useState("")
	const [active_filter, setActive_filter] = useState("");

	useEffect(() => {
		//https://fakestoreapi.com/products

		const fetch_data = async() => {
			setIs_loading(true)
			await axios.get(`https://fakestoreapi.com/products${filter}`)
			.then((response) => {
				setData(response.data);
				setIs_loading(false);
			})
		}
		fetch_data();
	}, [filter]);

	//item hayi ke too favorist hast ro check mikone, age bood object item ro mide, age nabood false mide
	//age user nabood false mide ke favorit ha outline bashan na fill, ke dakhele onclick khode svg favorit check mishe ke age karbar login naboode bera login kone
	const check_favorit_item = (product_id) => {
		if(user) {
			return user.favorits?.find((item) => item.id === product_id);
		}
		else {
			return false;
		}
	}


	return (
		<main className="container mt-5 px-3 min-h-screen">

			{/* filters */}
			<div className="w-full lg:px-20 px-5 py-5 bg-white rounded-lg mb-5 shadow-sm">
				<div className="text-2xl lg:text-3xl font-semibold text-center border-b pb-5">filters</div>
				<div className="pt-5 flex justify-start lg:justify-center items-center gap-x-5 overflow-x-auto pb-4 lg:pb-0">
					<button className={`btn-outline-primary min-w-[120px] !rounded-full ${active_filter === "" ? "!bg-primary-light" : undefined}`} onClick={() => {setFilter(""); setActive_filter("")}}>All</button>
					<button className={`btn-outline-primary min-w-[120px] !rounded-full ${active_filter === "mens" ? "!bg-primary-light" : undefined}`} onClick={() => {setFilter("/category/men's clothing"); setActive_filter("mens")}}>Mens</button>
					<button className={`btn-outline-primary min-w-[120px] !rounded-full ${active_filter === "women" ? "!bg-primary-light" : undefined}`} onClick={() => {setFilter("/category/women's clothing"); setActive_filter("women")}}>Women</button>
					<button className={`btn-outline-primary min-w-[120px] !rounded-full ${active_filter === "jewels" ? "!bg-primary-light" : undefined}`} onClick={() => {setFilter("/category/jewelery"); setActive_filter("jewels")}}>Jewels</button>
					<button className={`btn-outline-primary min-w-[120px] !rounded-full ${active_filter === "electronics" ? "!bg-primary-light" : undefined}`} onClick={() => {setFilter("/category/electronics"); setActive_filter("electronics")}}>Electronics</button>
				</div>
			</div>

			<div className="w-full mb-5 bg-primary text-white p-2 text-center rounded-xl font-medium">
				<p>10% off for discounts for products above 100$</p>
			</div>

			{/* products list */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-3">
				{
					Is_loading ? (
						<>
							<ProductsLoading />
						</>
					) : (
						data.map((product) => {
							return (
								<div key={product.id} className="bg-white rounded-xl p-4 flex flex-col justify-between shadow-sm relative hover:scale-[1.01] duration-150 cursor-pointer">
									<Link  href={`/products/${product.id}`} className="w-full h-[200px] p-7 border-b">
										<Image src={product.image} width={800} height={800} className="w-full h-full object-contain" alt={product.title} onClick={() => router.push(`/products/${product.id}`)}/>
									</Link>
	
									{/* product info */}
									<Link href={`/products/${product.id}`} className="flex flex-col justify-center items-start gap-y-4 p-5">
										<p className="font-medium line-clamp-2">{product.title}</p>
										<p><span className="font-medium">Price</span>: <span className="text-secondary">{product.price}$</span></p>
										<p className="flex justify-center items-center gap-x-1 leading-none">{product.rating.rate} <BsStarFill className="text-yellow-500"/></p>
										{product.rating.count > 0 ? <p className="text-green-700">Available</p> : <p className="text-danger">Unavailable</p>}
										
									</Link>
									<div className="w-full">
										<AddToCartBtn className={"w-full btn-outline-primary"} product={product} />
									</div>
									{product.price > 100 ? <span className="bg-primary text-white absolute right-[.5rem] top-[.5rem] px-1 rounded-lg rounded-br-sm font-semibold">10%</span> : undefined}
										{
											check_favorit_item(product.id) ? (
												<PiHeartFill className="w-[24px] h-[24px] absolute top-[.6rem] left-[.6rem] text-danger hover:scale-[1.1] duration-150" onClick={() => dispatch(set_favorits(product))}/>
											) : (
												<PiHeartLight className="w-[24px] h-[24px] absolute top-[.6rem] left-[.6rem] text-danger hover:scale-[1.1] duration-150" onClick={() => user ? dispatch(set_favorits(product)) : router.push("/login")}/>
											)
										}
								</div>
							)
						})
					)
				}
			</div>
		</main>
	);
};

export default Products;