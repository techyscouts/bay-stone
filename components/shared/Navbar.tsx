import Image from 'next/image';

import MenuItem from './MenuItem';
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <header className="flex flex-col">
      <div className="flex h-[46px] items-center justify-center bg-black-1">
        <h1 className="text-16 font-urbane font-semibold text-white-2">
          The Bay Area&apos;s Exclusive Tile Dealer
        </h1>
      </div>
      <nav className="wrapper flex items-center justify-between bg-white-1 py-2.5">
        <div className="flex items-center gap-8 2xl:gap-11">
          <Image
            src="/icons/logo.svg"
            alt="Baystone Logo"
            width={234}
            height={47}
            className="max-xl:h-[40px] max-xl:w-[197px]"
          />
          <div className="max-md:hidden">
            <MenuItem />
          </div>
        </div>
        <div className="flex gap-5 2xl:gap-5 ">
          <Button className="blue-main max-lg:hidden font-urbane text-sm font-semibold text-white-1 2xl:text-base">
            Schedule Design Appointment
          </Button>
          <Image
            src="/icons/call.svg"
            alt="Call Icon"
            width={24}
            height={24}
            className="max-lg:hidden"
          />
          <Image
            src="/icons/search.svg"
            alt="Search Icon"
            width={24}
            height={24}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
