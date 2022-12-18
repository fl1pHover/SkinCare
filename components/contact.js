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
          title: "Хаяг:",
          info: "БЗД-ийн 1-р хороо, Consultower \n" + "79-р байрны үйлчилгээний төвийн 1 тоот",
     },
     {
          icon: <BiMessageRounded />,
          title: "Е-мэйл:",
          info: "monshinjyukuskinmed@gmail.com",
     },
     {
          icon: <BiPhoneCall />,
          title: "Утас:",
          info: "+976 9966 5511",
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
                                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d375.10834000784956!2d106.932649345242!3d47.927331442999666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693b85981d6fd%3A0x2101d3759f6f8015!2z0JzQvtC9INGI0LjQvdC20LjQutKvINCw0YDRjNGB0L3RiyDRjdC80L3RjdC70Y3Qsw!5e0!3m2!1sen!2smn!4v1671343547177!5m2!1sen!2smn" 
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
                         <Hding h1="Бидэнтэй холбогдох" h3="Stay in touch" />

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
