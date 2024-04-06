import { storyblokEditable } from '@storyblok/react/rsc';
import Image from 'next/image';
import { render } from 'storyblok-rich-text-react-renderer';

const HeroSchedule = ({ blok }: { blok: any }) => {
  return (
    <section className="flex flex-col-reverse gap-6 xl:flex-row xl:gap-10 ">
      <article className="flex w-full flex-col gap-10 xl:max-w-[670px] 2xl:max-w-[740px]">
        <div className="flex flex-col gap-3">
          <h1
            className="text-32 text-48 text-center font-medium text-blue-main"
            {...storyblokEditable(blok)}
          >
            {blok.title}
          </h1>
          <p
            className="text-24 xl:text-32 text-center font-light text-blue-main"
            {...storyblokEditable(blok)}
          >
            {blok.subdescription}
          </p>
        </div>
        <div
          className="text-16 text-center font-light text-black-1"
          {...storyblokEditable(blok)}
        >
          {render(blok.description)}
        </div>
        <div className="flex-center gap-3 border-y border-blue-main py-5">
          <Image
            src="/icons/location.svg"
            width={15}
            height={15}
            alt="location"
          />
          <p
            className="text-16 font-light text-black-1"
            {...storyblokEditable(blok)}
          >
            {blok.location}
          </p>
        </div>
      </article>
      <Image
        src={blok.image.filename}
        width={571}
        height={450}
        alt="hero"
        className="w-full object-cover"
      />
    </section>
  );
};

export default HeroSchedule;
