'use client';

import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

import SidebarCollapsible from './SidebarCollapsible';

const ProductFilter = ({ data }: { data: any }) => {
  const router = useRouter();
  const category = useSearchParams().get('category');
  return (
    <div className="flex flex-col gap-6 max-sm:hidden">
      <section className="flex flex-col gap-2">
        <div className="flex gap-2">
          <Image src="/icons/filter.svg" width={20} height={20} alt="filter" />
          <h2 className="text-24 font-medium text-blue-main">Filter by</h2>
        </div>
        {category && (
          <div className="flex flex-col bg-gray-light p-5">
            <div className="flex justify-between border-b border-black-1 pb-[14px]">
              <h2 className="text-16 font-semibold text-black-1">Filter by</h2>
              <h2
                className="text-16 cursor-pointer font-semibold text-yellow-main"
                onClick={() => router.replace('/our-products')}
              >
                Clear All
              </h2>
            </div>
            <div className="flex justify-between pt-[14px]">
              <h2 className="text-16 font-semibold text-black-1">
                Filter by: <span className="text-yellow-main">{category}</span>
              </h2>
              <Image
                src="/icons/cross.svg"
                width={24}
                height={24}
                alt="close"
                className="cursor-pointer"
                onClick={() => router.replace('/our-products')}
              />
            </div>
          </div>
        )}
      </section>
      <div
        className="flex w-full flex-col gap-1"
        {...storyblokEditable(data.content)}
      >
        {data.content.filter.map((blok: any) => (
          <SidebarCollapsible key={blok._uid} blok={blok} />
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
