'use client';
import { StoryblokComponent } from '@storyblok/react';
import useEmblaCarousel from 'embla-carousel-react';
import { NextButton, PrevButton, usePrevNextButtons } from './ArrowButton';

const NewsCarousel = ({ blok }: { blok: any }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
  return (
    <section className="overflow-hidden xl:hidden" ref={emblaRef}>
      <div className="flex size-full">
        {blok.baystone_news.map((news: any) => (
          <StoryblokComponent blok={news} key={news._uid} />
        ))}
      </div>
      <div className="flex-center gap-5 pt-[30px]">
        <PrevButton onClick={onPrevButtonClick} />
        <NextButton onClick={onNextButtonClick} />
      </div>
    </section>
  );
};

export default NewsCarousel;
