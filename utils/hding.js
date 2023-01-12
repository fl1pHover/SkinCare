import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Hding = ({ h1, h3 }) => {
  return (
    <Box>
      <Heading
        fontSize={{ base: '24px', md: '2em', '2xl': '2.7em' }}
        fontWeight="bold"
        lineHeight={'1.3'}
        className="main__heading"
      >
        {h1}
      </Heading>
      <Text className="hw" color={'water'} textStyle="hw" mb="15px">
        {h3}
      </Text>
    </Box>
  );
};

export default Hding;
