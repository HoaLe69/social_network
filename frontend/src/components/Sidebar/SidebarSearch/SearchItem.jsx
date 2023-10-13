import { Avatar, IconButton } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
const SearchItem = () => {
	return (
		<div className="py-[8px] px-[24px] gap-[10px] cursor-pointer flex items-center hover:bg-overlay">
			<Avatar
				src="https://fastly.picsum.photos/id/19/2500/1667.jpg?hmac=7epGozH4QjToGaBf_xb2HbFTXoV5o8n_cYzB7I4lt6g"
				sx={{ width: 44, height: 44 }}
			/>
			<div>
				<span className="displayName leading-[1]">Vwn_Hfo.691</span>
				<span className="block text-[13px] leading-[1] font-medium text-gray">Hòa</span>
			</div>
			<IconButton sx={{ marginLeft: "auto" }} size="small">
				<AiOutlineClose />
			</IconButton>
		</div>
	);
};

export default SearchItem;
