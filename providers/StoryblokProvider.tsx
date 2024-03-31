'use client';
import { components } from '@/components/components-list';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import { ReactNode } from 'react';

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_SB_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: 'us',
  },
  components,
});

export default function StoryblokPrivider({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
