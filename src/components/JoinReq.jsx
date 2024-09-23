import React from "react";
import RoundButton from "./RoundButton";

const JoinUs = () => {
  return (
    <div className="lg:flex mx-[5%] lg:mx-[10%] mt-10">
      <div className="max-w-[30rem]">
        <div className="bg-n-8 p-4 text-n-1 border border-n-4 rounded-lg">
          <h5 className="h5 mb-4 md:mb-8">Corporate Mini Golf Hire</h5>
          <p>
            With smart automation and top-notch security, it's the perfect
            solution for teams looking to work smarter.
          </p>
        </div>
        <div className="mt-2 bg-n-4 p-4 text-n-8 border border-n-4 rounded-lg">
          <p className="text-sm">
            With smart automation and top-notch security, it's the perfect
            solution for teams looking to work smarter.
          </p>
        </div>
        <RoundButton className="text-n-8 mt-3">Call now</RoundButton>
      </div>
      <div className="ml-auto">
        <div className="relative w-[16rem] xl:w-[20rem] border border-n-6 h-[18rem] xl:h-[22rem] rounded-3xl left-1/3 sm:left-1/2 lg:left-0 bg-n-4" />
        <div className="relative flex w-[14rem] xl:w-[18rem] aspect-square border border-n-6 rounded-full -translate-x-1/3 -translate-y-[80%] scale:75 md:scale-100 left-1/3 sm:left-1/2 lg:left-0"></div>
      </div>
    </div>
  );
};

export default JoinUs;
