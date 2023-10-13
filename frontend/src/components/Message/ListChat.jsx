import ChatItem from "./ChatItem";

const ListChat = () => {
  return (
    <div className="h-[100vh] border-r-[1px] border-solid border-white-blur">
      <h4 className="pt-[36px] px-[24px] pb-[12px] text-[20px] font-bold">
        vwn_hfo.691
      </h4>
      <p className="font-bold text-[16px] px-[24px] pt-[14] pb-[10px]">
        Messages
      </p>
      <div>
        <ChatItem />
      </div>
    </div>
  );
};
export default ListChat;
