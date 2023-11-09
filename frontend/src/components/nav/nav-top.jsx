import {
  Flex,
  IconButton,
  Box,
  Link,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  InputRightElement,
  Spinner,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import NavWrap from "./nav-wrap";
import Logo from "./logo";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { Link as ReactRouterLink } from "react-router-dom";
import NavMenuPc from "./nav-menu-items-pc";
import route from "@config/route";
import { BiSearchAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import axios from "axios";
import accessToken from "../../utilties/token";

const PopResult = ({ isOpen, result }) => {
  const bgHover = useColorModeValue("blackAlpha.200", "whiteAlpha.300");
  return (
    <Box
      display={isOpen && result.length > 0 ? "block" : "none"}
      p={1}
      rounded="10px"
      pos="absolute"
      right="0"
      left="0"
      top="90%"
      width="100%"
      bg={useColorModeValue("#fff", "#2D3748")}
    >
      <Heading fontSize="16px">Result</Heading>
      <Box p={1}>
        {result?.map((user) => {
          return (
            <Link
              _hover={{ textDecoration: "none" }}
              key={user?.id}
              as={ReactRouterLink}
              to={`/profile/${user?.id}`}
            >
              <Flex
                alignItems="center"
                gap="2"
                py={1}
                px={2}
                rounded="10px"
                _hover={{
                  backgroundColor: bgHover,
                }}
              >
                <Avatar src={user?.avatar} alt={user?.displayName} size="sm" />
                <Heading fontSize="13px">{user?.displayName}</Heading>
              </Flex>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};

const NavTop = ({ isFixed }) => {
  const baseUrl = process.env.REACT_APP_API_URL;

  const [search, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  const searchOutput = useDebounce(search);

  useEffect(() => {
    if (!searchOutput.trim()) {
      setLoading(false);
      return;
    }
    setLoading(true);
    const getSearchResult = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${baseUrl}/user/search?name=${searchOutput}`,
          { headers: { Authorization: `Bearer ${accessToken}` } },
        );
        if (res) {
          setIsOpen(true);
          setResult(res);
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    getSearchResult();
  }, [searchOutput, baseUrl]);

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <NavWrap isFixed={isFixed}>
      <Flex justify="space-between">
        <Logo />
        <Box pos="relative">
          <InputGroup
            bg={useColorModeValue("whiteAlpha.700", "whiteAlpha.200")}
            rounded="20px"
            w="300px"
          >
            <InputLeftElement pointerEvents="none">
              <BiSearchAlt />
            </InputLeftElement>
            <Input
              placeholder="Search"
              rounded="20px"
              focusBorderColor="whiteAlpha.300"
              value={search}
              onChange={handleOnChange}
            />
            {loading && (
              <InputRightElement>
                <Spinner />
              </InputRightElement>
            )}
          </InputGroup>
          <PopResult result={result} isOpen={isOpen} />
        </Box>

        <Box display={{ lg: "none" }}>
          <Link to={route.notifi} as={ReactRouterLink}>
            <IconButton
              fontSize={"20px"}
              isRound={true}
              icon={<AiOutlineHeart />}
              bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
            />
          </Link>
          <Link to={route.message} as={ReactRouterLink}>
            <IconButton
              fontSize={"20px"}
              isRound={true}
              ml={2}
              icon={<AiOutlineMessage />}
              bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
            />
          </Link>
        </Box>
        <NavMenuPc />
      </Flex>
    </NavWrap>
  );
};

export default NavTop;
