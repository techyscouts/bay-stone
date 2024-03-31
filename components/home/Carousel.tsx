'use client';
import { EmblaCarouselType } from 'embla-carousel';

import { HeroCarousel } from '@/types';
import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { DotButton, useDotButton } from './DotButton';
import { useCallback } from 'react';

const Carousel = ({ blok }: { blok: any }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 80 }, [
    Autoplay({ delay: 8000 }),
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
      className="relative mx-auto size-full max-w-screen-2xl overflow-hidden"
      ref={emblaRef}
    >
      <div className="flex h-full " {...storyblokEditable(blok)}>
        {blok.hero_section.map((carousel: HeroCarousel) => (
          <StoryblokComponent blok={carousel} key={carousel._uid} />
        ))}
      </div>
      <div className="flex-center bottom-[53px] left-1/2 flex gap-5 max-xl:py-10 xl:absolute">
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

export default Carousel;
