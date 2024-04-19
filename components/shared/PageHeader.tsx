import { storyblokEditable } from '@storyblok/react/rsc';

const PageHeader = ({ blok }: { blok: any }) => {
  return (
    <header
      className="mx-auto w-full max-w-screen-2xl py-8 xl:py-[50px]"
      style={{
        backgroundImage: `url(${blok.background_image.filename})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      {...storyblokEditable(blok)}
    >
      <article className={'hero-linear w-full py-7 xl:py-[40px]'}>
        <div className="wrapper">
          <h1
            className="text-32 md:text-48 2xl:text-64 w-full max-w-[700px] font-medium text-white-1"
            {...storyblokEditable(blok)}
          >
            {blok.title}
          </h1>
        </div>
      </article>
    </header>
  );
};

export default PageHeader;
