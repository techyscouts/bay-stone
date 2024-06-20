'use client';

import { StoryblokComponent, storyblokEditable } from '@storyblok/react';

const Gallery = ({ blok }: { blok: any }) => {
  return (
    <section className="size-full" {...storyblokEditable(blok)}>
      <div>
        {blok.title_bar.map((blok: any) => (
          <StoryblokComponent key={blok._uid} blok={blok} />
        ))}
      </div>
      <section className="wrapper py-10 xl:py-20">
        <div className="flex flex-col gap-10" {...storyblokEditable(blok)}>
          {blok.gallery_section.map((gallery: any) => (
            <StoryblokComponent key={gallery._uid} blok={gallery} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Gallery;
