import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../../typings";

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
            className="hover:scale-110 transition-all duration-200 ease-in-out"
          />
        ))}
        {/* <SocialIcon
          url="https://www.linkedin.com/in/ekiio/"
          fgColor="gray"
          bgColor="transparent"
          className="hover:scale-110 transition-all duration-200 ease-in-out"
        />
        <SocialIcon
          url="https://github.com/ekiio"
          fgColor="gray"
          bgColor="transparent"
          className="hover:scale-110 transition-all duration-200 ease-in-out"
        />
        <SocialIcon
          url="https://twitter.com/ekiio"
          fgColor="gray"
          bgColor="transparent"
          className="hover:scale-110 transition-all duration-200 ease-in-out"
        /> */}
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          href="mailto:ekiio@protonmail.com"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
