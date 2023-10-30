import AuthWrap from "./auth-wrap";
import {
  Box,
  Input,
  FormControl,
  Link,
  FormLabel,
  VStack,
  Button,
  Text,
  Heading,
  FormErrorMessage,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import styled from "@emotion/styled";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormStyled = styled.form`
  width: 400px;
  padding: 0 20px;
`;

const Register = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .max(20, "Maximum 20 characters")
        .min(6, "Minimum 6 characters")
        .required("Required"),
      email: Yup.string()
        .max(50, "Maximum 50 character")
        .required("Required")
        .matches(
          /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter valid email address",
        ),
      password: Yup.string()
        .required("Required")
        .min(6, "Minimun 6 characters")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{6,19}$/,
          "Include least one letter, one number, one special character",
        ),
    }),
  });
  return (
    <AuthWrap>
      <FormStyled onSubmit={formik.handleSubmit}>
        <Box mb={3}>
          <Heading textAlign="center">Welcome to Penguin</Heading>
          <Text
            textAlign="center"
            color={useColorModeValue("blackAlpha.600", "whiteAlpha.300")}
            mt={2}
          >
            We've missed you! Please sign in to catch up on what you've missed
          </Text>
        </Box>
        <VStack spacing={6} align="flex-start">
          <FormControl isInvalid={formik.errors.userName}>
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
              onChange={formik.handleChange}
              value={formik.values.userName}
            />
            {formik.errors.userName && (
              <FormErrorMessage>{formik.errors.userName}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={formik.errors.email}>
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
              onChange={formik.handleChange}
              value={formik.values.email}
            />

            {formik.errors.email && (
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={formik.errors.password}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password..."
              name="password"
              variant="filled"
              id="password"
              _focus={{
                backgroundColor: `${useColorModeValue(
                  "whiteAlpha.900",
                  "blackAlpha.300",
                )}`,
              }}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && (
              <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            )}
          </FormControl>
          <Button type="submit" colorScheme="teal" width="full">
            Sign up
          </Button>
        </VStack>
        <Text mt={4} textAlign="center">
          Already have an account ?{" "}
          <Link
            as={ReactRouterLink}
            color={useColorModeValue("blue.500", "pink.400")}
            to="/login"
          >
            Sign in{" "}
          </Link>{" "}
          now to share your great momment
        </Text>
      </FormStyled>
    </AuthWrap>
  );
};

export default Register;
