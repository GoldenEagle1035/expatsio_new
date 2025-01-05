import React, { Fragment, useEffect, useState } from "react";
// import BlackTransition from "@/components/animated/BlackTransition";
// import ScreenAnchor from "@/components/controls/ScreenAnchor";
import { PagesEnum } from "@/constant/pages";
import Image from "next/image";
import { usePage } from "@/stores/pageStore";
// import Building from "@/components/ui/navbar/Building";
import Music from "../Sound/Music";
import Ups from "@/assets/ups.png";
import Downs from "@/assets/downs.png";

// import { useRouter } from "next/router";
import Link from "next/link";
function Tokeno() {
  function goToPage(page: number) {
    usePage.setState({
      currentPage: page,
    });
  }
  const [hoveredPage, setHoveredPage] = useState("COCKPIT");
  const handleHover = (page: any) => setHoveredPage(page);
  const handleMouseLeave = () => setHoveredPage("COCKPIT");

  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  // const router = useRouter();

  return (
    <>
      {/* 4th */}
      {/* Lore Team Shop Open */}
      <section className="bg-[url(https://expatsio.b-cdn.net/e_4.png)] herobgpositions w-screen h-screen ">
        {/* <Navbar /> */}
        {/* <Music /> */}
        <div className="md:max-w-[1650px] mx-auto my-auto pt-20 w-full relative z-10 md:px-20 px-4">
          <div className="absolute 2xl:right-[12%] right-[15%] 2xl:top-[130px] lg:top-[100px] top-[70px] z-50 top144">
            <Link href="/mints" target="_blank">
              <button className="jersey hover:border-b-[10px] transition-all text-white duration-300 bg-gradient-to-r from-[#D424FB] to-[#18E8EC] border-2 border-white 2xl:p-3 lg:p-2 p-1 font-normal 2xl:w-[240px] lg:w-[150px] w-[90px] rounded-lg uppercase 2xl:text-5xl text-base">
                MINT
              </button>
            </Link>
          </div>
          <div className="absolute left-[9%] 2xl:top-[110px] md:top-[80px] top-[70px] z-50 cursor-pointer lg:px-11 px-4 top144">
            <Image
              onClick={toggleVisibility}
              src="https://expatsio.b-cdn.net/menu.png"
              fill={true}
              decoding="sync"
              loading="eager"
              className={`!relative 2xl:!w-16 !w-8 2xl:!h-12 !h-6 z-50 mt-4  ${isVisible ? "hidden" : "flex"}`}
              alt="Expatsio"
            />
            {/* {isVisible && ( */}
            <div
              className={`bg-grads lg:rounded-[58px] rounded-[28px] lg:py-5 py-2 lg:px-8 px-4 fixed transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[-500px] opacity-0"
              } transition-all duration-500 ease-in-out`}
            >
              <Image
                onClick={toggleVisibility}
                src="https://expatsio.b-cdn.net/menu.png"
                fill={true}
                decoding="sync"
                loading="eager"
                className={`!relative 2xl:!w-16 !w-8 2xl:!h-12 !h-6 z-50 mt-4 cursor-pointer`}
                alt="Expatsio"
              />
              <Image
                onClick={() => goToPage(PagesEnum.LOBBY)}
                src="https://expatsio.b-cdn.net/lore.png"
                fill={true}
                decoding="sync"
                loading="eager"
                className={`!relative lg:!w-[120px] !w-[50px] z-50 lg:mt-10 mt-5 cursor-pointer hover:scale-105 transition-all duration-300`}
                alt="Expatsio"
              />
              <Image
                onClick={() => goToPage(PagesEnum.PORTAL)}
                src="https://expatsio.b-cdn.net/team.png"
                fill={true}
                decoding="sync"
                loading="eager"
                className={`!relative lg:!w-[120px] !w-[50px] z-50 mt-6 cursor-pointer hover:scale-105 transition-all duration-300`}
                alt="Expatsio"
              />
              <Image
                onClick={() => goToPage(PagesEnum.SPACE)}
                src="https://expatsio.b-cdn.net/shop.png"
                fill={true}
                decoding="sync"
                loading="eager"
                className={`!relative lg:!w-[120px] !w-[50px] z-50 mt-6 cursor-pointer hover:scale-105 transition-all duration-300`}
                alt="Expatsio"
              />
            </div>
            {/* )} */}
          </div>
        </div>
        {/* <Building /> */}
      </section>
    </>
  );
}

export default Tokeno;
