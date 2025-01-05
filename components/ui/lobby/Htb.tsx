import React, { Fragment, useEffect, useState, useRef } from "react";
// import BlackTransition from "@/components/animated/BlackTransition";
// import ScreenAnchor from "@/components/controls/ScreenAnchor";
import { PagesEnum } from "@/constant/pages";
import Image from "next/image";
import { usePage } from "@/stores/pageStore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Music from "../Sound/Music";
import Ups from "@/assets/ups.png";
import Downs from "@/assets/downs.png";
import { useRouter } from "next/router";
import Link from "next/link";
function Join() {
  function goToPage(page: number) {
    usePage.setState({
      currentPage: page,
    });
  }
  const [hoveredPage, setHoveredPage] = useState("PORTAL");
  const handleHover = (page: any) => setHoveredPage(page);
  const handleMouseLeave = () => setHoveredPage("PORTAL");

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const [scrollDown, setScrollDown] = useState(true); // State to toggle scroll direction
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollDown) {
      // Scroll to the bottom
      contentRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    } else {
      // Scroll back to the top
      contentRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setScrollDown(!scrollDown); // Toggle the scroll direction
  };
  // const router = useRouter();

  return (
    <>
      {/* 5th */}
      {/* Lore */}
      <section className="bg-[url(https://expatsio.b-cdn.net/e_5.png)] herobgpositions htbbg w-screen h-screen">
        {/* <Navbar /> */}
        {/* <Music /> */}
        <div className="2xl:max-w-[1600px]  md:max-w-[1450px] mx-auto my-auto 2xl:pt-20 pt-2 w-full relative z-10 2xl:px-20 md:px-28 px-4">
          <div className="absolute 2xl:right-[12%] right-[15%] 2xl:top-[130px] lg:top-[100px] top-[60px] z-50 topmint top144">
            <Link href="/mints" target="_blank">
              <button className="jersey hover:border-b-[10px] transition-all text-white duration-300 bg-gradient-to-r from-[#D424FB] to-[#18E8EC] border-2 border-white 2xl:p-3 lg:p-2 p-1 font-normal 2xl:w-[240px] lg:w-[150px] w-[90px] rounded-lg uppercase 2xl:text-5xl text-base">
                MINT
              </button>
            </Link>
          </div>

          <div className="absolute left-[20%] 2xl:top-[110px] top-[60px] top144">
            <Image
              src="https://expatsio.b-cdn.net/lore.png"
              fill={true}
              decoding="sync"
              loading="eager"
              className={`!relative lg:!w-28 !w-16 z-50 mt- ml-2`}
              alt="Expatsio"
            />
          </div>
          <div className="absolute left-[9%] 2xl:top-[110px] lg:top-[100px] top-[70px] z-50 cursor-pointer lg:px-11 px-4 top144">
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
          <div className="flex relative justify-center flex-col items-center mt50vh mt-[20vh] px-12 mt22vh">
            <Image
              src="https://expatsio.b-cdn.net/expat2.png"
              fill={true}
              decoding="sync"
              loading="eager"
              className={`!relative lg:!w-[300px] !w-[150px] z-50 mt-4`}
              alt="Expatsio"
            />

            <div className="w-full px-10 lg:mt-0 mt-4 2xl:h-[250px] lg:h-[220px] h-[90px] h200 overflow-auto">
              <div className="text-white 2xl:text-[60px] lg:text-[45px] text-2xl font-normal 2xl:leading-[79.60px] tcenter">
                <span className="text-white 2xl:text-7xl lg:text-3xl text-3xl font-normal 2xl:leading-[89.60px]">
                  S
                </span>
                trange inhabitants of the DreamWorld have appeared. Normal when
                compared to the rest, but underneath lies something far more
                wondrous. The DreamWaves frequencies are loud and the noise is
                thick in-between. <br /> Dimensional planes that once ruled the
                universe are being bent and some broken…
              </div>
              <div
                ref={contentRef}
                className="text-white 2xl:text-[60px] lg:text-[45px] text-2xl font-normal 2xl:leading-[89.60px] tcenter"
              >
                Into the deep with the Deeps! The vessels of the chaotic noise
                of creation have shattered over the DreamWorld and its crash
                into the Cryptoverse. The Peeple are here and with them comes a
                different vision of the dream…
                <br />
                Catch the shattering noise of these interdimensional tourist and
                see dreams evolve…
              </div>
            </div>
          </div>
          <div
            onClick={handleScroll}
            className="mt-[5vh] flex 2xl:gap-8 gap-4 items-center justify-center cursor-pointer"
          >
            <Image
              src="https://expatsio.b-cdn.net/cdown.png"
              fill={true}
              decoding="sync"
              loading="eager"
              className={`!relative !w-[21px]`}
              alt="Expatsio"
            />
            <span className="2xl:text-5xl md:text-4xl text-3xl text-white">
              SCROLL
            </span>
            <Image
              src="https://expatsio.b-cdn.net/cdown.png"
              fill={true}
              decoding="sync"
              loading="eager"
              className={`!relative !w-[21px]`}
              alt="Expatsio"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Join;
