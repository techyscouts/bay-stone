'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
const SiteWide = ({ header }: { header: any }) => {
  // eslint-disable-next-line no-unused-vars
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);
  return (
    <div className="flex-center h-[46px] bg-black-1">
      <div
        className="relative flex size-full max-w-[400px] items-center justify-center overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex size-full items-center">
          {header.map((header: any) => (
            <h1
              key={header._uid}
              className="w-full flex-none text-center font-urbane text-sm font-semibold leading-6  text-white-2 md:text-base"
            >
              {header.title}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SiteWide;
