import formatDate from '@/utils/dateFormatter';
import { storyblokEditable } from '@storyblok/react/rsc';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { render } from 'storyblok-rich-text-react-renderer';
import { Button } from '../ui/button';

const NewsCard = ({ blok }: { blok: any }) => {
  return (
    <div
      className="search-boxShadow flex w-full flex-col rounded-lg font-urbane max-xl:flex-none"
      {...storyblokEditable(blok)}
    >
      <header
        className="flex flex-col rounded-t-lg pb-[30px] pl-[30px] pt-[118px] xl:pt-[200px]"
        style={{
          backgroundImage: `url(${blok.cover_image.filename})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        {...storyblokEditable(blok)}
      >
        <h2
          className="text-3xl font-semibold text-white-1"
          {...storyblokEditable(blok)}
        >
          {blok.title}
        </h2>
        <figure className="flex gap-2.5">
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
      </header>
      <article className="flex flex-col p-5">
        <div className="flex justify-between">
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
              {formatDate(blok.post_createdAt)}
            </p>
          </figure>
          <figure className="flex items-center gap-2">
            <Image
              src="/icons/categories.svg"
              width={24}
              height={24}
              alt="calendar icon"
            />
            <p className="text-sm font-light leading-6 text-black-1 2xl:text-xl">
              categories
            </p>
          </figure>
        </div>
        <div
          className="py-5 text-base font-light leading-6"
          {...storyblokEditable(blok)}
        >
          {render(blok.description)}
        </div>
        <div className="max-xl:flex-center xl:max-w-[172px]">
          <Button
            asChild
            className="blue-main-bg mt-5 px-10 py-2.5  text-base font-semibold leading-6 text-white-1"
          >
            <Link href="/news">Read More</Link>
          </Button>
        </div>
      </article>
    </div>
  );
};

export default NewsCard;
