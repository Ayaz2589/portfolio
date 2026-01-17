"use client";

import React, { useRef } from "react";
import { useSectionInView } from "@/hooks";
import { SectionHeading } from "@/components";
import { motion, useScroll, useTransform } from "framer-motion";

export default function UserExperience() {
  const { ref: sectionRef } = useSectionInView({
    sectionName: "UX/UI",
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
    "I successfully completed an 8-week UX/UI immersive program at BrainStation, focusing on mastering the fundamentals of product design. The course covered key aspects, including user research, wireframing, prototyping, and usability testing. The hands-on and collaborative learning environment provided practical insights, equipping me with the skills to create user-centered digital experiences. This experience has not only enhanced my proficiency in UX/UI but has also prepared me for impactful contributions in the dynamic field of digital design.";

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
      id="uxui"
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
          <SectionHeading>UX/UI</SectionHeading>
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

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: words.length * 0.05 + 0.5 },
            },
          }}
        >
          <a
            href="https://www.figma.com/proto/YHKLRhhrPw9K2L2Rs2M92Y/Property-Pal---Presentation?page-id=0%3A1&type=design&node-id=76-1150&viewport=10136%2C7619%2C1.15&t=5L2OkM3D2eXDdgfV-1&scaling=min-zoom&starting-point-node-id=76%3A1150"
            target="_blank"
            className="mt-10 inline-block"
          >
            <button className="active:scale-101 disabled:bg-opacity-65 group flex h-[3rem] items-center justify-center gap-2 rounded-full bg-white/20 px-8 text-white border border-white/40 outline-none transition-all duration-300 hover:scale-105 hover:bg-white/30 focus:scale-110 disabled:scale-100 backdrop-blur-sm">
              View Case Study
            </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
