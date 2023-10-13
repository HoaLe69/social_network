import Sidebar from "../components/Sidebar";

const DefaultLayout = ({ children }) => {
	return (
		<div className="flex">
			<Sidebar />
			<div className="flex-1 h-[100vh]">
				{children}
			</div>
		</div>
	);
};

export default DefaultLayout;
