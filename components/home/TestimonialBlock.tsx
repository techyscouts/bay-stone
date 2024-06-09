import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';
import React from 'react';
import { render } from 'storyblok-rich-text-react-renderer';

const TestimonialBlock = ({ blok }: { blok: any }) => {
  return (
    <div className="flex h-fit w-full flex-none flex-col">
      <div className="flex justify-start pl-px">
        <Image
          src="/icons/inverted-left.svg"
          alt="left comma"
          width={32}
          height={32}
        />
      </div>
      <div
        className="text-16 h-fit  py-2.5 font-urbane font-light text-black-1"
        {...storyblokEditable(blok)}
      >
        {render(blok.testimonial_message)}
      </div>
      <div className="flex justify-end pr-px">
        <Image
          src="/icons/inverted-right.svg"
          alt="left comma"
          width={32}
          height={32}
        />
      </div>
      <h1 className="text-24 mt-5 font-medium text-blue-main">{blok.client}</h1>
    </div>
  );
};

export default TestimonialBlock;
