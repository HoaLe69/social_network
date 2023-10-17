import { Container } from "@chakra-ui/react";
import PostContainer from "../components/post/PostContainer";
import LayoutFull from "../layout/layout-full";

const Home = () => {
  return (
    <LayoutFull>
      <Container maxW={"container.lg"} pt={14} pb={20}>
        <PostContainer />
      </Container>
    </LayoutFull>
  );
};
export default Home;
