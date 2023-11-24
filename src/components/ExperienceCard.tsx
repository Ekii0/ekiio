import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <motion.img
        src={urlFor(experience?.companyImage).url()}
        alt=""
        className="h-32 w-32 rounded-lg object-fit object-center xl:h-[200px] xl:w-[200px]"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      />

      <div className="px-0 md:px-10">
        <h4 className=" text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl">{experience?.company}</p>
        <div className="flex space-x-2 my-4">
          {experience?.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology.image).url()}
              alt=""
            />
          ))}
        </div>
        <p className="uppercase px-5 text-gray-300 my-8">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}{" "}
        </p>

        <ul className="list-disc space-y-4 text-lg h-80 max-w-96 pr-5 overflow-y-scroll scrollbar-thin scrollbar-track-gray400/20 scrollbar-thumb-[#F7AB0A]/80">
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
