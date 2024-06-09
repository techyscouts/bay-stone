import { ISbStoriesParams, getStoryblokApi } from '@storyblok/react/rsc';

export async function fetchData(slug: string) {
  const sbParams: ISbStoriesParams = {
    version:
      process.env.NEXT_PUBLIC_SB_VERSION === 'draft' ? 'draft' : 'published',
  };
  try {
    const storyblokApi = getStoryblokApi();
    return await storyblokApi.get(`cdn/stories/${slug}`, sbParams, {
      cache: 'no-store',
    });
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data');
  }
}
