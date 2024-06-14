import { fetchStoryBySlug } from '@/queries/storyblokQueries';
import StoryblokStory from '@storyblok/react/story';

const page = async () => {
  const { story } = await fetchStoryBySlug('schedule-appointment');
  return (
    <main className="size-full font-urbane">
      <StoryblokStory story={story} />
    </main>
  );
};

export default page;
