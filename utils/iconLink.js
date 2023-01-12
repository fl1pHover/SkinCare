import { Center, Link, Text } from '@chakra-ui/react';

const IconLink = ({ children, href }) => {
  return (
    <Link href={href}>
      <Center
        width={{ base: '30px', md: '40px' }}
        height={{ base: '30px', md: '40px' }}
        bgColor="lightBrown"
        borderRadius="100%"
      >
        <Text fontSize={{ base: '15px', md: '20px' }}>{children}</Text>
      </Center>
    </Link>
  );
};
export default IconLink;
