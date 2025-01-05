import React, { Fragment, useEffect, useState } from "react";
import { PagesEnum } from "@/constant/pages";
import Image from "next/image";
import ReactHowler from "react-howler";
import { usePage } from "@/stores/pageStore";
import ReactPlayer from "react-player";
import Navbar from "@/components/ui/navbar/Nav";
// import Building from "@/components/ui/navbar/Building";
import Music from "../Sound/Music";
import Ups from "@/assets/ups.png";
import Downs from "@/assets/downs.png";
function ControlRoom() {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleCopy = () => {
    const value = "CA:0x1A2b...8T9u";
    navigator.clipboard.writeText(value).then(() => {
      setTooltipVisible(true);
      setTimeout(() => {
        setTooltipVisible(false);
      }, 2000);
    });
  };
  function goToPage(page: number) {
    usePage.setState({
      currentPage: page,
    });
  }

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     goToPage(PagesEnum.ARMORY);
  //   }, 3000);

  //   return () => clearTimeout(timeoutId);
  // }, []);

  // const [hoveredPage, setHoveredPage] = useState("CONTROL");

  // const handleHover = (page: any) => setHoveredPage(page);
  // const handleMouseLeave = () => setHoveredPage("CONTROL");

  return (
    <>
      {/* 2nd */}
      <section className="bg-[url(https://expatsio.b-cdn.net/e_2.png)] herobgpositions w-screen h-screen">
        {/*  */}
        {/* <div className=" my-auto pt-20 w-full relative z-10 pr-20 pl-16 h-screen">
          <video
            className={`!relative lg:rounded-[100px] rounded-[50px] lg:w-[80%] w-[90%] lg:h-[68vh] h-[60vh] 2xl:mt-[3vh] lg:mt-[1vh] mt-[-15px] object-cover mx-auto`}
            src="https://expatsio.b-cdn.net/sam1.mp4"
            preload="auto"
            autoPlay
            muted
          ></video>
        </div> */}
        {/*  */}
        {/* <div
          onClick={() => goToPage(PagesEnum.ARMORY)}
          className="mt-[5vh] flex 2xl:gap-8 gap-4 items-center justify-center cursor-pointer absolute bottom-[15vh] left-0 right-0 z-40 invisible"
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
        </div> */}
        {/* <Navbar /> */}
        {/* <div onClick={() => goToPage(PagesEnum.ARMORY)} >Enter</div> */}
        {/* <div className="flex items-center justify-end z-20 !relative gap-4 w-[400px] h-full md:w-[800px] ml-auto px-20">
          <div className="2xl:w-[650px] lg:w-[500px] 2xl:h-[400px] lg:h-[330px] md:h-[230px] w-[300px] bg-black pl-2 pt-2 pb-4 pr-4 rounded-2xl">
            <div className="2xl:w-[630px] lg:w-[480px] 2xl:h-[380px] lg:h-[310px] md:h-[210px] w-[280px] bglines !relative px-5 py-5 rounded-2xl">
                <div className="lg:px-10 px-4">
                  <div className="mt-4 lg:h-[59px] h-12 p-4 bg-[#1e1e1e] rounded-[10px] justify-center items-center gap-8 flex text-[#F3AD4F] mx-auto w-full !relative">
                    <div className="relative w-full">
                      <input
                        type="text"
                        readOnly
                        className="outline-none border-none h-full w-full text-[#F3AD4F] bg-transparent text-center lg:text-base text-xs"
                        value="CA:TBA"
                      />
                      <div className="ml-auto relative">
                        <Image
                          src={"/copy.svg"}
                          fill={true}
                          decoding="sync"
                          loading="eager"
                          className="cursor-pointer lg:!w-6 lg:!h-6 !w-4 !h-4 ml-auto -mt-5 hover:opacity-70 transition-all duration-300"
                          alt="Copy"
                          onClick={handleCopy}
                        />
                        {tooltipVisible && (
                          <span className="absolute -top-12 right-0 bg-gray-700 text-white text-xs px-2 py-1 rounded">
                            Copied!
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
      </section>
    </>
  );
}

export default ControlRoom;
