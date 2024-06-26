'use client';

import { cn } from '@/lib/utils';
import { getStoryblokApi } from '@storyblok/react';
import { useEffect, useState } from 'react';
import { GalleryItemModal } from '../shared';
import { Button } from '../ui/button';
import Loading from '../ui/loading';

const ProductItem = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]) as any;
  const [imageCount, setImageCount] = useState(9);
  const getProducts = async () => {
    setIsLoading(true);
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get(`cdn/stories`, {
      version: 'draft',
      starts_with: 'collection/',
      is_startpage: false,
    });
    let productImages: any[] = [];
    data.stories.forEach((item: any) => {
      productImages = [...productImages, ...item.content.image_gallery];
    });
    setProducts(productImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const totalCount = products.length;

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col gap-10">
      <section
        className={cn(
          'grid grid-cols-1 gap-x-8 gap-y-[55px] lg:grid-cols-2 xl:grid-cols-3'
        )}
      >
        {products.slice(0, imageCount).map((image: any) => {
          return <GalleryItemModal key={image.id} image={image} />;
        })}
      </section>
      {totalCount > imageCount && (
        <div className="flex-center pt-5 xl:pt-10">
          <Button
            className="px-10 py-2.5 text-base font-semibold leading-6 text-white-1"
            onClick={() => setImageCount(imageCount + 9)}
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductItem;
