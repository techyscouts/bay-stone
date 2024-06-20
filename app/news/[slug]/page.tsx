import StoryblokStory from '@storyblok/react/story';

import { fetchStoryBySlug } from '@/queries/storyblokQueries';

const page = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const { story } = await fetchStoryBySlug(`news-detail/${params.slug}`);

  return (
    <main className="flex size-full flex-col gap-14 font-urbane">
      <StoryblokStory story={story} />
    </main>
  );
};

export default page;
