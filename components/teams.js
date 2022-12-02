import {
     AspectRatio,
     Box,
     Center,
     Grid,
     GridItem,
     Image,
     Stack,
     Text,
} from "@chakra-ui/react";
import React from "react";
import Btn from "../utils/button";
import Hding from "../utils/hding";
import Space from "../utils/space";
import MainContainer from "./layout/mainContainer";

const team = [
     {
          image: "/",
          name: "Lorem lorem",
          job: "Caregiver",
     },
     {
          image: "/",
          name: "Lorem lorem",
          job: "Physican",
     },
     {
          image: "/",
          name: "Lorem lorem",
          job: "Manager",
     },
     {
          image: "/",
          name: "Lorem lorem",
          job: "CEO",
     },
];
const Teams = () => {
     return (
          <Box bgColor="bgGrey" textAlign="center">
               <Space />
               <MainContainer>
                    <Hding h1="Meet Our Team" h3="Who we are" />

                    <Grid
                         templateColumns={{
                              base: "repeat(2,1fr)",
                              md: "repeat(4,1fr)",
                         }}
                         gap="30px"
                         mt={{ base: "20px", md: "40px" }}
                    >
                         {team.map(({ ...props }, index) => {
                              return (
                                   <GridItem key={index} textAlign="center">
                                        <AspectRatio
                                             maxW="400px"
                                             ratio={4 / 5}
                                             bgColor="black"
                                        >
                                             <Image
                                                  src={props.image}
                                                  alt="image"
                                             />
                                        </AspectRatio>

                                        <Stack mt="20px">
                                             <Text textStyle="mainHeading">
                                                  {props.name}
                                             </Text>
                                             <Text
                                                  textStyle="hw"
                                                  mt="0px !important"
                                             >
                                                  {props.job}
                                             </Text>
                                        </Stack>
                                   </GridItem>
                              );
                         })}
                    </Grid>
                    <Center mt="30px">
                         <Btn text="all team members" />
                    </Center>
               </MainContainer>{" "}
               <Space />
          </Box>
     );
};

export default Teams;
