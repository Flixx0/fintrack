import type { DeepPartial, Theme } from '@chakra-ui/react';

import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--lato-400',
});

export const fonts: DeepPartial<Theme['fonts']> = {
  heading: lato.style.fontFamily,
  body: lato.style.fontFamily,
};
