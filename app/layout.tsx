/* eslint-disable camelcase */
import type { Metadata } from 'next';
import { Zilla_Slab } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

const zillaSlab = Zilla_Slab({
  weight: ['300', '400', '500', '600', '700'],
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-zillaSlab',
});

export const metadata: Metadata = {
  title: 'Baystone',
  description: 'A leading Tile and Stone dealer',
  icons: {
    icon: '/icons/title-logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ejc8zjm.css" />
      </head>
      <body className={`${zillaSlab.variable}`}>{children}</body>
    </html>
  );
}
