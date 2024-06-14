import { ISbStoriesParams, ISbStoryData } from '@storyblok/react/rsc';

// export async function fetchData(slug: string) {
//   const sbParams: ISbStoriesParams = {
//     version:
//       process.env.NEXT_PUBLIC_SB_VERSION === 'draft' ? 'draft' : 'published',
//   };
//   try {
//     const storyblokApi = getStoryblokApi();
//     return await storyblokApi.get(`cdn/stories/${slug}`, sbParams, {
//       cache: 'no-store',
//     });
//   } catch (error) {
//     console.error(error);
//     throw new Error('Failed to fetch data');
//   }
// }

const isDraftModeEnabled = process.env.NEXT_PUBLIC_IS_PREVIEW === 'true';

export async function fetchStoryBySlug(
  slug: string
): Promise<{ story: ISbStoryData }> {
  const contentVersion = isDraftModeEnabled ? 'draft' : 'published';

  // check StoryBlok cache documentation for more information
  const cv = new Date().getTime() / 1000;

  const searchParamsData: ISbStoriesParams = {
    token: process.env.NEXT_PUBLIC_SB_ACCESS_TOKEN,
    cv,
    version: contentVersion,
  };

  const searchParams = new URLSearchParams(
    searchParamsData as Record<string, string>
  );

  const { story } = await fetch(
    `https://api-us.storyblok.com/v2/cdn/stories/${slug}?${searchParams.toString()}`,
    {
      next: {
        tags: ['page'],
      },
    }
  ).then((res) => res.json());

  return {
    story,
  };
}
