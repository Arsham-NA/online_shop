"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeroSection = () => {

	const router = useRouter();

	return (
		<section className="container mt-5 mb-10">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
				<div>
					<Image src="/images/home/hero_section/hero-section.jpg" alt="hero-section" width={635} height={480} className="object-covert w-full h-full" onClick={() => router.push("/products")}/>
				</div>
				<div className="flex flex-col justify-evenly items-start gap-y-2">
					<h1 className="text-2xl lg:text-3xl font-semibold">Welcome To The O Shop Store</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis facere itaque, reiciendis temporibus, est dicta ut eaque error dolor, saepe non magni numquam vitae ullam accusantium atque eos totam ad!</p>
					<button type="button" className="btn-outline-primary w-[8rem]" onClick={() => router.push("/products")}>Shop Now</button>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;