import StoryblokStory from '@storyblok/react/story';
import { fetchData } from '@/queries/storyblokQueries';

const NotFound = async () => {
  const { data } = await fetchData('not-found');
  return (
    <main className="size-full font-urbane">
      <StoryblokStory story={data.story} />
    </main>
  );
};

export default NotFound;
