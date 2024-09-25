import React from "react";
import { benifitsBg } from "../assets";

const SpecialBenifits = () => {
  return (
    <div className="mx-[5%] lg:mx-[10%] relative">
      <img
        src={benifitsBg}
        className="absolute top-0 left-0 w-full h-full object-cover object-top"
      />
      <h5 className="relative text-4xl text-white text-center pt-20">
        Why Choose Us?
      </h5>
    </div>
  );
};

export default SpecialBenifits;
