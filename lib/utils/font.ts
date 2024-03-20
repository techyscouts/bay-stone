import localFont from 'next/font/local';

const urbane = localFont({
  src: [
    {
      path: '../../public/fonts/Urbane-Thin.ttf',
      weight: '300',
    },
    {
      path: '../../public/fonts/Urbane-Light.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/Urbane-Medium.ttf',
      weight: '500',
    },
    {
      path: '../../public/fonts/Urbane-DemiBold.ttf',
      weight: '600',
    },
    {
      path: '../../public/fonts/Urbane-Bold.ttf',
      weight: '700',
    },
    {
      path: '../../public/fonts/Urbane-Heavy.ttf',
      weight: '900',
    },
  ],
  variable: '--font-urbane',
});

export { urbane };
