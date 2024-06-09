'use client';

import { useCallback } from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import { storyblokEditable } from '@storyblok/react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
// import { DotButton, useDotButton } from './DotButtonProduct';
import Image from 'next/image';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './ArrowButtonProduct';

const ProductCarousel = ({ blok }: { blok: any }) => {
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

  // const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
  //   emblaApi,
  //   onNavButtonClick
  // );

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(
    emblaApi,
    onNavButtonClick
  );
  return (
    <section
      className="relative mx-auto size-full overflow-hidden"
      ref={emblaRef}
    >
      <div className="flex h-full " {...storyblokEditable(blok)}>
        {blok.hero_carousel.map((carousel: any) => (
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
          </div>
        ))}
      </div>
      {/* <div className="flex-center bottom-[53px] left-[47%] flex gap-5 max-xl:py-10 xl:absolute">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            selected={index === selectedIndex}
          />
        ))}
      </div> */}
      <div className="absolute left-0 top-1/3 w-full px-5 xl:top-1/2 xl:px-10">
        <div className="flex w-full justify-between">
          <PrevButton onClick={onPrevButtonClick} />
          <NextButton onClick={onNextButtonClick} />
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
