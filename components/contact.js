import {
     AspectRatio,
     Center,
     Flex,
     Grid,
     GridItem,
     Text,
} from "@chakra-ui/react";
import React from "react";
import { BiMessageRounded, BiPhoneCall } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import Hding from "../utils/hding";
import MainContainer from "./layout/mainContainer";

const contact = [
     {
          icon: <GoLocation />,
          title: "Address:",
          info: "71 Pilgrim Avenue \n" + "Chevy Chase, MD 20815",
     },
     {
          icon: <BiMessageRounded />,
          title: "Email:",
          info: "youremail@info.com",
     },
     {
          icon: <BiPhoneCall />,
          title: "Phone:",
          info: "+18 (077) 555 22 33",
     },
];

const Contact = () => {
     return (
          <MainContainer id="contact" as="section">
               <Grid
                    templateColumns={{
                         base: "repeat(1,1fr)",
                         lg: "repeat(2,1fr)",
                    }}
                    transform="translateY(50px)"
               >
                    <GridItem>
                         <AspectRatio ratio={{ base: 3 / 4, lg: 4 / 5 }}>
                              <iframe
                                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5195.490207367872!2d106.91772847025801!3d47.91965503015372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9692442297c949%3A0x71884efc4dce5cb2!2sSukhbaatar%20Square!5e0!3m2!1sen!2smn!4v1670029773811!5m2!1sen!2smn"
                                   width="100%"
                                   height="100%"
                              />
                         </AspectRatio>
                    </GridItem>
                    <GridItem
                         px="4em"
                         bgColor="white"
                         display="flex"
                         justifyContent="center"
                         alignItems="flex-start"
                         flexDirection="column"
                         textAlign="start"
                    >
                         <Hding h1="Contact Us" h3="Stay in touch" />

                         {contact.map(({ ...props }, index) => {
                              return (
                                   <Flex
                                        alignItems="center"
                                        key={index}
                                        py="30px"
                                        borderBottom="1px solid #eceae6 "
                                   >
                                        <Center
                                             width="60px"
                                             height="60px"
                                             borderRadius="100%"
                                             bgColor="bgGrey"
                                             color="pink"
                                             fontSize="30px"
                                        >
                                             {props.icon}
                                        </Center>
                                        <Text ml="15px" width="80px">
                                             {props.title}
                                        </Text>
                                        <Text
                                             textStyle="main"
                                             fontSize="16px"
                                             fontWeight="bold"
                                        >
                                             {props.info}
                                        </Text>
                                   </Flex>
                              );
                         })}
                    </GridItem>
               </Grid>
          </MainContainer>
     );
};

export default Contact;
