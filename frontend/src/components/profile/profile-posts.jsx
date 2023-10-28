import { Box, Link, Heading, Image, Grid, GridItem } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

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
  const sampleData = [
    {
      thumNail:
        "https://i.pinimg.com/564x/ab/c1/76/abc1760a916047d9bee769ae8e24e699.jpg",
      postId: 123,
      like: 100,
    },
    {
      thumNail:
        "https://i.pinimg.com/564x/ab/c1/76/abc1760a916047d9bee769ae8e24e699.jpg",
      postId: 293912,
      like: 100,
    },

    {
      thumNail:
        "https://i.pinimg.com/564x/ab/c1/76/abc1760a916047d9bee769ae8e24e699.jpg",
      postId: 1231273,
      like: 100,
    },
    {
      thumNail:
        "https://i.pinimg.com/564x/cf/db/1f/cfdb1ffbf9ebfe891428aa995e14904f.jpg",
      postId: 1923123,
      like: 100,
    },
  ];
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
        {sampleData.map((data) => {
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
