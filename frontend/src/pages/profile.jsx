import ProfileHeader from "@components/profile/profile-header";
import ProfilePost from "@components/profile/profile-posts";
import { Box, Container } from "@chakra-ui/react";
import NavTop from "@components/nav/nav-top";
import NavBot from "@components/nav/nav-bot";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const { pathname } = useLocation();
  const userIdFromPath = pathname.split("/")[2];
  return (
    <Box>
      <Box display={{ base: "none", lg: "flex" }}>
        <NavTop />
      </Box>
      <Container maxW="container.lg" pt={4} pb={{ base: "20", lg: "2" }}>
        <ProfileHeader userId={userIdFromPath} />
        <ProfilePost userId={userIdFromPath} />
      </Container>
      <Box display={{ base: "flex", lg: "none" }}>
        <NavBot />
      </Box>
    </Box>
  );
};

export default Profile;
