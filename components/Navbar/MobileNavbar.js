import { Box, VStack } from '@chakra-ui/react';
import React from 'react';
import LinkItem from '../../utils/LinkItem';

const MobileNavbar = ({ height }) => {
  // const [close, setClose] = useState(false);
  // handleClick = () => {
  //   setClose(!close);
  // };
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="full"
      height={height}
      bgColor="brown"
      zIndex="999"
    >
      <VStack
        width="full"
        justifyContent="center"
        height="full"
        alignItems="center"
        color="white"
      >
        <LinkItem text="Нүүр" href="#header" width="full" />
        <LinkItem text="Бидний тухай" href="#about" width="full" />
        <LinkItem text="Хамт олон" href="#teams" width="full" />

        <LinkItem text="Төхөөрөмж" href="#equipment" width="full" />
        <LinkItem text="Холбоо барих" href="#contact" width="full" />
      </VStack>
    </Box>
  );
};

export default MobileNavbar;
