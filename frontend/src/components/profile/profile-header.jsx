import {
  Avatar,
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import EditProfileModal from "@components/modals/edit-profile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { followOrtherUser, getUser } from "@redux/api-request/user";
import ListFollowingModal from "../modals/following";

const Details = ({ title, quantity, onClick, ...props }) => {
  return (
    <Box
      display="flex"
      flexDir="row"
      gap={1}
      alignItems="center"
      cursor="pointer"
      fontSize="16px"
      onClick={onClick}
      {...props}
    >
      <Text fontWeight="bold">{quantity}</Text>
      <Text>{title}</Text>
    </Box>
  );
};

const ProfileHeader = ({ userId: userIdFromUrl }) => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const user = useSelector((state) => state.user.users?.currentUser);
  const isLoadingFollow = useSelector(
    (state) => state.user.followOrtherUser.isFetching,
  );
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const quantityPost = useSelector(
    (state) => state.post.getPostUser?.posts,
  ).length;

  useEffect(() => {
    getUser(dispatch, userIdFromUrl, currentUser?.accessToken);
  }, [dispatch, userIdFromUrl, currentUser?.accessToken]);

  const handleFollowOrtherUser = async () => {
    followOrtherUser(
      dispatch,
      userIdFromUrl,
      { id: currentUser?.id },
      currentUser?.accessToken,
    );
  };
  const relation = () => {
    const isFollowingFromUser = user?.following.includes(currentUser?.id);
    const isFollowingFromCurrentUser = user?.follower.includes(currentUser?.id);
    if (isFollowingFromUser && isFollowingFromCurrentUser) return "Following";
    else if (isFollowingFromUser) return "Follow back";
    return "Follow";
  };
  return (
    <Box pt={16}>
      <Box
        display="flex"
        alignItems="center"
        flexDir="row"
        justifyContent="center"
      >
        <Box width="300px" display="flex" justifyContent="center">
          <Avatar
            size="2xl"
            src={user?.avatar}
            borderWidth="2px"
            borderStyle="solid"
            boxSize="150px"
            borderColor={useColorModeValue("gray.500", "whiteAlpha.500")}
          />
        </Box>
        <Box display="flex" flexDir="column" alignItems="center">
          <HStack spacing={5}>
            <Heading as="h3" mt={2} fontSize="20px" fontWeight="500">
              {user?.displayName}
            </Heading>
            {currentUser?.id === userIdFromUrl ? (
              <Box mt={2} gap="10px" display="flex">
                <Button colorScheme="teal" onClick={onOpen}>
                  Edit profile
                </Button>
                <EditProfileModal isOpen={isOpen} onClose={onClose} />
              </Box>
            ) : (
              <Box mt={2}>
                <Button
                  px={10}
                  onClick={handleFollowOrtherUser}
                  colorScheme="teal"
                  isLoading={isLoadingFollow}
                >
                  {relation()}
                </Button>
              </Box>
            )}
          </HStack>
          <Box display="flex" gap="10px" mt={4} alignItems="center">
            <Details quantity={quantityPost} title="post" />
            <Details quantity={user?.follower.length} title="follower" />
            <Following
              quantity={user?.following.length}
              listUserIdFollowing={user?.following}
            />
          </Box>
          <Box
            p={2}
            fontSize="14px"
            color={useColorModeValue("blue.500", "pink.400")}
          >
            {user?.about}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const Following = ({ quantity, listUserIdFollowing }) => {
  const {
    isOpen: isOpenFollowing,
    onClose: onCloseFollowing,
    onOpen: onOpenFollowing,
  } = useDisclosure();
  return (
    <Box>
      <Details
        quantity={quantity}
        title="following"
        onClick={onOpenFollowing}
      />
      <ListFollowingModal
        isOpen={isOpenFollowing}
        onClose={onCloseFollowing}
        listsUserIdFollowing={listUserIdFollowing}
      />
    </Box>
  );
};
export default ProfileHeader;
