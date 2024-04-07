import { fetchData } from '@/queries/storyblokQueries';
import StoryblokStory from '@storyblok/react/story';

const page = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const { data } = await fetchData(`collection/${params.slug}`);
  return (
    <main className="size-full font-urbane">
      <StoryblokStory story={data.story} />
    </main>
  );
};

export default page;
