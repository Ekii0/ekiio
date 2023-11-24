import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <div className="h-screen flex flex-col text-center md:text-left md:flex-row relative max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        src={urlFor(pageInfo?.profilePic).url()}
        alt="about_picture"
        className="-mb-28 md:mb-0 flex-shrink-0 w-40 h-40 object-cover rounded-full md:rounded-xl md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        initial={{
          x: -200,
          opacity: 0,
          scale: 0.5,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
      />

      <motion.div
        className="space-y-10 px-0 md:mt-0 md:px-10"
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <h4 className="uppercase tracking-[3px] text-gray-500 text-xl md:text-4xl font-semibold">
          So, who is{" "}
          <span className="underline decoration-[#F7AB0A]/50">this</span> guy?
        </h4>
        <p className="text-sm pr-5 max-h-[300px] md:max-h-[600px] overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
          {pageInfo?.backgroundInformation}
        </p>
      </motion.div>
    </div>
  );
};

export default About;
