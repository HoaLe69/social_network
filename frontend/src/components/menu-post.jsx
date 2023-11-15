import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { deletePost } from "@redux/api-request/posts";
import { useDispatch, useSelector } from "react-redux";

const MenuPost = ({ id, cloudId }) => {
  const isLoading = useSelector((state) => state.post.deletePost.isFetching);
  const accessToken = JSON.parse(localStorage.getItem("user")).accessToken;
  const dispatch = useDispatch();
  const handleOnClickMenuItemDel = () => {
    deletePost(dispatch, id, cloudId, accessToken);
  };
  return (
    <Menu placement="bottom-end" closeOnSelect={false}>
      <MenuButton
        rounded="full"
        as={IconButton}
        icon={<BiDotsHorizontalRounded />}
      />
      <MenuList>
        <MenuItem
          leftIcon={<AiFillDelete />}
          isLoading={isLoading}
          loadingText="delete"
          as={Button}
          onClick={handleOnClickMenuItemDel}
        >
          Delete post
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuPost;
