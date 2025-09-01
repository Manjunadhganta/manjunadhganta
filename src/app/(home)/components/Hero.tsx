"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa6";


export function Hero() {
  const images = [
    "/3d-app.png", "/amazon.png", "/echoai.png", "/nike.png", "/resumeiq.png",
    "/saas-servora.png", "/echoai.png", "/travel-app.png", "/tictactoe.png", "/todo-board.png",
    "/weatherapp.png", 
    // Repeating for effect
    "/3d-app.png", "/amazon.png", "/echoai.png", "/nike.png", "/resumeiq.png",
    "/saas-servora.png", "/stopwatch.png", "/tictactoe.png", "/todo-board.png",
    "/travel-app.png", "/weatherapp.png",
    "/3d-app.png", "/amazon.png", "/echoai.png", "/nike.png", "/resumeiq.png",
    "/saas-servora.png", "/stopwatch.png", "/tictactoe.png", "/todo-board.png",
    "/travel-app.png", "/weatherapp.png", "/saas-servora.png","/3d-app.png",
    
  ];

  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-center overflow-hidden gap-6">
      {/* Overlay content */}
      <p className="relative z-20 py-4 text-center text-sm text-neutral-200 md:text-3xl">
        👋, My name is Manjunadh Ganta
      </p>
      <h1 style={{ transform: "scaleY(1.3)", transformOrigin: "center"}} className="relative font-roboto font-bold z-20 text-center text-5xl text-white md:text-8xl lg:text-9xl tracking-tighter glow-text">
        Web Developer<br />
        & Software Engineer
      </h1>

      <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-12">
        <button className="rounded-md bg-black px-8 py-2.5 text-sm font-medium text-white hover:bg-white hover:text-black hover:border-black hover:border-2">
          <a className="flex items-center gap-3" href='#contact'>Hire Me <FaArrowDown /></a> 
        </button>
        <button 
          className="rounded-md border-2 border-black bg-white px-8 py-2.5 text-sm font-medium text-black cursor-pointer"
          onClick={() => window.open("https://drive.google.com/file/d/1XtYa0OcJZmrtyLUek7zBtoXa5XsOzYCI/view?usp=sharing", "_blank")}  
        >
          Resume 
        </button>
      </div>

      {/* Dark overlay for background */}
      <div className="absolute inset-0 z-10 min-h-screen w-full bg-black/80 dark:bg-black/40" />

      {/* Marquee background */}
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        images={images}
      />
    </div>
  );
}


