import DashboardDesktop from "./components/dashboard_desktop";
import DashboardMobile from "./components/dashboard_mobile";

const Dashboard = () => {

	return (
		<main className="container-fluid mt-5 px-3">
			<h1 className="hidden">dashbaord</h1>
			<DashboardDesktop />
			<DashboardMobile />
		</main>
	);
};

export default Dashboard;