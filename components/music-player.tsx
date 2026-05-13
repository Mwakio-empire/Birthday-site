"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.2;
    audio.loop = true;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error("Audio playback failed:", error);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/videoplayback.weba"
        preload="metadata"
      />

      <button
        onClick={toggleAudio}
        className="fixed right-4 top-4 z-50 flex items-center gap-3 rounded-full border border-[#ecd3d3] bg-white/90 px-4 py-3 text-sm font-medium text-[#6d4b4b] shadow-sm backdrop-blur transition hover:scale-105"
      >
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-full bg-[#f7dede] text-lg ${
            isPlaying ? "animate-pulse" : ""
          }`}
        >
          {isPlaying ? "♫" : "♡"}
        </span>

        <span className="pr-1">
          {isPlaying ? "Playing " : "Play 🎶"}
        </span>
      </button>
    </>
  );
}