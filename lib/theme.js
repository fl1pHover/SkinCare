import { extendTheme } from '@chakra-ui/react';

const colors = {
  grey: '#89807c',
  bgGrey: '#f3f2f0',
  black: '#000000',
  pink: '#e6b59e',
  water: '#8dbcd2',
  drop: '#c8e2ed',
  lightBrown: '#3e3836',
  brown: '#322c29',
  darkBrown: '#25211e',
};

const styles = {
  global: {
    body: {
      bg: '#fff',
      color: '#352219',
    },
  },
};

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
};

const fonts = {
  heading: `'Roboto', serif`,
};

const components = {
  Text: {
    baseStyle: {
      letterSpacing: '-0.17px',
    },
  },
  Link: {
    baseStyle: {
      transition: '0.3s ease',
      _hover: {
        textDecoration: 'none',
      },
    },
  },
  Button: {
    baseStyle: {
      textTransform: 'uppercase',
    },
    variants: {
      textBtn: {
        fontSize: '14px',
        padding: {
          base: '1em 3em',
          md: '2em 3.75em',
        },
        bgColor: 'pink',
        color: 'white',
      },
    },
  },
  Heading: {
    baseStyle: {
      color: 'black',
    },
  },
};

const textStyles = {
  mainHeading: {
    fontWeight: 'bold',
    fontSize: { base: '15px', lg: '15px', '2xl': '20px' },
    fontFamily: `'Roboto', sans-serif`,
  },
  main: {
    fontSize: '15px',
    fontFamily: `'Roboto', sans-serif`,
    color: '#89807c',
  },
  ss: {
    color: 'white',
    fontWeight: '500',
    lineHeight: '1.2',
    fontFamily: `'Roboto', sans-serif`,
    fontSize: { base: '26px', lg: '45px', '2xl': '60px' },
  },
  hw: {
    fontSize: { base: '1.2em', sm: '1.7em', md: '1.8em' },
    lineHeight: '1.2',

    color: 'water',
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
