'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { NextButton, PrevButton, usePrevNextButtons } from './ArrowButton';
import NewsTeaserCard from '../news-landing/NewsTeaserCard';

const NewsCarousel = ({ blok }: { blok: any }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
  return (
    <section className="overflow-hidden xl:hidden" ref={emblaRef}>
      <div className="flex size-full">
        {blok.map((article: any) => (
          <NewsTeaserCard
            key={article.id}
            blok={article.content}
            slug={article.name}
          />
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
