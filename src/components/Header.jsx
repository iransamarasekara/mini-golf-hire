import { useLocation } from "react-router-dom";
import { logo } from "../assets";
import { navigation } from "../constants";
import RoundButton from "./RoundButton";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll;
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`fixed top-0 w-[90%] lg:w-[80%] mx-auto z-50 border mt-2 border-n-6 lg:bg-n-1 lg:backdrop-blur-sm rounded-lg ${
          openNavigation ? "bg-n-1" : "bg-n-1 lg:backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <a className="block w-[12rem] xl:mr-8" href="/">
            <img src={logo} width={190} height={10} alt="mini-golf-hire" />
          </a>

          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            } fixed top-[7rem] bottom-[2rem] left-[5%] right-[5%] rounded-lg bg-n-1 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
          >
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl text-n-8 transition-colors hover:text-n-14 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    item.url === pathname.pathname
                      ? "z-2 lg:text-n-8"
                      : "lg:text-n-8/50"
                  } lg:leading-5 lg:hover:text-n-14 xl:px-12`}
                >
                  {item.title}
                </a>
              ))}
            </div>
            <HamburgerMenu />
          </nav>

          <RoundButton
            className="hidden lg:flex text-n-8 hover:text-n-1"
            href="/booknow"
          >
            Book Now
          </RoundButton>

          <RoundButton
            className="ml-auto lg:hidden"
            px="px-3"
            onClick={toggleNavigation}
          >
            <MenuSvg openNavigation={openNavigation} />
          </RoundButton>
        </div>
      </div>
    </div>
  );
};

export default Header;