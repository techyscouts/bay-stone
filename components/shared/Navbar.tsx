'use client';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useRef, useState } from 'react';
import useTapAway from '@/utils/useTapAway';
import { navItem } from '@/types';
import { Hamburger } from './small';
import { cn } from '@/lib/utils';
import { DesktopMenuItem, MobileMenuItem, SiteWide } from '.';
import { useRouter } from 'next/navigation';

interface NavbarProps {
  logo: string;
  header: any;
  navItems: navItem[];
  buttonName: string;
  mobileButtonNumber: number;
}

const Navbar = ({
  logo,
  header,
  navItems,
  buttonName,
  mobileButtonNumber,
}: NavbarProps) => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  useTapAway({ ref: searchRef, handler: () => setIsSearchOpen(false) });

  return (
    <header className="flex flex-col">
      <SiteWide header={header} />
      <section className="wrapper flex flex-col bg-white-1 py-2.5 max-sm:pb-2">
        <nav className="flex items-center justify-between gap-3 py-2.5">
          <div className="xl:hidden">
            <Hamburger
              isOpen={isMobileMenuOpen}
              setIsOpen={setIsMobileMenuOpen}
            />
          </div>
          <div className="flex w-full max-w-[800px] items-center gap-11 max-xl:justify-center">
            <Link
              href="/"
              className="relative h-7 w-[197px] md:h-9 xl:h-11 xl:w-[234px]"
            >
              <Image
                src={logo}
                alt="Baystone Logo"
                fill
                priority
                className="object-contain"
              />
            </Link>
            <DesktopMenuItem navItems={navItems} />
          </div>
          <div className="relative flex gap-4">
            <Button
              className="blue-main-bg hidden font-urbane text-sm font-semibold text-white-1 xl:block xl:text-base"
              onClick={() => {
                router.push('/schedule-appointment');
              }}
            >
              {buttonName}
            </Button>
            <a href={`tel:${mobileButtonNumber}`} className="flex-center">
              <Image
                src="/icons/call.svg"
                alt="Call Icon"
                width={24}
                height={24}
                className="hidden object-contain xl:block"
              />
            </a>
            <div className="flex items-center">
              <Image
                src="/icons/search.svg"
                alt="Search Icon"
                width={24}
                height={24}
                onClick={() => setIsSearchOpen((prev) => !prev)}
                className="cursor-pointer object-contain"
              />
              {isSearchOpen && (
                <div ref={searchRef} className="relative max-sm:hidden">
                  <div className="search-boxShadow absolute right-0 top-8 z-10 flex flex-col rounded-lg bg-white-1 p-2.5">
                    <div className="triangle absolute -top-3 right-1 size-4 bg-white-1" />
                    <Image
                      src="/icons/search.svg"
                      alt="Search Icon"
                      width={24}
                      height={24}
                      className="absolute left-2 top-4"
                    />
                    <div className="border-b-2 border-black-1">
                      <Input
                        className="placeholder:text-16 text-16 w-[321px] border-none bg-transparent pl-8 font-urbane text-black-1 placeholder:text-black-1 focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="Search.."
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
        {isSearchOpen && (
          <div className="border-b-2 border-black-1 sm:hidden">
            <Input
              className="placeholder:text-16 text-16 w-full border-none bg-transparent pl-0 font-urbane text-black-1 placeholder:text-black-1 focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Search.."
            />
          </div>
        )}
      </section>
      <nav
        className={cn(
          'absolute top-[118px] translate-x-[-100%] w-full max-w-[600px] transition-all duration-700 flex flex-col pr-4 xl:hidden z-10 bg-white-1 nav-shadow',
          { 'translate-x-0': isMobileMenuOpen }
        )}
      >
        <MobileMenuItem
          navItems={navItems}
          menuClose={() => setIsMobileMenuOpen(false)}
        />
        <div className="w-full py-5 pl-6 md:pl-[50px]">
          <Button className="blue-main-bg w-full max-w-[297px] px-10 py-2.5 font-urbane text-base font-semibold text-white-1">
            <a href={`tel:${mobileButtonNumber}`} className="flex-center">
              <Image
                src="/icons/call.svg"
                alt="Call Icon"
                width={24}
                height={24}
                className="object-contain invert"
              />
              &nbsp;&nbsp;&nbsp;
              {mobileButtonNumber}
            </a>
          </Button>
        </div>
        <div className="w-full pb-5 pl-6 md:pl-[50px]">
          <Button className="w-full max-w-[297px] border  border-blue-main bg-transparent py-2.5 font-urbane text-base font-semibold text-blue-main">
            {buttonName}
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
