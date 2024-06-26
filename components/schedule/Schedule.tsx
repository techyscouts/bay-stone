import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc';
import ScheduleForm from './ScheduleForm';
import { scheduleBrings } from '@/constants';
import Image from 'next/image';

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
          className="text-3xl xl:text-5xl text-center font-medium text-blue-main"
          {...storyblokEditable(blok)}
        >
          {blok.service_header}
        </h1>
        <div className="flex w-full flex-col gap-[55px] px-[55px] md:flex-row">
          {scheduleBrings.map((item) => (
            <figure
              key={item.id}
              className="flex  w-full max-w-[387px] flex-col items-center gap-2"
            >
              <Image
                src={item.icon}
                alt="service image"
                width={100}
                height={100}
                quality={100}
              />
              <p className="text-base leading-6 text-center font-light text-black-1">
                {item.description}
              </p>
            </figure>
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
