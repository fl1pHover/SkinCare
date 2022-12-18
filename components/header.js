import { Box, Button, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Header = () => {
     return (
          <>
               <Box id="header" as="section"
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
                         src="https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/256766402_3144010949209120_3197352341693407159_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHZY8Br3_aXX3u98EjGnnEK9HJFrdTJiB_0ckWt1MmIH9f6OCHtmEj6lBzj_X-qLH0nJ36mMYALiqIpG6-gdrP_&_nc_ohc=8Fcz6O2x1-0AX_WeLtv&_nc_ht=scontent.fuln1-2.fna&oh=00_AfDf1tineKS0HBbpiAYdhKrw9K5E9nT7_aPM6GsJ66e5WQ&oe=63A46918"
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
                              Мон Шинжүкү
                              <br />
                              скин мед
                         </Heading>
                         <Text textStyle={"hw"} color={"water"}>
                              Lorem ipsum dolor sit.
                         </Text>
                         <Button variant={"textBtn"} rounded="50px">
                              Бидэнтэй холбогдох
                         </Button>
                    </VStack>
               </Box>
          </>
     );
};

export default Header;
