import { InputGroup, Input, InputRightElement, Box } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";

const InputComment = ({ postId, sendMessage }) => {
  const userLogin = JSON.parse(localStorage.getItem("user"));
  const [commentValue, setCommentValue] = useState("");
  const refInput = useRef();
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

  return (
    <InputGroup>
      <Input
        ref={refInput}
        px={2}
        variant="flushed"
        focusBorderColor="grassTeal"
        placeholder="Enter your comment..."
        name="comment"
        value={commentValue}
        onChange={(e) => setCommentValue(e.target.value)}
      />
      <InputRightElement>
        <Box as="button" onClick={handleSendMessage}>
          <BsFillSendFill />
        </Box>
      </InputRightElement>
    </InputGroup>
  );
};

export default InputComment;
