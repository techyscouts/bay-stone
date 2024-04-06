import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc';

const TermsAndConditions = ({ blok }: { blok: any }) => {
  return (
    <section className="size-full" {...storyblokEditable(blok)}>
      <div>
        {blok.title_bar.map((blok: any) => (
          <StoryblokComponent key={blok._uid} blok={blok} />
        ))}
      </div>
      <div
        className="wrapper flex flex-col gap-10 py-10 xl:py-[60px]"
        {...storyblokEditable(blok)}
      >
        {blok.conditions.map((policy: any) => (
          <StoryblokComponent key={policy._uid} blok={policy} />
        ))}
      </div>
    </section>
  );
};

export default TermsAndConditions;
