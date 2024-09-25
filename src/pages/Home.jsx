import Collaboration from "../components/Collaboration";
import Hero from "../components/Hero";
import JoinReq from "../components/JoinReq";
import Services from "../components/Services";
import SpecialBenifits from "../components/SpecialBenifits";

const Home = () => {
  return (
    <div className="w-full -mt-[7.25rem]">
      <Hero />
      <SpecialBenifits />
      <Services />
      <Collaboration />
      <JoinReq />
    </div>
  );
};

export default Home;
