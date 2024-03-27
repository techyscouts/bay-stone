import Link from 'next/link';

import { cn } from '@/lib/utils';
import { navItem } from '@/types';
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@/components/ui/hover-card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const MenuLink = ({ url, name }: { name: string; url: string }) => {
  return (
    <li className="px-4 py-2.5 transition-all duration-500 hover:bg-gray-1 hover:text-white-1">
      <Link href={`/${url}`}>{name}</Link>
    </li>
  );
};

export const DesktopMenuItem = ({ navItems }: { navItems: navItem[] }) => {
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
                {item.subMenu.map((subItem) => (
                  <MenuLink
                    key={subItem.links.id}
                    url={subItem.links.cached_url}
                    name={subItem.name}
                  />
                ))}
              </menu>
            </HoverCardContent>
          )}
        </HoverCard>
      ))}
    </menu>
  );
};

export const MobileMenuItem = ({ navItems }: { navItems: navItem[] }) => {
  return (
    <menu
      className={
        ' text-16 flex w-full flex-col items-start gap-6 whitespace-nowrap font-zillaSlab font-semibold uppercase text-black-1 xl:hidden 2xl:gap-11'
      }
    >
      {navItems.map((item) => (
        <Accordion
          type="single"
          collapsible
          key={item.links.id}
          className="w-full bg-white-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <li className="w-full">
                <Link href={`/${item.links.cached_url}`}>{item.name}</Link>
              </li>
            </AccordionTrigger>
            {item.subMenu.length > 0 && (
              <AccordionContent className="">
                <menu
                  className={cn(
                    'text-16 text-black-1 font-semibold font-zillaSlab uppercase whitespace-nowrap relative w-full'
                  )}
                >
                  {item.subMenu.map((subItem) => (
                    <MenuLink
                      key={subItem.links.id}
                      url={subItem.links.cached_url}
                      name={subItem.name}
                    />
                  ))}
                </menu>
              </AccordionContent>
            )}
          </AccordionItem>
        </Accordion>
      ))}
    </menu>
  );
};
