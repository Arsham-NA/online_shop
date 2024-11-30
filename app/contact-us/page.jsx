import ContactUsForm from "./components/contact_us_form";
import { BsTelephoneFill, BsEnvelopeFill } from "react-icons/bs";
import { FaLocationDot, } from "react-icons/fa6";

export const metadata = {
	title: "Contact us",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum voluptatibus, natus deleniti nostrum in."
}

const ContactUs = () => {
	return (
		<main className="container-fluid px-3 mt-5 lg:my-[7rem]">

			{/* form */}
			<h1 className="hidden">contact us</h1>
			<div className="rounded-xl shadow-sm max-w-[760px] mx-auto flex flex-col md:flex-row overflow-hidden bg-white">
				<div className="w-full md:w-7/12 p-4">
					<ContactUsForm />
				</div>

				{/* contact info */}
				<div className="w-full md:w-5/12 text-white bg-primary flex flex-col justify-center items-start lg:text-lg font-medium gap-y-10 p-4">
					<h2 className="text-lg font-semibold">Contact Info</h2>
					<div className="flex justify-center items-center gap-x-3">
						<div className="w-[2rem] h-[2rem]  bg-primary-light rounded-full flex justify-center items-center">
							<FaLocationDot className="w-[50%] h-[50%] text-primary"/>
						</div>
						<p>Esfahan - Khiaban Sohrevardi</p>
					</div>
					<div className="flex justify-center items-center gap-x-3">
						<div className="w-[2rem] h-[2rem]  bg-primary-light rounded-full flex justify-center items-center">
							<BsEnvelopeFill className="w-[50%] h-[50%] text-primary"/>
						</div>
						<p className="text-sm">arsham.naghash@yahoo.com</p>
					</div>
					<div className="flex justify-center items-center gap-x-3">
						<div className="w-[2rem] h-[2rem]  bg-primary-light rounded-full flex justify-center items-center">
							<BsTelephoneFill className="w-[50%] h-[50%] text-primary"/>
						</div>
						<p>+98 933 559 3213</p>
					</div>
				</div>
			</div>
		</main>
	);
};

export default ContactUs;