"use client";
import { Spinner } from "@nextui-org/react";
import { useFormik } from "formik";
import * as yup from "yup";

const FaqForm = () => {

	const formik = useFormik({
		initialValues: {email: ""},
		onSubmit: (values) => {
			formik.setSubmitting(true);
			setTimeout(() => {
				console.log(values);
				formik.setSubmitting(false);
			}, 1000);
		},
		validationSchema: yup.object().shape({
			email: yup.string().email().min("5").required("Required"),
		}),
	});

	return (
		<>
			<form className="w-full flex flex-col md:flex-row justify-center items-center gap-3" onSubmit={formik.handleSubmit}>
				<div className="w-full">
					<input type="email" name="email" className="w-full rounded-xl" placeholder="Enter your email" onChange={formik.handleChange} onBlur={formik.handleBlur} />
				</div>
				
				<div className="w-full h-full md:w-fit">
					<button type="submit" className="btn-outline-primary w-full md:w-fit" disabled={formik.isSubmitting}>{formik.isSubmitting === true ?  <Spinner size="sm" color="primary"/> : "Subscribe"}</button>
				</div>
			</form>
			{formik.touched.email && formik.errors.email ? <span className="block w-full text-danger">{formik.errors.email}</span> : undefined}
		</>
	);
};

export default FaqForm;