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
            className="text-32 md:text-48 2xl:text-64 w-full font-medium text-white-1"
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
