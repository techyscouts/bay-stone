'use client';

import { RefObject, useEffect } from 'react';

interface ITapAway {
  ref: RefObject<HTMLDivElement>;
  handler: (event: MouseEvent | TouchEvent) => void;
}

export const useTapAway = ({ ref, handler }: ITapAway) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref || !ref.current || ref.current.contains(event.target as Node))
        return;

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default useTapAway;
