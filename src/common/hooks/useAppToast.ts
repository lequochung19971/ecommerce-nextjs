import type { UseToastOptions } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

export const useAppToast = (defaultOptions = {} as UseToastOptions) =>
  useToast({
    ...defaultOptions,
    position: 'bottom-left',
  });
