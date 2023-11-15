import {
  Input,
  Box,
  InputGroup,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsFillSendFill } from "react-icons/bs";
import { FaRegSmile } from "react-icons/fa";
import { useRef, useState } from "react";
import { EmojiKeyboard } from "reactjs-emoji-keyboard";

const InputRoomChat = ({ roomId, sendMessage }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef(null);
  const [showEmoji, setShowEmoji] = useState(false);
  const userLogin = JSON.parse(localStorage.getItem("user"));

  const handleSendMessage = () => {
    const infor = {
      userId: userLogin?.id,
      conversationId: roomId,
      content: content,
    };
    if (roomId) {
      sendMessage(infor, "messages", roomId);
      setContent("");
      inputRef?.current.focus();
    }
  };
  const handleKeydown = (e) => {
    if (e.key === "Enter") handleSendMessage();
  };

  const bgInput = useColorModeValue("whiteAlpha.700", "whiteAlpha.100");
  console.log(showEmoji);
  return (
    <Box p={3}>
      <Box
        py={4}
        display="flex"
        alignItems="center"
        bg={bgInput}
        px={2}
        rounded="25px"
      >
        <Box fontSize="25px" cursor="pointer" position="relative">
          <FaRegSmile onClick={() => setShowEmoji(!showEmoji)} />
          <Box
            display={showEmoji ? "block" : "none"}
            position="absolute"
            bottom="180%"
          >
            <EmojiKeyboard
              height={320}
              width={350}
              theme={useColorModeValue("light", "dark")}
              searchLabel="Procurar emoji"
              searchDisabled={false}
              onEmojiSelect={(emoji) =>
                setContent((pre) => pre + emoji.character)
              }
              categoryDisabled={false}
            />
          </Box>
        </Box>
        <InputGroup px={2}>
          <Input
            fontSize="18px"
            ref={inputRef}
            placeholder="Message..."
            value={content}
            name="content"
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={handleKeydown}
            variant="unstyled"
          />
          <InputRightElement>
            <Box as="button" onClick={handleSendMessage}>
              <BsFillSendFill />
            </Box>
          </InputRightElement>
        </InputGroup>
      </Box>
    </Box>
  );
};

export default InputRoomChat;
