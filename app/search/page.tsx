import { fetchStoryBySlug, searchStoryblok } from '@/queries/storyblokQueries';
import StoryblokStory from '@storyblok/react/story';
import React from 'react';
import NotFound from '../not-found';
import SearchTile from '@/components/shared/SearchTile/SearchTile';

const Search = async ({ searchParams }: { searchParams: { q: string } }) => {
  const { q: searchTerm } = searchParams;
  const { story } = await fetchStoryBySlug('search');
  const results = await searchStoryblok(searchTerm);
  if (!story) return NotFound();
  return (
    <main className="size-full font-urbane">
      <StoryblokStory story={story} />
      <div className="wrapper py-10">
        {results?.length > 0 ? (
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {results.map((result: any) => {
              if (result.content.title_bar?.length > 0)
                return (
                  <SearchTile
                    key={result.id}
                    content={result.content}
                    slug={result.full_slug}
                  />
                );
              else return null;
            })}
          </div>
        ) : (
          <div>No results found</div>
        )}
      </div>
    </main>
  );
};

export default Search;
