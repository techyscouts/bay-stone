import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col ">
      <div>Title bar</div>
      <section className="wrapper flex gap-5 py-10 xl:gap-[55px] xl:py-20">
        <aside className="w-1/4">Sidebar</aside>
        <main className="w-3/4">{children}</main>
      </section>
    </div>
  );
};

export default layout;
