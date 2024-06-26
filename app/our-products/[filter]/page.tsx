'use client';
/* eslint-disable no-template-curly-in-string */
import { GalleryItemModal } from '@/components/shared';
import Loading from '@/components/ui/loading';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { fetchStoryBySlug } from '@/queries/storyblokQueries';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Page = ({
  params,
  searchParams,
}: {
  searchParams: {
    category: string;
  };
  params: { filter: string };
}) => {
  const [story, setStory] = useState(null) as any;
  const [imageCount, setImageCount] = useState(9);
  const router = useRouter();

  useEffect(() => {
    const getStory = async () => {
      const { story } = await fetchStoryBySlug(`collection/${params.filter}`);
      setStory(story);
    };
    getStory();
  }, [params.filter]);

  if (story == null) return <Loading />;

  if (!searchParams.category) {
    router.push('/our-products');
  }
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
              <h1 className="w-full max-w-[500px] text-3xl font-medium text-white-1 md:text-5xl">
                {searchParams.category}
              </h1>
              <p className="text-3xl font-light text-white-1">
                See Entire Collection
              </p>
            </div>
            <Button
              asChild
              className="blue-main-bg text-base font-semibold leading-6 text-white-1"
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
        {story.content.image_gallery.slice(0, imageCount).map((image: any) => (
          <GalleryItemModal key={image.id} image={image} />
        ))}
      </section>

      {story.content.image_gallery?.length > imageCount && (
        <div className="flex-center pt-5 xl:pt-10">
          <Button
            className="px-10 py-2.5 text-base font-semibold leading-6 text-white-1"
            onClick={() => setImageCount(imageCount + 9)}
          >
            Load More
          </Button>
        </div>
      )}
    </section>
  );
};

export default Page;
