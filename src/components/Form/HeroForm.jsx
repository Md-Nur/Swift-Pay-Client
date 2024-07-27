const HeroForm = ({ title, img, children }) => {
  return (
    <section>
      <h1 className="text-5xl font-bold uppercase text-center my-3">{title}</h1>
      <div className="hero">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center lg:text-left w-full md:w-1/2">
            <img src={img} />
          </div>
          <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-2xl">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroForm;
