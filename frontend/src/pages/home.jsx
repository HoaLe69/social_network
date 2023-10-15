import { Box, Container } from "@chakra-ui/react";
import NavBar from "../components/navbar/navbar";
import NavBot from "../components/navbar/nav-bot";
const Home = () => {
  return (
    <Box>
      <NavBar />
      <Container maxW={"container.lg"}></Container>
      <NavBot />
    </Box>
  );
};
export default Home;
