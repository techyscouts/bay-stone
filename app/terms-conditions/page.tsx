import { fetchData } from '@/queries/storyblokQueries';
import StoryblokStory from '@storyblok/react/story';

const page = async () => {
  const { data } = await fetchData('terms-conditions');
  return (
    <main className="size-full font-urbane">
      <StoryblokStory story={data.story} />
    </main>
  );
};

export default page;
