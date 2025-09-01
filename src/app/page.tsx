import Image from "next/image";
import { Hero } from "./(home)/components/Hero";
import { Navbar } from "./(home)/components/Navbar";
import { Education } from "./(home)/components/Education";
// import  {Project}  from "./(home)/components/Project";
import Project from "./(home)/components/Project";
import Contact from "./(home)/components/Contact";
import Footer from "./(home)/components/Footer";
import Techstack from "./(home)/components/Techstack";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Education />
      <Techstack />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}