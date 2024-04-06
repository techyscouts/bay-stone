const page = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  return (
    <div>
      <h1>{params.slug}</h1>
      <p>News page</p>
    </div>
  );
};

export default page;
