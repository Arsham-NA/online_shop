import Image from "next/image";
import HeroSection from "./components/home/hero_section/hero_section";
import Link from "next/link";
import { AiOutlineMan, AiOutlineWoman  } from "react-icons/ai";
import { BsGem, BsTv } from "react-icons/bs";


import BestSellers from "./components/best_sellers";
import TopDesignersSlider from "./components/home/top_designers_slider.jsx/top_designers_slider";

const Home = () => {
  return (
    <main className="px-3 container-fluid">
      <HeroSection />
      <section className="w-full mb-20">
        <h2 className="mb-5 text-xl lg:text-3xl font-semibold">Top Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Link href={"/products"} className="relative">
            <Image src="/images/home/top_categories/image-1.webp" alt="top-brands" width={1675} height={1116} className="w-full h-full rounded-lg"/>
            <span className="absolute left-3 bottom-3 text-xl font-semibold text-gray-800">CASUAL CHIC</span>
          </Link>
          <Link href={"/products"} className="relative">
            <Image src="/images/home/top_categories/image-2.webp" alt="top-brands" width={1675} height={1116} className="w-full h-full rounded-lg"/>
            <span className="absolute left-3 bottom-3 text-xl font-semibold text-white">50 YEARS OF TIMBERLAND</span>
          </Link>
        </div>
      </section>

      <section className="w-full mb-20">
        <h2 className="text-center mb-5 text-xl lg:text-3xl font-semibold">Categories</h2>
        <div className="w-full flex justify-center items-center gap-x-10 md:gap-x-16">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <Link href={"/products"} className="w-[3.5rem] h-[3.5rem] flex justify-center items-center bg-white botder rounded-xl shadow-sm"><AiOutlineMan className="w-[28px] h-[28px] text-blue-500"/></Link>
            <span>Mens</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <Link href={"/products"} className="w-[3.5rem] h-[3.5rem] flex justify-center items-center bg-white botder rounded-xl shadow-sm"><AiOutlineWoman className="w-[28px] h-[28px] text-pink-500"/></Link>
            <span>Women</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <Link href={"/products"} className="w-[3.5rem] h-[3.5rem] flex justify-center items-center bg-white botder rounded-xl shadow-sm"><BsGem className="w-[28px] h-[28px] text-yellow-600" /></Link>
            <span>Jewelry</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <Link href={"/products"} className="w-[3.5rem] h-[3.5rem] flex justify-center items-center bg-white botder rounded-xl shadow-sm"><BsTv className="w-[28px] h-[28px] text-gray-500" /></Link>
            <span>Electronics</span>
          </div>
        </div>
      </section>

      <section className="container">
        <h2 className="text-center mb-5 text-xl lg:text-3xl font-semibold">Best Sellers</h2>
        <BestSellers />
      </section>

      <section className="w-full mt-10">
				<h2 className="mb-5 text-xl lg:text-3xl font-semibold">Top Brands</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-7">
					<div>
						<Image src="/images/home/top_brands/image-1.webp" alt="image_1" width={888} height={1333} className="w-full h-full object-cover" />
					</div>
					<div>
						<Image src="/images/home/top_brands/image-2.webp" alt="image_2" width={888} height={1333} className="w-full h-full object-cover" />
					</div>
					<div>
						<Image src="/images/home/top_brands/image-3.webp" alt="image_3" width={888} height={1333} className="w-full h-full object-cover" />
					</div>
					<div>
						<Image src="/images/home/top_brands/image-4.webp" alt="image_4" width={888} height={1333} className="w-full h-full object-cover" />
					</div>
				</div>
			</section>

      <section className="w-full mt-10">
        <h2 className="mb-5 text-xl lg:text-3xl font-semibold">Top Designsers</h2>
        <TopDesignersSlider />
      </section>
    </main>
  );
};

export default Home;