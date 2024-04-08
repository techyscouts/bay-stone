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
import {
  NotFound,
  PageHeader,
  ProductCollections,
  TitleAndDescription,
} from './shared';
import { AllNews, NewsDetail, NewsLanding } from './news-landing';
import { PrivacyPolicy } from './privacy-policy';
import TermsAndConditions from './terms-conditions/TermsAndConditions';
import { HeroSchedule, Schedule, ServiceSchedule } from './schedule';
import { Gallery, GalleryCarousel } from './gallery';

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
  // schedule appointment page
  schedule_appointment: Schedule,
  hero_schedule: HeroSchedule,
  schedule_service: ServiceSchedule,
  // procuct collections single
  product_collections: ProductCollections,
  // gallery page
  gallery: Gallery,
  gallery_carousel: GalleryCarousel,
  // not found page
  notFound: NotFound,
};
