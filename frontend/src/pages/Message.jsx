import ListChat from "../components/Message/ListChat";
import RoomChat from "../components/Message/RoomChat";

const Message = () => {
  return (
    <div className="flex">
      <div className="w-[396px]">
        <ListChat />
      </div>
      <div className="flex-1">
        <RoomChat />
      </div>
    </div>
  );
};
export default Message;
