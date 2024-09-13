import type { Metadata } from 'next';
import './globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { fonts } from '@/app/fonts';

export const metadata: Metadata = {
  title: 'Fintrack',
  description: 'Track your budget',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={fonts.lato.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
