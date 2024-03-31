import { storyblokEditable } from '@storyblok/react';
import React from 'react';

const HeroCarousel = ({ blok }: { blok: any }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="size-full min-w-max flex-none"
      style={{
        backgroundImage: `url(${blok.background_image.filename})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="py-20">
        <h1>{blok.header}</h1>
      </div>
    </div>
  );
};

export default HeroCarousel;
