import Image from "next/image";

export const metadata = {
	title: "About us",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum voluptatibus, natus deleniti nostrum in."
}

const About = () => {
	return (
		<main className="container-fluid mt-2">

			{/* section 1 */}
			<section className="grid grid-cols-1 md:grid-cols-2 py-12 px-4 lg:px-12 gap-y-3">
				<div className="col p-3 lg:p-12 flex flex-col justify-center items-start">
					<h1 className="mb-3 text-2xl lg:text-4xl font-medium">About Us</h1>
					<p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum voluptatibus, natus deleniti nostrum in.</p>
				</div>
				<div className="col lg:p-12">
					<Image src="/images/about_us/image-1.webp" alt="about-online-shop" width={800} height={534} className="w-full h-full object-cover rounded"/>
				</div>
			</section>

			<section className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-5 pb-10 pt-12 px-4 md:px-20 bg-white">
				<div className="w-full h-full">
					<Image src="/images/about_us/image-2.webp" alt="image-2" width={600} height={400} className="w-full h-full object-cover"/>
				</div>
				<div className=" px-4 flex flex-col justify-center items-start">
					<h2 className="fs-4 mb-2 text-xl font-semibold">Our Mission: Helping Millions of Organizations Grow Better</h2>
					<p className="text-secondary text-justify">We believe not just in growing bigger, but in growing better. And growing better means aligning the success of your own business with the success of your customers. Win-win!</p>
				</div>
			</section>

			<section className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-5 py-12 px-4 md:px-20 bg-white">
				<div className="h-full md:order-2">
					<Image src="/images/about_us/image-3.webp" alt="our-story" width={500} height={333} className="w-full h-full object-contain"/>
				</div>
				<div className="w-full px-4 flex flex-col justify-center items-start md:order-1">
					<h2 className="fs-4 mb-2 text-xl font-semibold">Our story</h2>
					<p className="text-secondary text-justify">In 2004, fellow MIT graduate students Brian Halligan and Dharmesh Shah noticed a major shift in the way people shop and purchase products. Buyers didn’t want to be interrupted by ads, they wanted helpful information. In 2006, they founded HubSpot to help companies use that shift to grow better with inbound marketing.Along the way, HubSpot expanded beyond marketing into a crafted, not cobbled suite of products that create the frictionless customer experience that buyers expect today. Expertly led by CEO Yamini Rangan, HubSpot uses its customer platform built on an AI-powered Smart CRM to help millions of scaling organizations grow better.</p>
				</div>
			</section>
		</main>
	);
};

export default About;