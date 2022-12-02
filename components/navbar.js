import { Box, Flex, Heading, HStack, Link, Text } from "@chakra-ui/react";
import React from "react";
import MainContainer from "./layout/mainContainer";

const LinkItem = ({ text }) => {
     return (
          <Link py={"3em"} px="0.5em">
               <Text
                    textTransform={"uppercase"}
                    color="black"
                    fontWeight={"bold"}
                    fontSize="14px"
                    letterSpacing={"1px"}
                    _hover={{
                         color: "pink",
                    }}
               >
                    {text}
               </Text>
          </Link>
     );
};

const Navbar = () => {
     return (
          <>
               <Box bgColor={"bgGrey"}>
                    <MainContainer>
                         <Flex justifyContent={"space-between"} py="0.9em">
                              <Text>Lorem ipsum dolor sit amet.</Text>
                              <Flex>
                                   <Text>+18 065 555 22 33</Text>
                                   <Text>Mn-Sn: 8am to 9pm</Text>
                              </Flex>
                         </Flex>
                    </MainContainer>
               </Box>
               <MainContainer>
                    <Flex alignItems={"center"}>
                         <Heading width={"25%"}>Logo</Heading>
                         <HStack width={"75%"} justifyContent="flex-end">
                              <LinkItem text="Home" />
                              <LinkItem text="about us" />
                              <LinkItem text="servives" />
                              <LinkItem text="Living options" />
                              <LinkItem text="features" />
                              <LinkItem text="contacts" />
                         </HStack>
                    </Flex>
               </MainContainer>
          </>
     );
};

export default Navbar;
