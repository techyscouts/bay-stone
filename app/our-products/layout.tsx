import React, { Suspense } from 'react';
import { fetchStoryBySlug } from '@/queries/storyblokQueries';
import { StoryblokStory, storyblokEditable } from '@storyblok/react/rsc';
import { MobileProductFilter, ProductFilter } from '@/components/our-products';
import { Loader } from 'lucide-react';

const layout = async ({ children }: { children: React.ReactNode }) => {
  const { story } = await fetchStoryBySlug(`our-products`);
  return (
    <div className="flex size-full flex-col">
      <StoryblokStory story={story} />
      <section className="wrapper flex w-full flex-col gap-5 py-10 md:flex-row xl:gap-[55px] xl:py-20">
        <aside
          className="w-full md:max-w-[310px]"
          {...storyblokEditable(story as any)}
        >
          <Suspense fallback={<Loader className="animate-spin" />}>
            <ProductFilter data={story} />
            <MobileProductFilter data={story} />
          </Suspense>
        </aside>
        <main className="no-scrollbar size-full max-h-[1300px] overflow-y-scroll">
          {children}
        </main>
      </section>
    </div>
  );
};

export default layout;
