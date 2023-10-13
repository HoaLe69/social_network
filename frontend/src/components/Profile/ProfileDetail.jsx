import { Button } from "@mui/material";

const ProfileDetail = () => {
  return (
    <div className="grow-[2] flex flex-col gap-[15px]">
      <div className="flex items-center gap-[54px]">
        <p className="text-[20px] font-medium">vwn_hfo.691</p>
        <Button variant="contained" sx={{ textTransform: "capitalize" }}>
          Edit Profile
        </Button>
      </div>
      <div className="flex items-center gap-[40px]">
        <p className="font-medium">
          <strong>28</strong> followers
        </p>
        <p className="font-medium">
          <strong>14</strong> following
        </p>
      </div>
      <div>
        <p className="text-[14px] font-medium">Hòa</p>
      </div>
    </div>
  );
};

export default ProfileDetail;
