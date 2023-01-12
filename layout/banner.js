import { Box, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Btn from '../utils/button';
import MainContainer from './mainContainer';
const Banner = ({ children, h2, text, hw, btn }) => {
  return (
    <Box
      position="relative"
      _before={{
        content: `""`,
        position: 'absolute',
        width: '100%',
        height: '100%',
        bg: 'gray.900',
        opacity: '0.6',
        zIndex: '1',
      }}
    >
      <Image
        src="https://pathwell.axiomthemes.com/wp-content/uploads/2017/10/bg-22-copyright.jpg?id=382"
        alt="banner image1"
        height={{
          base: '280px',
          md: '370px',
          lg: '400px',
          '2xl': '730px',
        }}
        width="full"
        objectFit="cover"
      />
      <VStack
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%,-50%)"
        zIndex="2"
        textAlign="center"
        width={{ base: '100%', md: '50%' }}
      >
        <MainContainer>
          <Text
            // fontSize={{ base: "26px", lg: "32px", "2xl": "60px" }}
            textStyle="ss"
          >
            {h2}
          </Text>
          <Text textStyle="hw" my="15px">
            {hw}
          </Text>
          <Text textStyle="main" my="20px" color="white">
            {text}
          </Text>
          {children}
          <Btn href={'/'} text={btn} />
        </MainContainer>
      </VStack>
    </Box>
  );
};

export default Banner;
