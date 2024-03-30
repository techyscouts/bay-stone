import { multiAssets, navMenu } from '@/types';
import Image from 'next/image';
import { Newsletter } from '.';
import Link from 'next/link';
import { socialLinks } from '@/constants';

interface FooterProps {
  footerHead: string;
  footerSubhead: string;
  footerImages: multiAssets[];
  backgroundImg: string;
  newsletterTitle: string;
  newsletterDescription: string;
  newsletterBackground: string;
  supportLogos: multiAssets[];
  footerLinks: navMenu[];
  copyright: string;
}

const Footer = ({
  footerHead,
  footerSubhead,
  footerImages,
  backgroundImg,
  newsletterDescription,
  newsletterTitle,
  newsletterBackground,
  supportLogos,
  footerLinks,
  copyright,
}: FooterProps) => {
  return (
    <section
      className="flex size-full flex-col bg-gray-400 font-urbane"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <header className="flex size-full flex-col items-center py-5 font-medium text-white-1">
        <h2 className="text-24 xl:text-32">{footerHead}</h2>
        <h1 className="text-32 xl:text-48 text-white-1">{footerSubhead}</h1>
      </header>
      <figure className="max-sm:wrapper mx-auto grid max-w-screen-2xl grid-cols-2 gap-9 pb-5 lg:grid-cols-4">
        {footerImages.map((image) => (
          <Image
            key={image.id}
            src={image.filename}
            alt={image.alt}
            width={355}
            height={355}
          />
        ))}
      </figure>
      <Newsletter
        title={newsletterTitle}
        description={newsletterDescription}
        bgImage={newsletterBackground}
      />
      <div className="wrapper flex flex-col items-center justify-between py-5 max-xl:gap-5 xl:flex-row">
        <h1 className="text-20 xl:text-32 font-medium text-white-1">
          We Support
        </h1>
        <figure className="flex flex-wrap justify-center gap-5 2xl:gap-10">
          {supportLogos.map((logo) => (
            <Image
              key={logo.id}
              src={logo.filename}
              alt={logo.alt}
              width={136}
              height={50}
              className="size-fit object-contain"
            />
          ))}
        </figure>
      </div>
      <footer className="bg-gray-1 py-5">
        <div className="wrapper text-16 flex flex-col items-center justify-between font-urbane font-semibold text-white-1 max-xl:gap-5 xl:flex-row">
          <menu className="flex gap-10">
            {footerLinks.map((link: navMenu) => (
              <li key={link.links.id}>
                <Link href={`/${link.links.cached_url}`}>{link.name}</Link>
              </li>
            ))}
          </menu>
          <p>&copy; {copyright}</p>
          <figure className="flex flex-wrap gap-3 xl:gap-[34px]">
            {socialLinks.map((social) => (
              <Link
                key={social.id}
                href={social.link}
                target="_blank"
                className="flex-center size-[30px] rounded-full bg-white-1 xl:size-10"
              >
                <Image
                  src={social.icon}
                  alt={social.link}
                  width={23}
                  height={23}
                  className="object-contain max-xl:size-4"
                />
              </Link>
            ))}
          </figure>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
