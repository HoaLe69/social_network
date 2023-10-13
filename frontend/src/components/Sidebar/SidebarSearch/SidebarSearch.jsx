import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import SidebarItem from "../SidebarItem";
import { clickShowModalSearch } from "../../../redux/sidebarSlice";

const SidebarSearch = () => {
	const dispatch = useDispatch()
	const handleOnClick = () => {
		dispatch(clickShowModalSearch())
	}
	return <SidebarItem notLink title='Search' handleOnClick={handleOnClick}>
		<BsSearch />
		</SidebarItem>

}
export default SidebarSearch
