import { Avatar, IconButton } from "@mui/material";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const Post = ({ image }) => {
  const [isLike, setIsLike] = useState(false);
  return (
    <div className="max-w-[470px] w-[100%]">
      <header className="pl-[4px] pb-[12px]">
        <div className="flex items-center gap-[7px]">
          <Avatar
            src="https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0"
            alt="Avatar"
            sx={{ width: 32, height: 32 }}
          />
          <h2 className="displayName ml-[4px]">Vwn_Hfo.691</h2>
          <span className="text-black-light">•</span>
          <span className="text-[14px] font-normal text-black-light">5d</span>
          <span className="ml-[auto]">
            <IconButton size="small">
              <BsThreeDots />
            </IconButton>
          </span>
        </div>
      </header>
      <p className="text-[14px] font-medium"> Nothinh is easy!! </p>
      <div className="max-h-[585px] h-full w-full overflow-hidden">
        <img className="h-auto block w-full" src={image} alt="hihihih" />
      </div>
      <div className="flex items-center">
        <span
          onClick={() => setIsLike(!isLike)}
          className={`p-[8px] text-[18px] cursor-pointer ${
            isLike && "text-red"
          }`}
        >
          {isLike ? <AiFillHeart /> : <AiOutlineHeart />}
        </span>
        <p className="text-black font-semibold text-[13px]">6,7724 likes</p>
      </div>
      <span className="text-[13px] text-gray">View all 1,200 comments</span>
      <div className="mt-[8px] pb-[16px] border-b-[1px] border-solid border-white-blur mb-[24px]">
        <input
          className="w-full outline-none text-[14px]"
          type="text"
          placeholder="Add your comment ..."
          name="comment"
        />
      </div>
    </div>
  );
};

export default Post;
