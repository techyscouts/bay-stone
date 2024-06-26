import { storyblokEditable } from '@storyblok/react/rsc';
import Image from 'next/image';
import { render } from 'storyblok-rich-text-react-renderer';

const HeroSchedule = ({ blok }: { blok: any }) => {
  return (
    <section className="flex flex-col-reverse gap-6 xl:flex-row xl:gap-10 ">
      <article className="flex w-full flex-col gap-10 xl:max-w-[670px] 2xl:max-w-[710px]">
        <div className="flex flex-col gap-3">
          <h1
            className="text-center text-3xl font-medium text-blue-main xl:text-5xl"
            {...storyblokEditable(blok)}
          >
            {blok.title}
          </h1>
          <p
            className="text-center text-2xl font-light text-blue-main xl:text-3xl"
            {...storyblokEditable(blok)}
          >
            {blok.subdescription}
          </p>
        </div>
        <div
          className="text-center text-base font-light leading-6 text-black-1"
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
          <article className="flex">
            <p
              // href={`tel:${blok.location}`}
              className="text-base font-light leading-6 text-black-1"
              {...storyblokEditable(blok)}
            >
              {blok.location} &nbsp;
            </p>
            <a
              href={`tel:${blok.phone}`}
              className="text-base font-light leading-6 text-blue-main"
            >
              {blok.phone}
            </a>
          </article>
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
