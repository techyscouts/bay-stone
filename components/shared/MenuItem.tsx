import { cn } from '@/lib/utils';
import Link from 'next/link';

const MenuItem = () => {
  return (
    <menu className={cn('flex gap-6 2xl:gap-10')}>
      {['about bay stone', 'our products', 'gallery', 'contact'].map(
        (item, index) => (
          <li
            key={index}
            className={cn(
              'text-16 text-black-1 font-semibold font-zillaSlab uppercase'
            )}
          >
            <Link href="/">{item}</Link>
          </li>
        )
      )}
    </menu>
  );
};

export default MenuItem;
