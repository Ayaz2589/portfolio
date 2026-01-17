"use client";

import React from "react";
import { skills } from "@/lib/data";
import { SectionHeading } from "@/components";
import { useSectionInView } from "@/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView({ sectionName: "Skills", threshold: 0.1 });
  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 mx-auto"
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="bg-white/25 backdrop-blur-md border border-white/40 rounded-xl px-5 py-3 text-gray-900 shadow-[0_8px_30px_rgba(31,41,55,0.1)] dark:bg-white/10 dark:border-white/20 dark:text-white/80"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
