import { fetchStoryBySlug } from '@/queries/storyblokQueries';
import StoryblokStory from '@storyblok/react/story';

export default async function Home() {
  const { story } = await fetchStoryBySlug('home');
  return (
    <main className="size-full font-urbane">
      <StoryblokStory story={story} />
    </main>
  );
}
