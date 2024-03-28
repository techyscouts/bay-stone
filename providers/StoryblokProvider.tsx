'use client';

import { storyblokInit, apiPlugin } from '@storyblok/react';
import { ReactNode } from 'react';

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_SB_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: 'us',
  },
});

export default function StoryblokPrivider({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
