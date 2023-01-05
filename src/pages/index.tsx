import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import { ComponentProps, FormEvent } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const Login: React.FunctionComponent = () => {
  const session = useSession();
  console.log(session);

  return (
    <Flex w="100%" h="100vh" bg="pink.600" alignItems="center" justifyContent="center">
      <Box p="4" borderRadius="4" bg="white">
        {!session.data ? (
          <Button onClick={() => signIn()} variant="solid" color="white" backgroundColor="black" fontWeight="bold">
            Login
          </Button>
        ) : (
          <Button onClick={() => signOut()} variant="solid" color="white" backgroundColor="black" fontWeight="bold">
            Logout
          </Button>
        )}
      </Box>
    </Flex>
  );
};
export default Login;
