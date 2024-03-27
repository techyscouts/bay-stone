import { ISbStoriesParams, getStoryblokApi } from '@storyblok/react/rsc';

const sbParams: ISbStoriesParams = {
  version:
    process.env.NEXT_PUBLIC_SB_VERSION === 'draft' ? 'draft' : 'published',
};

export async function fetchHeaderFooter() {
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/header-footer`, sbParams, {
    cache: 'no-store',
  });
}
