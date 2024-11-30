import "./_footer.scss";
import Link from "next/link";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter, BsTelephone } from "react-icons/bs";



const Footer = () => {
	return (
		<footer className="w-full footer mt-5 p-4 bg-white text-sm overflow-hidden rounded-lg shadow-[0px_0px_10px_rgba(0,0,0,0.05)]"> 
			<div className="grid grid-cols-2 md:grid-cols-4 [&>section]:p-4">
				<section className="p-4">
					<ul className="w-full h-full">
						<h2 className=""><Link href={"/"}>Customer Service</Link></h2>
						<li><Link href={"/contact-us"}>Contact Us</Link></li>
						<li><Link href={"/"}>Order Status</Link></li>
						<li><Link href={"/products"}>Shopping</Link></li>
						<li><Link href={"/"}>Price Adjsutments</Link></li>
						<li><Link href={"/"}>Gift Cards</Link></li>
						<li><Link href={"/faq"}>FAQ</Link></li>
						<li><Link href={"/"}>Products Recalls</Link></li>
					</ul>
				</section>
				<section >
					<ul className="w-full h-full">
						<h2 className=""><Link href={"/about-us"}>About Us</Link></h2>
						<li><Link href={"/"}>All Brands</Link></li>
						<li><Link href={"/"}>Careers</Link></li>
						<li><Link href={"/"}>Corporate Social Responsibility</Link></li>
						<li><Link href={"/"}>Get Email Updates</Link></li>
						<li><Link href={"/"}>Price Adjsutments</Link></li>
						<li><Link href={"/"}>Website Blog</Link></li>
						<li><Link href={"/"}>The Thread</Link></li>
						<li><Link href={"/"}>Nordy Podcast</Link></li>
					</ul>
				</section>
				<section>
					<ul className="w-full h-full">
						<h2 className=""><Link href={"/"}>Store & Services</Link></h2>
						<li><Link href={"/"}>Find a Store</Link></li>
						<li><Link href={"/"}>Alteration & Tailoring</Link></li>
						<li><Link href={"/"}>Pop-In Shop</Link></li>
						<li><Link href={"/"}>Virtual Events</Link></li>
						<li><Link href={"/"}>SPA Website</Link></li>
						<li><Link href={"/"}>Website Restaurants</Link></li>
						<li><Link href={"/"}>Website Local</Link></li>
						<li><Link href={"/contact-us"} className="contact_us_btn">Contact-us</Link></li>
					</ul>
				</section>
				<section className="section_4 flex flex-col justify-start items-start gap-y-5 md:gap-y-9">
					{/* subscribe_section */}
					<h5 className=" font-semibold text-lg">Subscribe To Get Updates</h5>
					<div className="w-full flex flex-col xl:flex-row justify-start items-start gap-y-3 gap-x-3">
						<div className="w-full xl:w-9/12">
							<input type="email" name="input_subscribe" className="w-full rounded-xl" placeholder="Email Address"/>
						</div>
						<div className="w-full xl:w-5/12">
							<button className="btn-outline-primary w-full">Subscribe</button>
						</div>
					</div>

					{/* follow us */}
					<div className="w-full">
					<h3 className="mb-4 text-lg font-semibold">Follow us</h3>
						<div className="social_media">
							<Link href={"/"}><BsInstagram /></Link>
							<Link href={"/"}><BsFacebook /></Link>
							<Link href={"/"}><BsGithub /></Link>
							<Link href={"/"}><BsTwitter /></Link>
						</div>
					</div>

					<Link href={"tel:+989339953213"} className="w-full flex justify-center items-center gap-x-2 lg:gap-x-5 font-medium bg-primary-light text-primary rounded-xl p-2 text-nowrap text-xs lg:text-base">
						<BsTelephone className="w-[22px] h-[22px] "/>
						<p>+98 933 559 3213</p>
					</Link>
				</section>
			</div>
    </footer>
	);
};

export default Footer;