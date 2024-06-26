'use client';
import {
  ISbStoriesParams,
  getStoryblokApi,
  storyblokEditable,
} from '@storyblok/react/rsc';
import NewsTeaserCard from '../news-landing/NewsTeaserCard';
import NewsCarousel from './NewsCarousel';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const sbParams: ISbStoriesParams = {
  version:
    process.env.NEXT_PUBLIC_SB_VERSION === 'draft' ? 'draft' : 'published',
  resolve_relations: ['popular_news.news'],
};

const PopularNews = ({ blok }: { blok: any }) => {
  const [articles, setArticles] = useState([]) as any;
  const getArticles = async () => {
    const storyblokApi = getStoryblokApi();
    const data = await storyblokApi.get(`cdn/stories/home`, sbParams, {
      cache: 'no-store',
    });
    setArticles(data.data.rels);
  };

  useEffect(() => {
    getArticles();
  }, []);
  return (
    <section
      className="flex size-full flex-col gap-10"
      {...storyblokEditable(articles)}
    >
      <div className="flex items-center justify-between">
        <h1
          className="text-3xl font-medium text-blue-main xl:text-5xl"
          {...storyblokEditable(blok)}
        >
          {blok.headline}
        </h1>
        <Button
          asChild
          className="blue-main-bg w-full max-w-[212px] px-10 py-2.5 font-urbane text-base font-semibold text-white-1"
        >
          <Link href="/news">See more news</Link>
        </Button>
      </div>
      <div
        className="grid size-full grid-cols-1 gap-10 max-xl:hidden xl:grid-cols-3"
        {...storyblokEditable(articles)}
      >
        {articles.map((article: any) => (
          <NewsTeaserCard
            key={article.id}
            blok={article.content}
            slug={article.name}
          />
        ))}
      </div>
      <div {...storyblokEditable(articles)} className="size-full">
        <NewsCarousel blok={articles} />
      </div>
    </section>
  );
};

export default PopularNews;
