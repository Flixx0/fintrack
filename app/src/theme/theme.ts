import { extendTheme, Theme } from '@chakra-ui/react';
import { fonts } from '@theme/fonts';
import { colors } from '@theme/colors';
import { config } from '@theme/config';
import { components } from '@theme/components/components';

const customTheme: Partial<Theme> = extendTheme({
  fonts,
  colors,
  config,
  components,
  styles: {
    global: {
      body: {
        bg: 'brand.100',
        color: 'black',
      },
    },
  },
});

export default customTheme;
