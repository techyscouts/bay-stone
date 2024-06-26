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
          className="text-xl font-light text-blue-main xl:text-3xl"
          {...storyblokEditable(blok)}
        >
          {blok.subheader}
        </h2>
        <h1
          className="text-3xl font-medium text-blue-main xl:text-5xl"
          {...storyblokEditable(blok)}
        >
          {blok.header}
        </h1>
      </article>
    </section>
  );
};

export default NotFound;
