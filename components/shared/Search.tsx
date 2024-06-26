import Image from 'next/image';
import React from 'react';
import { Input } from '../ui/input';
import { useRouter, useSearchParams } from 'next/navigation';

interface SearchProps {
  onCloseSearch: () => void;
}

const Search = ({ onCloseSearch }: SearchProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  return (
    <div className="sm:search-boxShadow right-0 top-8 z-20 rounded-lg bg-white-1 sm:absolute sm:p-2.5">
      <div className="triangle -top-3 right-1 hidden size-4 bg-white-1 sm:absolute sm:block" />
      <div className="flex flex-row gap-2 sm:w-[320px]">
        <Image
          src="/icons/search.svg"
          alt="Search Icon"
          width={24}
          height={24}
          className="hidden sm:block"
        />
        <div className="relative flex flex-1 flex-row items-center justify-center border-b-2 border-black-1">
          <Input
            className="w-full border-none bg-transparent px-0 pr-10 font-urbane text-lg text-black-1 placeholder:text-lg placeholder:text-black-1 focus-visible:ring-0 focus-visible:ring-offset-0 sm:pl-2"
            placeholder="Search.."
            defaultValue={query}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                router.replace(
                  `/search?q=${encodeURIComponent(event.currentTarget.value.trim())}`
                );
                onCloseSearch();
              }
            }}
          />

          <Image
            src="/icons/cross.svg"
            alt="Close Icon"
            width={24}
            height={24}
            onClick={onCloseSearch}
            className="absolute right-0 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
