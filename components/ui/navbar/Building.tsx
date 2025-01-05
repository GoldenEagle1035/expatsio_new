// // import React from "react";
// // // import BlackTransition from "@/components/animated/BlackTransition";
// // // import ScreenAnchor from "@/components/controls/ScreenAnchor";
// // import { PagesEnum } from "@/constant/pages";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { usePage } from "@/stores/pageStore";

// // function Building() {
// //   function goToPage(page: number) {
// //     usePage.setState({
// //       currentPage: page,
// //     });
// //   }
// //   return (
// //     <>
// //       <div className="cursor-pointer bg-blacks w-full h-[80px] b1"></div>
// //       <div
// //         onClick={() => goToPage(PagesEnum.CONTROL)}
// //         className="cursor-pointer bg-red-600s w-full h-[70px] b2"
// //       ></div>
// //       <div
// //         onClick={() => goToPage(PagesEnum.ARMORY)}
// //         className="cursor-pointer bg-yellow-600s w-full h-[60px] b3"
// //       ></div>
// //       <div
// //         onClick={() => goToPage(PagesEnum.COCKPIT)}
// //         className="cursor-pointer bg-pink-600s w-full h-[68px] b4"
// //       ></div>
// //       <div
// //         onClick={() => goToPage(PagesEnum.LOBBY)}
// //         className="cursor-pointer bg-blue-600s w-full h-[50px] b5"
// //       ></div>
// //       <div
// //         onClick={() => goToPage(PagesEnum.PORTAL)}
// //         className="cursor-pointer bg-orange-600s w-full h-[40px] b6"
// //       ></div>
// //     </>
// //   );
// // }

// // export default Building;


// import React, { useState } from "react";
// import { PagesEnum } from "@/constant/pages";
// import Image from "next/image";
// import { usePage } from "@/stores/pageStore";

// function Building() {
//   const [hoveredItem, setHoveredItem] = useState<null | string>(null);
//   const [activeItem, setActiveItem] = useState<null | string>(null); // New state for active item

//   function goToPage(page: number) {
//     usePage.setState({
//       currentPage: page,
//     });
//   }

//   const images: Record<string, string> = {
//     CONTROL: "https://dogsclub.b-cdn.net/roof4.png",
//     ARMORY: "https://dogsclub.b-cdn.net/br2.png",
//     COCKPIT: "https://dogsclub.b-cdn.net/token2.png",
//     LOBBY: "https://dogsclub.b-cdn.net/htb3.png",
//     PORTAL: "https://dogsclub.b-cdn.net/join3.png",
//   };

//   return (
//     <>
//       {hoveredItem === null && activeItem === null ? (
//         <Image
//           src={
//             "https://tuk-cdn.s3.amazonaws.com/can-uploader/club__buildings.png"
//           }
//           fill={true}
//           decoding="sync"
//           loading="eager"
//           className="fixed top-0 left-0 h-screen w-screen z-[10] pointer-events-none object-cover"
//           alt="Front Ship"
//         />
//       ) : (
//         <Image
//           aria-label={activeItem || hoveredItem}
//           src={images[activeItem || hoveredItem]}
//           fill={true}
//           decoding="sync"
//           loading="eager"
//           className="fixed top-0 left-0 h-screen w-screen z-[10] pointer-events-none object-cover"
//           alt={activeItem || hoveredItem}
//         />
//       )}

//       <div className="w235 w-[250px] h-[42vh] 2xl:left-[75px] lg:left-[65px] left-10 bottom-[8%] fixed b0 z-50">
//         <div className="cursor-pointer bg-blacks w-full h-[80px] b1"></div>
//         <div
//           onMouseEnter={() => setHoveredItem("CONTROL")}
//           onMouseLeave={() => setHoveredItem(null)}
//           onClick={() => {
//             setActiveItem("CONTROL"); // Set active item on click
//             goToPage(PagesEnum.CONTROL);
//           }}
//           className="cursor-pointer bg-red-600s w-full h-[70px] b2"
//         ></div>

//         <div
//           onMouseEnter={() => setHoveredItem("ARMORY")}
//           onMouseLeave={() => setHoveredItem(null)}
//           onClick={() => {
//             setActiveItem("ARMORY"); // Set active item on click
//             goToPage(PagesEnum.ARMORY);
//           }}
//           className="cursor-pointer bg-yellow-600s w-full h-[60px] b3"
//         ></div>

//         <div
//           onMouseEnter={() => setHoveredItem("COCKPIT")}
//           onMouseLeave={() => setHoveredItem(null)}
//           onClick={() => {
//             setActiveItem("COCKPIT"); // Set active item on click
//             goToPage(PagesEnum.COCKPIT);
//           }}
//           className="cursor-pointer bg-pink-600s w-full h-[68px] b4"
//         ></div>

//         <div
//           onMouseEnter={() => setHoveredItem("LOBBY")}
//           onMouseLeave={() => setHoveredItem(null)}
//           onClick={() => {
//             setActiveItem("LOBBY"); // Set active item on click
//             goToPage(PagesEnum.LOBBY);
//           }}
//           className="cursor-pointer bg-blue-600s w-full h-[50px] b5"
//         ></div>

//         <div
//           onMouseEnter={() => setHoveredItem("PORTAL")}
//           onMouseLeave={() => setHoveredItem(null)}
//           onClick={() => {
//             setActiveItem("PORTAL"); // Set active item on click
//             goToPage(PagesEnum.PORTAL);
//           }}
//           className="cursor-pointer bg-orange-600s w-full h-[40px] b6"
//         ></div>
//       </div>
//     </>
//   );
// }

// export default Building;
