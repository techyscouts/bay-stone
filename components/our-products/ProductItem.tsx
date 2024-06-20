'use client';

import { cn } from '@/lib/utils';
import { getStoryblokApi } from '@storyblok/react';
import { useEffect, useState } from 'react';
import { GalleryItemModal } from '../shared';
import { Button } from '../ui/button';

const ProductItem = () => {
  const [data, setData] = useState([]) as any;
  const [imageCount, setImageCount] = useState(12);
  const getArticles = async () => {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get(`cdn/stories`, {
      version: 'draft',
      starts_with: 'collection/',
      is_startpage: false,
    });
    setData(data.stories);
  };

  useEffect(() => {
    getArticles();
  }, []);

  const length = data.length;

  return (
    <div className="flex flex-col gap-10">
      <section
        className={cn(
          'grid grid-cols-1 gap-x-8 gap-y-[55px] lg:grid-cols-2 xl:grid-cols-3'
        )}
      >
        {data.slice(0, imageCount).map((item: any) => (
          <GalleryItemModal
            key={item._uid}
            image={item.content.image_gallery[0]}
          />
        ))}
      </section>
      {length > imageCount && length >= 12 && length !== imageCount && (
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
  );
};

export default ProductItem;
