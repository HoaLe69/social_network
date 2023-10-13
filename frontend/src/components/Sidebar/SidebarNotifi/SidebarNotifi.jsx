import { AiOutlineHeart } from "react-icons/ai";
import SidebarItem from "../SidebarItem";
import { useDispatch } from "react-redux";
import { clickShowModalNotifi } from "../../../redux/sidebarSlice";

const SidebarNotifi = () => {
	const dispatch = useDispatch()
	const handleOnClick = () => {
		dispatch(clickShowModalNotifi())
	}
		return <SidebarItem notLink title='Notifications' handleOnClick={handleOnClick}>
			<AiOutlineHeart />
		</SidebarItem>
}

export default SidebarNotifi
