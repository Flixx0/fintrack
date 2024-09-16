import { ComponentStyleConfig } from '@chakra-ui/react';

export type TextVariants = 'title1' | 'title2';

export const Text: ComponentStyleConfig = {
  variants: {
    title1: {
      color: 'blue.500',
      fontSize: 48,
      fontWeight: '700',
    },
    title2: {
      color: 'blue.900',
      fontSize: 32,
    },
  },
};
