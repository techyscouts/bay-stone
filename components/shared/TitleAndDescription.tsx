import { storyblokEditable } from '@storyblok/react/rsc';
import { render } from 'storyblok-rich-text-react-renderer';

const TitleAndDescription = ({ blok }: { blok: any }) => {
  return (
    <article
      className="flex flex-col items-center gap-5"
      {...storyblokEditable(blok)}
    >
      <h1
        className="text-32 xl:text-48 text-center font-medium text-blue-main"
        {...storyblokEditable(blok)}
      >
        {blok.title}
      </h1>
      <div
        className="text-16 text-center font-light text-black-1"
        {...storyblokEditable(blok)}
      >
        {render(blok.description)}
      </div>
    </article>
  );
};

export default TitleAndDescription;
