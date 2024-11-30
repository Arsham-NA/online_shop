import Link from "next/link";
import FaqAccordion from "./components/faq_accordion";
import FaqForm from "./components/faq_form";

export const metadata = {
	title: "FAQ",
	description: "Everything you need to know about the houses and billing",
};

const Faq = () => {
	return (
		<main className="container-fluid">
			
			<section className="w-full flex flex-col justify-center items-start gap-y-10 font-semibold p-[2rem] md:p-[5rem]">
				<h1 className="text-primary text-lg">The FAQs</h1>
				<p className="text-2xl md:text-3xl">Help center</p>
				<p className="text-secondary">Everything you need to know about the order in this website.</p>
			</section>

			<section className="w-full bg-white flex flex-col md:flex-row p-[2rem] gap-x-5 gap-y-5 mb-10 shadow-sm">
				<div className="w-full md:w-5/12 flex flex-col justify-start items-start gap-y-7 ">
					<h2 className="text-primary text-xl lg:text-3xl font-semibold">Support</h2>
					<p className="text-xl lg:text-3xl font-semibold">FAQs</p>
					<p className="text-secondary">Everything you need to know about placing an order on this website.. Cant find the answer youre looking for? Please <Link href={"/contact-us"} className="text-primary">please send a message to this number: <Link href={"tel:+989335593213"} className="font-semibold underline">+98 933 559 3213</Link></Link>.</p>
				</div>
				<div className="w-full md:w-7/12">
					<FaqAccordion />
				</div>
			</section>

			<section className="w-[80vw] max-w-[900px] mx-auto bg-white border rounded-xl shadow-sm grid grid-cols-1 md:grid-cols-2 p-[3rem] gap-5">
				
				<div className="flex flex-col justify-center items-start gap-y-3">
					<h2 className="text-xl lg:text-3xl font-semibold">Join +2000 subscribers</h2>
					<p className="text-secondary">Stay in the loop with everything you need to know.</p>
				</div>
				
				<div className="flex flex-col justify-center items-center gap-y-5">
					<FaqForm />
					<div>
						<p className="text-secondary">We care about data in out <Link href={"/"} className="underline text-blue-600">privacy policy</Link></p>
					</div>
				</div>

			</section>
		</main>
	);
};

export default Faq;