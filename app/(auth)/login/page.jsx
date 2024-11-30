"use client";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";
import Logo from "@/app/components/logo/logo";
import BackArrow from "@/app/components/btns/back_arrow";
import axios from "axios";
import { useDispatch } from "react-redux";
import { set_token } from "@/app/redux/slices/user_slice";
import { useRouter } from "next/navigation";
import { Spinner } from "@nextui-org/react";

const Login = () => {

	const dispatch = useDispatch();
	const router = useRouter()

	const formik = useFormik({
		initialValues: {email: "", password: ""},
		onSubmit: async(values) => {
			formik.setSubmitting(true);
			await axios.post("https://reqres.in/api/login", values)
			.then((res) => {
				formik.setSubmitting(false);
				dispatch(set_token(res.data.token));
				router.push("/");
			})
			.catch((error) => {
				console.log(error.data);
				formik.setSubmitting(false);
			})
		},
		validationSchema: yup.object().shape({
			email: yup.string().email().min("5").required("Required"),
			password: yup.string().min(8).required("Required"),
		})
	})

	return (
		<main className="w-full min-h-screen mt-[7rem]">
			{/* login account */}
			<div className="w-[90vw] max-w-[400px] mx-auto border bg-white p-4 rounded-xl shadow-sm flex flex-col justify-center items-start gap-y-2 mb-10">
				<p className="font-medium">email: eve.holt@reqres.in</p>
				<p className="font-medium">password: cityslicka</p>
			</div>

			<form onSubmit={formik.handleSubmit} className="w-[90vw] max-w-[400px] bg-white px-5 py-6 rounded-xl shadow-sm border mx-auto relative">
				<Logo className={"pb-5 mb-5 border-b"}/>
				<h1 className="mb-4 text-center text-xl font-semibold">Login</h1>
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
					<button type="submit" className="w-full btn-primary !py-3" disabled={formik.isSubmitting}>{formik.isSubmitting ? <Spinner color="white" size="sm"/> : "Login"}</button>
				</div>
				<div>
					<span className="text-secondary">Dont have an account? <Link href={"/register"} className="text-primary underline">Sign up</Link></span>
				</div>
				<BackArrow />
			</form>
		</main>
	);
};

export default Login;