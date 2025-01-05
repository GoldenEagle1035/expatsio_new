import React from "react";
import "@/styles/portrait-screen.css";

function Portrait(props: { joinHandler: () => void }) {
  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col ">
        <div className="phone"></div>
        <div className="message">Please rotate your device!</div>
        <button
          onClick={props.joinHandler}
          className="mt-4 hover:border-b-4 transition-all duration-300 font-bold bg-white text-black p-4 text-xs font-primary w-[300px] rounded-lg uppercase"
        >
          Fullscreen and Rotate
        </button>
      </div>
    </section>
  );
}

export default Portrait;
