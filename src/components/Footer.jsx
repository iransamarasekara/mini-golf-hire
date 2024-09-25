import React from "react";
import { logo } from "../assets";
import { navigation, socials } from "../constants";

const Footer = () => {
  return (
    <>
      <div className="bg-n-4 flex flex-col md:flex-row mx-[5%] lg:mx-[10%] mt-10 rounded-t-lg py-[2rem] gap-4 justify-center items-center">
        <div className="max-w-[16rem] md:max-w-[15rem] pt-5 w-full">
          <img src={logo} width={190} height={40} alt="mini-golf-hire" />
          <p className="text-xl md:text-xs font-semibold text-n-8 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            officiis dolores molestias similique
          </p>
          <div className="flex sm:justify-between justify-center items-center gap-7 max-sm:flex-col mt-5">
            <ul className="flex gap-5 flex-wrap">
              {socials.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 md:w-6 md:h-6 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                >
                  <img
                    src={item.iconUrl}
                    width={14}
                    height={14}
                    alt={item.title}
                  />
                </a>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-[15rem] pt-3 lg:ml-8 ml-4">
          <div className="pl-2 border-l-4 h-6 flex items-center">
            <h5 className="h6 text-n-1 font-semibold text-3xl md:text-lg">
              Company
            </h5>
          </div>
          <div className="mt-4 pl-4">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`block relative font-code text-xl text-n-8 transition-colors ${
                  item.onlyMobile ? "lg:hidden" : ""
                } pb-2 md:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
        <div className="max-w-[15rem] pt-3 lg:ml-8 ml-4">
          <div className="pl-2 border-l-4 h-6 flex items-center">
            <h5 className="h6 text-n-1 font-semibold text-3xl md:text-lg">
              Company
            </h5>
          </div>
          <div className="mt-4 pl-4">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`block relative font-code text-xl text-n-8 transition-colors ${
                  item.onlyMobile ? "lg:hidden" : ""
                } pb-2 md:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
        <div className="max-w-[15rem] pt-3 lg:ml-8 ml-4">
          <div className="pl-2 border-l-4 h-6 flex items-center">
            <h5 className="h6 text-n-1 font-semibold text-3xl md:text-lg">
              Company
            </h5>
          </div>
          <div className="mt-4 pl-4">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`block relative font-code text-xl text-n-8 transition-colors ${
                  item.onlyMobile ? "lg:hidden" : ""
                } pb-2 md:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-n-4 py-3 text-center text-n-1 mx-[5%] lg:mx-[10%]">
        <hr className="border-n-1 max-w-[35rem] mx-auto" />
        <p className="text-xs mt-2">
          © 2024 Mini Golf Hire. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
