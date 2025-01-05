// "use client";

// import React, { Fragment, useEffect, useState } from "react";
// import { PagesEnum } from "@/constant/pages";
// import Image from "next/image";
// import { usePage } from "@/stores/pageStore";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";
// import { useRef } from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";
// // import "@google/model-viewer";

// function SpacePlanet() {
//   function goToPage(page: number) {
//     usePage.setState({
//       currentPage: page,
//     });
//   }

//   const [isVisible, setIsVisible] = useState(false);

//   const toggleVisibility = () => {
//     setIsVisible(!isVisible);
//   };

//   const [isModelVisible, setIsModelVisible] = useState(false);

//   const [currentModel, setCurrentModel] = useState("card1.glb");

//   const [isExplosionVisible, setIsExplosionVisible] = useState(false);

//   const glbFiles = Array.from({ length: 19 }, (_, i) => `card${i + 1}.glb`);

//   const handleImageClick = () => {
//     setIsExplosionVisible(true);
//     setTimeout(() => {
//       setIsExplosionVisible(false);
//       const randomModel = glbFiles[Math.floor(Math.random() * glbFiles.length)];
//       setCurrentModel(randomModel);
//       setIsModelVisible(true);
//     }, 2000); // 2 second delay
//   };

//   const [isClient, setIsClient] = useState(false);
//   useEffect(() => {
//     import("@google/model-viewer")
//       .then(() => setIsClient(true))
//       .catch(console.error);
//   }, []);
//   // const router = useRouter();

//   const [isScaled, setIsScaled] = useState(false);

//   const handleSingleClick = () => {
//     setIsScaled(!isScaled);
//   };

//   // const handleDoubleClick = () => {
//   //   setIsScaled(false);
//   // };
//   const modelRef = useRef<HTMLDivElement | null>(null);

