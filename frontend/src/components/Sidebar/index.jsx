import images from "../../assets/images";
import { Link } from "react-router-dom";
import SidebarHome from "./SidebarHome";
import SidebarMess from "./SidebarMess";
import SidebarSearch from "./SidebarSearch/SidebarSearch";
import SidebarProfile from "./SidebarProfile";
import { List } from "@mui/material";
import SidebarCreate from "./SidebarCreate";
import {  useRef } from "react";
import { useSelector } from "react-redux";
import { SlSocialInstagram } from "react-icons/sl";
import ModalSearch from "./SidebarSearch/ModalSearch";
import ModalNotifi from "./SidebarNotifi/ModalNotifi";
import SidebarNotifi from "./SidebarNotifi/SidebarNotifi";

const Sidebar = () => {
	const width = useSelector((state) => state.sidebar.width);
	const { pathname } = window.location;
	const sidebar = useRef();
	const handleOnClick = (e) => {
		Array.from(sidebar.current.querySelectorAll(".sidebar")).forEach(
			(item) => {
				item.classList.remove("active");
			}
		);
		const target = e.target.closest(".sidebar");
		if (target) target.classList.add("active");
	};
		return (
		<div style={{ width: `${pathname === "/messages" ? 72 : 240}px` }}>
			<div
				ref={sidebar}
				onClick={handleOnClick}
				style={{ width: `${pathname === '/messages' ? 72 : width}px` }}
				className={`transition-all z-[1000]  border-r-[1px] border-solid border-white-blur h-[100vh] pt-[8px] px-[12px] pb-[20px] relative`}
			>
				<div className="pt-[25px] px-[12px] pb-[16px] mb-[19px] min-h-[70px]">
					<Link to={"/"}>
						{width === 72 || pathname==='/messages' ? (
							<span className="text-[25px]">
								<SlSocialInstagram />
							</span>
						) : (
							<img src={images.logo} alt="logo" />
						)}
					</Link>
				</div>
				<List>
					<SidebarHome />
					<SidebarSearch />
					<SidebarMess />
					<SidebarNotifi />
					<SidebarCreate />
					<SidebarProfile />
				</List>
				<ModalSearch />
				<ModalNotifi />
			</div>
		</div>
	);
};

export default Sidebar;
