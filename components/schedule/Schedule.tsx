import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc';

const Schedule = ({ blok }: { blok: any }) => {
  return (
    <section className="flex size-full flex-col" {...storyblokEditable(blok)}>
      <div>
        {blok.title_bar.map((title: any) => (
          <StoryblokComponent key={title._uid} blok={title} />
        ))}
      </div>
      <div className="wrapper py-10 xl:py-20" {...storyblokEditable(blok)}>
        {blok.hero_section.map((hero: any) => (
          <StoryblokComponent key={hero._uid} blok={hero} />
        ))}
      </div>
    </section>
  );
};

export default Schedule;
