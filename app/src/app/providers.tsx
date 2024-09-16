'use client';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import customTheme from '@theme/theme';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ColorModeScript
        initialColorMode={customTheme.config?.initialColorMode}
        // type="cookie"
      />
      <ChakraProvider
        // colorModeManager={cookieStorageManager}
        theme={customTheme}
      >
        {children}
      </ChakraProvider>
    </>
  );
};
