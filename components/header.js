import { Box, Button, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  return (
    <>
      <Box
        id="header"
        as="section"
        position={'relative'}
        marginBottom="-50px"
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
          position={'relative'}
          src="/1.jpg"
          alt="header image"
          objectFit="cover"
          width={'full'}
          height={{ base: '320px', md: '500px', lg: '850px' }}
        />
        <VStack
          position={'absolute'}
          top="50%"
          left={'50%'}
          transform="translate(-50%,-50%)"
          zIndex="2"
        >
          <Heading
            color={'white'}
            fontSize={{
              base: '24px',
              sm: '35px',
              md: '50px',
              lg: '72px',
              '2xl': '80px',
            }}
            textAlign={'center'}
          >
            Мон Шинжүкү
            <br />
            скин мед
          </Heading>
          <Text textStyle={'hw'} mb="20px !important" color={'water'}>
            Lorem ipsum dolor sit.
          </Text>
          <Button variant={'textBtn'} rounded="50px">
            Бидэнтэй холбогдох
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default Header;
