import { fetchData } from '@/queries/storyblokQueries';
import StoryblokStory from '@storyblok/react/story';

const page = async () => {
  const { data } = await fetchData('about-bay-stone');
  return (
    <main className="size-full font-urbane">
      about-bay-stone
      <StoryblokStory story={data.story} />
    </main>
  );
};

export default page;
