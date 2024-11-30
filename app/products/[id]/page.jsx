import axios from "axios";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { GoShieldCheck } from "react-icons/go";
import { LiaAwardSolid } from "react-icons/lia";
import AddToCartBtn from "@/app/components/btns/add_to_cart_btn";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import ColorSelector from "./components/color_selector";
import ProductInfo from "./components/product_info";



// metadata
export const generateMetadata = async({params}) => {
	const {id} = params;
	const data = await axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => res.data).catch((error) => {console.log(error)});
	return {
		title: data.title,
		description: data.description,
		openGraph: {
			title: data.title,
			description: data.description,
			url: `https://oshop.com/${data.id}`,
			images: [
        {
          url: `https://fakestoreapi.com/products/${id}`,
          width: 800,
          height: 800,
          alt: data.title,
        },
      ],
		}
	}
};

const Product = async({params}) => {

	const {id} = params;
	const data = await axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => res.data).catch((error) => {console.log(error)});

	return (
		<main className="container-fluid px-3 mt-5">

			<section className="flex flex-col md:flex-row flex-wrap p-4 rounded-xl border bg-white mb-10">
				
				{/* image */}
				<div className="w-full md:w-5/12 lg:w-4/12 flex flex-col justify-center items-center p-16 h-[350px]">
					<Image src={data.image} width={800} height={800} alt={data.id} className="w-full h-full object-contain"/>
				</div>
				
				{/* product info */}
				<div className="w-full md:w-7/12 lg:w-5/12 px-4 mb-4 md:mb-0">
					<h1 className="text-base font-semibold mb-4">{data.title}</h1>
					<span className="block mb-4">{data.category}</span>
					<div className="flex justify-start items-center gap-x-1 mb-5">
						<span className="flex justify-center items-center"><BsStarFill className="w-[16px] h-[16px] text-yellow-500"/></span>
						<span className="flex justify-center items-center leading-none">{data.rating.rate}</span>
						<span className="text-secondary">{"(Buyers' rating)"}</span>
					</div>
					<div className="flex justify-start items-start gap-x-1 mb-4">
						<IoIosInformationCircleOutline className="min-w-[18px] w-[18px] min-h-[18px] h-[18px] text-secondary"/>
						<p className="text-secondary text-xs text-justify">{`A return request for items in the ${data.category} category with the reason "change of mind" can only be approved if the item is in its original condition (if sealed, the seal must remain unopened).`}</p>
					</div>
					<div className="w-full">
						<ColorSelector />
					</div>
				</div>

				{/* purchase */}
				<div className="w-full lg:w-3/12 p-4 bg-gray-50 flex flex-col justify-between gap-y-4 lg:gap-y-0 border rounded-xl">
				<div className="flex flex-col gap-y-2">
					<div className="flex gap-x-2 border-b pb-2">
						<GoShieldCheck className="min-w-[22px] w-[22px] min-h-[22px] h-[22px]"/>
						<span className="text-secondary">Product return up to 7 days based on return conditions</span>
					</div>
					<div className="flex gap-x-2 border-b pb-2">
						<LiaAwardSolid className="min-w-[22px] w-[22px] min-h-[22px] h-[22px]"/>
						<span className="text-secondary">Guarantee of authenticity and physical health of the product</span>
					</div>
					<div className="flex gap-x-2">
						<TfiHeadphoneAlt className="min-w-[22px] w-[22px] min-h-[22px] h-[22px]"/>
						<span className="text-secondary">Contact support if needed</span>
					</div>
				</div>
					
					<div className="mt-4 flex flex-col gap-y-2">
						<span className="font-medium">Price: {data.price} $</span>
						<AddToCartBtn className={"w-full btn-primary"} product={data}/>
					</div>
				</div>
			</section>

			<section className="w-full bg-white border rounded-xl p-4">
				<ProductInfo data={data}/>
			</section>
		</main>
	);
};

export default Product;