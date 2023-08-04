"use client";
import React from "react";
import { Howl } from "howler";

var soundEffect = new Howl({
  src: ["click_sound.wav"],
});

type Card = {
  title: string;
  text: string;
  link: string;
  image: string;
};

const Card = ({
  title,
  text,
  link,
  image,
}: {
  title: string;
  text: string;
  link: string;
  image: string;
}) => {
  React.useEffect(() => {}, []);

  const handleClick = () => {
    soundEffect.play();
  };

  return (
    <>
      <a href={link} onClick={handleClick} target="_blank">
        <div className="card_container bg-white w-[360px] h-[120px] border border-slate-200 rounded-lg i group relative flex select-none flex-col justify-center space-x-4 overflow-hidden border-border p-6 transition-all hover:scale-[1.025] hover:bg-slate-50 hover:bg-primary/5 hover:border-primary-500/20 hover:shadow-lg hover:shadow-primary-500/5">
          <article className="card_content">
            <div className="flex space-x-1">
              <img src={image} className="w-5 h-5" />
              <h3 className="relative top-[-3px]">{title}</h3>
            </div>
            <div>
              <p className="text-sm">{text}</p>
            </div>
          </article>
        </div>
      </a>
    </>
  );
};

export default Card;
