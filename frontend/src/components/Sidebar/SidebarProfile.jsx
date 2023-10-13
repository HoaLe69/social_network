import { Avatar } from "@mui/material";
import SidebarItem from "./SidebarItem";
import { useDispatch } from "react-redux";
import { clickExpand } from "../../redux/sidebarSlice";

const SidebarProfile = () => {
	const dispatch = useDispatch();
	const handleOnClick = () => {
		dispatch(clickExpand());
	};
	return (
		<SidebarItem href={"/profile"} title="Profile" handleOnClick={handleOnClick}>
			<Avatar
				src="https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s"
				sx={{ width: 24, height: 24 }}
			/>
		</SidebarItem>
	);
};
export default SidebarProfile;
