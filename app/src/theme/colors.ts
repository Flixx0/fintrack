import type { DeepPartial, Theme } from '@chakra-ui/react';

export type ColorVariants = {
  brand: {
    100: string;
    900: string;
  };
  blue: {
    500: string;
  };
};

const extendedColors: DeepPartial<
  Record<string, Theme['colors']['blackAlpha']>
> = {
  brand: {
    100: '#F3F4F6',
  },
  blue: {
    500: '#1E3A8A',
    900: '#374151',
  },
  red: {
    500: '#EF4444',
  },
};

const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};
