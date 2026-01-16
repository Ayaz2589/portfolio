"use client";

import React from "react";
import { GlassCard, SectionHeading } from "@/components";
import { useSectionInView } from "@/hooks";

export default function AboutMe() {
  const { ref } = useSectionInView({ sectionName: "About", threshold: 0.5 });

  return (
    <section ref={ref} id="about" className="scroll-mt-28 px-4 sm:px-12">
      <div className="w-full max-w-6xl">
        <GlassCard className="max-w-[42rem] text-left leading-7 sm:leading-8">
          <SectionHeading>About me</SectionHeading>
          <p className="mb-4">
            After graduating with a degree in{" "}
            <span className="font-medium">Management Information Systems</span>{" "}
            and taking web development courses at university, I decided to
            pursue my passion for programming and focus on{" "}
            <span className="font-medium">full-stack web development</span>. My
            favorite part of programming is the problem-solving aspect - I love
            the feeling of finally figuring out a solution to a challenging
            problem. My core stack includes{" "}
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
        </GlassCard>
      </div>
    </section>
  );
}
