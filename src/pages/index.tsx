import { Box, Button, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const Home: React.FunctionComponent = () => {
  const session = useSession();

  return (
    <Flex w="100%" h="100vh" bg="pink.600" alignItems="center" justifyContent="center">
      <Box p="4" borderRadius="4" bg="white">
        {session.data == null ? (
          <Button as={Link} href="auth/sign-in" variant="solid" color="white" backgroundColor="black" fontWeight="bold">
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
export default Home;
