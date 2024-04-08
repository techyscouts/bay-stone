import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';

const NotFound = ({ blok }: { blok: any }) => {
  return (
    <section
      className="wrapper flex flex-col items-center gap-[55px] py-10 xl:py-[100px]"
      {...storyblokEditable(blok)}
    >
      <Image
        src={blok.image.filename}
        width={680}
        height={347}
        alt="error icon"
        {...storyblokEditable(blok.image)}
      />
      <article className="flex flex-col items-center gap-1">
        <h2
          className="text-20 xl:text-32 font-light text-blue-main"
          {...storyblokEditable(blok)}
        >
          {blok.subheader}
        </h2>
        <h1
          className="text-32 xl:text-48 font-medium text-blue-main"
          {...storyblokEditable(blok)}
        >
          {blok.header}
        </h1>
      </article>
    </section>
  );
};

export default NotFound;
