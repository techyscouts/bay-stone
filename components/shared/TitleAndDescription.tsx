import { storyblokEditable } from '@storyblok/react/rsc';
import { render } from 'storyblok-rich-text-react-renderer';

const TitleAndDescription = ({ blok }: { blok: any }) => {
  return (
    <article
      className="flex flex-col items-center gap-5"
      {...storyblokEditable(blok)}
    >
      <h1
        className="text-center text-3xl font-medium text-blue-main xl:text-5xl"
        {...storyblokEditable(blok)}
      >
        {blok.title}
      </h1>
      <div
        className="text-center text-base font-light leading-6 text-black-1"
        {...storyblokEditable(blok)}
      >
        {render(blok.description)}
      </div>
    </article>
  );
};

export default TitleAndDescription;
