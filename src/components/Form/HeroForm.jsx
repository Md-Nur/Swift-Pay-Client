const HeroForm = ({ title, img, children }) => {
  
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="text-center lg:text-left w-full md:w-1/2">
          <h1 className="text-5xl font-bold uppercase">{title}</h1>
          <img src={img} className="py-6 " />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeroForm;
