import { cn } from '@/lib/utils';
import { storyblokEditable } from '@storyblok/react/rsc';
import { render } from 'storyblok-rich-text-react-renderer';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';

const ImageWithDescription = ({ blok }: { blok: any }) => {
  return (
    <div
      className={cn('flex flex-col-reverse xl:flex-row gap-5 2xl:gap-10', {
        'xl:flex-row-reverse': blok.flex_direction === 'reverse',
      })}
      {...storyblokEditable(blok)}
    >
      <article className="flex w-full flex-col items-center justify-center font-urbane text-blue-main max-xl:justify-center xl:max-w-[470px]">
        <p
          className="text-2xl font-light xl:text-3xl"
          {...storyblokEditable(blok)}
        >
          {blok.subHeader}
        </p>
        <h1
          className="pt-3 text-center text-3xl font-medium xl:text-5xl"
          {...storyblokEditable(blok)}
        >
          {blok.header}
        </h1>
        <div
          className="py-6 text-center text-base font-light leading-6 text-black-1 2xl:py-10"
          {...storyblokEditable(blok)}
        >
          {render(blok.description)}
        </div>
        {blok.button_title && (
          <Button
            asChild
            className="blue-main-bg px-10 py-2.5 text-base font-semibold leading-6 text-white-1"
          >
            <Link
              href={`/${blok.button_link.cached_url}`}
              {...storyblokEditable(blok)}
            >
              {blok.button_title}
            </Link>
          </Button>
        )}
      </article>
      <div className="flex w-full justify-end">
        <Image
          src={blok.image.filename}
          width={830}
          height={700}
          alt="image"
          className={'size-full object-cover xl:max-w-[8300px]'}
        />
      </div>
    </div>
  );
};

export default ImageWithDescription;
