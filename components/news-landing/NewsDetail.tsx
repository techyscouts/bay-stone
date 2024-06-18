'use client';
import Image from 'next/image';
import { getStoryblokApi, storyblokEditable } from '@storyblok/react/rsc';
import { render } from 'storyblok-rich-text-react-renderer';

import { Button } from '../ui/button';
import formatDate from '@/utils/dateFormatter';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

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
        className="text-16 lg:text-20 font-light text-black-1"
        {...storyblokEditable(blok)}
      >
        {detail}
      </p>
    </figure>
  );
};

const NewsDetail = ({ blok }: { blok: any }) => {
  const [articles, setArticles] = useState<string[]>([]);
  const { slug } = useParams();
  const router = useRouter();
  const getArticles = async () => {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get(`cdn/stories`, {
      version: 'draft',
      starts_with: 'news-detail/',
      is_startpage: false,
    });
    const slugArray = data.stories.map((item: any) => item.name);
    setArticles(slugArray);
  };

  useEffect(() => {
    getArticles();
  }, []);

  const handleNext = () => {
    const currentIndex = articles.indexOf(slug as string);
    if (currentIndex < articles.length - 1) {
      const nextSlug = articles[currentIndex + 1];
      router.push(`/news/${nextSlug}`);
    }
  };

  const handlePrevious = () => {
    const currentIndex = articles.indexOf(slug as string);
    if (currentIndex > 0) {
      const previousSlug = articles[currentIndex - 1];
      router.push(`/news/${previousSlug}`);
    }
  };

  const isLastArticle =
    articles.indexOf(slug as string) === articles.length - 1;
  const isFirstArticle = articles.indexOf(slug as string) === 0;

  return (
    <section className="wrapper py-7 md:py-10 xl:py-20">
      <div className="mx-auto flex w-full flex-col gap-8 lg:w-[88%] xl:gap-[55px]">
        <header className="flex w-full justify-end">
          <Button
            asChild
            className="text-16 blue-main-bg px-10 py-2.5 font-semibold text-white-1"
          >
            <Link href="/news">Back</Link>
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
        <article className="flex flex-col gap-3.5 border-b border-blue-main pb-14">
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
        <div className="flex justify-between">
          <Button
            disabled={isFirstArticle}
            className="max-w-[205px] border-2 border-blue-main bg-transparent font-semibold text-blue-main hover:bg-sky-100"
            onClick={handlePrevious}
          >
            Previous News
          </Button>
          <Button
            disabled={isLastArticle}
            className="blue-main-bg font-semibold"
            onClick={handleNext}
          >
            Next News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsDetail;
