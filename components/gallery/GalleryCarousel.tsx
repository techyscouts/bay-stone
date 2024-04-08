'use client';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { storyblokEditable } from '@storyblok/react';
import { useCallback } from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import {
  DotButton,
  useDotButton,
} from '../shared/Product-carousel/DotButtonProduct';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from '../shared/Product-carousel/ArrowButtonProduct';
import Image from 'next/image';

const GalleryCarousel = ({ blok }: { blok: any }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay || !('stopOnInteraction' in autoplay.options)) return;
    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? (autoplay.reset as () => void)
        : (autoplay.stop as () => void);

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(
    emblaApi,
    onNavButtonClick
  );
  return (
    <section className="flex flex-col" {...storyblokEditable(blok)}>
      <h1
        className="text-32 xl:text-48 text-center font-medium text-blue-main"
        {...storyblokEditable(blok)}
      >
        {blok.header}
      </h1>
      <p
        className="text-16 pb-10 pt-5 text-center font-light text-black-1"
        {...storyblokEditable(blok)}
      >
        {blok.description}
      </p>

      {/* carousel code starts from here */}
      <div className="flex flex-row-reverse gap-5">
        <div className="flex w-full max-w-[315px] cursor-pointer flex-col gap-5 max-xl:hidden">
          {scrollSnaps.map((_, index) => (
            <div
              key={index}
              className="relative h-[160px] w-full max-w-[315px]"
              onClick={() => onDotButtonClick(index)}
            >
              <Image
                src={blok.image[index].filename}
                alt="index image"
                fill
                className="size-full object-cover"
                {...storyblokEditable(blok.image[index])}
              />
              {index !== selectedIndex && (
                <div className="absolute size-full bg-gray-3" />
              )}
            </div>
          ))}
        </div>
        <section className="relative  size-full overflow-hidden" ref={emblaRef}>
          <div className="flex h-full " {...storyblokEditable(blok)}>
            {blok.image.map((carousel: any) => (
              <div
                className="relative h-[500px] w-full flex-none xl:h-[700px]"
                key={carousel.id}
                {...storyblokEditable(carousel)}
              >
                <Image
                  src={carousel.filename}
                  alt={carousel.alt}
                  fill
                  className="size-full object-cover"
                  {...storyblokEditable(carousel)}
                />
                <div className="gallery-bg absolute size-full" />
              </div>
            ))}
          </div>
          <div className="flex-center bottom-[53px] left-[47%] flex gap-5 max-xl:py-10 xl:absolute">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                selected={index === selectedIndex}
              />
            ))}
          </div>
          <div className="absolute left-0 top-1/3 w-full px-5 xl:top-1/2 xl:px-10">
            <div className="flex w-full justify-between">
              <PrevButton onClick={onPrevButtonClick} />
              <NextButton onClick={onNextButtonClick} />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default GalleryCarousel;
