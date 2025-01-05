import React, { Fragment, useEffect, useState } from "react";
// import BlackTransition from "@/components/animated/BlackTransition";
// import ScreenAnchor from "@/components/controls/ScreenAnchor";
import { PagesEnum } from "@/constant/pages";
import Image from "next/image";
import { usePage } from "@/stores/pageStore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useRef } from "react";
import Music from "../Sound/Music";
import Ups from "@/assets/ups.png";
import Downs from "@/assets/downs.png";
// import Building from "../navbar/Building";
import Link from "next/link";
import { useRouter } from "next/router";

function Htb() {
  const swiperRef = useRef<any>(null);

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  function goToPage(page: number) {
    usePage.setState({
      currentPage: page,
    });
  }
  const [hoveredPage, setHoveredPage] = useState("LOBBY");
  const handleHover = (page: any) => setHoveredPage(page);
  const handleMouseLeave = () => setHoveredPage("LOBBY");

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  // const router = useRouter();

  return (
    <>
      {/* 6th */}
      <section className="bg-[url(https://expatsio.b-cdn.net/e_6_1.png)] herobgpositions htbbg w-screen h-screen">
        {/* <Navbar /> */}
        {/* <Music /> */}
        {/* 2xl:pt-20 pt-12 */}
        <div className="2xl:max-w-[1600px]  md:max-w-[1450px] mx-auto my-auto  w-full relative z-10 2xl:px-20 md:px-28 px-4">
          <div className="absolute 2xl:right-[12%] right-[15%] 2xl:top-[130px] lg:top-[100px] top-[70px] z-50 teammint top144">
            <Link href="/mints" target="_blank">
              <button className="jersey hover:border-b-[10px] transition-all text-white duration-300 bg-gradient-to-r from-[#D424FB] to-[#18E8EC] border-2 border-white 2xl:p-3 lg:p-2 p-1 font-normal 2xl:w-[240px] lg:w-[150px] w-[90px] rounded-lg uppercase 2xl:text-5xl text-base">
                MINT
              </button>
            </Link>
          </div>
          <div className="absolute left-[20%] 2xl:top-[110px] top-[50px] z-50 top144">
            <Image
              src="https://expatsio.b-cdn.net/team.png"
              fill={true}
              decoding="sync"
              loading="eager"
              className={`!relative 2xl:!w-28 !w-16 z-50 mt-4 mr-4`}
              alt="Expatsio"
            />
          </div>
          <div className="absolute left-[9%] 2xl:top-[130px] top-[70px] z-50 lg:px-11 px-4 top144">
            <Image
              onClick={toggleVisibility}
              src="https://expatsio.b-cdn.net/menu.png"
              fill={true}
              decoding="sync"
              loading="eager"
              className={`!relative 2xl:!w-16 !w-8 2xl:!h-12 !h-6 z-50 mt-4 cursor-pointer ${isVisible ? "hidden" : "flex"}`}
              alt="Expatsio"
            />

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
          </div>
          <div className="flex relative lg:justify-center justify-center gap-6 items-center px-20 2xl:gap-40 md:gap-20 h-screen">
            <div className="2xl:w-[250px] lg:w-[200px] w-[120px] flex justify-center items-center flex-col">
              <Image
                src="https://expatsio.b-cdn.net/teamp.png"
                fill={true}
                decoding="sync"
                loading="eager"
                className={`!relative`}
                alt="Expatsio"
              />
              <Image
                src="https://expatsio.b-cdn.net/chey.png"
                fill={true}
                decoding="sync"
                loading="eager"
                className={`!relative mt-2`}
                alt="Expatsio"
              />
              <p className="text-white lg:text-3xl text-base text-center mt-2">
                Lead of Dwope
              </p>
            </div>
            <div className="2xl:w-[250px] lg:w-[200px] w-[120px] flex justify-center items-center flex-col">
              <Image
                src="https://expatsio.b-cdn.net/teamp1.png"
                fill={true}
                decoding="sync"
                loading="eager"
                className={`!relative`}
                alt="Expatsio"
              />
              <Image
                src="https://expatsio.b-cdn.net/exps.png"
                fill={true}
                decoding="sync"
                loading="eager"
                className={`!relative mt-2`}
                alt="Expatsio"
              />
              <p className="text-white lg:text-3xl text-base text-center mt-2">
                Hands of Dwope
              </p>
            </div>
            {/* <div className="lg:w-[200px] w-[120px] flex justify-center items-center flex-col mt-[15vh]">
              <Image
                src="https://expatsio.b-cdn.net/team2.png"
                fill={true}
                decoding="sync"
                loading="eager"
                className={`!relative`}
                alt="Expatsio"
              />
              <Image
                src="https://expatsio.b-cdn.net/li.png"
                fill={true}
                decoding="sync"
                loading="eager"
                className={`!relative mt-2`}
                alt="Expatsio"
              />
              <p className="text-white lg:text-3xl text-base text-center mt-2">
                LOREM IPSUM
              </p>
            </div>
            <div className="lg:w-[200px] w-[120px] flex justify-center items-center flex-col scale-110">
              <Image
                src="https://expatsio.b-cdn.net/team2.png"
                fill={true}
                decoding="sync"
                loading="eager"
                className={`!relative`}
                alt="Expatsio"
              />
              <Image
                src="https://expatsio.b-cdn.net/li.png"
                fill={true}
                decoding="sync"
                loading="eager"
                className={`!relative mt-2`}
                alt="Expatsio"
              />
              <p className="text-white lg:text-3xl text-base text-center mt-2">
                LOREM IPSUM
              </p>
            </div>
            <div className="lg:w-[200px] w-[120px] flex justify-center items-center flex-col mt-[15vh]">
              <Image
                src="https://expatsio.b-cdn.net/team2.png"
                fill={true}
                decoding="sync"
                loading="eager"
                className={`!relative`}
                alt="Expatsio"
              />
              <Image
                src="https://expatsio.b-cdn.net/li.png"
                fill={true}
                decoding="sync"
                loading="eager"
                className={`!relative mt-2`}
                alt="Expatsio"
              />
              <p className="text-white lg:text-3xl text-base text-center mt-2">
                LOREM IPSUM
              </p>
            </div>
            <div className="lg:w-[200px] w-[120px] flex justify-center items-center flex-col mt-[30vh]">
              <Image
                src="https://expatsio.b-cdn.net/team2.png"
                fill={true}
                decoding="sync"
                loading="eager"
                className={`!relative`}
                alt="Expatsio"
              />
              <Image
                src="https://expatsio.b-cdn.net/li.png"
                fill={true}
                decoding="sync"
                loading="eager"
                className={`!relative mt-2`}
                alt="Expatsio"
              />
              <p className="text-white lg:text-3xl text-base text-center mt-2">
                LOREM IPSUM
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Htb;
