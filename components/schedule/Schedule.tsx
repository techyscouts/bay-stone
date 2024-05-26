import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc';
import ScheduleForm from './ScheduleForm';

const Schedule = ({ blok }: { blok: any }) => {
  return (
    <section className="flex size-full flex-col" {...storyblokEditable(blok)}>
      <div>
        {blok.title_bar.map((title: any) => (
          <StoryblokComponent key={title._uid} blok={title} />
        ))}
      </div>
      <div className="wrapper py-10 xl:py-20" {...storyblokEditable(blok)}>
        {blok.hero_section.map((hero: any) => (
          <StoryblokComponent key={hero._uid} blok={hero} />
        ))}
      </div>
      <div
        className="wrapper flex flex-col gap-10 pb-10 xl:pb-20"
        {...storyblokEditable(blok)}
      >
        <h1
          className="text-32 xl:text-48 text-center font-medium text-blue-main"
          {...storyblokEditable(blok)}
        >
          {blok.service_header}
        </h1>
        <div className="flex w-full flex-col gap-[55px] px-[55px] md:flex-row">
          {blok.services.map((service: any) => (
            <StoryblokComponent key={service._uid} blok={service} />
          ))}
        </div>
      </div>
      <div
        className="flex w-full justify-center py-10 xl:py-20"
        style={{
          backgroundImage: `url(${blok.form_background.filename})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        {...storyblokEditable(blok)}
      >
        <div className="wrapper flex-center">
          <ScheduleForm />
        </div>
      </div>
    </section>
  );
};

export default Schedule;
