"use client";
import React from "react";
import { Command } from "cmdk";

const Hero = () => {
  const [open, setOpen] = React.useState(false);

  // React.useEffect(() => {
  //   const down = (e) => {
  //     if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
  //       e.preventDefault();
  //       setOpen((open) => !open);
  //     }
  //   };

  //   document.addEventListener("keydown", down);
  //   return () => document.removeEventListener("keydown", down);
  // }, []);
  return (
    <>
      <section className="main_container  w-full h-[500px] rounded-md">
        <main className="hero_container">
          <h1 className="title text-center relative top-40 font-bold text-5xl leading-[60px] text-black">
            Hi, I'm Declan - A software engineer with a{" "}
            <span className="bg-yellow-400 bg-opacity-25 border-b-4 border-b-yellow-300 ">
              passion
            </span>{" "}
            in{" "}
            <span className="bg-blue-400 bg-opacity-25 border-b-4 border-b-blue-300">
              technology
            </span>
          </h1>
        </main>
      </section>
    </>
  );
};

export default Hero;
