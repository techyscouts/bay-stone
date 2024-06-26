import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc';

const Search = ({ blok }: { blok: any }) => {
  return (
    <section className="size-full" {...storyblokEditable(blok)}>
      <div>
        {blok.page_header.map((blok: any) => (
          <StoryblokComponent key={blok._uid} blok={blok} />
        ))}
      </div>
    </section>
  );
};

export default Search;
