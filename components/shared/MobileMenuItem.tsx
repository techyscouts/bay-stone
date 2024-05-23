import { navItem } from '@/types';

import Link from 'next/link';

const MobileMenuItem = ({
  navItems,
  menuClose,
}: {
  navItems: navItem[];
  menuClose: () => void;
}) => {
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
          >
            {item.name}
          </Link>
        </li>
      ))}
    </menu>
  );
};

export default MobileMenuItem;
