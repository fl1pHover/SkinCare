import { Center, Grid, GridItem, Link, Text } from "@chakra-ui/react";
import React from "react";
import { CiPill } from "react-icons/ci";
import MainContainer from "./layout/mainContainer";
const service = [
     {
          icon: <CiPill />,
          heading: ["Personalized Care Service"],
     },
     {
          icon: <CiPill />,
          heading: ["In-Home Health Care"],
     },
     {
          icon: <CiPill />,
          heading: ["Professional Medical Eximination"],
     },
     {
          icon: <CiPill />,
          heading: ["Complete Medical Supply"],
     },
];

const ServiceCard = ({ heading, icon, href }) => {
     return (
          <MainContainer>
               <Grid
                    templateColumns={{
                         base: "repeat(1,1fr)",
                         md: "repeat(2,1fr)",
                         lg: "repeat(4,1fr)",
                    }}
                    width="full"
                    whiteSpace={"wrap"}
                    my="50px"
               >
                    {service.map(({ ...props }, index) => {
                         return (
                              <GridItem key={index}>
                                   <Link href={"/"}>
                                        <div class="card">
                                             <div class="thefront">
                                                  <>
                                                       <Center
                                                            bgColor={"drop"}
                                                            width={{
                                                                 base: "40px",
                                                                 xl: "60px",
                                                            }}
                                                            height={{
                                                                 base: "40px",
                                                                 xl: "60px",
                                                            }}
                                                            borderRadius="100%"
                                                            fontSize={"40px"}
                                                            mb="15px"
                                                            color={"#333"}
                                                       >
                                                            {props.icon}
                                                       </Center>
                                                       <Text
                                                            textStyle={
                                                                 "mainHeading"
                                                            }
                                                            height={{
                                                                 base: "50px",
                                                                 sm: "35px",
                                                                 md: "40px",
                                                                 lg: "60px",
                                                            }}
                                                            lineHeight="1.4"
                                                       >
                                                            {props.heading}
                                                       </Text>
                                                       {/* <Text textStyle="main">
                                                            Lorem ipsum dolor
                                                            sit amet consectetur
                                                            adipisicing elit.
                                                            Quo, modi.
                                                       </Text> */}
                                                       <Text
                                                            textStyle="main"
                                                            color="pink"
                                                            fontWeight="bold"
                                                            mt={{
                                                                 base: 0,
                                                                 "2xl": 3,
                                                            }}
                                                       >
                                                            MORE
                                                       </Text>
                                                  </>
                                             </div>

                                             <div class="theback">
                                                  <>
                                                       <Center
                                                            bgColor={"white"}
                                                            width={{
                                                                 base: "40px",
                                                                 xl: "60px",
                                                            }}
                                                            height={{
                                                                 base: "40px",
                                                                 xl: "60px",
                                                            }}
                                                            borderRadius="100%"
                                                            fontSize={"30px"}
                                                            mb="15px"
                                                            color={"#333"}
                                                       >
                                                            {props.icon}
                                                       </Center>
                                                       <Text
                                                            textStyle={
                                                                 "mainHeading"
                                                            }
                                                            height={{
                                                                 base: "50px",
                                                                 sm: "35px",
                                                                 md: "40px",
                                                                 lg: "60px",
                                                            }}
                                                       >
                                                            {props.heading}
                                                       </Text>{" "}
                                                       {/* <Text textStyle="main">
                                                            Lorem ipsum dolor
                                                            sit amet consectetur
                                                            adipisicing elit.
                                                            Quo, modi.
                                                       </Text> */}
                                                       <Text
                                                            textStyle="main"
                                                            fontWeight="bold"
                                                       >
                                                            MORE
                                                       </Text>
                                                  </>
                                             </div>
                                        </div>
                                   </Link>{" "}
                              </GridItem>
                         );
                    })}
               </Grid>
          </MainContainer>
     );
};

export default ServiceCard;
