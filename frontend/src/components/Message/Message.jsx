import { Avatar } from "@mui/material";

const Message = () => {
	return (
		<div className="w-full">
			<div className="w-[50%] flex gap-[10px] items-start">
				<Avatar
					src="https://fastly.picsum.photos/id/19/2500/1667.jpg?hmac=7epGozH4QjToGaBf_xb2HbFTXoV5o8n_cYzB7I4lt6g"
					sx={{ width: 28, height: 28 }}
				/>
				<div className="bg-gray-light py-[7px] px-[12px] w-max rounded-[20px]">
					<p>????</p>
				</div>
			</div>
		</div>
	);
};

export default Message;
