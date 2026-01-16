"use client";

import React, { useRef } from "react";
import { GlassCard, SectionHeading } from "@/components";
import { useSectionInView } from "@/hooks";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutMe() {
  const { ref: sectionRef } = useSectionInView({
    sectionName: "About",
    threshold: 0.5,
  });
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);

  return (
    <section
      ref={(node) => {
        if (node) {
          // @ts-ignore
          sectionRef(node);
          // @ts-ignore
          containerRef.current = node;
        }
      }}
      id="about"
      className="flex h-screen w-full snap-start snap-always items-center justify-start px-4 scroll-mt-28 sm:px-12"
    >
      <motion.div style={{ opacity, y }} className="w-full max-w-6xl">
        <GlassCard className="max-w-[42rem] text-left leading-7 sm:leading-8">
          <SectionHeading>About me</SectionHeading>
          <div className="text-gray-800 dark:text-white/80">
            <p className="mb-4">
              After graduating with a degree in{" "}
              <span className="font-medium">Management Information Systems</span>{" "}
              and taking web development courses at university, I decided to
              pursue my passion for programming and focus on{" "}
              <span className="font-medium">full-stack web development</span>.
              My favorite part of programming is the problem-solving aspect - I
              love the feeling of finally figuring out a solution to a
              challenging problem. My core stack includes{" "}
              <span className="font-medium">
                React, Next.js, Node.js, and TypeScript
              </span>
              .
            </p>
            <p>
              During my tenure as a programmer, I've had the opportunity to work
              on both large distributed teams and smaller startup teams. My
              experience includes building backend services such as large-scale
              identity systems, as well as developing client-side application
              components and user flows.
            </p>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
}
