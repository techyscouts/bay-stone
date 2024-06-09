'use client';
import { useCallback } from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import { DotButton, useDotButton } from './DotButton';

const TestimonialCarousel = ({ blok }: { blok: any }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);
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
  return (
    <section
      className="flex h-fit w-full flex-col overflow-hidden py-5 xl:max-w-[580px] 2xl:max-w-[674px]"
      ref={emblaRef}
    >
      <div className="flex h-fit" {...storyblokEditable(blok)}>
        {blok.testimonial.map((carousel: any) => (
          <StoryblokComponent blok={carousel} key={carousel._uid} />
        ))}
      </div>
      <div className="flex-center gap-5 pt-5 ">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            selected={index === selectedIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialCarousel;
