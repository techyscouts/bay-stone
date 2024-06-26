'use client';
import { useState } from 'react';
import Image from 'next/image';
import { storyblokEditable } from '@storyblok/react';

import { Dialog, DialogContent } from '../ui/dialog';

const GalleryItemModal = ({ image }: { image: any }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div
        className="flex cursor-pointer flex-col gap-5"
        key={image.id}
        {...storyblokEditable(image)}
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src={image.filename}
          alt={image.name}
          width={315}
          height={315}
          priority
          className="h-80 w-full object-cover"
          {...storyblokEditable(image)}
        />
        <p
          className="px-2 text-center text-base font-medium leading-6 text-black-1 xl:text-2xl"
          {...storyblokEditable(image)}
        >
          {image.name}
        </p>
      </div>
      <Dialog open={isModalOpen} onOpenChange={() => setIsModalOpen(false)}>
        <DialogContent className="flex w-full max-w-[840px] flex-col gap-5 bg-white-1 p-10 xl:gap-10">
          <Image
            src={image.filename}
            alt={image.name}
            width={760}
            height={500}
            className="h-[400px] w-full object-cover xl:h-[500px]"
          />
          <p className="px-2 text-center text-base font-medium leading-6 text-black-1 xl:text-2xl">
            {image.name}
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GalleryItemModal;
