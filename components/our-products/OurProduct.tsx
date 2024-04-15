import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc';

const OurProduct = ({ blok }: { blok: any }) => {
  return (
    <div {...storyblokEditable(blok)} className="w-full">
      {blok.title_bar.map((blok: any) => (
        <StoryblokComponent key={blok._uid} blok={blok} />
      ))}
    </div>
  );
};

export default OurProduct;
