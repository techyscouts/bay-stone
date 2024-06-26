import { storyblokEditable } from '@storyblok/react/rsc';
import { render } from 'storyblok-rich-text-react-renderer';
import { Button } from '../ui/button';
import Link from 'next/link';

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
              className="text-2xl font-light xl:text-3xl"
              {...storyblokEditable(blok)}
            >
              {blok.subHeader}
            </p>
            <h1
              className="text-3xl font-medium xl:text-5xl"
              {...storyblokEditable(blok)}
            >
              {blok.header}
            </h1>
          </div>
          <div
            className="text-center text-base font-light leading-6 text-black-1"
            {...storyblokEditable(blok)}
          >
            {render(blok.description)}
          </div>
          {blok.button_title && (
            <Button
              asChild
              className="px-10 py-2.5 text-base font-semibold leading-6 text-white-1"
              {...storyblokEditable(blok)}
            >
              <Link href={`${blok.button_link.cached_url}`}>
                {blok.button_title}
              </Link>
            </Button>
          )}
        </article>
      </div>
    </div>
  );
};

export default DescriptionHome;
