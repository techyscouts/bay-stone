import { storyblokEditable } from '@storyblok/react/rsc';
import { Button } from '../ui/button';
import { multiAssets } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const ExploreHome = ({ blok }: { blok: any }) => {
  return (
    <section
      className="flex flex-col gap-[30px] font-urbane xl:flex-row"
      {...storyblokEditable(blok)}
    >
      <div
        className="flex min-h-[325px] w-full flex-col justify-center px-[30px] max-xl:items-center xl:min-h-[608px] xl:max-w-[545px]"
        style={{
          backgroundImage: `url(${blok.background_image.filename})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        {...storyblokEditable(blok)}
      >
        <p
          className="text-2xl font-light text-white-1 xl:text-3xl"
          {...storyblokEditable(blok)}
        >
          {blok.subHeader}
        </p>
        <h1
          className="text-3xl font-medium text-white-1 max-xl:text-center xl:text-5xl"
          {...storyblokEditable(blok)}
        >
          {blok.header}
        </h1>
        <div className="pt-10">
          <Button
            asChild
            className="blue-main-bg px-10 py-2.5 text-base font-semibold leading-6 text-white-1"
          >
            <Link href={blok.button_link.cached_url}>{blok.button_text}</Link>
          </Button>
        </div>
      </div>
      <div
        className="grid grid-cols-2 justify-items-center gap-5 sm:grid-cols-3 2xl:gap-7"
        {...storyblokEditable(blok)}
      >
        {blok.image_gallery.map((image: multiAssets) => (
          <figure key={image.id} className="flex flex-col gap-2">
            <Image
              src={image.filename}
              alt={image.alt}
              width={250}
              height={250}
              {...storyblokEditable(blok)}
            />
            <figcaption
              className="text-base font-light text-black-1 2xl:text-2xl"
              {...storyblokEditable(blok)}
            >
              {image.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default ExploreHome;
