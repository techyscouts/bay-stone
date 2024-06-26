import { cn } from '@/lib/utils';

const Hamburger = ({
  isOpen,
  openMenu,
  closeMenu,
}: {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}) => {
  return (
    <div
      className="relative flex size-[35px] cursor-pointer"
      onClick={() => {
        if (isOpen) closeMenu();
        else openMenu();
      }}
    >
      <div
        className={`relative m-auto flex h-[15px] w-[30px] rotate-0 items-center
          transition-all duration-700
          ${isOpen ? 'rotate-[135deg]' : ''}`}
      >
        <span
          className={cn(
            'absolute block h-[3px] w-full rounded-full bg-blue-1 transition-all delay-300 duration-300 scale-x-100 opacity-100',
            { 'scale-x-0 opacity-0 delay-0': isOpen }
          )}
        />
        <span
          className={cn(
            'absolute left-0 top-0 block h-[3px] w-full translate-y-0 rounded-full bg-blue-1 transition-all delay-300 duration-300',
            { '!w-full translate-y-[5px] delay-0': isOpen }
          )}
        />
        <span
          className={cn(
            'absolute bottom-0 right-0 block h-[3px] w-full rotate-0 rounded-full bg-blue-1 transition-all delay-300 duration-300',
            { 'bottom-2 !w-full rotate-90 delay-0': isOpen }
          )}
        />
      </div>
    </div>
  );
};

export default Hamburger;
