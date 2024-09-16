import type { Metadata } from 'next';
import './globals.css';

import { Providers } from '@app/providers';

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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
