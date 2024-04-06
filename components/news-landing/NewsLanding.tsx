import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc';

const NewsLanding = ({ blok }: { blok: any }) => {
  return (
    <section className="size-full" {...storyblokEditable(blok)}>
      <div>
        {blok.title_bar.map((blok: any) => (
          <StoryblokComponent key={blok._uid} blok={blok} />
        ))}
      </div>
      <section
        className="wrapper py-10 xl:py-[60px]"
        {...storyblokEditable(blok)}
      >
        {blok.news_teaser.map((blok: any) => (
          <StoryblokComponent key={blok._uid} blok={blok} />
        ))}
      </section>
    </section>
  );
};

export default NewsLanding;
