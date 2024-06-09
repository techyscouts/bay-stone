import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';

const ServiceSchedule = ({ blok }: { blok: any }) => {
  return (
    <figure
      className="flex  w-full max-w-[387px] flex-col items-center gap-2"
      {...storyblokEditable(blok)}
    >
      <Image
        src={blok.image.filename}
        alt="service image"
        width={100}
        height={100}
        quality={100}
      />
      <p className="text-16 text-center font-light text-black-1">
        {blok.teaser}
      </p>
    </figure>
  );
};

export default ServiceSchedule;
