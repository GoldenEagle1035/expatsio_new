import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

function Music() {
  const [isPlaying, setIsPlaying] = useState(true); // Set initial state to true for playing by default
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Auto-play audio when the component mounts
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play(); // Play audio on component mount
    }
  }, []);

  const handleAudioToggle = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause(); // Pause the audio
      } else {
        audioRef.current.play(); // Play the audio
      }
      setIsPlaying(!isPlaying); // Toggle the play state
    }
  };


  return (
    <div className="flex gap-2 fixed lg:right-8 right-4 top-3 z-50 cursor-pointer">
      {/* Audio element */}
      <audio ref={audioRef} src="https://dogsclub.b-cdn.net/nappy.mp3" loop />

      {/* Music On Image */}
      <Image
        src={"https://dogsclub.b-cdn.net/Music_On.png"}
        fill={true}
        decoding="sync"
        loading="eager"
        className={`2xl:!w-14 2xl:!h-14 !w-12 !h-12 !relative ${
          isPlaying ? "" : "hidden"
        }`}
        alt="On"
        onClick={handleAudioToggle}
      />

      {/* Music Off Image */}
      <Image
        src={"https://dogsclub.b-cdn.net/Music_Off.png"}
        fill={true}
        decoding="sync"
        loading="eager"
        className={`2xl:!w-14 2xl:!h-14 !w-12 !h-12 !relative ${
          isPlaying ? "hidden" : ""
        }`}
        alt="Off"
        onClick={handleAudioToggle}
      />
    </div>
  );
}

export default Music;
