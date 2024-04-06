import { AboutUs } from './about';
import {
  DescriptionHome,
  ExploreHome,
  HeroCarousel,
  Home,
  ImageWithDescription,
  NewsCard,
  PopularNews,
  TestimonialBlock,
} from './home';
import { PageHeader, TitleAndDescription } from './shared';
import { AllNews, NewsDetail, NewsLanding } from './news-landing';
import { PrivacyPolicy } from './privacy-policy';
import TermsAndConditions from './terms-conditions/TermsAndConditions';

export const components = {
  home: Home,
  hero_carousel: HeroCarousel,
  description_home: DescriptionHome,
  newscard: NewsCard,
  explore_home: ExploreHome,
  image_with_description: ImageWithDescription,
  testimonial_block: TestimonialBlock,
  popular_news: PopularNews,
  // about bay stone page
  aboutBayStone: AboutUs,
  page_header: PageHeader,
  // news landing page
  news_landing: NewsLanding,
  all_news: AllNews,
  news: NewsDetail,
  // privacy policy page
  privacy_policy: PrivacyPolicy,
  // terms and conditions page
  terms_conditions: TermsAndConditions,
  // shared components
  title_and_description: TitleAndDescription,
};
