import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import "@fontsource/m-plus-rounded-1c/300.css";
import "@fontsource/m-plus-rounded-1c/700.css";

const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};
const styles = {
  global: (props) => ({
    body: {
      bg: mode("#f0e7db", "#202023")(props),
    },
  }),
};
const fonts = {
  heading: `'M PLUS Rounded 1c' , san-serif`,
};
const theme = extendTheme({ config, styles, fonts });

export default theme;
