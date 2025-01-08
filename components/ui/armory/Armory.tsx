import React, { useEffect, useState, useRef } from "react";
import { PagesEnum } from "@/constant/pages";
import Image from "next/image";
import { usePage } from "@/stores/pageStore";
import { isMobile } from "react-device-detect"; // Import mobile detection

interface ArmoryProps {
  isLandingButtonClicked: boolean; // State passed from the Landing page
}

const Armory: React.FC<ArmoryProps> = ({ isLandingButtonClicked }) => {
  const [currentPage, setCurrentPage] = useState(PagesEnum.ARMORY);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Function to navigate to another page
  const goToPage = (page: number) => {
    usePage.setState({ currentPage: page });
  };

  // Hover state management
  const [hoveredPage, setHoveredPage] = useState("ARMORY");
  const handleHover = (page: string) => setHoveredPage(page);
  const handleMouseLeave = () => setHoveredPage("ARMORY");

  // Effect to handle video play and mute/unmute based on mobile
  useEffect(() => {
    if (isLandingButtonClicked && videoRef.current) {
      // Mute the video on mobile and unmute on desktop
      videoRef.current.muted = isMobile ? true : false;
      videoRef.current.play(); // Play the video
    }
  }, [isLandingButtonClicked]);

  return (
    <>
      <section className="bg-[url(https://expatsio.b-cdn.net/e_3.png)] herobgpositions w-screen h-screen relative">
        <div className="my-auto pt-20 w-full relative z-10 pr-24 pl-16 px0 h-screen f-lex">
          {/* Video Player */}
          <div className="relative">
          <video
            ref={videoRef}
            autoPlay
            muted={isMobile} // Mute on mobile
            className={`w-screen h-screen object-cover`}
            src="https://expatsio-nft.b-cdn.net/intro.mp4"
            preload="auto"
          />
          {/* Skip Button */}
          <div className="absolute bottom-[1%] lg:bottom-[5%] my-auto lg:right-[10%] right-[-20px] z-50 !w-[160px] !h-16">
            <Image
              onClick={() => goToPage(PagesEnum.COCKPIT)}
              aria-label="Simple"
              src={"https://expatsio.b-cdn.net/skip.svg"}
              fill={true}
              decoding="sync"
              loading="eager"
              className={`lg:!w-[160px] !w-[80px] !h-16 rounded-full cursor-pointer`}
              alt="Video"
            />
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Armory;
