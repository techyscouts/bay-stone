import { Button } from '../ui/button';
import { Input } from '../ui/input';

const Newsletter = ({
  title,
  description,
  bgImage,
}: {
  title: string;
  description: string;
  bgImage: string;
}) => {
  return (
    <article
      className="wrapper flex flex-col justify-between rounded-lg border-[5px] border-black-2 p-5 font-urbane max-xl:gap-5 md:px-[50px] lg:py-10 xl:flex-row 2xl:px-20"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex w-full flex-col justify-center gap-3 xl:max-w-[577px]">
        <h1 className="text-xl text-[#08222b] max-xl:text-center  xl:text-3xl">
          {title}
        </h1>
        <p className="text-xl font-light text-black-1 max-xl:text-center xl:text-2xl">
          {description}
        </p>
      </div>
      <div className="flex w-full flex-col justify-center gap-5 max-xl:items-center xl:max-w-[535px] xl:gap-3">
        <Input
          className="border border-black-1 bg-white-1 py-2.5 pl-5 text-base leading-6  text-black-1"
          placeholder="Email Address"
        />
        <Button className="blue-main-bg max-w-[165px] px-10 py-2.5 text-base font-semibold leading-6 text-white-1">
          Subscribe
        </Button>
      </div>
    </article>
  );
};

export default Newsletter;
