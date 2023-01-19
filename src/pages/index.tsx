import { Box } from '@chakra-ui/react';
import type { GetServerSideProps } from 'next';

import { withAuth } from '@/common/HOCs';
import { Banner } from '@/modules/home/components';
import { ProductCard } from '@/modules/products/components';

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  return {
    props: {},
  };
};

const Home: React.FunctionComponent = () => {
  return (
    <Box w="100%" height="100%" bg="gray.200">
      <Banner />
      <ProductCard />
    </Box>
  );
};

export default withAuth(Home);
