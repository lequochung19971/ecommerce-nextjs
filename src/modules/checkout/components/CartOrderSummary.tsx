import { Button, Flex, Heading, Link, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { AppRoute } from '@/common/enums';

import { formatPrice } from './PriceTag';

type OrderSummaryItemProps = {
  label: string;
  value?: string;
  children?: React.ReactNode;
};

export const OrderSummaryItem = (props: OrderSummaryItemProps) => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export const CartOrderSummary = () => {
  const router = useRouter();
  return (
    <Stack spacing="8" width="full">
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={formatPrice(597)} />
        <OrderSummaryItem label="Shipping + Tax">
          <Link href="#" textDecor="underline">
            Calculate shipping
          </Link>
        </OrderSummaryItem>
        <OrderSummaryItem label="Coupon Code">
          <Link href="#" textDecor="underline">
            Add coupon code
          </Link>
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {formatPrice(597)}
          </Text>
        </Flex>
      </Stack>
      <Button
        colorScheme="blue"
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
        onClick={() => router.push(AppRoute.CHECKOUT_PAYMENT)}
      >
        Checkout
      </Button>
    </Stack>
  );
};
export default CartOrderSummary;
