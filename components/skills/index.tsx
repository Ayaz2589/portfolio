"use client";

import React from "react";
import { skills } from "@/lib/data";
import { SectionHeading } from "@/components";
import { useSectionInView } from "@/hooks";

export default function Skills() {
  const { ref } = useSectionInView({ sectionName: "Skills", threshold: 0.1 });
  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skills.map((skill, index) => (
          <li key={index} className="bg-white/70 rounded-xl px-5 py-3">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
