import Balance from "../components/Home/Balance";
import BasicInfo from "../components/Home/BasicInfo";
import Hero from "../components/Home/Hero";
import UserInfo from "../components/Home/UserInfo";

const Home = () => {
  return (
    <section>
      <Hero />
      <div className="flex justify-evenly w-full flex-wrap items-center my-10">
        <UserInfo />
        <Balance />
      </div>
      <BasicInfo />
    </section>
  );
};

export default Home;
