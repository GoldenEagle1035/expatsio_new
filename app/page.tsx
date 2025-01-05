"use client";

import React, { useEffect, useState } from "react";
// @ Stores
import { usePage } from "@/stores/pageStore";
import { PagesEnum } from "@/constant/pages";
// @ Hooks
import { useMediaQuery } from "@react-hooks-hub/use-media-query";
import { isMobile } from "react-device-detect";
// @ Components
import Tokeno from "@/components/ui/cockpit/Tokeno";
import Lobby from "@/components/ui/lobby/Htb";
import Portal from "@/components/ui/portal/Join";
import Landing from "@/components/ui/start/Landing";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Portrait from "@/components/ui/portrait/Portrait";
import Armory from "@/components/ui/armory/Armory";
import ControlRoom from "@/components/ui/control-room/ControlRoom";
import SpacePlanet from "@/components/ui/planets/SpacePlanet";
// import Mint from "@/app/mints/Mint";
import Socials from "@/components/ui/navbar/Socials";
import Music from "@/components/ui/Sound/Music";
import { motion } from "framer-motion";

export default function Home() {
  const { currentPage } = usePage();
  const { orientation } = useMediaQuery();
  const [isLandscape, setIsLandscape] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [firstScroll, setFirstScroll] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const pages = [
    PagesEnum.LANDING,
    PagesEnum.CONTROL,
    PagesEnum.ARMORY,
    PagesEnum.COCKPIT,
    PagesEnum.LOBBY,
    PagesEnum.PORTAL,
    PagesEnum.SPACE,
    PagesEnum.MINT,
  ];

  // useEffect(() => {
  //   setIsLandscape(orientation === "landscape");
  // }, [orientation]);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [currentPage]);
  const fullScreenHandle = useFullScreenHandle();

  async function joinHandler() {
    usePage.setState({ currentPage: PagesEnum.LANDING });
    if (isMobile) {
      await fullScreenHandle.enter();
    }
  }
  // async function joinHandler() {
  //   if (currentPage !== PagesEnum.MINT) {
  //     usePage.setState({ currentPage: PagesEnum.LANDING });
  //     if (isMobile) {
  //       await fullScreenHandle.enter();
  //     }
  //   }
  // }

  // const PortraitContent = () => {
  //   return (
  //     <FullScreen handle={fullScreenHandle} key="fullscreen-landing">
  //       <Portrait joinHandler={joinHandler} />
  //     </FullScreen>
  //   );
  // };
  const [isLandingButtonClicked, setLandingButtonClicked] = useState(false);

  return (
    <>
      {/* {!isLandscape && isMobile && currentPage !== PagesEnum.MINT ? (
        <PortraitContent />
      ) : (
        <div
          className={`page ${fadeOut ? "fade-out" : fadeIn ? "fade-in" : ""}`}
        >
          {currentPage === PagesEnum.LANDING ? <Landing /> : null}
          {isLoading && (
            <video
              className={`w-screen h-screen object-cover`}
              src="https://expatsio.b-cdn.net/e_2_1.mp4"
              preload="auto"
              autoPlay
              muted
              loop
            ></video>
          )}
          {currentPage === PagesEnum.COCKPIT && <Tokeno />}
          {currentPage === PagesEnum.ARMORY && <Armory />}
          {currentPage === PagesEnum.CONTROL && <ControlRoom />}
          {currentPage === PagesEnum.LOBBY && <Lobby />}
          {currentPage === PagesEnum.PORTAL && <Portal />}
          {currentPage === PagesEnum.SPACE && <SpacePlanet />}
          {currentPage === PagesEnum.MINT && <Mint />}
        </div>
      )} */}
      {/* {currentPage !== PagesEnum.LANDING && <Music />} */}
      {/* {currentPage !== PagesEnum.LANDING && <Socials />} */}
      {/* {!isLandscape && isMobile ? (
        <PortraitContent />
      ) : ( */}
        <div
          className={`page ${fadeOut ? "fade-out" : fadeIn ? "fade-in" : ""}`}
        >
          {isLoading && (
            <video
              className={`w-screen h-screen object-cover`}
              src="https://expatsio.b-cdn.net/e_2_1.mp4"
              preload="auto"
              autoPlay
              muted
              loop
            ></video>
            // <div className="bg-[url(https://expatsio.b-cdn.net/e_2.png)] herobgpositions w-screen h-screen"></div>
          )}
          {currentPage === PagesEnum.LANDING ? <Landing /> : null}
          {currentPage === PagesEnum.COCKPIT ? <Tokeno /> : null}
          {/* {currentPage === PagesEnum.ARMORY ? <Armory /> : null} */}
          {currentPage === PagesEnum.ARMORY ? (
            <Armory isLandingButtonClicked={isLandingButtonClicked} />
          ) : null}
          {currentPage === PagesEnum.CONTROL ? <ControlRoom /> : null}
          {currentPage === PagesEnum.LOBBY ? <Lobby /> : null}
          {currentPage === PagesEnum.PORTAL ? <Portal /> : null}
          {currentPage === PagesEnum.SPACE ? <SpacePlanet /> : null}
          {/* {currentPage === PagesEnum.MINT ? <Mint /> : null} */}
        </div>
      {/* )} */}
    </>
  );
}
