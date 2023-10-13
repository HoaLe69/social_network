import { Avatar } from "@mui/material";
import ProfileDetail from "./ProfileDetail";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import ProfilePost from "./ProfilePost";

const Profile = () => {
  return (
    <div className="max-w-[935px] w-[100%] mx-[auto]">
      <div className="pt-[30px] px-[20px]">
        <header className="flex items-center mb-[44px]">
          <div className="grow-[1] flex justify-center mr-[30px]">
            <Avatar
              src="https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0"
              sx={{ width: 150, height: 150 }}
            />
          </div>
          <ProfileDetail />
        </header>
        <div className="border-t-[1px] border-solid border-white-blur">
          <div className="flex justify-center">
            <div className="flex items-center gap-[10px] p-[20px]">
              <span>
                <BsFillGrid3X3GapFill />
              </span>
              <span className="text-[12px] font-medium">POSTS </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[5px]">
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
        </div>
      </div>
    </div>
  );
};

export default Profile;
