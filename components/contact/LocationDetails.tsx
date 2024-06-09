import { storyblokEditable } from '@storyblok/react/rsc';
import Image from 'next/image';
import { render } from 'storyblok-rich-text-react-renderer';

const LocationDetails = ({ blok }: { blok: any }) => {
  return (
    <section className="flex flex-col gap-10 lg:flex-row xl:gap-20">
      <div className="w-full max-xl:h-[400px] xl:max-w-[584px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.4297526920936!2d-121.91350948855562!3d37.37966787197122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcbf05ce3e4f9%3A0xe0d5300014019a63!2s495%20E%20Brokaw%20Rd%20F%2C%20San%20Jose%2C%20CA%2095131%2C%20USA!5e0!3m2!1sen!2snp!4v1713533790302!5m2!1sen!2snp"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex w-full flex-col" {...storyblokEditable(blok)}>
        <h2
          {...storyblokEditable(blok)}
          className="text-24 xl:text-32 font-light text-blue-main"
        >
          {blok.subheader}
        </h2>
        <h1
          {...storyblokEditable(blok)}
          className="text-32 xl:text-48 font-medium text-blue-main"
        >
          {blok.header}
        </h1>
        <div className="mt-5 flex w-full items-start gap-2 border-y border-gray-1 py-5">
          <Image
            src="/icons/location.svg"
            width={15}
            height={15}
            alt="location"
            className="mt-1.5"
          />
          <div
            className="text-16 w-full max-w-[200px] font-light text-black-1"
            {...storyblokEditable(blok)}
          >
            {render(blok.location)}
          </div>
        </div>
        <a
          href={`tel:${blok.contact}`}
          className="flex w-full gap-2 border-b border-gray-1 py-5"
        >
          <Image src="/icons/call-blue.svg" width={15} height={15} alt="call" />
          <p
            className="text-16 w-full max-w-[200px] font-light text-black-1"
            {...storyblokEditable(blok)}
          >
            {blok.contact}
          </p>
        </a>
        <div
          className="flex w-full flex-col gap-5 border-b border-gray-1 py-5"
          {...storyblokEditable(blok)}
        >
          <a
            href={`mailto:${blok.customer_service_email}`}
            className="flex gap-2"
          >
            <Image src="/icons/email.svg" width={15} height={15} alt="email" />
            <p className="text-16 w-full font-light text-black-1">
              Customer Service:{' '}
              <span
                className="font-semibold text-blue-1"
                {...storyblokEditable(blok)}
              >
                {blok.customer_service_email}
              </span>
            </p>
          </a>
          <a href={`mailto:${blok.sales_email}`} className="flex gap-2">
            <Image src="/icons/email.svg" width={15} height={15} alt="email" />
            <p className="text-16 w-full font-light text-black-1">
              Sales Service:{' '}
              <span
                className="font-semibold text-blue-1"
                {...storyblokEditable(blok)}
              >
                {blok.sales_email}
              </span>
            </p>
          </a>
        </div>
        <div className="flex w-full flex-col gap-5 border-b border-gray-1 py-5">
          <div className="flex gap-2">
            <Image src="/icons/time.svg" width={15} height={15} alt="time" />
            <p
              className="text-16 w-full font-light text-black-1"
              {...storyblokEditable(blok)}
            >
              Monday - Friday: {blok.opening_mon_fri}
            </p>
          </div>
          <div className="flex gap-2">
            <Image src="/icons/time.svg" width={15} height={15} alt="time" />
            <p
              className="text-16 w-full font-light text-black-1"
              {...storyblokEditable(blok)}
            >
              Saturday: {blok.opening_sat}
            </p>
          </div>
          <div className="flex gap-2">
            <Image src="/icons/time.svg" width={15} height={15} alt="time" />
            <p
              className="text-16 w-full font-light text-black-1"
              {...storyblokEditable(blok)}
            >
              Sunday: {blok.opening_sun}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationDetails;
