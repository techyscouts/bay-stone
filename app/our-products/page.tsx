import { GalleryItemModal } from '@/components/shared';
import { cn } from '@/lib/utils';
import { fetchData } from '@/queries/storyblokQueries';
import { storyblokEditable } from '@storyblok/react';

const page = async () => {
  const { data } = await fetchData(`our-products`);
  return (
    <section
      className={cn(
        'grid grid-cols-1 gap-x-8 gap-y-[55px] lg:grid-cols-2 xl:grid-cols-3'
      )}
      {...storyblokEditable(data.story)}
    >
      {data.story.content.image_gallery.map((image: any) => (
        <GalleryItemModal key={image.id} image={image} />
      ))}
    </section>
  );
};

export default page;
