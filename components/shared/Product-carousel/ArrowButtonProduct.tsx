import React, { useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import Image from 'next/image';

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type ButtonProps = {
  onClick: () => void;
};

export const PrevButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      <Image
        src="/icons/left-arrow-white.svg"
        width={24}
        height={40}
        alt="arrow left"
      />
    </button>
  );
};
export const NextButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      <Image
        src="/icons/right-arrow-white.svg"
        width={24}
        height={40}
        alt="arrow left"
      />
    </button>
  );
};
