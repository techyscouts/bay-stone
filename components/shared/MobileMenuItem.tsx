'use client';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import { navItem } from '@/types';

import Link from 'next/link';

const MobileMenuItem = ({
  navItems,
  menuClose,
}: {
  navItems: navItem[];
  menuClose: () => void;
}) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  return (
    <menu
      className={
        ' text-16 flex w-full flex-col items-start gap-6 whitespace-nowrap bg-white-1 pl-6 font-zillaSlab font-semibold uppercase text-black-1 md:pl-[50px] xl:hidden '
      }
    >
      {navItems.map((item) => (
        <li className="flex w-full flex-col gap-6" key={item.links.id}>
          <Link
            href={`/${item.links.cached_url}`}
            className=" px-4 py-2.5 transition-all duration-500 hover:bg-gray-1 hover:text-white-1"
            onClick={() => {
              if (item.subMenu.length > 0) {
                setIsSubmenuOpen((prev) => !prev);
              } else {
                menuClose();
              }
            }}
          >
            {item.name}
          </Link>
          {isSubmenuOpen && item.subMenu.length > 0 && (
            <menu
              className={cn(
                'text-16 text-black-1 flex flex-col font-semibold font-zillaSlab uppercase whitespace-nowrap relative w-full gap-6 pl-5'
              )}
            >
              {item.subMenu.map((subItem) => (
                <li
                  key={subItem.links.id}
                  className="px-4 py-2.5 transition-all duration-500 hover:bg-gray-1 hover:text-white-1"
                >
                  <Link href={`/${subItem.links.cached_url}`}>
                    {subItem.name}
                  </Link>
                </li>
              ))}
            </menu>
          )}
        </li>
      ))}
    </menu>
  );
};

export default MobileMenuItem;