//   const handleGlobalClick = (event: MouseEvent) => {
//     if (modelRef.current && !modelRef.current.contains(event.target as Node)) {
//       setIsScaled(false);
//     }
//   };
//   useEffect(() => {
//     document.addEventListener("click", handleGlobalClick);
//     return () => {
//       document.removeEventListener("click", handleGlobalClick);
//     };
//   }, []);
//   return (
//     <>
//       {/* 6th */}
//       <section className="bg-[url(https://expatsio.b-cdn.net/e_7.png)] herobgpositions htbbg w-screen h-screen">
//         {/* <Confetti /> */}
//         {/* <Navbar /> */}
//         {/* <Music /> */}
//         <div
//           className={`bg-black/50 fixed w-full top-0 bottom-0 left-0 right-0 z-20 ${isScaled ? "flex" : "hidden"}`}
//         ></div>
//         <div className="2xl:max-w-[1600px] md:max-w-[1450px] mx-auto my-auto 2xl:pt-4 pt-4 w-full 2xl:px-20 md:px-28 px-4 relative">
//           <div
//             className={`absolute 2xl:right-[13%] right-[15%] 2xl:top-[130px] md:top-[100px] top-[70px]  ${isScaled ? "z-10" : "z-50"}`}
//           >
//             <Link href="/mints" target="_blank">
//               <button className="jersey hover:border-b-[10px] transition-all text-white duration-300 bg-gradient-to-r from-[#D424FB] to-[#18E8EC] border-2 border-white 2xl:p-3 lg:p-2 p-1 font-normal 2xl:w-[240px] lg:w-[150px] w-[90px] rounded-lg uppercase 2xl:text-5xl text-base">
//                 MINT
//               </button>
//             </Link>
//           </div>
//           <div
//             className={`absolute left-[18%] 2xl:top-[110px] md:top-[100px] top-[60px] ${isScaled ? "z-10" : "z-50"}`}
//           >
//             <Image
//               src="https://expatsio.b-cdn.net/shop.png"
//               fill={true}
//               decoding="sync"
//               loading="eager"
//               className={`!relative 2xl:!w-28 !w-20 z-50`}
//               alt="Expatsio"
//             />
//           </div>
//           <div
//             className={`absolute left-[9%] 2xl:top-[110px] md:top-[100px] top-[60px] ${isScaled ? "z-10" : "z-50"} cursor-pointer lg:px-11 px-4`}
//           >
//             <Image
//               onClick={toggleVisibility}
//               src="https://expatsio.b-cdn.net/menu.png"
//               fill={true}
//               decoding="sync"
//               loading="eager"
//               className={`!relative 2xl:!w-16 !w-8 2xl:!h-12 !h-6 z-50 mt-4  ${isVisible ? "hidden" : "flex"}`}
//               alt="Expatsio"
//             />
//             {/* {isVisible && ( */}
//             <div
//               className={`bg-grads lg:rounded-[58px] rounded-[28px] lg:py-5 py-2 lg:px-8 px-4 fixed transform ${
//                 isVisible
//                   ? "translate-y-0 opacity-100"
//                   : "translate-y-[-500px] opacity-0"
//               } transition-all duration-500 ease-in-out`}
//             >
//               <Image
//                 onClick={toggleVisibility}
//                 src="https://expatsio.b-cdn.net/menu.png"
//                 fill={true}
//                 decoding="sync"
//                 loading="eager"
//                 className={`!relative 2xl:!w-16 !w-8 2xl:!h-12 !h-6 z-50 mt-4 cursor-pointer`}
//                 alt="Expatsio"
//               />
//               <Image
//                 onClick={() => goToPage(PagesEnum.LOBBY)}
//                 src="https://expatsio.b-cdn.net/lore.png"
//                 fill={true}
//                 decoding="sync"
//                 loading="eager"
//                 className={`!relative lg:!w-[120px] !w-[50px] z-50 lg:mt-10 mt-5 cursor-pointer hover:scale-105 transition-all duration-300`}
//                 alt="Expatsio"
//               />
//               <Image
//                 onClick={() => goToPage(PagesEnum.PORTAL)}
//                 src="https://expatsio.b-cdn.net/team.png"
//                 fill={true}
//                 decoding="sync"
//                 loading="eager"
//                 className={`!relative lg:!w-[120px] !w-[50px] z-50 mt-6 cursor-pointer hover:scale-105 transition-all duration-300`}
//                 alt="Expatsio"
//               />
//               <Image
//                 onClick={() => goToPage(PagesEnum.SPACE)}
//                 src="https://expatsio.b-cdn.net/shop.png"
//                 fill={true}
//                 decoding="sync"
//                 loading="eager"
//                 className={`!relative lg:!w-[120px] !w-[50px] z-50 mt-6 cursor-pointer hover:scale-105 transition-all duration-300`}
//                 alt="Expatsio"
//               />
//             </div>
//             {/* )} */}
//           </div>
//           <div
//             className={`flex justify-center items-center h-screen relative ${isScaled ? "z-50" : "z-0"}`}
//           >
//             {!isModelVisible && (
//               <div
//                 className={`flex justify-center items-center relative z-50 ${isScaled ? "z-50" : "z-0"}`}
//               >
//                 <video
//                   onClick={handleImageClick}
//                   autoPlay
//                   loop
//                   className={`!relative z-50 cursor-pointer`}
//                   src="https://expatsio.b-cdn.net/shopcard.mp4"
//                   preload="auto"
//                 />
//                 {/* <Image
//                   onClick={handleImageClick}
//                   src="https://expatsio.b-cdn.net/machine.png"
//                   fill={true}
//                   decoding="sync"
//                   loading="eager"
//                   className={`!relative z-50 cursor-pointer`}
//                   alt="Expatsio"
//                 /> */}
//                 {isExplosionVisible && (
//                   <>
//                   <video
//                   // onClick={handleImageClick}
//                   autoPlay
//                   loop
//                   className={`!relative z-50 cursor-pointer`}
//                   src="https://expatsio.b-cdn.net/shopcard1.mp4"
//                   preload="auto"
//                 />
//                   </>
//                   // <div className="explosions relative">
//                   //   <span />
//                   //   <span />
//                   //   <span />
//                   //   <span />
//                   //   <span />
//                   // </div>
//                 )}
//               </div>
//             )}
//             {isModelVisible && isClient && (
//               <div ref={modelRef} className="firstglb relative z-[100]">
//                 <model-viewer
//                   onClick={handleSingleClick}
//                   style={{
//                     height: "100%",
//                     backgroundColor: "transparent",
//                     transform: isScaled ? "scale(2.5)" : "scale(1)",
//                     transition: "transform 0.3s ease-in-out",
//                     cursor: "pointer",
//                   }}
//                   src={`/${currentModel}`}
//                   ios-src=""
//                   poster="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1200px-HD_transparent_picture.png"
//                   alt="A 3D model"
//                   shadow-intensity="1"
//                   camera-controls
//                   auto-rotate
//                   // ar
//                 ></model-viewer>
//                 {/* onClick={() => setIsModelVisible(false)} */}
//                 <button onClick={handleImageClick}>
//                   <img
//                     className="2xl:w-[300px] lg:w-[250px] w-[180px] hover:opacity-90 hover:scale-105 transition-all duration-300"
//                     src="https://expatsio.b-cdn.net/confirm1.png"
//                     alt="cONFIRM"
//                   />
//                 </button>
//                 {/* {isExplosionVisible && (
//                   <div className="explosions relative">
//                     <span />
//                     <span />
//                     <span />
//                     <span />
//                     <span />
//                   </div>
//                 )} */}
//               </div>
//             )}
//             {/*  */}
//             {/* {isContentVisible && (
//               <div className="flex lg:justify-around justify-center lg:gap-5 gap-4 relative z-20 w-full">
//                 <div className="lg:w-[600px] w-[250px]">
//                   <Image
//                     src="https://expatsio.b-cdn.net/card1.png"
//                     fill={true}
//                     decoding="sync"
//                     loading="eager"
//                     className={`!relative 2xl:!w-[170px] !w-20 z-50 lg:!h-16 !h-8 object-contain`}
//                     alt="Expatsio"
//                   />
//                   <p className="mt-4 text-white 2xl:text-6xl lg:text-4xl text-base">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                     do eiusmod tempor incididunt ut labore et dolore magna
//                     aliqua.
//                   </p>
//                 </div>
//                 <div className="lg:w-[300px] w-[200px]">
//                   <div className="firstglb">
//                     <model-viewer
//                       style={{ height: "100%", backgroundColor: "transparent" }}
//                       src="/card.glb"
//                       ios-src=""
//                       poster="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1200px-HD_transparent_picture.png"
//                       alt="A 3D model"
//                       shadow-intensity="1"
//                       camera-controls
//                       auto-rotate
//                       // ar
//                     ></model-viewer>
//                   </div>
//                 </div>
//               </div>
//             )} */}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default SpacePlanet;

