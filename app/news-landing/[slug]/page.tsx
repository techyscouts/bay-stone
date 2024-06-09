import StoryblokStory from '@storyblok/react/story';

import { fetchData } from '@/queries/storyblokQueries';

const page = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const { data } = await fetchData(`news/${params.slug}`);

  return (
    <main className="flex size-full flex-col gap-14 font-urbane">
      <StoryblokStory story={data.story} />
    </main>
  );
};

export default page;
