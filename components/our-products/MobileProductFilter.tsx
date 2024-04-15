import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { storyblokEditable } from '@storyblok/react';
import SidebarCollapsible from './SidebarCollapsible';

const MobileProductFilter = ({ data }: { data: any }) => {
  return (
    <div className="w-full sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <div className="flex-center flex w-full gap-2 rounded-lg border border-gray-light py-2.5">
            <Image
              src="/icons/filter.svg"
              width={20}
              height={20}
              alt="filter"
            />
            <h2 className="text-24 font-medium text-blue-main">Filter by</h2>
          </div>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="h-full overflow-y-scroll bg-white-1"
        >
          <div
            className="mt-4 flex w-full flex-col gap-1"
            {...storyblokEditable(data.story)}
          >
            {data.story.content.filter.map((blok: any) => (
              <SidebarCollapsible key={blok._uid} blok={blok} />
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileProductFilter;
