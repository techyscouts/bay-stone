'use client';
import { HeroCarousel } from '@/types';
import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const Carousel = ({ blok }: { blok: any }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  return (
    <section
      className="mx-auto w-full max-w-screen-2xl overflow-hidden"
      ref={emblaRef}
    >
      <div className="flex h-screen" {...storyblokEditable(blok)}>
        {blok.hero_section.map((carousel: HeroCarousel) => (
          <StoryblokComponent blok={carousel} key={carousel._uid} />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
