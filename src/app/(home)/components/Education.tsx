import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function Education() {
  const data = [
    {
      title: "2021 – 2025",
      content: (
        <div>
          <h3 className="text-lg md:text-xl lg:text-4xl font-bold dark:text-white text-black mb-2">
            VIT-AP University
          </h3>
          <p className="text-sm md:text-base  dark:text-neutral-300 text-black mb-1">
            B.Tech in Computer Science & Engineering (AI & ML)
          </p>
          <p className="text-sm md:text-base dark:text-neutral-300 text-black">
            CGPA: <span className="font-semibold dark:text-white text-black">9.09 / 10</span>
          </p>
        </div>
      ),
    },
    {
      title: "2019 – 2021",
      content: (
        <div>
          <h3 className="text-lg md:text-xl lg:text-4xl font-bold dark:text-white text-black mb-2">
            Sri Chaitanya Educational Institutions
          </h3>
          <p className="text-sm md:text-base dark:text-neutral-300 text-black mb-1">
            Intermediate – MPC Stream
          </p>
          <p className="text-sm md:text-base dark:text-neutral-300 text-black">
            Percentage:{" "}
            <span className="font-semibold dark:text-white text-black">93.6%</span>
          </p>
        </div>
      ),
    },
    {
      title: "2018 – 2019",
      content: (
        <div>
          <h3 className="text-lg md:text-xl lg:text-4xl font-bold dark:text-white text-black mb-2">
            Dr. KKR’s Gowtham School
          </h3>
          <p className="text-sm md:text-base dark:text-neutral-300 text-black mb-1">
            Secondary School Education
          </p>
          <p className="text-sm md:text-base dark:text-neutral-300 text-black">
            Percentage: <span className="font-semibold dark:text-white text-black">98%</span>
          </p>
        </div>
      ),
    },
  ];

  return (
    <section
        id="education"
        className="relative w-full text-white py-16 px-4 sm:px-8 md:px-16"
    >
      <div className="">
        <BackgroundBeams />
      </div>        
      <Timeline data={data} />
    </section>
  );
}
