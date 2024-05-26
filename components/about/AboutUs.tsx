import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc';

const AboutUs = ({ blok }: { blok: any }) => {
  return (
    <section className="size-full" {...storyblokEditable(blok)}>
      <div>
        {blok.title_bar.map((blok: any) => (
          <StoryblokComponent key={blok._uid} blok={blok} />
        ))}
      </div>
      <section className="wrapper py-[100px]" {...storyblokEditable(blok)}>
        {blok.showroom.map((blok: any) => (
          <StoryblokComponent key={blok._uid} blok={blok} />
        ))}
      </section>
      <section className="size-full" {...storyblokEditable}>
        {blok.design_team.map((tile: any) => (
          <StoryblokComponent blok={tile} key={tile._uid} />
        ))}
      </section>
      <section className="wrapper py-[100px]" {...storyblokEditable(blok)}>
        {blok.our_client.map((blok: any) => (
          <StoryblokComponent key={blok._uid} blok={blok} />
        ))}
      </section>
    </section>
  );
};

export default AboutUs;
