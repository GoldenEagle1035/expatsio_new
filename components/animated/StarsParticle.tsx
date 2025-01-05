// import React, { useEffect, useState } from "react";
// import { ISourceOptions } from "@tsparticles/engine";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all";

// function StarsParticle(props: { movementSpeed?: number }) {
//   const [init, setInit] = useState(false);

//   const options: ISourceOptions = {
//     particles: {
//       groups: {
//         z5000: {
//           number: {
//             value: 70,
//           },
//           zIndex: {
//             value: 50,
//           },
//         },
//         z7500: {
//           number: {
//             value: 30,
//           },
//           zIndex: {
//             value: 75,
//           },
//         },
//         z2500: {
//           number: {
//             value: 50,
//           },
//           zIndex: {
//             value: 25,
//           },
//         },
//         z1000: {
//           number: {
//             value: 40,
//           },
//           zIndex: {
//             value: 10,
//           },
//         },
//       },
//       number: {
//         value: 200,
//       },
//       color: {
//         value: "#fff",
//         animation: {
//           enable: false,
//           speed: 20,
//           sync: true,
//         },
//       },
//       shape: {
//         type: "circle",
//       },
//       opacity: {
//         value: 1,
//       },
//       size: {
//         value: 3,
//       },
//       move: {
//         angle: {
//           value: 10,
//           offset: 0,
//         },
//         enable: true,
//         speed: props.movementSpeed ? props.movementSpeed : 0.3,
//         direction: "right",
//       },
//       zIndex: {
//         value: 5,
//         opacityRate: 0.5,
//       },
//     },
//     background: {
//       color: "black",
//     },
//     emitters: {
//       position: {
//         y: 55,
//         x: -5,
//       },
//       rate: {
//         delay: 7,
//         quantity: 1,
//       },
//       size: {
//         width: 0,
//         height: 0,
//       },
//       particles: {
//         zIndex: {
//           value: 0,
//         },
//         rotate: {
//           value: {
//             min: 0,
//             max: 360,
//           },
//           animation: {
//             enable: true,
//             speed: 10,
//             sync: true,
//           },
//         },
//       },
//     },
//   };

//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadAll(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   const particlesLoaded = (container: any) => {};

//   return (
//     <>
//       {init && (
//         <Particles
//           id="tsparticles"
//           className="w-screen h-screen fixed top-0 left-0 z-0 pointer-events-none"
//           particlesLoaded={particlesLoaded as any}
//           options={options}
//         />
//       )}
//     </>
//   );
// }

// export default StarsParticle;
