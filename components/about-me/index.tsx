"use client";

import React from "react";
import { Card, SectionHeading } from "@/components";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks";

export default function AboutMe() {
  const { ref } = useSectionInView({ sectionName: "About", threshold: 0.75 });

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40 sm:leading-10"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <Card>
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
          After graduating with a degree in{" "}
          <span className="font-medium">Management Information Systems</span>{" "}
          and taking web development courses at university, I decided to pursue
          my passion for programming and learned{" "}
          <span className="font-medium">full-stack web development</span>.{" "}
          <span className="italic">My favorite part of programming</span> is the
          problem-solving aspect. I <span className="underline">love</span> the
          feeling of finally figuring out a solution to a problem. My core stack
          is{" "}
          <span className="font-medium">
            React, Next.js, Node.js, and Typescript
          </span>
        </p>
        <p>
          During my tenture as a programmer I had the oportunity to work on
          large <span className="font-medium">distributed teams</span> as well
          as <span className="font-medium">smaller startup teams</span>. My work
          includes building backend services such as large idenity services as
          well as client side application components and flows.
        </p>
      </Card>
    </motion.section>
  );
}
