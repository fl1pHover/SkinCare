import { Link, Text } from '@chakra-ui/react';

const LinkItem = ({ color, text, href, width }) => {
  return (
    <Link
      py={'2.5em'}
      px="0.5em"
      color={color}
      _hover={{
        color: 'pink',
      }}
      href={href}
      width={width}
      textAlign="center"
    >
      <Text
        textTransform={'uppercase'}
        fontWeight={'bold'}
        fontSize={{ base: '12px', xl: '14px' }}
        letterSpacing={'1px'}
      >
        {text}
      </Text>
    </Link>
  );
};

export default LinkItem;
