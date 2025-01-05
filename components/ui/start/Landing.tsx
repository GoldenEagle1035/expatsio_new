import React, { useState } from "react";
import Image from "next/image";
// import BlackTransition from "@/components/animated/BlackTransition";
// import StarsParticle from "@/components/animated/StarsParticle";
import Navbar from "@/components/ui/navbar/Nav";
import DogsClubLogo from "@/assets/logo.png";
import { usePage } from "@/stores/pageStore";
import { PagesEnum } from "@/constant/pages";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { isMobile } from "react-device-detect";
import ReactHowler from "react-howler";

import Confetti from "@/components/ui/Confeti";
function Landing() {
  // const fullScreenHandle = useFullScreenHandle();
  const [isLandingButtonClicked, setIsLandingButtonClicked] = useState(false);

  // Handle button click and navigate to Armory
  // const handleLandingButtonClick = async () => {
  //   setIsLandingButtonClicked(true);
  //   usePage.setState({ currentPage: PagesEnum.ARMORY });

  //   if (isMobile) {
  //     await fullScreenHandle.enter(); // Enter fullscreen on mobile
  //   }
  // };
 function goToPage(page: number) {
    usePage.setState({
      currentPage: page,
    });
  }
  return (
    // <FullScreen handle={fullScreenHandle} key="fullscreen">
      <section className="bg-[url(https://expatsio.b-cdn.net/e_1.png)] herobgpositions w-screen h-screen">
        {/* <Navbar /> */}
        {/* <Confetti /> */}
        {/* lg:pb-40 pb-28 */}
        <div className="relative flex items-center justify-center h-full">
          <div className="flex items-end flex-col justify-end z-20 relative gap-4">
            {/* background: linear-gradient(91.82deg, #D424FB 0%, #18E8EC 99.71%); */}
            <button
            onClick={() => goToPage(PagesEnum.ARMORY)}
            //  onClick={handleLandingButtonClick}
              className="jersey hover:border-b-[10px] transition-all text-white duration-300 bg-gradient-to-r from-[#D424FB] to-[#18E8EC] border-2 border-white 2xl:p-4 p-2 font-normal 2xl:w-[300px] w-[140px] rounded uppercase 2xl:text-5xl text-2xl"
            >
              START
            </button>
          </div>
        </div>
      </section>
    // </FullScreen>
  );
}

export default Landing;
