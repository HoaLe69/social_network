import { Box, Link, Heading, Image, Grid, GridItem } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { profilePostDt } from "../../samepleData";

const ProfilePostItem = ({ thumNail, like, postId }) => {
  return (
    <Link
      as={ReactRouterLink}
      to={`/home/post/${postId}`}
      position="relative"
      role="group"
    >
      <Image src={thumNail} alt={postId} boxSize="300px" objectFit="cover" />
      <Box
        position="absolute"
        top={0}
        right={0}
        left={0}
        bottom={0}
        display="none"
        bg={"blackAlpha.500"}
        _groupHover={{ display: "grid" }}
        placeItems="center"
      >
        <Box
          display="flex"
          alignItems="center"
          gap="5px"
          color="whiteAlpha.800"
        >
          {like} <AiFillHeart />
        </Box>
      </Box>
    </Link>
  );
};

const ProfilePost = () => {
  return (
    <Box pt={4}>
      <Heading
        textAlign="center"
        fontSize={"md"}
        textUnderlineOffset={4}
        textDecoration="underline"
        textDecorationThickness={4}
        textDecorationColor="gray.500"
      >
        All post
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(3 , 1fr)",
          lg: "repeat(4 , 1fr) ",
        }}
        gap={2}
        pt={4}
      >
        {profilePostDt.map((data) => {
          return (
            <GridItem key={data.postId}>
              <ProfilePostItem {...data} />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ProfilePost;
