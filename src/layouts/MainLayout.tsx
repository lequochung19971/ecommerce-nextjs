import { Box, Flex } from '@chakra-ui/react';
import type { PropsWithChildren } from 'react';

import { NavBar } from '@/common/components';

import Footer from './Footer';

const MainLayout: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <Flex height="100vh" w="100%" flexDir="column">
      <NavBar />
      <Box className="app-main" flex="1" mt="60px">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default MainLayout;
