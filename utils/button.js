import { Link } from "@chakra-ui/react";
import React from "react";

const Btn = ({ href, text }) => {
     return (
          <Link
               href={href}
               fontSize={{ base: "11px", xl: "14px" }}
               color={"white"}
               bgColor="pink"
               px={{ base: "35px", xl: "50px" }}
               py={{ base: "18px", xl: "20px" }}
               textTransform="uppercase"
               fontWeight="bold"
               letterSpacing="1px"
               display="inline-block"
          >
               {text}
          </Link>
     );
};

export default Btn;
