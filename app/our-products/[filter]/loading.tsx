import { LoaderCircle } from 'lucide-react';

const loading = () => {
  return (
    <div className="flex w-full justify-center">
      <LoaderCircle className="size-10 animate-spin" />
    </div>
  );
};

export default loading;
