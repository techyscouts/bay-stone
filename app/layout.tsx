/* eslint-disable camelcase */
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Zilla_Slab } from 'next/font/google';

import './globals.css';
import { Navbar } from '@/components/shared';
import StoryblokPrivider from '@/providers/StoryblokProvider';
import { fetchHeaderFooter } from '@/queries/storyblokQueries';

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_SB_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: 'us',
  },
});

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const {
    data: {
      story: { content },
    },
  } = await fetchHeaderFooter();
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ejc8zjm.css" />
      </head>
      <StoryblokPrivider>
        <body className={`${zillaSlab.variable}`}>
          <Navbar
            logo={content.Logo.filename}
            header={content.header}
            navItems={content.navbar}
            buttonName={content.buttonName}
            mobileButtonNumber={content.mobileButtonNumber}
          />
          {children}
        </body>
      </StoryblokPrivider>
    </html>
  );
}
