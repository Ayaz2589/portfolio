"use client";

import React, { useRef } from "react";
import { SectionHeading } from "@/components";
import { useSectionInView } from "@/hooks";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutMe() {
  const { ref: sectionRef } = useSectionInView({
    sectionName: "About",
    threshold: 0.5,
  });

  const divRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  const text =
    "After graduating with a degree in Management Information Systems and taking web development courses at university, I decided to pursue my passion for programming and focus on full-stack web development. My favorite part of programming is the problem-solving aspect - I love the feeling of finally figuring out a solution to a challenging problem. My core stack includes React, Next.js, Node.js, and TypeScript. During my tenure as a programmer, I've had the opportunity to work on both large distributed teams and smaller startup teams. My experience includes building backend services such as large-scale identity systems, as well as developing client-side application components and user flows.";

  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

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
      id="about"
      className="flex h-screen w-full items-center justify-center px-4 scroll-mt-28"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{ y, opacity, scale }}
        className="w-full max-w-[60rem] text-center"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <SectionHeading>About me</SectionHeading>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex flex-wrap justify-center text-lg leading-snug text-gray-50 md:text-2xl md:leading-relaxed"
        >
          {words.map((word, index) => (
            <motion.span
              variants={wordVariants}
              key={index}
              className="mr-1 mb-1 inline-block md:mr-2 md:mb-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
