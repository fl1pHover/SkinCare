import { Box, Button, Flex, Heading, HStack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { FiClock } from 'react-icons/fi';
import { GrClose, GrMenu } from 'react-icons/gr';
import MainContainer from '../../layout/mainContainer';
import LinkItem from '../../utils/LinkItem';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  return (
    <>
      <Box bgColor={'bgGrey'} id="navbar" as="section">
        <MainContainer>
          <Flex justifyContent={'space-between'} py="0.9em">
            <Text textStyle="main" display={{ base: 'none', lg: 'block' }}>
              Бидэнтэй түргэн холбогдоорой!
            </Text>
            <Flex gap="20px">
              <Flex alignItems="center" gap="5px">
                <BiPhoneCall fontSize="25px" />
                <Text textStyle="main">+18 065 555 22 33</Text>
              </Flex>

              <Flex alignItems="center" gap="5px">
                <FiClock fontSize="25px" />
                <Text textStyle="main">Mn-Sn: 8am to 9pm</Text>
              </Flex>
            </Flex>
          </Flex>
        </MainContainer>
      </Box>
      <MainContainer>
        <Flex
          alignItems={'center'}
          justify="space-between"
          py={{ base: 5, md: 0 }}
        >
          <Heading width={'25%'}>Logo</Heading>
          <HStack
            width={'75%'}
            justifyContent="flex-end"
            display={{ base: 'none', md: 'flex' }}
          >
            <LinkItem text="Нүүр" href="#header" />
            <LinkItem text="Бидний тухай" href="#about" />
            <LinkItem text="Хамт олон" href="#teams" />

            <LinkItem text="Төхөөрөмж" href="#equipment" />
            <LinkItem text="Холбоо барих" href="#contact" />
          </HStack>
          <Button
            display={{ base: 'block', md: 'none' }}
            onClick={() => setMobile(!mobile)}
          >
            <GrMenu />
          </Button>
        </Flex>
        {mobile ? (
          <div onClick={() => setMobile(!mobile)}>
            <MobileNavbar height="100vh" />
            <Button position="fixed" right="20px" top="20px" zIndex="999">
              <GrClose />
            </Button>
          </div>
        ) : (
          ''
        )}
      </MainContainer>
    </>
  );
};

export default Navbar;
