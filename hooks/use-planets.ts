// import { useEffect, useState } from "react";
// import { usePlanet } from "@/stores/planetStore";

// export const useSelectPlanets = () => {
//   const [selectedPlanet, setSelectedPlanet] = useState<string>(
//     "https://sprsh.b-cdn.net/assets/Planets/Planet-01.webp",
//   );
//   const { currentPlanet } = usePlanet();

//   useEffect(() => {
//     switch (currentPlanet) {
//       case 1:
//         setSelectedPlanet(
//           "https://sprsh.b-cdn.net/assets/Planets/Planet-01.webp",
//         );
//         break;
//       case 2:
//         setSelectedPlanet(
//           "https://sprsh.b-cdn.net/assets/Planets/Planet-02.webp",
//         );
//         break;
//       case 3:
//         setSelectedPlanet(
//           "https://sprsh.b-cdn.net/assets/Planets/Planet-03.webp",
//         );
//         break;
//       case 4:
//         setSelectedPlanet(
//           "https://sprsh.b-cdn.net/assets/Planets/Planet-04.webp",
//         );
//         break;
//       case 5:
//         setSelectedPlanet(
//           "https://sprsh.b-cdn.net/assets/Planets/Planet-05.webp",
//         );
//         break;
//     }
//   }, [currentPlanet]);

//   return {
//     selectedPlanet,
//   };
// };
