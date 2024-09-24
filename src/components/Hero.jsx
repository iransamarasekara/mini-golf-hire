import { useRef } from "react";
import { heroBackground, golfPlayer } from "../assets";
import RoundButton from "../components/RoundButton";
import {
  BackgroundCircles,
  BottomLine,
  Gradient,
} from "../components/design/Hero";
import { ScrollParallax } from "react-just-parallax";
import PopupButton from "./PopupButton";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <div className="relative bg-n-4 h-[50rem]" ref={parallaxRef}>
      <img
        src={golfPlayer}
        className="absolute w-full h-full lg:max-w-[40rem] xl:max-w-[50rem] right-0 z-0 object-cover object-top"
      />
      <div className="relative pt-[5rem] z-1 mx-[5%] lg:mx-[10%]">
        <div className="max-w-[40rem] mt-[2rem] pt-[7.25rem] pb-10">
          <p className="text-2xl text-green-800">Only hire the original and the best of</p>
          <h1 className="text-6xl text-n-8">PORTABLE mini golf</h1>
          <p className="text-2xl text-n-8">Come to us for the Portable Mini Golf Experience in Australia!</p>
        </div>
        <div className="relative flex gap-10">
          <RoundButton href="">Get Started</RoundButton>
          <RoundButton href="" white>
            Call
          </RoundButton>
          <div className="relative z-1 -right-[4rem] mx-[5%] lg:mx-[10%]">
            <ScrollParallax isAbsolutelyPositioned>
              <PopupButton
                className="hidden absolute w-[18rem] lg:flex "
                title="Book Now"
              />
            </ScrollParallax>
          </div>
        </div>
      </div>
      <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 mt-[7.25rem]">
        <BackgroundCircles />
      </div>
    </div>
  );
};

export default Hero;
