import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Hding = ({ h1, h3 }) => {
     return (
          <Box>
               <Heading
                    fontSize={{ base: "24px", md: "2em", "2xl": "3em" }}
                    fontWeight="bold"
                    lineHeight={"1.3"}
               >
                    {h1}
               </Heading>
               <Text
                    className="hw"
                    color={"water"}
                    fontSize={{ base: "1.7em", md: "2.1em" }}
               >
                    {h3}
               </Text>
          </Box>
     );
};

export default Hding;
