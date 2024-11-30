import Image from "next/image";
import HeroSection from "./components/home/hero_section/hero_section";
import Link from "next/link";

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