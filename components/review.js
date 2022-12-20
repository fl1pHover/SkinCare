import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import {
     Avatar,
     Box,
     Center,
     Image,
     Stack,
     Text,
     VStack,
} from "@chakra-ui/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import MainContainer from "./layout/mainContainer";

import { review } from "../constant";

const Review = () => {
     return (
          <Box
               position="relative"
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
                    src="https://pathwell.axiomthemes.com/wp-content/uploads/2017/11/bg-15-copyright.jpg?id=314"
                    alt="banner image1"
                    height={{
                         base: "530px",
                         md: "600px",
                         lg: "650px",
                         "2xl": "830px",
                    }}
                    width="full"
                    objectFit="cover"
               />
               <VStack
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%,-50%)"
                    zIndex="2"
                    textAlign="center"
                    width={{ base: "100%", md: "50%" }}
               >
                    <MainContainer>
                         <Text
                              // fontSize={{ base: "26px", lg: "32px", "2xl": "60px" }}
                              textStyle="ss"
                         >
                              What People Say
                         </Text>
                         <Text textStyle="hw" my="20px">
                              Testimonials
                         </Text>

                         <Swiper
                              pagination={true}
                              loop={true}
                              modules={[Pagination]}
                              className="mySwiper"
                         >
                              {review.map(({ ...props }, index) => {
                                   return (
                                        <SwiperSlide key={index}>
                                             <Text
                                                  fontStyle="italic"
                                                  color="white"
                                             >
                                                  {props.text}
                                             </Text>
                                             <Center gap="15px" mt="70px">
                                                  <Avatar
                                                       size="lg"
                                                       src={props.avatar}
                                                  />
                                                  <Stack
                                                       lineHeight="1.2"
                                                       alignItems="flex-start"
                                                  >
                                                       <Text color="white">
                                                            {props.name}
                                                       </Text>
                                                       <Text color="pink">
                                                            37 нас
                                                       </Text>
                                                  </Stack>
                                             </Center>
                                        </SwiperSlide>
                                   );
                              })}
                         </Swiper>
                    </MainContainer>
               </VStack>
          </Box>
     );
};

export default Review;
