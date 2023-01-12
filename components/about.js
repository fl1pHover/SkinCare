import {
  Box,
  Center,
  Flex,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

import { tabs } from '../constant';
import MainContainer from '../layout/mainContainer';
import Hding from '../utils/hding';

const About = () => (
  <Box bgColor="bgGrey">
    <MainContainer id="equipment" as="section">
      <Center
        textAlign="center"
        bgColor="white"
        transform={{
          base: 'translateY(0)',
          lg: 'translateY(-50px)',
        }}
        zIndex="5"
        position="relative"
        py="60px"
      >
        <VStack>
          <Hding h1="Тоног төхөөрөмж" h3="Монголд цор ганц" />

          <Tabs variant="unstyled">
            <TabList
              textTransform="uppercase"
              gap={{ base: '1px', lg: '15px' }}
              display="flex"
              flexDirection={{ base: 'column', lg: 'row' }}
              justifyContent="center"
            >
              {tabs.map((tab, index) => (
                <Tab
                  key={index}
                  {...tab}
                  _selected={{
                    color: 'white',
                    bg: 'water',
                    _hover: {
                      bg: 'water',
                      color: 'white',
                      cursor: 'context-menu',
                    },
                  }}
                  bg="#f8f8f8"
                  _hover={{
                    bg: 'bgGrey',
                    color: 'pink',
                  }}
                  textTransform="uppercase"
                  fontWeight="bold"
                  fontSize="14px"
                  px="30px"
                  py={{ base: '10px', lg: '20px' }}
                  borderRadius={{
                    base: '0',
                    lg: '30px',
                  }}
                >
                  {tab.tab}
                </Tab>
              ))}
            </TabList>
            <TabPanels p={{ base: 0, lg: '2em' }}>
              {tabs.map((tabpanel, index) => (
                <TabPanel
                  key={index}
                  {...tabpanel}
                  _selected={{
                    color: 'white',
                    bg: 'water',
                  }}
                >
                  <Flex
                    direction={{
                      base: 'column',
                      lg: 'row',
                    }}
                    gap="40px"
                  >
                    <Image
                      src={tabpanel.image}
                      alt="image1"
                      width={{
                        base: '100%',
                        lg: '55%',
                      }}
                      maxHeight={{
                        base: '350px',
                        lg: '100%',
                      }}
                      objectFit="cover"
                    />

                    <VStack
                      textAlign="left"
                      width={{
                        base: '100%',
                        lg: '45%',
                      }}
                      px={{
                        base: '2em',
                        lg: 0,
                      }}
                    >
                      <Text textStyle="mainHeading">{tabpanel.heading}</Text>
                      <br />
                      <Text textStyle="main">{tabpanel.text}</Text>
                    </VStack>
                  </Flex>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </VStack>
      </Center>
    </MainContainer>
  </Box>
);

export default About;
