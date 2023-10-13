import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

const ProfilePost = () => {
  return (
    <Link>
      <div className="h-[309px] group relative">
        <img
          style={{ height: "100%" }}
          src="https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4"
          alt="post profile"
        />
        <div className="hidden group-hover:flex flex absolute bg-overlay-2 inset-0 items-center justify-center">
          <span className="flex items-center gap-[5px] text-white font-black">
            <AiFillHeart /> 4,500{" "}
          </span>
        </div>
      </div>
    </Link>
  );
};
export default ProfilePost;
