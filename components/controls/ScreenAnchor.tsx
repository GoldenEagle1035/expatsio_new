// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { usePage } from "@/stores/pageStore";
// import { motion as m } from "framer-motion";
// import { PagesEnum } from "@/constant/pages";
// import ReactHowler from "react-howler";
// import HoverSound from "@/services/hover-sound";
// import { useHoverSoundStore } from "@/stores/triggerHoverSound";

// type TScreenAnchorProps = {
//   leftAnchor: number;
//   rightAnchor: number;
// };

// function ScreenAnchor(props: TScreenAnchorProps) {
//   const pagesAsText = [
//     "LANDING",
//     "COCKPIT",
//     "LOBBY",
//     "PORTAL",
//     "ARMORY",
//     "CONTROL",
//   ];

//   const socialMedia = [
//     {
//       name: "Discord",
//       icon: "https://sprsh.b-cdn.net/assets/Icons/discord.svg",
//       url: "https://discord.gg/sprsh",
//     },
//     {
//       name: "Twitter",
//       icon: "https://sprsh.b-cdn.net/assets/Icons/twitter.svg",
//       url: "https://twitter.com/@playspacerush",
//     },
//     {
//       name: "Telegram",
//       icon: "https://sprsh.b-cdn.net/assets/Icons/telegram.svg",
//       url: "https://discord.gg/sprsh",
//     },
//   ];

//   const [isButtonClicked, setIsButtonClicked] = useState(false);

//   function playClickSound() {
//     useHoverSoundStore.setState({ isClicked: true });
//   }

//   function playHoverSound() {
//     useHoverSoundStore.setState({ isHovered: true });
//   }

//   function leftHandler() {
//     playClickSound();
//     usePage.setState({
//       currentPage: props.leftAnchor,
//     });
//   }

//   function rightHandler() {
//     playClickSound();
//     usePage.setState({
//       currentPage: props.rightAnchor,
//     });
//   }

//   function goToPage(page: number) {
//     usePage.setState({
//       currentPage: page,
//     });
//   }

//   useEffect(() => {
//     if (isButtonClicked) {
//       setIsButtonClicked(false);
//     }
//   }, [isButtonClicked]);

//   return (
//     <>
//       <div className="fixed top-[5vh] left-[1vw] z-[999] grid grid-cols-3 grid-rows-3 gap-0 px-[2vw] py-[2vh]">
//         <Image
//           src="https://sprsh.b-cdn.net/assets/ControlRoom/outline.svg"
//           width={100}
//           height={100}
//           className="fixed w-[35vw] h-[25vh] left-[-12vh] top-[2vh] pointer-events-none"
//           alt="Outline"
//         />

//         <button
//           onClick={() => goToPage(PagesEnum.ARMORY)}
//           className={`${usePage.getState().currentPage === PagesEnum.ARMORY && "bg-yellow-400/50"} w-[5vw] h-[5vh] border border-white/20 row-start-1 col-start-2 col-end-2 rounded-tr-full border-b-0 flex items-center justify-center bg-white/10 backdrop-blur hover:bg-white/50`}
//         >
//           <p className="text-[0.5vw]">ARMORY</p>
//         </button>
//         <button
//           onClick={() => goToPage(PagesEnum.PORTAL)}
//           className={`${usePage.getState().currentPage === PagesEnum.PORTAL && "bg-yellow-400/50"} w-[5vw] h-[5vh] border border-white/20 row-start-2 col-span-1 border-r-0 flex items-center justify-center bg-white/10 backdrop-blur hover:bg-white/50`}
//         >
//           <p className="text-[0.5vw]">PORTAL</p>
//         </button>
//         <button
//           onClick={() => goToPage(PagesEnum.LOBBY)}
//           className={`${usePage.getState().currentPage === PagesEnum.LOBBY && "bg-yellow-400/50"} w-[5vw] h-[5vh] border border-white/20 row-start-2 col-span-1 border-r-0 border-b-0 flex items-center justify-center bg-white/10 backdrop-blur hover:bg-white/50`}
//         >
//           <p className="text-[0.5vw]">LOBBY</p>
//         </button>
//         <button
//           onClick={() => goToPage(PagesEnum.COCKPIT)}
//           className={`${usePage.getState().currentPage === PagesEnum.COCKPIT && "bg-yellow-400/50"} w-[5vw] h-[5vh] border border-white/20 row-start-2 col-span-1 rounded-r-full flex items-center justify-center bg-white/10 backdrop-blur hover:bg-white/50`}
//         >
//           <p className="text-[0.5vw]">COCKPIT</p>
//         </button>
//         <button
//           onClick={() => goToPage(PagesEnum.CONTROL)}
//           className={`${usePage.getState().currentPage === PagesEnum.CONTROL && "bg-yellow-400/50"} w-[5vw] h-[5vh] border border-white/20 row-start-3 col-start-2 col-end-2 rounded-br-full flex items-center justify-center bg-white/10 backdrop-blur hover:bg-white/50`}
//         >
//           <p className="text-[0.5vw]">COMMAND</p>
//         </button>
//       </div>

//       <button
//         onClick={leftHandler}
//         onMouseEnter={playHoverSound}
//         className="opacity-10 hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-black to-transparent fixed h-screen w-[5vw] z-[998] left-0 top-0"
//       ></button>

//       <button
//         onClick={rightHandler}
//         onMouseEnter={playHoverSound}
//         className="opacity-10 hover:opacity-100 transition-all duration-300 bg-gradient-to-l from-black to-transparent fixed h-screen w-[5vw] z-[998] right-0 top-0"
//       ></button>

//       <m.div
//         initial={{
//           opacity: 0.1,
//           translateY: 100,
//         }}
//         animate={{
//           opacity: 1,
//           translateY: 0,
//         }}
//         transition={{
//           duration: 0.5,
//           delay: 0.5,
//         }}
//         className="fixed bottom-0 h-[8vh] w-screen left-0 z-[999] flex items-center justify-between px-[2vw]"
//       >
//         <button onClick={leftHandler} className="flex items-center gap-2">
//           <Image
//             src="https://sprsh.b-cdn.net/assets/Icons/arrow.svg"
//             width={24}
//             height={24}
//             alt="Left Arrow"
//             className="rotate-180 aspect-square w-[2vw] h-[2vh]"
//           />
//           <span className="text-[0.9vw] text-white">
//             {pagesAsText[props.leftAnchor]}
//           </span>
//         </button>

//         <div className="flex items-center gap-x-[1vw]">
//           {socialMedia.map((social, index) => (
//             <a key={index} href={social.url} target="_blank" rel="noreferrer">
//               <Image
//                 src={social.icon}
//                 width={16}
//                 height={16}
//                 className="aspect-square w-[2vw] h-[2vh]"
//                 alt={social.name}
//               />
//             </a>
//           ))}
//         </div>

//         <button
//           onClick={rightHandler}
//           onMouseEnter={() => setIsButtonClicked(true)}
//           className="flex items-center gap-2"
//         >
//           <span className="text-[0.9vw] text-white">
//             {pagesAsText[props.rightAnchor]}
//           </span>
//           <Image
//             src="https://sprsh.b-cdn.net/assets/Icons/arrow.svg"
//             width={24}
//             height={24}
//             className="aspect-square w-[2vw] h-[2vh]"
//             alt="Left Arrow"
//           />
//         </button>
//       </m.div>
//     </>
//   );
// }

// export default ScreenAnchor;
