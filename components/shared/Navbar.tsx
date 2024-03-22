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
        <div className="flex items-center gap-11">
          <Image
            src="/icons/logo.svg"
            alt="Baystone Logo"
            width={234}
            height={47}
          />
          <div className="max-lg:hidden">
            <MenuItem />
          </div>
        </div>
        <div className="flex gap-10">
          <Button className="blue-main font-urbane text-[16px] font-semibold text-white-1">
            Schedule Design Appointment
          </Button>
          <Image src="/icons/call.svg" alt="Call Icon" width={24} height={24} />
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
