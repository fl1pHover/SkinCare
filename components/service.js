import {
     Box,
     Grid,
     GridItem,
     Image,
     Link,
     Text,
     VStack,
} from "@chakra-ui/react";
import React from "react";
import { TbMessages } from "react-icons/tb";
import Hding from "../utils/hding";
import MainContainer from "./layout/mainContainer";

const Service = () => {
     return (
          <MainContainer>
               <Grid
                    templateColumns={{
                         base: "repeat(1,1fr)",
                         md: "repeat(2,1fr)",
                    }}
                    height="100%"
                    position={"relative"}
                    zIndex="2"
               >
                    <GridItem height={{ base: "240px", md: "100%" }}>
                         <Image
                              src="https://pathwell.axiomthemes.com/wp-content/uploads/2017/10/bg-21-copyright.jpg"
                              objectFit="cover"
                              height={"full"}
                              width="full"
                         />
                         {/* <Box
                              backgroundImage="url(
                                   'https://pathwell.axiomthemes.com/wp-content/uploads/2017/10/bg-21-copyright.jpg'
                              )"
                         ></Box> */}
                    </GridItem>
                    <GridItem
                         p={{ base: "2em", sm: "3em", md: "4.5em" }}
                         bgColor={"bgGrey"}
                         textAlign="center"
                    >
                         <VStack
                              justifyContent={"space-between"}
                              height="full"
                              textStyle={"main"}
                         >
                              <Hding
                                   h1={"Professional Care You Can Trust"}
                                   h3={"We Provide Care"}
                              />
                              <Text>
                                   We trace our success as a company to the
                                   simple and enduring philosophy that aging is
                                   a gift. The wealth of knowledge and
                                   experience that comes with age is a gift to
                                   the individual & the family.
                              </Text>
                              <Text>
                                   We work to provide an environment that
                                   supports the whole person—mind and heart, as
                                   well as body.
                              </Text>

                              <Box position={"relative"} width="100%">
                                   <Box
                                        borderRadius={"100%"}
                                        p="30px"
                                        width={"50px"}
                                        bgColor="pink"
                                        color={"white"}
                                        fontsize="30px"
                                        className="divider"
                                   >
                                        <TbMessages />
                                   </Box>
                                   <Link href="/">
                                        <Text textStyle={"red"}>
                                             yourwebsite@info.com
                                        </Text>
                                   </Link>
                              </Box>
                         </VStack>
                    </GridItem>
               </Grid>
          </MainContainer>
     );
};

export default Service;
