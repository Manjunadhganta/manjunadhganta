"use client";
import React from "react";
import { cn } from "@/lib/utils";

type NavItem = {
  name: string;
  link: string;
  icon: React.ReactNode;
};

type FloatingNavProps = {
  navItems: NavItem[];
  className?: string;
};

export const FloatingNav: React.FC<FloatingNavProps> = ({ navItems, className }) => {
  return (
    <div
      className={cn(
        "flex max-w-fit fixed top-5 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-2xl dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-6 py-4 items-center justify-evenly gap-4",
        className
      )}
    >
      {/* Left nav items */}
      <div className="flex items-center gap-6">
        {navItems.map((navItem, idx) => (
          <a
            key={`link-${idx}`}
            href={navItem.link}
            className="relative dark:text-neutral-50 flex items-center space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-md">{navItem.name}</span>
          </a>
        ))}
      </div>

      {/* Right button */}
      <div>
        <a
          href='#contact'
          className="border text-md font-medium relative border-neutral-200 dark:border-white/[0.2] hover:text-white hover:bg-black dark:text-white px-4 py-2 rounded-full dark:hover:bg-white cursor-pointer dark:hover:text-black"
        >
          <span>Contact Me</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </a>
      </div>
    </div>
  );
};
