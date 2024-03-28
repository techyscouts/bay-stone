import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { cn } from '@/lib/utils';
import { navMenu } from '@/types';
import Link from 'next/link';

const DesktopMenuItem = ({ navItems }: { navItems: navMenu[] }) => {
  return (
    <menu
      className={
        ' text-16 hidden gap-6 whitespace-nowrap font-zillaSlab font-semibold uppercase text-black-1 xl:flex 2xl:gap-11'
      }
    >
      {navItems.map((item) => (
        <HoverCard key={item.links.id}>
          <HoverCardTrigger asChild>
            <li className="w-full">
              <Link href={`/${item.links.cached_url}`}>{item.name}</Link>
            </li>
          </HoverCardTrigger>
          {item.subMenu.length > 0 && (
            <HoverCardContent className="mt-2 w-40 bg-white-1 px-0">
              <menu
                className={cn(
                  'text-16 text-black-1 font-semibold font-zillaSlab uppercase whitespace-nowrap relative w-full'
                )}
              >
                {item.subMenu.map((subItem: navMenu) => (
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
            </HoverCardContent>
          )}
        </HoverCard>
      ))}
    </menu>
  );
};

export default DesktopMenuItem;
