import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import MainContainer from '../layout/mainContainer';
import Hding from '../utils/hding';

const ContactBanner = () => {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)' }}
      gap={{ base: 5 }}
      bgColor="brown"
      color="white"
      pos="relative"
      padding={{ base: '50px 30px', md: '70px 30px' }}
      transform={{ base: 'translateY(50px)', sm: 'translateY(-50px)' }}
      zIndex="1"
    >
      <GridItem>
        <Flex
          cursor="pointer"
          justifyContent={{ base: 'flex-start', sm: 'center' }}
          className="contact__banner"
        >
          <Center
            pos="relative"
            width={{ base: '50px', md: '70px' }}
            height={{ base: '50px', md: '70px' }}
            bgColor="#3e3836"
            borderRadius="100%"
            mr="30px"
            fontSize={{ base: '20px', md: '30px' }}
            color="pink"
            className="phone__icon"
          >
            <FiPhoneCall />
            <FiPhoneCall className="phone__ani" />
          </Center>
          <VStack alignItems="flex-start">
            <Text
              textStyle="mainHeading"
              fontSize={{ base: '16px', md: '18px' }}
            >
              Зөвөлгөө авах дугаар
            </Text>
            <Text
              fontSize={{ base: '17px', md: '20px' }}
              color="#cccccc"
              className="phone"
            >
              +976 88330044
            </Text>
          </VStack>
        </Flex>
      </GridItem>
      <GridItem>
        <Flex
          cursor="pointer"
          justifyContent={{ base: 'flex-start', sm: 'center' }}
          className="contact__banner"
        >
          <Center
            pos="relative"
            width={{ base: '50px', md: '70px' }}
            height={{ base: '50px', md: '70px' }}
            bgColor="#3e3836"
            borderRadius="100%"
            mr="30px"
            fontSize={{ base: '20px', md: '30px' }}
            color="pink"
            className="phone__icon"
          >
            <FiPhoneCall />
            <FiPhoneCall className="phone__ani" />
          </Center>
          <VStack alignItems="flex-start">
            <Text
              textStyle="mainHeading"
              fontSize={{ base: '16px', md: '18px' }}
            >
              Үзлэгийн цаг авах дугаар
            </Text>
            <Text
              fontSize={{ base: '17px', md: '20px' }}
              color="#cccccc"
              className="phone"
            >
              +976 9966 5511
            </Text>
          </VStack>
        </Flex>
      </GridItem>
    </Grid>
  );
};

const choose = [
  {
    id: 1,
    heading: 'Meeting Your Emotional Needs',
    info: 'An elderly person needs to feel safe, remain close to other people and believe that life continues.',
    bg: 'white',
  },
  {
    id: 2,
    heading: 'Meeting Your Physical Needs',
    info: 'We offer skilled nursing services at all of our locations with professionally trained nursing staff.',
    bg: 'bgGrey',
  },
  {
    id: 3,
    heading: 'Enjoy Independent Living',
    info: 'Gives seniors the confidence to remain independent in a professionally managed environment.',
    bg: 'white',
  },
];

const Features = () => {
  return (
    <MainContainer id="features" as="section">
      <ContactBanner />
      <Grid
        templateColumns={{
          base: 'repeat(1,1fr)',
          md: 'repeat(2,1fr)',
        }}
        gap="50px"
        mb="50px"
        pt={{ base: '100px', sm: '0' }}
      >
        <GridItem textAlign={{ base: 'center', sm: 'left' }}>
          <Hding
            h1="Эрүүл мэнд эрхэм дээд баялаг"
            h3="Яагаад биднийг сонгох вэ?"
          />
          <Stack>
            {choose.map(({ ...props }, i) => {
              return (
                <Flex
                  key={i}
                  p="30px"
                  alignItems="center"
                  flexDirection={{
                    base: 'column',
                    sm: 'row',
                  }}
                  bgColor={props.bg}
                >
                  <Box width="25%" mr="30px">
                    <Center
                      width="60px"
                      height="60px"
                      bgColor="water"
                      borderRadius="100%"
                      color="white"
                      fontSize="20px"
                      mb="10px"
                    >
                      {props.id}
                    </Center>
                  </Box>
                  <Stack>
                    <Text textStyle="mainHeading">{props.heading}</Text>
                    <Text textStyle="main">{props.info}</Text>
                  </Stack>
                </Flex>
              );
            })}
          </Stack>
        </GridItem>
        <GridItem display={{ base: 'none', md: 'block' }}>
          <Image
            src="https://pathwell.axiomthemes.com/wp-content/uploads/2017/10/blog-11-copyright.jpg?id=46"
            alt="asd"
            height="100%"
            objectFit="cover"
          />
        </GridItem>
      </Grid>
    </MainContainer>
  );
};

export default Features;
