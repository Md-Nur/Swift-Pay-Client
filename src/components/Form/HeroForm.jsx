const HeroForm = ({ title, img, children }) => {
  return (
    <section className="w-full h-full">
      <h1 className="text-5xl font-bold uppercase text-center my-3">{title}</h1>
      <div className="flex items-center flex-col md:flex-row-reverse w-full  justify-evenly h-full">
        <div className="text-center lg:text-left max-w-md">
          <img src={img} />
        </div>
        <div className="card bg-base-200 w-full max-w-md shrink-0 shadow-2xl">
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroForm;
