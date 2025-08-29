"use client";

import { experiences } from "@/data";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaUserTie } from "react-icons/fa";

const Experience = () => {
  const getTypeColor = (type) => {
    switch (type) {
      case "work":
        return "from-blue-500 to-purple-600";
      case "education":
        return "from-green-500 to-teal-600";
      case "internship":
        return "from-orange-500 to-red-600";
      default:
        return "from-blue-500 to-purple-600";
    }
  };

  return (
    <div className="py-20" id="experience">
      <h1 className="heading text-center">
        My <span className="text-purple">Experience</span> Journey
      </h1>

      <div className="w-full mt-12 relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple via-blue-500 to-purple rounded-full opacity-30 hidden md:block"></div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center w-full mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0
                    ? "md:pr-8 md:text-right"
                    : "md:pl-8 md:text-left"
                } text-center md:text-inherit`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-black-100 p-6 rounded-2xl border border-white/[0.1] shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`flex items-center gap-3 mb-3 ${
                      index % 2 === 0
                        ? "md:justify-end justify-center"
                        : "md:justify-start justify-center"
                    }`}
                  >
                    <div
                      className={`rounded-lg bg-gradient-to-r ${getTypeColor(
                        experience.type
                      )} text-white flex items-center justify-center`}
                    >
                      <img src={experience.img} className="w-10 h-10" />
                    </div>
                    <span className="text-sm text-purple font-medium capitalize">
                      {experience.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {experience.title}
                  </h3>

                  <h4 className="text-lg text-purple mb-2">
                    {experience.company}
                  </h4>

                  <p className="text-sm text-white-200 mb-3">
                    {experience.duration}
                  </p>

                  <p className="text-white-100 mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  <div
                    className={`flex flex-wrap gap-2 ${
                      index % 2 === 0
                        ? "md:justify-end justify-center"
                        : "md:justify-start justify-center"
                    }`}
                  >
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-purple/20 text-purple rounded-full border border-purple/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Timeline dot */}
              <div className="hidden md:flex w-2/12 justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  className={`w-6 h-6 rounded-full bg-gradient-to-r ${getTypeColor(
                    experience.type
                  )} border-4 border-black-100 shadow-lg z-10`}
                ></motion.div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
