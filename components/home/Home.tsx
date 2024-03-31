import Carousel from './Carousel';

const Home = ({ blok }: { blok: any }) => {
  return (
    <div className="flex flex-col">
      <Carousel blok={blok} />
    </div>
  );
};

export default Home;
