"use client";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Command } from "cmdk";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full pl-10 border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Full-stack programmer
        </p>
        <div className="fixed left-0 top-0 flex w-full pl-10 border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <a href="https://www.twitter.com/declanmidd" target="_blank">
            <div className="mr-2">
              <FaTwitter size="20" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/declanmiddleton/"
            target="_blank"
          >
            <div className="mr-2">
              <FaLinkedin size="20" />
            </div>
          </a>

          <a href="https://github.com/declanmidd" target="_blank">
            <div className="mr-2">
              <FaGithub size="20" />
            </div>
          </a>
        </div>
      </div>

      <div className="relative flex">
        <h1 className="title flex text-3xl tracking-wider ">
            Declan Middleton
          </h1>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="/about"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>About</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Whoami, i dont know, find out
          </p>
        </a>

        <a
          href="/projects"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Projects</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Dive in to view a list of projects I've worked on
          </p>
        </a>

        <a
          href="https://medium.com/@dexmiddles"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Blog</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore my gitbook to know more
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>TechStack</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
           View my techstack, what I use 
          </p>
        </a>
      </div>
    </main>
  );
}
