import { storyblokEditable } from '@storyblok/react/rsc';
import { render } from 'storyblok-rich-text-react-renderer';
import { Button } from '../ui/button';

const DescriptionHome = ({ blok }: { blok: any }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="flex-center py-20 lg:px-[68px] lg:py-[140px]"
      style={{
        backgroundImage: `url(${blok.background_image.filename})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="wrapper flex-center">
        <article className="flex w-full max-w-[928px] flex-col items-center gap-10 rounded-lg bg-white-3 p-5 font-urbane text-blue-main lg:px-[60px] lg:py-10">
          <div className="flex flex-col items-center gap-3 text-center">
            <p
              className="text-24 xl:text-32 font-light"
              {...storyblokEditable(blok)}
            >
              {blok.subHeader}
            </p>
            <h1
              className="text-32 xl:text-48 font-medium"
              {...storyblokEditable(blok)}
            >
              {blok.header}
            </h1>
          </div>
          <div
            className="text-16 text-center font-light text-black-1"
            {...storyblokEditable(blok)}
          >
            {render(blok.description)}
          </div>
          <Button
            className="text-16 px-10 py-2.5 font-semibold text-white-1"
            {...storyblokEditable(blok)}
          >
            {blok.button_title}
          </Button>
        </article>
      </div>
    </div>
  );
};

export default DescriptionHome;
