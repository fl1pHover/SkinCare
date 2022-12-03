import { extendTheme } from "@chakra-ui/react";
import "@fontsource/cookie";
import "@fontsource/libre-baskerville";
import "@fontsource/poppins";

const colors = {
     grey: "#89807c",
     bgGrey: "#f3f2f0",
     black: "#000000",
     pink: "#e6b59e",
     water: "#8dbcd2",
     drop: "#c8e2ed",
     lightBrown: "#3e3836",
     brown: "#322c29",
     darkBrown: "#25211e",
};

const styles = {
     global: {
          body: {
               bg: "#fff",
               color: "#352219",
          },
     },
};

const breakpoints = {
     sm: "320px",
     md: "768px",
     lg: "960px",
     xl: "1200px",
     "2xl": "1536px",
};

const fonts = {
     heading: `'Libre Baskerville', serif`,
};

const components = {
     Text: {
          baseStyle: {
               letterSpacing: "-0.17px",
          },
     },
     Link: {
          baseStyle: {
               transition: "0.3s ease",
               _hover: {
                    textDecoration: "none",
               },
          },
     },
     Button: {
          baseStyle: {
               textTransform: "uppercase",
          },
          variants: {
               textBtn: {
                    fontSize: "14px",
                    padding: "2em 3.75em",
                    bgColor: "pink",
                    color: "white",
               },
          },
     },
     Heading: {
          baseStyle: {
               color: "black",
          },
     },
};

const textStyles = {
     mainHeading: {
          fontWeight: "bold",
          fontSize: { base: "15px", lg: "15px", "2xl": "20px" },
          fontFamily: `'Libre Baskerville', serif`,
     },
     main: {
          fontSize: "14px",
          fontFamily: `'Poppins', sans-serif`,
          color: "#89807c",
     },
     ss: {
          color: "white",
          fontWeight: "bold",
          lineHeight: "1.2",
          fontFamily: `'Libre Baskerville', serif`,
          fontSize: { base: "26px", lg: "45px", "2xl": "60px" },
     },
     hw: {
          fontSize: { base: "1.7em", md: "2.1em" },
          lineHeight: "1.2",
          fontFamily: `'Cookie', cursive`,
          color: "water",
     },
};
const theme = extendTheme({
     styles,
     components,
     fonts,
     breakpoints,
     // shadows,
     textStyles,
     colors,
});
export default theme;
