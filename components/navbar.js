import { Box, Flex, Heading, HStack, Link, Text } from "@chakra-ui/react";
import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import MainContainer from "./layout/mainContainer";
const LinkItem = ({ text }) => {
     return (
          <Link
               py={"2.5em"}
               px="0.5em"
               color="black"
               _hover={{
                    color: "pink",
               }}
          >
               <Text
                    textTransform={"uppercase"}
                    fontWeight={"bold"}
                    fontSize={{ base: "12px", xl: "14px" }}
                    letterSpacing={"1px"}
               >
                    {text}
               </Text>
          </Link>
     );
};

const Navbar = () => {
     return (
          <>
               <Box bgColor={"bgGrey"} id="navbar" as="section">
                    <MainContainer>
                         <Flex justifyContent={"space-between"} py="0.9em">
                              <Text
                                   textStyle="main"
                                   display={{ base: "none", lg: "block" }}
                              >
                                   Бидэнтэй түргэн холбогдоорой!
                              </Text>
                              <Flex gap="20px">
                                   <Flex alignItems="center" gap="5px">
                                        <BiPhoneCall fontSize="25px" />
                                        <Text textStyle="main">
                                             +18 065 555 22 33
                                        </Text>
                                   </Flex>

                                   <Flex alignItems="center" gap="5px">
                                        <FiClock fontSize="25px" />
                                        <Text textStyle="main">
                                             Mn-Sn: 8am to 9pm
                                        </Text>
                                   </Flex>
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

                              <LinkItem text="features" />
                              <LinkItem text="contacts" />
                         </HStack>
                    </Flex>
               </MainContainer>
          </>
     );
};

export default Navbar;
