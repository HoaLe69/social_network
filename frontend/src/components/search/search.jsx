import {
  Box,
  InputGroup,
  Input,
  InputRightElement,
  Heading,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
import { useState } from "react";
import SearchResult from "./search-result";

const RecentSearch = () => {
  const searchRecents = JSON.parse(localStorage.getItem("searchRecents")) || [];
  const color = useColorModeValue("gray.800", "whileAlpha.200");
  return (
    <Box pt={2}>
      <Heading as="h3" fontSize="18px">
        Recent Search
      </Heading>
      <List pl={2}>
        {searchRecents?.slice(-3)?.map((search, index) => {
          return (
            <ListItem key={index}>
              <ListIcon as={AiFillClockCircle} color={color} />
              {search}
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

const Search = () => {
  const [searchs, setSearchs] = useState(() => {
    return JSON.parse(localStorage.getItem("searchRecents")) || [];
  });
  const [searchValue, setSearchValue] = useState("");
  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleOnClickSearch = () => {
    setSearchs((pre) => [...pre, searchValue]);
    localStorage.setItem("searchRecents", JSON.stringify(searchs));
  };
  const sampleData = [
    {
      displayName: "My nguyen",
    },
    {
      displayName: "Van hoa",
    },
  ];
  return (
    <Box>
      <Box as="header" pt={2}>
        <InputGroup>
          <Input
            value={searchValue}
            onChange={handleOnChange}
            placeholder="Search..."
            name="search"
            bg={useColorModeValue("whiteAlpha.600", "whiteAlpha.200")}
          />
          <InputRightElement>
            <Box as="button" onClick={handleOnClickSearch}>
              <FaSearch />
            </Box>
          </InputRightElement>
        </InputGroup>
      </Box>
      <RecentSearch />
      <Box pt={2}>
        <Heading as="h3" fontSize="18px">
          Search Results
        </Heading>
        {sampleData.map((data, index) => {
          return <SearchResult key={index} displayName={data.displayName} />;
        })}
      </Box>
    </Box>
  );
};

export default Search;
