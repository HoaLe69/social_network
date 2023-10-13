import { Avatar } from "@mui/material";
import Message from "./Message";
import { BsEmojiSmile } from "react-icons/bs";

const RoomChat = () => {
  return (
    <div className="h-[100vh]">
      <header className="px-[16px] py-[10px] border-custom h-[66px]">
        <div className="flex items-center gap-[10px]">
          <Avatar
            src="https://fastly.picsum.photos/id/19/2500/1667.jpg?hmac=7epGozH4QjToGaBf_xb2HbFTXoV5o8n_cYzB7I4lt6g"
            sx={{ width: 44, height: 44 }}
          />
          <span className="font-bold text-[16px">_._Nguyen.My._</span>
        </div>
      </header>
      <body className="h-[calc(100%-66px)] flex flex-col justify-end">
        <div className="px-[20px] py-[20px] max-h-[100%] overflow-auto">
          <Message />
          <Message />
          <Message />
        </div>
        <div>
          <div className="m-[16px] flex px-[11px] border-custom py-[10px] rounded-[20px]">
            <span className="text-[24px] text-gray cursor-pointer mr-[10px]">
              <BsEmojiSmile />{" "}
            </span>
            <input
              className="flex-1 outline-none"
              type="text"
              placeholder="Messages..."
              name="message"
            />
          </div>
        </div>
      </body>
    </div>
  );
};
export default RoomChat;
