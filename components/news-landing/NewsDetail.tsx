'use client';
import Image from 'next/image';
import { storyblokEditable } from '@storyblok/react';
import { render } from 'storyblok-rich-text-react-renderer';
import { useRouter } from 'next/navigation';

import { Button } from '../ui/button';
import formatDate from '@/utils/dateFormatter';

const IconAndDetail = ({
  icon,
  detail,
  blok,
}: {
  icon: string;
  detail: string;
  blok: any;
}) => {
  return (
    <figure className="flex gap-2.5" {...storyblokEditable(blok)}>
      <Image src={icon} width={24} height={24} alt="icon" />
      <p
        className="text-16 lg:text-20 font-normal text-black-1"
        {...storyblokEditable(blok)}
      >
        {detail}
      </p>
    </figure>
  );
};

const NewsDetail = ({ blok }: { blok: any }) => {
  const router = useRouter();
  return (
    <section className="wrapper py-7 md:py-10 xl:py-20">
      <div className="mx-auto flex w-full flex-col gap-8 lg:w-[88%] xl:gap-[55px]">
        <header className="flex w-full justify-end">
          <Button
            className="text-16 blue-main px-10 py-2.5 font-semibold text-white-1"
            onClick={() => router.push('/')}
          >
            Back
          </Button>
        </header>
        <Image
          src={blok.image.filename}
          alt="news image"
          width={1112}
          height={480}
          className="max-h-[480px] w-full object-cover"
        />
        <article className="flex flex-col gap-5">
          <h1
            className="text-32 xl:text-48 text-center font-medium text-blue-main"
            {...storyblokEditable(blok)}
          >
            {blok.title}
          </h1>
          <div className="flex flex-col justify-center gap-5 max-sm:items-center sm:flex-row lg:gap-10">
            <IconAndDetail
              icon="/icons/author.svg"
              detail={blok.author}
              blok={blok}
            />
            <IconAndDetail
              icon="/icons/calendar.svg"
              detail={formatDate(blok.date)}
              blok={blok}
            />
            <IconAndDetail
              icon="/icons/categories.svg"
              detail="Categories"
              blok={blok}
            />
          </div>
        </article>
        <article className="flex flex-col gap-3.5">
          <h2
            className="text-20 xl:text-32 font-light text-blue-main"
            {...storyblokEditable(blok)}
          >
            {blok.subheading}
          </h2>
          <div
            className="text-16 font-light text-black-1"
            {...storyblokEditable(blok)}
          >
            {render(blok.description)}
          </div>
        </article>
      </div>
    </section>
  );
};

export default NewsDetail;
