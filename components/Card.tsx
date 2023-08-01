import React from "react";
import {FaReact} from 'react-icons/fa'
import {FaSass} from 'react-icons/fa'
import {TbBrandNextjs} from 'react-icons/tb'
import {BiLogoTailwindCss} from 'react-icons/bi'
import {BiLogoTypescript} from 'react-icons/bi'
import {BiLogoGraphql} from 'react-icons/bi'

type Card = {
  title: string; 
  text: string; 
  link: string;
}

const Card = ({title, text, link}: Card) => {

  return (
    <>
      <div className="grid text-center">
        <a
          href={link}
          className=" rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-1xl font-semibold`}>{title}</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {text}
          </p>
        </a>
      </div>
    </>
  );
};

export default Card;
