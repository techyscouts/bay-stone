'use client';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../ui/button';
import { useEffect, useRef, useState } from 'react';
import { useScrollLock } from 'usehooks-ts';
import { navItem } from '@/types';
import { Hamburger } from './small';
import { cn } from '@/lib/utils';
import { DesktopMenuItem, MobileMenuItem, SiteWide } from '.';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Search from './Search';

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
  const mobileNav = useRef(null);
  const { lock, unlock } = useScrollLock({
    autoLock: false,
    lockTarget: 'body',
  });
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    setIsMobileMenuOpen(false);
    unlock();
  }, [pathname, searchParams]);

  const openMobileMenu = () => {
    document.body.classList.add('relative');
    lock();
    setIsMobileMenuOpen(true);
    closeSearchBar();
  };

  const closeMobileMenu = () => {
    document.body.classList.remove('relative');
    unlock();
    setIsMobileMenuOpen(false);
  };

  const openSearchBar = () => {
    setIsSearchOpen(true);
    closeMobileMenu();
  };

  const closeSearchBar = () => {
    setIsSearchOpen(false);
  };

  return (
    <header className="flex flex-col">
      <SiteWide header={header} />
      <section className="wrapper flex flex-col bg-white-1 py-2.5 max-sm:pb-2">
        <nav className="flex items-center justify-between gap-3 py-2.5">
          <div className="xl:hidden">
            <Hamburger
              isOpen={isMobileMenuOpen}
              openMenu={openMobileMenu}
              closeMenu={closeMobileMenu}
            />
          </div>
          <div className="flex  items-center gap-11 max-xl:justify-center">
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
          </div>
          <DesktopMenuItem navItems={navItems} />
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
                onClick={openSearchBar}
                className="cursor-pointer object-contain"
              />
              {isSearchOpen && (
                <div ref={searchRef} className="relative max-sm:hidden">
                  <Search onCloseSearch={closeSearchBar} />
                </div>
              )}
            </div>
          </div>
        </nav>
        {isSearchOpen && (
          <div className="absolute inset-x-0 top-[118px] z-20 block bg-white-1 px-4 pb-2 sm:hidden">
            <Search onCloseSearch={closeSearchBar} />
          </div>
        )}
      </section>
      <nav
        ref={mobileNav}
        className={cn(
          'mobile-nav absolute top-[118px] bottom-0 translate-x-[-100%] w-full max-w-[450px] transition-all duration-700 flex flex-col xl:hidden z-10 bg-white-1 nav-shadow py-2',
          { 'translate-x-0': isMobileMenuOpen }
        )}
      >
        <MobileMenuItem navItems={navItems} menuClose={closeMobileMenu} />
        <div className="flex flex-col gap-4 bg-white-1 py-6">
          <div className="flex w-full flex-row items-center justify-center">
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
          <div className="flex w-full flex-row items-center justify-center">
            <Button
              className="w-full max-w-[297px] border  border-blue-main bg-transparent py-2.5 font-urbane text-base font-semibold text-blue-main"
              onClick={() => {
                router.push('/schedule-appointment');
              }}
            >
              {buttonName}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
