"use client";
import { useFormik } from "formik";
import * as yup from "yup";


const FooterForm = () => {

	const formik = useFormik({
		initialValues: {email: ""},
		onSubmit: (values) => {
			console.log(values);
		},
		validationSchema: yup.object().shape({
			email: yup.string("Please enter an correct email").email("Please enter an correct email").required(),
		})
	});

	return (
		<form className="w-full " onSubmit={formik.handleSubmit}>
			<div className="flex flex-col xl:flex-row justify-start items-start gap-y-3 gap-x-3">
				<div className="w-full xl:w-9/12">
					<input type="email" name="email" className="w-full rounded-xl" placeholder="Email Address" onChange={formik.handleChange} onBlur={formik.handleBlur} />
				</div>
				<div className="w-full xl:w-5/12">
					<button type="submit" className="btn-outline-primary w-full">Subscribe</button>
				</div>
			</div>
			{formik.touched.email && formik.errors.email ? <div className="w-full text-danger mt-3">{formik.errors.email}</div> : undefined}
		</form>
	);
};

export default FooterForm;