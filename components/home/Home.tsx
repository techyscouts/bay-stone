import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '../ui/button';
import { Carousel, NewsCarousel, TestimonialCarousel } from '.';

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
      <section
        className="bg-white-1 py-8 xl:py-20"
        {...storyblokEditable(blok)}
      >
        <div className="wrapper flex flex-col gap-10">
          <article
            className="flex items-center justify-between max-sm:justify-center"
            {...storyblokEditable(blok)}
          >
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
      <section className="py-10 xl:py-[110px]" {...storyblokEditable}>
        <div className="wrapper">
          {blok.explore_selection.map((tile: any) => (
            <StoryblokComponent blok={tile} key={tile._uid} />
          ))}
        </div>
      </section>
      <section className="py-10 xl:py-[110px]" {...storyblokEditable}>
        <div className="wrapper">
          {blok.contact_description.map((tile: any) => (
            <StoryblokComponent blok={tile} key={tile._uid} />
          ))}
        </div>
      </section>
      <section className="py-10 xl:py-20" {...storyblokEditable}>
        <div className="wrapper flex flex-col gap-10 xl:flex-row xl:gap-20">
          <Image
            src={blok.testimonial_image.filename}
            alt="testimonial"
            width={606}
            height={470}
            className="size-full xl:h-[500px] xl:max-w-[500px] 2xl:h-[470px] 2xl:max-w-[606px]"
          />

          <article className="flex h-fit w-full flex-col items-center text-center font-urbane text-blue-main">
            <p
              className="text-24 xl:text-32 font-light"
              {...storyblokEditable(blok)}
            >
              {blok.testimonial_subHeader}
            </p>
            <h1
              className="text-32 xl:text-48 pt-3 font-medium text-blue-main"
              {...storyblokEditable(blok)}
            >
              {blok.testimonial_header}
            </h1>
            <TestimonialCarousel blok={blok} />
          </article>
        </div>
      </section>
    </div>
  );
};

export default Home;
