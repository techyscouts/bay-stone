import StoryblokStory from '@storyblok/react/story';
import { fetchStoryBySlug } from '@/queries/storyblokQueries';

const NotFound = async () => {
  const { story } = await fetchStoryBySlug('not-found');
  return (
    <main className="size-full font-urbane">
      <StoryblokStory story={story} />
    </main>
  );
};

export default NotFound;
