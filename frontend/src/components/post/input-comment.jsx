import {
  InputGroup,
  useColorModeValue,
  Input,
  InputRightElement,
  Box,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { FaRegSmile } from "react-icons/fa";
import { EmojiKeyboard } from "reactjs-emoji-keyboard";

const InputComment = ({ postId, sendMessage }) => {
  const userLogin = JSON.parse(localStorage.getItem("user"));
  const [commentValue, setCommentValue] = useState("");
  const refInput = useRef();
  const [showEmoji, setShowEmoji] = useState(false);
  const handleSendMessage = () => {
    const message = {
      userId: userLogin?.id,
      postId: postId,
      avatar: userLogin?.avatar,
      displayName: userLogin?.displayName,
      content: commentValue,
    };
    if (postId && userLogin?.id) {
      sendMessage(message, "comments", postId);
      setCommentValue("");
      refInput?.current.focus();
    }
  };

  const handleKeydown = (e) => {
    if (e.key === "Enter") handleSendMessage();
  };
  return (
    <InputGroup display="flex">
      <Input
        flex="1"
        ref={refInput}
        px={2}
        pr={20}
        variant="flushed"
        focusBorderColor="grassTeal"
        placeholder="Enter your comment..."
        name="comment"
        value={commentValue}
        onChange={(e) => setCommentValue(e.target.value)}
        onKeyDown={handleKeydown}
      />
      <InputRightElement display="flex" alignItems="center" gap="4">
        <Box pos="relative" fontSize="20px" cursor="pointer">
          <FaRegSmile onClick={() => setShowEmoji(!showEmoji)} />
          <Box
            display={showEmoji ? "block" : "none"}
            position="absolute"
            bottom="180%"
            right={0}
          >
            <EmojiKeyboard
              height={320}
              width={350}
              theme={useColorModeValue("light", "dark")}
              searchLabel="Procurar emoji"
              searchDisabled={false}
              onEmojiSelect={(emoji) =>
                setCommentValue((pre) => pre + emoji.character)
              }
              categoryDisabled={false}
            />
          </Box>
        </Box>
        <Box mr={7} as="button" onClick={handleSendMessage}>
          <BsFillSendFill />
        </Box>
      </InputRightElement>
    </InputGroup>
  );
};

export default InputComment;
