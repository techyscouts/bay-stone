import {
  ISbStoriesParams,
  getStoryblokApi,
  storyblokEditable,
} from '@storyblok/react/rsc';
import NewsTeaserCard from '../news-landing/NewsTeaserCard';
import NewsCarousel from './NewsCarousel';
import { Button } from '../ui/button';
import Link from 'next/link';

const sbParams: ISbStoriesParams = {
  version:
    process.env.NEXT_PUBLIC_SB_VERSION === 'draft' ? 'draft' : 'published',
  resolve_relations: ['popular_news.news'],
};

async function getArticles() {
  const storyblokApi = getStoryblokApi();
  const data = await storyblokApi.get(`cdn/stories/home`, sbParams, {
    cache: 'no-store',
  });
  return data.data.rels;
}

const PopularNews = async ({ blok }: { blok: any }) => {
  const data = await getArticles();
  return (
    <section
      className="flex size-full flex-col gap-10"
      {...storyblokEditable(data)}
    >
      <div className="flex items-center justify-between">
        <h1
          className="text-32 xl:text-48 font-medium text-blue-main"
          {...storyblokEditable(blok)}
        >
          {blok.headline}
        </h1>
        <Button
          asChild
          className="blue-main-bg w-full max-w-[212px] px-10 py-2.5 font-urbane text-base font-semibold text-white-1"
        >
          <Link href="/news-landing">See more news</Link>
        </Button>
      </div>
      <div
        className="grid size-full grid-cols-1 gap-10 max-xl:hidden xl:grid-cols-3"
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
      <div {...storyblokEditable(data)} className="size-full">
        <NewsCarousel blok={data} />
      </div>
    </section>
  );
};

export default PopularNews;
