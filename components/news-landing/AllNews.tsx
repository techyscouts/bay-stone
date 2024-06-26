'use client';

import { getStoryblokApi, storyblokEditable } from '@storyblok/react/rsc';
import NewsTeaserCard from './NewsTeaserCard';
import { useEffect, useState } from 'react';

const AllNews = ({ blok }: { blok: any }) => {
  const [data, setData] = useState([]) as any;
  const getArticles = async () => {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get(`cdn/stories`, {
      version: 'draft',
      starts_with: 'news/',
      is_startpage: false,
    });
    setData(data.stories);
  };

  useEffect(() => {
    getArticles();
  }, []);
  return (
    <section
      className="flex size-full flex-col gap-10"
      {...storyblokEditable(data)}
    >
      <h1
        className="text-3xl font-medium text-blue-main xl:text-5xl"
        {...storyblokEditable(blok)}
      >
        {blok.headline}
      </h1>
      <div
        className="grid size-full grid-cols-1 gap-10 xl:grid-cols-3"
        {...storyblokEditable(data)}
      >
        {data.map((article: any) => (
          <NewsTeaserCard
            key={article.id}
            blok={article.content}
            slug={article.name}
          />
        ))}
      </div>
    </section>
  );
};

export default AllNews;
