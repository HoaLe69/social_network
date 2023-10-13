import { FiHome } from "react-icons/fi";
import SidebarItem from './SidebarItem'
import { useDispatch } from "react-redux";
import { clickExpand } from "../../redux/sidebarSlice";

const SidebarHome = () => {
	const dispatch = useDispatch()
	const handleOnClick = () => {
		dispatch(clickExpand())
	}
	return <SidebarItem href={'/'} title='Home' handleOnClick={handleOnClick}>
			<FiHome />
		</SidebarItem>
}

export default SidebarHome
