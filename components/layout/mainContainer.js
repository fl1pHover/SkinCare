import { Container } from "@chakra-ui/react";
import React from "react";

const MainContainer = ({ children, id, as }) => {
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
          >
               {children}
          </Container>
     );
};

export default MainContainer;
