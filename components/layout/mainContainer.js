import { Container } from "@chakra-ui/react";
import React from "react";

const MainContainer = ({ children, id, as, br }) => {
     return (
          <Container
               maxW={{
                    base: "100%",
                    sm: "90%",
                    md: "80%",
                    lg: "90%",
                    xl: "80%",
                    "2xl": "1300px",
               }}
               pos="relative"
               id={id}
               as={as}
               px="0"
               borderRadius={br}
          >
               {children}
          </Container>
     );
};

export default MainContainer;
