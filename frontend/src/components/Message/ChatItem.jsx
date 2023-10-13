import { Avatar } from "@mui/material";

const ChatItem = ({ displayName, photoUrl }) => {
  return (
    <div className="px-[24px] py-[8px] hover:bg-overlay cursor-pointer flex items-center gap-[10px]">
      <Avatar
        src="https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0"
        sx={{ width: 56, height: 56 }}
      />
      <span className="text-[14px] font-medium">_Nguyen.My._</span>
    </div>
  );
};
export default ChatItem;
