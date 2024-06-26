'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { render } from 'storyblok-rich-text-react-renderer';

const SearchTile = ({ content, slug }: { content: any; slug: string }) => {
  const titleBar = content?.title_bar?.[0];
  return (
    <div className="flex w-full flex-col shadow-lg">
      <div className="relative aspect-video w-full ">
        <Image
          src={titleBar?.background_image?.filename}
          alt={titleBar?.title}
          fill
          className="size-full object-cover"
        />
        <h3 className="absolute bottom-5 left-5 text-xl text-white-1 sm:text-2xl md:text-3xl">
          {render(titleBar?.title)}
        </h3>
      </div>
      <div className="flex flex-1 flex-col gap-6 px-5 pb-8 pt-5">
        <div className="max-h-60 flex-1 overflow-hidden">
          {render(content?.description)}
        </div>
        <div className="w-full">
          <Link href={slug}>
            <Button className="text-base leading-6 max-w-[165px] bg-blue-main px-10 py-2.5 font-semibold text-white-1">
              Read more
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchTile;
