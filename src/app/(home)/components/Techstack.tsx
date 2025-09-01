const App = () => {
  const techLogos = [
    "html", "css", "tailwindcss", "react", "javascript",
    "nodedotjs", "next", "express", "figma", "python"
  ];

  return (
    <>
      <style>{`
        .marquee-inner {
          animation: marqueeScroll linear infinite;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <section id='tools' className="py-16 sm:py-20 bg-slate-200 dark:bg-black text-center scroll-mt-16 md:scroll-mt-20">
        <h2 className="text-3xl sm:text-2xl font-semibold mb-10 text-gray-800 dark:text-white">
          Tech Stack
        </h2>

        <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none">
          {/* Left gradient fade */}
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r dark:from-black to-transparent" />

          {/* Marquee area */}
          <div
            className="marquee-inner flex will-change-transform min-w-[200%]"
            style={{ animationDuration: "18s" }}
          >
            <div className="flex items-center">
              {[...techLogos, ...techLogos].map((tech, index) => (
                <img
                  key={index}
                  src={`/${tech}.svg`}
                  alt={tech}
                  className="h-10 w-auto mx-6 filter dark:invert"
                  draggable={false}
                />
              ))}
            </div>
          </div>

          {/* Right gradient fade */}
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l dark:from-black to-transparent" />
        </div>
      </section>
    </>
  );
};

export default App;
