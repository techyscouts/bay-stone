'use client';

import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';
import Link from 'next/link';

import formatDate from '@/utils/dateFormatter';
import { Button } from '../ui/button';
import { decodeHtmlEntities } from '@/utils/decodeHtmlEntities';
import { truncateString } from '@/utils/truncateString';

const NewsTeaserCard = ({ blok, slug }: { blok: any; slug: string }) => {
  return (
    <div
      className="search-boxShadow flex w-full flex-col rounded-lg font-urbane max-xl:flex-none"
      {...storyblokEditable(blok)}
    >
      <header
        className="relative flex aspect-[10/7] flex-col overflow-hidden rounded-t-lg"
        style={{
          backgroundImage: `url(${blok.image.filename})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        {...storyblokEditable(blok)}
      >
        <div className="news-bg-shadow absolute left-0 top-0 size-full" />
        <div className="absolute inset-x-5 bottom-5">
          <h2
            className="z-10 text-3xl font-semibold text-white-1"
            {...storyblokEditable(blok)}
          >
            {blok.title}
          </h2>
          {blok.author && (
            <figure className="z-10 flex gap-2.5">
              <Image
                src="/icons/author-icon.svg"
                width={24}
                height={24}
                alt="author icon"
              />
              <p
                className="text-xl font-normal text-white-1"
                {...storyblokEditable(blok)}
              >
                {blok.author}
              </p>
            </figure>
          )}
        </div>
      </header>
      <article className="flex flex-col p-5">
        <div className="flex justify-between">
          {blok.date && (
            <figure className="flex items-center gap-2">
              <Image
                src="/icons/calendar.svg"
                width={24}
                height={24}
                alt="calendar icon"
              />
              <p
                className="text-sm font-light leading-6 text-black-1 2xl:text-xl"
                {...storyblokEditable(blok)}
              >
                {formatDate(blok.date)}
              </p>
            </figure>
          )}
          {blok.category && (
            <figure className="flex items-center gap-2">
              <Image
                src="/icons/categories.svg"
                width={24}
                height={24}
                alt="calendar icon"
              />
              <p
                className="text-sm font-light leading-6 text-black-1 2xl:text-xl"
                {...storyblokEditable(blok)}
              >
                categories
              </p>
            </figure>
          )}
        </div>
        <p
          className="py-5 text-base font-light leading-6"
          {...storyblokEditable(blok)}
        >
          {truncateString(
            decodeHtmlEntities(blok.teaser.replace(/<[^>]*>?/gm, '')),
            400
          )}
        </p>
        <div className="max-xl:flex-center xl:max-w-[172px]">
          <Button
            asChild
            className="blue-main-bg mt-5 px-10 py-2.5  text-base font-semibold leading-6 text-white-1"
          >
            <Link href={`/news/${slug}`}>Read More</Link>
          </Button>
        </div>
      </article>
    </div>
  );
};

export default NewsTeaserCard;
