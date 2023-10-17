import route from "../config/route";
import Home from "../pages/home";
import Explore from "../pages/explore";
import DetailPost from "../pages/detail-post";

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
];

export default routes;