"use client";

import React, { Fragment, useEffect, useState } from "react";
import { PagesEnum } from "@/constant/pages";
import Image from "next/image";
import { usePage } from "@/stores/pageStore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// import "@google/model-viewer";

function SpacePlanet() {
  function goToPage(page: number) {
    usePage.setState({
      currentPage: page,
    });
  }

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const [isModelVisible, setIsModelVisible] = useState(false);

  const [currentModel, setCurrentModel] = useState("card1.glb");

  const [isExplosionVisible, setIsExplosionVisible] = useState(false);

  const glbFiles = Array.from({ length: 19 }, (_, i) => `card${i + 1}.glb`);

  const handleImageClick = () => {
    setIsExplosionVisible(true);
    // setIsModelVisible(false);
    setTimeout(() => {
      setIsExplosionVisible(false);
      const randomModel = glbFiles[Math.floor(Math.random() * glbFiles.length)];
      setCurrentModel(randomModel);
      setIsModelVisible(true);
    }, 3000); // 2 second delay
  };

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    import("@google/model-viewer")
      .then(() => setIsClient(true))
      .catch(console.error);
  }, []);
  // const router = useRouter();

  const [isScaled, setIsScaled] = useState(false);

  const handleSingleClick = () => {
    setIsScaled(!isScaled);
  };

  // const handleDoubleClick = () => {
  //   setIsScaled(false);
  // };
  const modelRef = useRef<HTMLDivElement | null>(null);

  const handleGlobalClick = (event: MouseEvent) => {
    if (modelRef.current && !modelRef.current.contains(event.target as Node)) {
      setIsScaled(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleGlobalClick);
    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);
  return (
    <>
      {/* 6th */}
      <section className="bg-[url(https://expatsio.b-cdn.net/e_7.png)] herobgpositions htbbg w-screen h-screen">
        {/* <Confetti /> */}
        {/* <Navbar /> */}
        {/* <Music /> */}
        <div
          className={`bg-black/50 fixed w-full top-0 bottom-0 left-0 right-0 z-20 ${isScaled ? "flex" : "hidden"}`}
        ></div>
        <div className="2xl:max-w-[1600px] md:max-w-[1450px] mx-auto my-auto 2xl:pt-4 pt-4 w-full 2xl:px-20 md:px-28 px-4 relative">
          <div
            className={`absolute 2xl:right-[13%] right-[15%] 2xl:top-[130px] md:top-[100px] top-[70px] top144 ${isScaled ? "z-10" : "z-50"}`}
          >
            <Link href="/mints" target="_blank">
              <button className="jersey hover:border-b-[10px] transition-all text-white duration-300 bg-gradient-to-r from-[#D424FB] to-[#18E8EC] border-2 border-white 2xl:p-3 lg:p-2 p-1 font-normal 2xl:w-[240px] lg:w-[150px] w-[90px] rounded-lg uppercase 2xl:text-5xl text-base">
                MINT
              </button>
            </Link>
          </div>
          <div
            className={`absolute left-[18%] left19 2xl:top-[110px] md:top-[100px] top-[60px] top144 ${isScaled ? "z-10" : "z-50"}`}
          >
            <Image
              src="https://expatsio.b-cdn.net/shop.png"
              fill={true}
              decoding="sync"
              loading="eager"
              className={`!relative 2xl:!w-28 !w-20 z-50`}
              alt="Expatsio"
            />
          </div>
          <div
            className={`absolute left-[9%] 2xl:top-[110px] md:top-[100px] top-[60px] top144 ${isScaled ? "z-10" : "z-50"} cursor-pointer lg:px-11 px-4`}
          >
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
          <div
            className={`flex justify-center items-center h-screen relative ${isScaled ? "z-50" : "z-0"}`}
          >
            {!isModelVisible && (
              <div
                className={`flex justify-center items-center relative z-50 ${isScaled ? "z-50" : "z-0"}`}
              >
                {/* <video
                  onClick={handleImageClick}
                  autoPlay
                  loop
                  className={`!relative z-50 cursor-pointer ${isExplosionVisible ?'hidden':'flex'}`}
                  src="https://expatsio.b-cdn.net/shopcard-unscreen.gif"
                  preload="auto"
                /> */}
                <Image
                  onClick={handleImageClick}
                  src="https://expatsio.b-cdn.net/shopcard-unscreen.gif"
                  fill={true}
                  decoding="sync"
                  loading="eager"
                  className={`!relative z-50 cursor-pointer ${isExplosionVisible ? "hidden" : "flex"}`}
                  alt="Expatsio"
                />
                {isExplosionVisible && (
                  <>
                    <Image
                      src="https://expatsio.b-cdn.net/shopcard1-unscreen.gif"
                      fill={true}
                      decoding="sync"
                      loading="eager"
                      className={`!relative z-50 cursor-pointer`}
                      alt="Expatsio"
                    />
                    {/* <video
                  // onClick={handleImageClick}
                  autoPlay
                  loop
                  className={`!relative z-50 cursor-pointer`}
                  src="https://expatsio.b-cdn.net/shopcard1-unscreen.gif"
                  preload="auto"
                /> */}
                  </>
                  // <div className="explosions relative">
                  //   <span />
                  //   <span />
                  //   <span />
                  //   <span />
                  //   <span />
                  // </div>
                )}
              </div>
            )}
            {isModelVisible && isClient && (
              <div ref={modelRef} className="firstglb relative z-[100]">
                <model-viewer
                  onClick={handleSingleClick}
                  style={{
                    height: "100%",
                    backgroundColor: "transparent",
                    transform: isScaled ? "scale(2.5)" : "scale(1)",
                    transition: "transform 0.3s ease-in-out",
                    cursor: "pointer",
                  }}
                  src={`/${currentModel}`}
                  ios-src=""
                  poster="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1200px-HD_transparent_picture.png"
                  alt="A 3D model"
                  shadow-intensity="1"
                  camera-controls
                  auto-rotate
                  // ar
                ></model-viewer>
                {/* onClick={() => setIsModelVisible(false)} */}
                <button onClick={() => setIsModelVisible(false)}>
                  <img
                    className="2xl:w-[300px] lg:w-[250px] w-[180px] hover:opacity-90 hover:scale-105 transition-all duration-300"
                    src="https://expatsio.b-cdn.net/confirm1.png"
                    alt="cONFIRM1"
                  />
                </button>
                {/* {isExplosionVisible && (
                  <div className="explosions relative">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                )} */}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default SpacePlanet;
