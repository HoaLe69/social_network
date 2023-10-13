import { useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";
import SearchItem from "./SearchItem";
import Modal from '../Modal'

const ModalSearch = () => {
	const isShowModalSearch = useSelector(
		(state) => state.sidebar.isShowModalSearch
	);

	return (
		<Modal title="Search" isShow={isShowModalSearch}>
			<div>
				<div className=" border-b-[1px] border-solid border-white-blur">
					<div className="mx-[16px] mb-[24px] flex bg-white px-[16px] rounded-[8px] items-center">
						<span className="text-[rgb(142, 142, 142)]">
							<BsSearch />
						</span>
						<input
							className="pl-[10px] flex-1 bg-white py-[10px] outline-none"
							type="text"
							placeholder="Search"
							name="Search"
						/>
					</div>
				</div>
				<div>
					<p className="text-[15px] font-bold text-black mx-[24px] my-[8px]" >Result</p>
					<SearchItem />	
				</div>
			</div>
		</Modal>
	);
};

export default ModalSearch;
