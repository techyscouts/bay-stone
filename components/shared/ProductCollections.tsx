'use client';
import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import { render } from 'storyblok-rich-text-react-renderer';

import ProductCarousel from './Product-carousel/ProductCarousel';
import GalleryItemModal from './GalleryItemModal';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { useState } from 'react';

const ProductCollections = ({ blok }: { blok: any }) => {
  const length = blok.image_gallery.length;
  const [imageCount, setImageCount] = useState(16);
  return (
    <section className="size-full" {...storyblokEditable(blok)}>
      <div>
        {blok.title_bar.map((blok: any) => (
          <StoryblokComponent key={blok._uid} blok={blok} />
        ))}
      </div>
      <div className="wrapper flex flex-col gap-10 py-10 xl:py-20">
        <div {...storyblokEditable(blok)}>
          <ProductCarousel blok={blok} />
        </div>
        <div
          className="text-16 mx-auto w-full text-center font-light text-black-1 lg:w-[90%]"
          {...storyblokEditable(blok)}
        >
          {render(blok.description)}
        </div>
        <section
          className={cn(
            'grid grid-cols-1 gap-x-8 gap-y-[55px] md:grid-cols-2 xl:grid-cols-4',
            {
              'pb-6 xl:pb-[55px] border-b border-blue-1': length >= 20,
            }
          )}
          {...storyblokEditable(blok)}
        >
          {blok.image_gallery.slice(0, imageCount).map((image: any) => (
            <GalleryItemModal key={image.id} image={image} />
          ))}
        </section>
        {length > imageCount && length >= 16 && length !== imageCount && (
          <div className="flex-center pt-5 xl:pt-10">
            <Button
              className="text-16 px-10 py-2.5 font-semibold text-white-1"
              onClick={() => setImageCount(length)}
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCollections;
