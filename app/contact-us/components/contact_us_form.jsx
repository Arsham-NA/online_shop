"use client"
import { useFormik } from "formik";

const ContactUsForm = () => {
	return (
		<form className="w-full h-full">
			<p className="text-xl lg:text-2xl font-medium mb-4">send a message</p>

			<div className="grid grid-cols-1 sm:grid-cols-2 mb-5 gap-5">
				<div>
					<input type="text" name="first_name" className="w-full h-full rounded-xl" placeholder="First Name" />
				</div>
				<div>
					<input type="text" name="last_name" className="w-full h-ful rounded-xl" placeholder="Last Name" />
				</div>
			</div>

			<div className="mb-5">
				<input type="email" name="email" className="w-full h-ful rounded-xl" placeholder="Email Address" />
			</div>

			<div className="mb-5">
				<input type="tel" name="phone_number" className="w-full h-ful rounded-xl" placeholder="+98"/>
			</div>

			<div className="mb-5">
				<textarea type="text" name="message" className="w-full h-full  rounded-xl" placeholder="Write your message here..." rows={5}/>
			</div>

			<div className="w-full">
				<button className="btn-primary text-white w-full">Send</button>
			</div>

		</form>
	);
};

export default ContactUsForm;