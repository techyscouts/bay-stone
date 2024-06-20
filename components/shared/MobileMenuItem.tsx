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
        ' text-16 flex w-full flex-col items-start gap-6 whitespace-nowrap bg-white-1 font-zillaSlab font-semibold uppercase text-black-1 md:pl-[50px] xl:hidden '
      }
    >
      {navItems.map((item) => (
        <li
          className="flex w-full flex-col py-3 pl-6 pr-4 hover:bg-gray-1 hover:text-white-1"
          key={item.links.id}
        >
          <Link
            href={`/${item.links.cached_url}`}
            className="transition-all duration-500"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </menu>
  );
};

export default MobileMenuItem;
