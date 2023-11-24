import {
  Box,
  Alert,
  AlertIcon,
  Heading,
  FormControl,
  FormLabel,
  Button,
  Input,
  VStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import styled from "@emotion/styled";
import axios from "axios";
const FormStyled = styled.form`
  width: 400px;
`;

const ForgotPassword = ({ setForgotPass }) => {
  const [formData, setFormData] = useState({ userName: "", email: "" });
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((pre) => ({ ...pre, [name]: value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!formData.userName) {
      setErr("Please enter your name!!!");
      return;
    }
    if (!formData.email) {
      setErr("Please enter your email!!!");
      return;
    }
    setLoading(true);
    try {
      const baseUrl = process.env.REACT_APP_API_URL;
      const res = await axios.post(
        `${baseUrl}/auth/send-email/forgot-pass`,
        formData,
        {},
      );
      console.log(res);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setErr(err.response.data.message);
      setLoading(false);
    }
  };
  return (
    <Box w="400px">
      <Heading textAlign="center" mb={2}>
        Forgot Password
      </Heading>
      <Text
        textAlign="center"
        mb={4}
        color={useColorModeValue("blackAlpha.600", "whiteAlpha.300")}
      >
        After submit form, please check your email address
      </Text>
      <VStack spacing="3">
        <FormStyled>
          <FormControl>
            <FormLabel htmlFor="userName">Username</FormLabel>
            <Input
              type="text"
              variant="filled"
              placeholder="Enter your name..."
              name="userName"
              id="userName"
              _focus={{
                backgroundColor: `${useColorModeValue(
                  "whiteAlpha.900",
                  "blackAlpha.300",
                )}`,
              }}
              onChange={handleOnChange}
              value={formData.userName}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              variant="filled"
              placeholder="Enter your email..."
              name="email"
              id="email"
              _focus={{
                backgroundColor: `${useColorModeValue(
                  "whiteAlpha.900",
                  "blackAlpha.300",
                )}`,
              }}
              onChange={handleOnChange}
              value={formData.email}
            />
          </FormControl>
          {err && (
            <Alert status="error" mt={2}>
              <AlertIcon />
              {err}
            </Alert>
          )}

          <Button
            mt={4}
            isLoading={loading}
            type="submit"
            loadingText="Sending"
            colorScheme="teal"
            width="full"
            onClick={handleOnSubmit}
          >
            Recover Password
          </Button>
        </FormStyled>
      </VStack>
      <Box
        mt="10"
        color="teal"
        cursor="pointer"
        display="flex"
        alignItems="center"
        width="max-content"
        gap={2}
        onClick={() => setForgotPass(false)}
      >
        <FaArrowCircleLeft />
        <Text _hover={{ textDecoration: "underline" }}> Login</Text>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
