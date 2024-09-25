import React from "react";
import { benifitsBg } from "../assets";
import Heading from "./Heading";

const SpecialBenifits = () => {
  return (
    <div className="mx-[5%] lg:mx-[10%] relative">
      <img
        src={benifitsBg}
        className="absolute top-0 left-0 w-full h-full object-cover object-top"
        alt="Benefits Background"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-black/50" />
      <Heading
        title="Why Choose Us?"
        className="relative text-n-1 md:max-w-md lg:max-w-2xl pt-4 pb-4"
      />
    </div>
  );
};

export default SpecialBenifits;
