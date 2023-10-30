import ProfileHeader from "@components/profile/profile-header";
import ProfilePost from "@components/profile/profile-posts";
import { Box, Container } from "@chakra-ui/react";
import NavTop from "@components/nav/nav-top";
import NavBot from "@components/nav/nav-bot";

const Profile = () => {
  return (
    <Box>
      <Box display={{ base: "none", lg: "flex" }}>
        <NavTop />
      </Box>
      <Container maxW="container.lg" pt={4} pb={{ base: "20", lg: "2" }}>
        <ProfileHeader />
        <ProfilePost />
      </Container>
      <Box display={{ base: "flex", lg: "none" }}>
        <NavBot />
      </Box>
    </Box>
  );
};

export default Profile;
