import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc';
import Carousel from './Carousel';
import { Button } from '../ui/button';
import Link from 'next/link';
import NewsCarousel from './NewsCarousel';

const Home = ({ blok }: { blok: any }) => {
  return (
    <div className="flex flex-col">
      <Carousel blok={blok} />
      <section
        className="mx-auto size-full max-w-screen-2xl"
        {...storyblokEditable}
      >
        {blok.luxury_tile.map((tile: any) => (
          <StoryblokComponent blok={tile} key={tile._uid} />
        ))}
      </section>
      <section className="bg-white-1 py-8 xl:px-[68px] xl:py-20">
        <div className="wrapper flex flex-col gap-10">
          <article className="flex items-center justify-between max-sm:justify-center">
            <h1
              className="text-32 xl:text-48 font-medium text-blue-main"
              {...storyblokEditable(blok)}
            >
              {blok.baystone_newstitle}
            </h1>
            <Button
              asChild
              className="blue-main text-16 px-10 py-2.5 font-semibold text-white-1 max-sm:hidden"
            >
              <Link href="/news">{blok.newsbutton_text}</Link>
            </Button>
          </article>
          <section className="grid grid-cols-3 max-xl:hidden  xl:gap-5 2xl:gap-10">
            {blok.baystone_news.map((news: any) => (
              <StoryblokComponent blok={news} key={news._uid} />
            ))}
          </section>
          <NewsCarousel blok={blok} />
          <div className="flex-center pb-8 sm:hidden">
            <Button
              asChild
              className="blue-main text-16 px-10 py-2.5 font-semibold text-white-1"
            >
              <Link href="/news">{blok.newsbutton_text}</Link>
            </Button>
          </div>
        </div>
      </section>
      <section
        className="mx-auto size-full max-w-screen-2xl"
        {...storyblokEditable}
      >
        {blok.premium_tile.map((tile: any) => (
          <StoryblokComponent blok={tile} key={tile._uid} />
        ))}
      </section>
    </div>
  );
};

export default Home;
