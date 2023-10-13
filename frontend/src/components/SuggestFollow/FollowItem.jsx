import { Avatar, Button } from "@mui/material";

const FollowUser = () => {
  return (
    <div className="flex items-center py-[8px] px-[16px] gap-[10px]">
      <Avatar
        src="https://fastly.picsum.photos/id/27/3264/1836.jpg?hmac=p3BVIgKKQpHhfGRRCbsi2MCAzw8mWBCayBsKxxtWO8g"
        sx={{ width: 44, height: 44 }}
      />
      <div className="flex flex-col">
        <span className="displayName">Eric.Dfa.67</span>
        <span className="text-[11px]">Dung Le</span>
      </div>
      <Button
        sx={{
          color: "#0095F6",
          textTransform: "capitalize",
          fontSize: "13px",
          fontWeight: 600,
          marginLeft: "auto",
        }}
      >
        Follow
      </Button>
    </div>
  );
};

export default FollowUser;
