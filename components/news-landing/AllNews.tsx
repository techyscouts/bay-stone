import { getStoryblokApi, storyblokEditable } from '@storyblok/react/rsc';
import NewsTeaserCard from './NewsTeaserCard';

const getArticles = async () => {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories`, {
    version: 'draft',
    starts_with: 'news/',
    is_startpage: false,
  });
  return data.stories;
};

const AllNews = async ({ blok }: { blok: any }) => {
  const data = await getArticles();
  return (
    <section
      className="flex size-full flex-col gap-10"
      {...storyblokEditable(data)}
    >
      <h1
        className="text-32 xl:text-48 font-medium text-blue-main"
        {...storyblokEditable(blok)}
      >
        {blok.headline}
      </h1>
      <div
        className="grid size-full grid-cols-1 gap-10 xl:grid-cols-3"
        {...storyblokEditable(data)}
      >
        {data.map((article: any) => (
          <NewsTeaserCard key={article.id} blok={article.content} />
        ))}
      </div>
    </section>
  );
};

export default AllNews;
