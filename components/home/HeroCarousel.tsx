import { storyblokEditable } from '@storyblok/react';
import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const HeroCarousel = ({ blok }: { blok: any }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="relative flex size-full min-w-max flex-none flex-col max-xl:items-center xl:pt-[280px] 2xl:pb-[140px] 2xl:pt-[363px]"
    >
      <div
        className="relative left-0 top-0 -z-10 h-[348px] w-full md:h-[400px] xl:absolute xl:size-full"
        {...storyblokEditable(blok)}
      >
        <Image
          src={blok.background_image.filename}
          alt={blok.background_image.alt}
          fill
          className="size-fit object-cover "
        />
      </div>
      <article
        className={cn(
          'hero-linear w-full max-xl:bg-black-1  py-[30px] font-urbane text-white-1'
        )}
      >
        <div className="wrapper flex w-full flex-col gap-10 max-xl:items-center">
          <div className="flex flex-col gap-3">
            <p
              className="text-24 xl:text-32 font-light"
              {...storyblokEditable(blok)}
            >
              {blok.subHeader}
            </p>
            <h1
              className="text-48 xl:text-64 font-medium"
              {...storyblokEditable(blok)}
            >
              {blok.header}
            </h1>
          </div>
          <Button
            asChild
            className="blue-main text-16 max-w-[240px] rounded-lg px-10 py-2.5 font-semibold transition-all duration-300 hover:bg-black-2"
          >
            <Link
              href={blok.button_link.cached_url}
              {...storyblokEditable(blok)}
            >
              {blok.button_title}
            </Link>
          </Button>
        </div>
      </article>
    </div>
  );
};

export default HeroCarousel;
