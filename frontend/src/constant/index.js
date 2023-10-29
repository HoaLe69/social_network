import { useColorModeValue } from "@chakra-ui/react";

export const COLOR_THEME = {
  BG: () => {
    return useColorModeValue("#fff", "gray.700");
  },
  BG_BUTTON: () => {
    return useColorModeValue("whiteAlpha.500", "whiteAlpha.200");
  },
  BORDER: () => {
    return useColorModeValue("blackAlpha.300", "whiteAlpha.300");
  },
};
