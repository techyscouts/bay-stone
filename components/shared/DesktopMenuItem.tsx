import { navMenu } from '@/types';
import Link from 'next/link';

const DesktopMenuItem = ({ navItems }: { navItems: navMenu[] }) => {
  return (
    <div
      className={
        'hidden gap-6 whitespace-nowrap font-zillaSlab text-base font-semibold uppercase text-black-1 xl:flex 2xl:gap-11'
      }
    >
      {navItems.map((item) => (
        <Link key={item.links.id} href={`/${item.links.cached_url}`}>
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default DesktopMenuItem;
