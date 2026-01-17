"use client";

import React, { useRef } from "react";
import { skills } from "@/lib/data";
import { SectionHeading } from "@/components";
import { useSectionInView } from "@/hooks";
import { motion, useScroll, useTransform } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * index,
      type: "spring",
      stiffness: 40,
      damping: 10,
    },
  }),
};

export default function Skills() {
  const { ref: sectionRef } = useSectionInView({
    sectionName: "Skills",
    threshold: 0.1,
  });

  const divRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section
      ref={(node) => {
        if (node) {
          // @ts-ignore
          sectionRef(node);
          // @ts-ignore
          divRef.current = node;
        }
      }}
      id="skills"
      className="flex h-screen w-full items-center justify-center px-4 scroll-mt-28"
    >
      <motion.div
        style={{ opacity, scale }}
        className="w-full max-w-[53rem] text-center mx-auto"
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
      </motion.div>
    </section>
  );
}
