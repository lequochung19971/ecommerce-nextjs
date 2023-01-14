import { Flex } from '@chakra-ui/react';

export const AppLogo: React.FunctionComponent = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="200px"
      height="60px"
      fontWeight="bold"
      fontSize="3xl"
      border="3px solid black"
    >
      LOGO
    </Flex>
  );
};

export default AppLogo;
