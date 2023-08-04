"use client";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { Howl } from "howler";

var soundEffect = new Howl({
  src: ["click_sound.wav"],
});

const Footer = () => {
  const handleEffect = () => {
    soundEffect.play();
  };

  return (
    <>
      <div className="w-[80em] h-20 m-auto flex">
        <footer className="footer_container w-[67em] m-auto flex justify-between">
          <div className="footer_content flex">
            <p className="text-slate-900 text-sm">
              © Declan, all rights reserved.
            </p>
          </div>
          <div
            className="social_icons flex space-x-2"
            onClick={() => handleEffect()}
          >
            <a
              href="https://twitter.com/intent/follow?screen_name=declanmidd&twterm=follow"
              className="bg-slate-100 p-2 border border-zinc-300 transition-all relative overflow-hidden hover:scale-[1.1] rounded-full"
              target="_blank"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100094306207807"
              className="bg-slate-100 p-2 border border-zinc-300 transition-all relative overflow-hidden hover:scale-[1.1] rounded-full"
              target="_blank"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/declanmiddleton/"
              className="bg-slate-100 p-2 border border-zinc-300 transition-all relative overflow-hidden hover:scale-[1.1] rounded-full"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
