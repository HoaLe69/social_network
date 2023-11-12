import {
  Input,
  Box,
  InputGroup,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsFillSendFill } from "react-icons/bs";
import { useRef, useState } from "react";

const InputRoomChat = ({ roomId, sendMessage }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef(null);
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
  return (
    <Box py={2} bg={bgInput}>
      <InputGroup>
        <Input
          ref={inputRef}
          placeholder="Message..."
          value={content}
          name="content"
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={handleKeydown}
        />
        <InputRightElement>
          <Box as="button" onClick={handleSendMessage}>
            <BsFillSendFill />
          </Box>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default InputRoomChat;
