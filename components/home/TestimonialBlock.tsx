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
        className="h-fit py-2.5 font-urbane  text-base font-light leading-6 text-black-1"
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
      <h1 className="mt-5 text-2xl font-medium text-blue-main">
        {blok.client}
      </h1>
    </div>
  );
};

export default TestimonialBlock;
