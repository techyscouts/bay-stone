'use server';
import { ISbStoriesParams, getStoryblokApi } from '@storyblok/react/rsc';

const sbParams: ISbStoriesParams = {
  version:
    process.env.NEXT_PUBLIC_SB_VERSION === 'draft' ? 'draft' : 'published',
};

export async function fetchData(slug: string) {
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
