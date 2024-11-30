import Link from "next/link";

const NotFound = () => {
	return (
		<main className="container-fluid px-3 h-screen flex justify-center items-center">
			<section className="text-center max-w-[700px]">
				<h1 className="text-lg font-semibold mb-4">{`Page Not Found :(`}</h1>
				<p className="text-secondary mb-4">{`Uh oh, we can't seem to find the page you're looking for. Try going back to Home page or see our `}<Link href={"/contact-us"} className="text-primary">Contact Us</Link> for more information </p>
				<div className="w-full flex justify-center items-center">
					<Link href={"/"} className="btn-primary w-fit">Home Page</Link>
				</div>
			</section>
		</main>
	);
};

export default NotFound;