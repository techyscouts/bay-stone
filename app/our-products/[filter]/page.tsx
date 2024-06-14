/* eslint-disable no-template-curly-in-string */
import { GalleryItemModal } from '@/components/shared';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { fetchStoryBySlug } from '@/queries/storyblokQueries';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async ({
  params,
  searchParams,
}: {
  searchParams: {
    category: string;
  };
  params: { filter: string };
}) => {
  if (!searchParams.category) {
    redirect('/our-products');
  }
  const { story } = await fetchStoryBySlug(`collection/${params.filter}`);
  const titleBar = story.content.title_bar;
  return (
    <section className="flex w-full flex-col gap-[55px]">
      <header
        className="w-full"
        style={{
          backgroundImage: `url(${titleBar[0].background_image.filename})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <article className={'hero-linear w-full p-10'}>
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-32 md:text-48 w-full max-w-[500px] font-medium text-white-1">
                {searchParams.category}
              </h1>
              <p className="text-32 font-light text-white-1">
                See Entire Collection
              </p>
            </div>
            <Button
              asChild
              className="blue-main-bg text-16 font-semibold text-white-1"
            >
              <Link href={`/collection/${params.filter}`}>View All</Link>
            </Button>
          </div>
        </article>
      </header>
      <section
        className={cn(
          'grid grid-cols-1 gap-x-8 gap-y-[55px] lg:grid-cols-2 xl:grid-cols-3'
        )}
      >
        {story.content.image_gallery.map((image: any) => (
          <GalleryItemModal key={image.id} image={image} />
        ))}
      </section>
    </section>
  );
};

export default page;
