import { Box, Icon, Text } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

export const ShoppingCard: React.FunctionComponent = () => {
  return (
    <Box h={5} w={5} cursor="pointer" role="group">
      <Text
        colorScheme="blue"
        sx={{
          borderRadius: '30px',
          background: '#3182ce',
          color: 'white',
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '18px',
          height: '18px',
          fontSize: '12px',
          fontWeight: 'bold',
          top: '8px',
          right: '4px',
        }}
      >
        10
      </Text>
      <Icon h={5} w={5} as={FaShoppingCart} />
    </Box>
  );
};

export default ShoppingCard;
