"use client";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";
import Logo from "@/app/components/logo/logo";
import BackArrow from "@/app/components/btns/back_arrow";
const Login = () => {

	const formik = useFormik({
		initialValues: {full_name: "", phone_number: 0, email: "", password: ""},
		onSubmit: (values) => {
			console.log(values);
		},
		validationSchema: yup.object().shape({
			full_name: yup.string().min(3).required("Required"),
			phone_number: yup.number("Please eneter number").min(11, "at least 11 character").required("Required"),
			email: yup.string().email().min("5").required("Required"),
			password: yup.string().min(8).required("Required"),
		})
	})

	return (
		<main className="w-full min-h-screen flex justify-center items-center">
			<form onSubmit={formik.handleSubmit} className="w-[90vw] max-w-[400px] bg-white px-5 py-6 rounded-xl shadow-sm border absolute">
				<Logo className={"pb-5 mb-5 border-b"}/>
				<h1 className="mb-4 text-center text-xl font-semibold">Sign up</h1>
				<div className="grid grid-cols-2 gap-x-4 mb-5">
					<div >
						<label htmlFor="full_name" className="block mb-2 font-medium">Full Name</label>
						<input type="text" name="full_name" className="w-full rounded-xl" placeholder="name" onChange={formik.handleChange} onBlur={formik.handleBlur} />
						{formik.touched.full_name && formik.errors.full_name ? <p className="text-danger mt-2">{formik.errors.full_name}</p> : undefined}
					</div>
					<div >
						<label htmlFor="phone_number" className="block mb-2 font-medium">Phone</label>
						<input type="tel" name="phone_number" className="w-full rounded-xl" placeholder="09.." maxLength={11} onChange={formik.handleChange} onBlur={formik.handleBlur} />
						{formik.touched.phone_number && formik.errors.phone_number ? <p className="text-danger mt-2">{formik.errors.phone_number}</p> : undefined}
					</div>
				</div>
				
				<div className="w-full mb-5">
					<label htmlFor="email" className="block mb-2 font-medium">Email</label>
					<input type="email" name="email" className="w-full rounded-xl" placeholder="Email@Example.com" onChange={formik.handleChange} onBlur={formik.handleBlur} />
					{formik.touched.email && formik.errors.email ? <p className="text-danger mt-2">{formik.errors.email}</p> : undefined}
				</div>
				
				<div className="w-full mb-7">
					<label htmlFor="password" className="block mb-2 font-medium">Password</label>
					<input type="password" name="password" className="w-full rounded-xl" placeholder="***" onChange={formik.handleChange} onBlur={formik.handleBlur} />
					{formik.touched.password && formik.errors.password ? <p className="text-danger mt-2">{formik.errors.password}</p> : undefined}
				</div>
				
				<div className="w-full mb-5">
					<button type="submit" className="w-full btn-primary !py-3">Sign up</button>
				</div>
				
				<div>
					<span className="text-secondary">have an account? <Link href={"/login"} className="text-primary underline">Login</Link></span>
				</div>
			<BackArrow />
			</form>
		</main>
	);
};

export default Login;