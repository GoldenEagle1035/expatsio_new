import React from "react";
// import BlackTransition from "@/components/animated/BlackTransition";
// import ScreenAnchor from "@/components/controls/ScreenAnchor";
import { PagesEnum } from "@/constant/pages";
import Image from "next/image";
import Link from "next/link";
function Nav() {
  return (
    <>
      <div className="container px-4 w-full mx-auto py-4 flex justify-between gap-4 items-center">
        <Image
          src="https://dogsclub.b-cdn.net/logo.png"
          width={100}
          height={100}
          alt="Dogs Club Logo"
          className="lg:w-[270px] w-[200px] h-auto"
        />
        <div className="flex gap-4 items-center">
          <Link target="_blank" href="https://x.com/DogsClubSol">
            <Image
              src="https://dogsclub.b-cdn.net/tw.png"
              width={100}
              height={100}
              alt="Dogs Club Logo"
              className="lg:w-[50px] w-[35px] hover:opacity-80 transition-all duration-300 h-auto"
            />
          </Link>
          <Link target="_blank" href="https://t.me/dogsclubsol">
            <Image
              src="https://dogsclub.b-cdn.net/tg.png"
              width={100}
              height={100}
              alt="Dogs Club Logo"
              className="lg:w-[50px] w-[35px] hover:opacity-80 transition-all duration-300 h-auto"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Nav;
