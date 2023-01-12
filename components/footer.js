import {
  Box,
  Center,
  Flex,
  HStack,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import MainContainer from '../layout/mainContainer';

const IconLink = ({ children, href }) => {
  return (
    <Link href={href}>
      <Center
        width="40px"
        height="40px"
        bgColor="lightBrown"
        borderRadius="100%"
      >
        {children}
      </Center>
    </Link>
  );
};

const FooterItem = ({ href, text }) => {
  return (
    <Link
      href={href}
      py={{ base: '10px', md: '20px' }}
      px={{ base: '10px', md: '40px' }}
      color="white"
      _hover={{
        color: 'pink',
      }}
    >
      <Text
        fontSize="12px"
        // fontWeight="bold"

        textTransform="uppercase"
      >
        {text}
      </Text>
    </Link>
  );
};
const Footer = () => {
  return (
    <>
      <Box bgColor="brown" id="footer" as="section">
        <MainContainer>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            height="full"
            py="100px"
            flexDirection={{ base: 'column', md: 'row' }}
          >
            <HStack color="pink">
              <IconLink>
                <FiInstagram />
              </IconLink>
              <IconLink>
                <FaFacebookF />
              </IconLink>
              <IconLink>
                <BsTwitter />
              </IconLink>
            </HStack>
            <Text color="white" fontSize="30px">
              Logo
            </Text>
            <VStack alignItems="flex-start">
              <Text textStyle="main" color="bgGrey">
                Мон Шинжүкү © 2022.
              </Text>
              <Text textStyle="main">Бүх эрх хуулиар хамгаалагдсан.</Text>
            </VStack>
          </Flex>{' '}
        </MainContainer>
      </Box>
      <Box bgColor="darkBrown" py="10px">
        <MainContainer>
          <Flex flexWrap="wrap" justifyContent="center">
            <FooterItem href="/" text="Нүүр" />
            <FooterItem href="/" text="Бидний тухай" />
            <FooterItem href="/" text="Үйлчилгээ" />
            <FooterItem href="/" text="Тоног төхөөрөмж" />
            <FooterItem href="/" text="Бидэнтэй холбогдох" />
          </Flex>
        </MainContainer>
      </Box>
    </>
  );
};

export default Footer;
