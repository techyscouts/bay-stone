import { storyblokEditable } from '@storyblok/react/rsc';
import Image from 'next/image';
import Link from 'next/link';

import formatDate from '@/utils/dateFormatter';
import { Button } from '../ui/button';

const NewsTeaserCard = ({ blok, slug }: { blok: any; slug: string }) => {
  return (
    <div
      className="search-boxShadow flex w-full flex-col rounded-lg font-urbane max-xl:flex-none"
      {...storyblokEditable(blok)}
    >
      <header
        className="relative flex flex-col overflow-hidden rounded-t-lg pb-[30px] pl-[30px] pt-[118px] xl:pt-[200px]"
        style={{
          backgroundImage: `url(${blok.image.filename})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        {...storyblokEditable(blok)}
      >
        <h2
          className="text-32 z-10 font-semibold text-white-1"
          {...storyblokEditable(blok)}
        >
          {blok.title}
        </h2>
        <figure className="z-10 flex gap-2.5">
          <Image
            src="/icons/author-icon.svg"
            width={24}
            height={24}
            alt="author icon"
          />
          <p
            className="text-20 font-normal text-white-1"
            {...storyblokEditable(blok)}
          >
            {blok.author}
          </p>
        </figure>
        <div className="news-bg-shadow absolute left-0 top-0 size-full" />
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
              className="text-14 2xl:text-20 font-light text-black-1"
              {...storyblokEditable(blok)}
            >
              {formatDate(blok.date)}
            </p>
          </figure>
          <figure className="flex items-center gap-2">
            <Image
              src="/icons/categories.svg"
              width={24}
              height={24}
              alt="calendar icon"
            />
            <p className="text-14 2xl:text-20 font-light text-black-1">
              categories
            </p>
          </figure>
        </div>
        <p className="text-16 py-5 font-light" {...storyblokEditable(blok)}>
          {blok.teaser}
        </p>
        <div className="max-xl:flex-center xl:max-w-[172px]">
          <Button
            asChild
            className="blue-main text-16 mt-5  px-10 py-2.5 font-semibold text-white-1"
          >
            <Link href={`/news/${slug}`}>Read More</Link>
          </Button>
        </div>
      </article>
    </div>
  );
};

export default NewsTeaserCard;
