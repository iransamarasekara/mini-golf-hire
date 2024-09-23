import { heroBackground } from "../assets";
import Collaboration from "../components/Collaboration";
import Hero from "../components/Hero";
import JoinReq from "../components/JoinReq";
import Services from "../components/Services";
import { heroIcons } from "../constants";

const Home = () => {
  return (
    <div className="w-full -mt-[7.25rem]">
      <Hero />
      <div className="relative mx-[5%] lg:mx-[10%] -mt-[5rem] lg:-mt-[7.5rem]">
        <ul className="gap-8 hidden md:flex">
          {heroIcons.map((icon, index) => (
            <li key={index} className="">
              <img
                src={heroBackground}
                className="object-cover w-[10rem] h-[10rem] lg:w-[15rem] lg:h-[15rem] rounded-2xl"
                alt="Hero Background"
              />
            </li>
          ))}
        </ul>
      </div>
      <Services />
      <Collaboration />
      <JoinReq />
    </div>
  );
};

export default Home;
