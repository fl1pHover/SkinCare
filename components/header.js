import { Box, Button, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Header = () => {
     return (
          <>
               <Box
                    position={"relative"}
                    marginBottom="-50px"
                    _before={{
                         content: `""`,
                         position: "absolute",
                         width: "100%",
                         height: "100%",
                         bg: "gray.900",
                         opacity: "0.6",
                         zIndex: "1",
                    }}
               >
                    <Image
                         position={"relative"}
                         src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                         alt="image"
                         objectFit="cover"
                         width={"full"}
                         height={{ base: "320px", md: "500px", lg: "850px" }}
                    />
                    <VStack
                         position={"absolute"}
                         top="50%"
                         left={"50%"}
                         transform="translate(-50%,-50%)"
                         zIndex="2"
                    >
                         <Heading
                              color={"white"}
                              fontSize={{
                                   base: "24px",
                                   sm: "40px",
                                   md: "50px",
                                   lg: "72px",
                                   "2xl": "80px",
                              }}
                              textAlign={"center"}
                         >
                              Care for Every
                              <br />
                              Situation
                         </Heading>
                         <Text textStyle={"hw"} color={"water"}>
                              Lorem ipsum dolor sit.
                         </Text>
                         <Button variant={"textBtn"} rounded="50px">
                              Contact Us
                         </Button>
                    </VStack>
               </Box>
          </>
     );
};

export default Header;
