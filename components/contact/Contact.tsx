import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc';

const Contact = ({ blok }: { blok: any }) => {
  return (
    <section className="size-full" {...storyblokEditable(blok)}>
      <div>
        {blok.title_bar.map((blok: any) => (
          <StoryblokComponent key={blok._uid} blok={blok} />
        ))}
      </div>
      <div className="wrapper py-10 xl:py-20">
        {blok.location.map((blok: any) => (
          <StoryblokComponent key={blok._uid} blok={blok} />
        ))}
      </div>
      <div className="size-full">
        {blok.contact_form.map((blok: any) => (
          <StoryblokComponent key={blok._uid} blok={blok} />
        ))}
      </div>
    </section>
  );
};

export default Contact;
