import Collaboration from "../components/Collaboration";
import Hero from "../components/Hero";
import JoinReq from "../components/JoinReq";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="w-full -mt-[7.25rem]">
      <Hero />
      <Services />
      <Collaboration />
      <JoinReq />
    </div>
  );
};

export default Home;
