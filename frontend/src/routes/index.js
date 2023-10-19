import route from "@config/route";
import Home from "@pages/home";
import Explore from "@pages/explore";
import DetailPost from "@pages/detail-post";
import Notification from "@pages/notification";
import Message from "@pages/message";
import RoomConversation from "@components/conversation/room-conversation";

const routes = [
  {
    path: route.home,
    component: <Home />,
  },
  {
    path: route.search,
    component: <Explore />,
  },
  {
    path: route.detailPost,
    component: <DetailPost />,
  },
  {
    path: route.notifi,
    component: <Notification />,
  },
  {
    path: route.message,
    component: <Message />,
  },
  {
    path: route.roomChat,
    component: <RoomConversation />,
  },
];

export default routes;
