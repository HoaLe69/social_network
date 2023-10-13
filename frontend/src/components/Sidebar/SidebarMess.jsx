import SidebarItem from "./SidebarItem";
import { PiMessengerLogo } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { clickNarrow } from "../../redux/sidebarSlice";

const SidebarMess = () => {
	const dispatch = useDispatch()
	const handleOnClick = () => {
		dispatch(clickNarrow())
	}
	return <SidebarItem href={'/messages'} title='Messages' handleOnClick={handleOnClick}>
			<PiMessengerLogo />
		</SidebarItem>

}

export default SidebarMess
