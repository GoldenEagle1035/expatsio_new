"use client";
import React, { Fragment, useEffect, useState } from "react";
import { PagesEnum } from "@/constant/pages";
import Image from "next/image";
import { usePage } from "@/stores/pageStore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useRef } from "react";
// import Music from "../Sound/Music";
import Ups from "@/assets/ups.png";
import Downs from "@/assets/downs.png";
// import Building from "../navbar/Building";
import { useRouter } from "next/navigation"; // Import Next.js router

import { ConnectBtn } from "@/components/connectButton";
import { maxMint, mintPrice } from "@/web3/config";
import { useAccount } from "wagmi";
import { toast } from "react-toastify";
import { readWhitelistStage, readCanMint, executeMint, executeBatchMint, waitTransactionConfirm } from "@/web3/communicate";
import { parseEther } from "viem";

function page() {
  const router = useRouter(); // Next.js router

  const { isConnected, chain, address } = useAccount();

  function goToPage(page: number) {
    usePage.setState({
      currentPage: page,
    });

    // Redirect based on the selected page
    switch (page) {
      case PagesEnum.LOBBY:
        router.push("/"); // Redirect to the Lobby page
        break;
      case PagesEnum.PORTAL:
        router.push("/"); // Redirect to the Portal page
        break;
      case PagesEnum.SPACE:
        router.push("/"); // Redirect to the Space page
        break;
      default:
        router.push("/"); // Redirect to a default page if no match
    }
  }

  const [isVisible, setIsVisible] = useState(false);

  const [mintCount, setMintCount] = useState("1");
  const [isWhitelistStage, setIsWhitelistStage] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  //
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  const showPopup = () => {
    setIsPopupVisible(true);
  };

  const hidePopup = () => {
    setIsPopupVisible(false);
  };

  const onMint = async () => {
    console.log("onMint");
    
    if (!isConnected || !chain) {
      toast.update("Connect Wallet First!");
      return;
    }
    
    const toastId = toast.loading("Processing mint...");

    const canMint: any = await readCanMint(address as string);
    console.log("canMint", canMint);
    if (canMint.error) {
      toast.done(toastId);
      toast.error(canMint.error);
      return;
    }
    if (!canMint) {
      toast.done(toastId);
      toast.error("Not allowed to mint during this period!");
      return;
    }

    if (mintCount == "1") {
      const result: any = await executeMint(parseEther(mintPrice.toFixed(4)));
      console.log("onMint result", result);
      if (result.error) {
        toast.done(toastId);
        toast.error("Failed to mint");
        return;
      }
      const transactionReceipt: any = await waitTransactionConfirm(result);
      if (transactionReceipt.error) {
        toast.done(toastId);
        toast.error(transactionReceipt.error);
      } else {
        toast.done(toastId);
        toast.success("Mint successfully");
      }
    } else {
      const result: any = await executeBatchMint(Number(mintCount), parseEther((Number(mintCount) * mintPrice).toFixed(4)));
      console.log("onBatchMint result", result);
      if (result.error) {
        toast.done(toastId);
        toast.error("Failed to mint");
        return;
      }
      const transactionReceipt: any = await waitTransactionConfirm(result);
      if (transactionReceipt.error) {
        toast.done(toastId);
        toast.error(transactionReceipt.error);
      } else {
        toast.done(toastId);
        toast.success("Mint successfully");
      }
    }
  }

  useEffect(() => {
    const fetchWhitelistStage = async () => {
      const result: any = await readWhitelistStage();
      console.log("whitelistStage", result);
      if (result.error) {
        toast.error(result.error);
        return;
      }
      setIsWhitelistStage(result);
    };

    fetchWhitelistStage();

  }, [])

  //
  return (
    <>
      {/* 6th */}
      <section className="bg-[url(https://expatsio.b-cdn.net/e_7.png)] herobgpositions htbbg w-screen h-screen">
        {/* <Navbar /> */}
        {/* <Music /> */}

        <div className="2xl:max-w-[1600px]  md:max-w-[1450px] mx-auto my-auto 2xl:pt-4 pt-4 w-full relative z-10 2xl:px-20 md:px-28 px-4">
          <div className="absolute right-[14%] 2xl:top-[130px] lg:top-[100px] top-[70px] z-50 top144">
            {/* <button className="jersey hover:border-b-[10px] transition-all text-white duration-300 bg-gradient-to-r from-[#D424FB] to-[#18E8EC] border-2 border-white 2xl:p-3 lg:p-2 p-1 font-normal 2xl:w-[240px] lg:w-[150px] w-[90px] rounded-lg uppercase 2xl:text-5xl text-base">
              CONNECT
            </button> */}
            <ConnectBtn />
          </div>
          {/* {isPopupVisible && (
            <div className="z-50 fixed md:right-[15%] right-[31%] md:bottom-[25%] bottom-[10%] transition-opacity duration-300">
              <div className="text-white 2xl:text-3xl md:text-lg text-sm bg-[#E91717] border-2 border-black rounded-lg p-3">
                Wallet not selected <br /> Come back next phase
                <button
                  onClick={hidePopup}
                  className="block md:text-base text-xs bg-white text-black md:px-2 px-[4px] cursor-pointer py-[1px] rounded-md absolute top-2 right-2"
                >
                  x
                </button>
              </div>
            </div>
          )} */}
          {/* <div className="absolute left-[12%] 2xl:top-[110px] top-[60px] z-50 cursor-pointer">
            <Image
              onClick={toggleVisibility}
              src="https://expatsio.b-cdn.net/menu.png"
              fill={true}
              decoding="sync"
              loading="eager"
              className={`!relative lg:!w-16 !w-8 lg:!h-12 !h-6 z-50 mt-4 ${isVisible ? "hidden" : "flex"}`}
              alt="Expatsio"
            />
            {isVisible && (
              <div className="bg-grads lg:rounded-[58px] rounded-[28px] lg:py-5 py-2 lg:px-11 px-4">
                <Image
                  onClick={toggleVisibility}
                  src="https://expatsio.b-cdn.net/menu.png"
                  fill={true}
                  decoding="sync"
                  loading="eager"
                  className={`!relative lg:!w-16 !w-8 lg:!h-12 !h-6 z-50 mt-4 cursor-pointer`}
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
            )}
          </div> */}
          <div className="absolute left-[12%] 2xl:top-[110px] top-[60px] z-40 top130">
            <Image
              src="https://expatsio.b-cdn.net/mint.png"
              fill={true}
              decoding="sync"
              loading="eager"
              className={`!relative 2xl:!w-36 !w-20 z-50 mt-4 mr-4`}
              alt="Expatsio"
            />
          </div>
          <div className="flex justify-center items-center relative z-0 h-screen md:flex-row flex-col gap-4">
            <div className="2xl:w-[510px] md:w-[400px] w-[300px] border-2 rounded-2xl border-black">
              <div className="w-full pb-1 border-t-2 border-white 2xl:pt-6 lg:pt-2 pt-[2px] bg-[#FFC6A6] px-4 relative rounded-t-2xl">
                <h2 className="jersey text-black 2xl:text-7xl lg:text-4xl text-lg text-center">
                  MINT NFT
                </h2>
                <div className="2xl:mt-4 lg:mt-2 mt-1 mb-2 shadow rounded-2xl border-2 px-4 2xl:py-2 py-[1px] flex justify-between gap-4 items-center bg-[#fbdccb] border-black relative z-10">
                  <Image
                    src="./animation.gif"
                    fill={true}
                    decoding="sync"
                    loading="eager"
                    className={`!relative 2xl:!w-[130px] lg:!w-24 !w-24 z-50 mr-4 border-4 border-white rounded-2xl shadow`}
                    alt="Expatsio"
                  />
                  <div>
                    <p className="text-black lg:text-base text-base">
                      Price Per NFT
                    </p>
                    <p className="text-black lg:text-3xl text-base">
                      {mintPrice} ETH
                    </p>
                  </div>
                </div>
                <div className="bg-[#EA8248] absolute 2xl:h-[170px] lg:h-[135px] h-[50px] w-full lg:top-[50%] top-[70%] left-0"></div>
                <div className="2xl:mt-5 lg:mt-2 mt-1 mb-2 rounded-2xl border-2 px-4 lg:py-2 py-[2px] flex justify-between gap-4 items-center bg-[#fbdccb] border-black relative z-10">
                  <div className="flex  rounded">
                    <button onClick={(e) => { setMintCount((Number(mintCount) - 1) >= 1 ? (Number(mintCount) - 1).toFixed(0) : "1") }} className="text-black px-2 lg:py-1 py-[1px] lg:text-base text-xs border-2 border-black rounded-l-lg">
                      -
                    </button>
                    <input
                      value={mintCount}
                      onChange={(e) => { setMintCount((Number(e.target.value)) >= 1 ? (Number(e.target.value)).toFixed(0) : "1") }}
                      type="text"
                      className="bg-white text-black flex justify-center items-center text-center lg:py-1 py-[1px] lg:text-base text-xs w-6 border-t-2 border-b-2 border-black outline-none"
                      placeholder="1"
                    />
                    <button onClick={(e) => { setMintCount((Number(mintCount) + 1).toFixed(0)) }} className="text-black border-2 border-black px-2 lg:py-1 py-[1px] lg:text-base text-xs rounded-r-lg">
                      +
                    </button>
                  </div>
                  <div onClick={(e) => setMintCount(maxMint.toFixed(0))} className="jersey font-bold text-xl bg-white border-2 border-black cursor-pointer hover:opacity-80 transition-all duration-300 flex justify-center items-center lg:h-8 h-6 px-4 rounded-lg">
                    SET MAX
                  </div>
                </div>
              </div>
              <div className="bg-[#A14A1F] 2xl:pb-4 lg:pb-2 pb-1 lg:pt-2 pt-1 px-4 rounded-b-xl relative z-10">
                <hr className="border border-white lg:mt-2 mt-[2px]" />
                <div className="flex justify-between gap-4 items-center lg:py-2 py-[2px]">
                  <p className="lg:text-3xl text-base text-white">TOTAL</p>
                  <p className="lg:text-3xl text-base text-white">{(mintPrice * Number(mintCount)).toFixed(4)} ETH</p>
                </div>
                <hr className="border border-white" />
                <div onClick={(e) => onMint()} className="font-bold 2xl:mt-5 lg:mt-4 mt-1 lg:w-[140px] w-[60px] 2xl:py-2 lg:py-1 py-[1px] 2xl:text-5xl text-base mx-auto bg-white border-2 border-black cursor-pointer hover:opacity-80 transition-all duration-300 flex justify-center items-center px-4 rounded-lg">
                  MINT
                </div>
              </div>
            </div>
            {/* <div className="text-white 2xl:text-3xl md:text-lg md:hidden flex text-sm bg-[#E91717] border-2 border-black rounded-lg p-3">
              Wallet not selected <br /> come back next phase
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
