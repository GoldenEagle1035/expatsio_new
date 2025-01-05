import { useState, useEffect, useRef } from "react";

const Confeti = () => {
  const [isActive, setIsActive] = useState(false); // State to toggle particle effect
  const containerRef = useRef<HTMLDivElement>(null);

  // Trigger particles and remove them after 2 seconds
  useEffect(() => {
    if (isActive) {
      const container = containerRef.current;
      if (container) {
        // Create particles (increased count to 1000)
        for (let i = 0; i < 10000; i++) {
          const particle = document.createElement("div");
          particle.classList.add("particle"); // Use the global 'particle' class

          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const randomColor = `hsl(${Math.random() * 360}, 100%, 65%)`;

          const animationDuration = `${1 + 0.01 * Math.random() * 100}s`;
          const animationDelay = `-${Math.random() * 100 * parseFloat(animationDuration)}s`;

          particle.style.transform = `translate(${randomX}vw, ${randomY}vh)`;
          particle.style.background = randomColor;
          particle.style.animationDuration = animationDuration;
          particle.style.animationDelay = animationDelay;

          container.appendChild(particle);
        }

        // Remove particles after 2 seconds
        setTimeout(() => {
          container.innerHTML = ""; // Clear the container
          setIsActive(false); // Reset the effect
        }, 10); // 2 seconds duration
      }
    }
  }, [isActive]);

  // Handle button click to start the particle effect
  const handleButtonClick = () => {
    setIsActive(true);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Start Confetti</button>
      <div
        ref={containerRef}
        style={{ position: "relative", width: "100%", height: "100vh" }}
      ></div>
    </div>
  );
};

export default Confeti;
