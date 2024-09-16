import '@chakra-ui/react';
import { TextVariants } from '@theme/components/text';

declare module '@chakra-ui/react' {
  interface TextProps {
    variant?: TextVariants;
  }
}
