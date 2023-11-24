import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { PageInfo } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hi, I am ${pageInfo?.name}`,
      "I am a Full-Stack Developer",
      "I live and breathe Web3",
      "Student of Law",
      "Student of Life",
    ],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 50,
    typeSpeed: 100,
  });
  return (
    <div className="h-screen flex flex-col space-y-4 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src={urlFor(pageInfo?.heroImage).url()}
        className="relative rounded-full w-32 h-32 mx-auto object-cover"
        alt="profile_picture"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] text-overflow-ellipsis">
          {/* Fullstack Web Developer &<br />
          Smart Contract Engineer */}
          {pageInfo?.role} &<br />
          Smart Contract Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#work-experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
