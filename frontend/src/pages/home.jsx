import { Box, Container } from "@chakra-ui/react";
import NavBar from "../components/navbar/navbar";
import NavBot from "../components/navbar/nav-bot";
import PostContainer from "../components/post/PostContainer";

const Home = () => {
  return (
    <Box>
      <NavBar />
      <Container maxW={"container.lg"} pt={14} pb={20}>
        <PostContainer />
      </Container>
      <NavBot />
    </Box>
  );
};
export default Home;
