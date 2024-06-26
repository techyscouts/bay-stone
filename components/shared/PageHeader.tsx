import { storyblokEditable } from '@storyblok/react/rsc';
import { render } from 'storyblok-rich-text-react-renderer';

const PageHeader = ({ blok }: { blok: any }) => {
  return (
    <header
      className="w-full py-8 xl:py-[50px] "
      style={{
        backgroundImage: `url(${blok.background_image.filename})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      {...storyblokEditable(blok)}
    >
      <article className={'hero-linear flex h-[157px] w-full items-center'}>
        <div className="wrapper">
          <div
            className="w-full text-3xl font-medium text-white-1 md:text-5xl 2xl:text-6xl"
            {...storyblokEditable(blok)}
          >
            {render(blok.title)}
          </div>
        </div>
      </article>
    </header>
  );
};

export default PageHeader;
