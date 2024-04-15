import React from 'react';
import { fetchData } from '@/queries/storyblokQueries';
import { StoryblokStory, storyblokEditable } from '@storyblok/react/rsc';
import { MobileProductFilter, ProductFilter } from '@/components/our-products';

const layout = async ({ children }: { children: React.ReactNode }) => {
  const { data } = await fetchData(`our-products`);
  return (
    <div className="flex size-full flex-col">
      <StoryblokStory story={data.story} />
      <section className="wrapper flex w-full flex-col gap-5 py-10 md:flex-row xl:gap-[55px] xl:py-20">
        <aside
          className="w-full md:max-w-[310px]"
          {...storyblokEditable(data.story)}
        >
          <ProductFilter data={data} />
          <MobileProductFilter data={data} />
        </aside>
        <main className="no-scrollbar size-full max-h-[1300px] overflow-y-scroll">
          {children}
        </main>
      </section>
    </div>
  );
};

export default layout;
