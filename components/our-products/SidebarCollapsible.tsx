'use client';
import { storyblokEditable } from '@storyblok/react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import formatText from '@/utils/formatText';
import React, { useState } from 'react';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '../ui/collapsible';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';

const SidebarCollapsible = ({ blok }: { blok: any }) => {
  const [isOpen, setIsOpen] = useState(true);
  const category = useSearchParams().get('category');
  return (
    <Collapsible
      key={blok._uid}
      {...storyblokEditable(blok)}
      open={isOpen}
      onOpenChange={() => setIsOpen((prev) => !prev)}
      className="w-full"
    >
      <CollapsibleTrigger className="w-full bg-gray-light px-2.5 py-5">
        <div className="flex w-full justify-between">
          <h1
            className="text-16 font-semibold text-black-1"
            {...storyblokEditable(blok)}
          >
            {blok.filter_category}
          </h1>
          <Image
            src="/icons/arrow-up-gray.svg"
            alt="arrow-up"
            width={10}
            height={10}
            className={cn('', { 'rotate-180': !isOpen })}
          />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent {...storyblokEditable(blok)}>
        <div className="flex flex-col">
          {blok.filter_options.map((option: any) => (
            <Link
              href={`/our-products/${formatText(option)}?category=${encodeURIComponent(option)}`}
              className="flex items-center gap-2.5 p-2.5"
              key={option}
              {...storyblokEditable(option)}
              scroll={false}
            >
              <Checkbox
                id={option}
                className="size-5"
                checked={category === option}
              />
              <Label htmlFor={option} {...storyblokEditable(option)}>
                {option}
              </Label>
            </Link>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default SidebarCollapsible;
