import SuggestFollow from "./SuggestFollow";
import { Button } from "@mui/material";

const ListSuggest = () => {
  return (
    <div>
      <div className="px-[16px] flex">
        <p className="font-semibold text-[14px] text-gray">Suggested for you</p>
        <Button
          sx={{
            marginLeft: "auto",
            color: "#262626",
            textTransform: "capitalize",
            fontSize: "11px",
            fontWeight: 600,
          }}
        >
          See All
        </Button>
      </div>
      <SuggestFollow />
    </div>
  );
};

export default ListSuggest;
