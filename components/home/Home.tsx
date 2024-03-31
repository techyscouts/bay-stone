import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc';
import Carousel from './Carousel';

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
