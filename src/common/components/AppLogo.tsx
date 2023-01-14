import { Flex } from '@chakra-ui/react';

export const AppLogo: React.FunctionComponent = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="200px"
      height="60px"
      fontSize="3xl"
      border="1px solid gray"
    >
      LOGO
    </Flex>
  );
};

export default AppLogo;
