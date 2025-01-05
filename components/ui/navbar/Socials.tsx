import React from "react";
// import BlackTransition from "@/components/animated/BlackTransition";
// import ScreenAnchor from "@/components/controls/ScreenAnchor";
import { PagesEnum } from "@/constant/pages";
import Image from "next/image";
import Link from "next/link";
function Socials() {
  return (
    <>
      <div className="container px-4 w-full mx-auto flex justify-between gap-4 items-center fixed lg:right-20 right-12  2xl:top-0 lg:top-[-5px] top-1 z-50">
        <Image
          src="https://dogsclub.b-cdn.net/logo.png"
          width={100}
          height={100}
          alt="Dogs Club Logo"
          className="lg:w-[270px] w-[200px] h-auto invisible"
        />
        <div className="flex gap-4 items-center">
          <Link target="_blank" href="https://x.com/DogsClubSol">
            <Image
              src="https://dogsclub.b-cdn.net/tw.png"
              width={100}
              height={100}
              alt="Dogs Club Logo"
              className="2xl:!w-[50px] lg:!w-[40px] !w-[35px] hover:opacity-80 transition-all duration-300 h-auto"
            />
          </Link>
          <Link target="_blank" href="https://t.me/dogsclubsol">
            <Image
              src="https://dogsclub.b-cdn.net/tg.png"
              width={100}
              height={100}
              alt="Dogs Club Logo"
              className="2xl:!w-[50px] lg:!w-[40px] !w-[35px] hover:opacity-80 transition-all duration-300 h-auto"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Socials;
