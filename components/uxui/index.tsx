"use client";

import React from "react";
import { useSectionInView } from "@/hooks";
import { Card, SectionHeading } from "@/components";

export default function UserExperience() {
  const { ref } = useSectionInView({ sectionName: "UX/UI", threshold: 0.1 });
  return (
    <section ref={ref} id="uxui" className="mt-10 scroll-mt-28">
      <div className="container mb-28 max-w-[45rem] px-4 sm:mb-40 sm:px-6 lg:px-8">
        <Card className="text-center leading-8 sm:leading-10">
          <div className="py-12 md:py-10">
            <div className="mx-auto max-w-3xl text-center">
              <SectionHeading>UX/UI</SectionHeading>
              <p>
                I successfully completed an 8-week UX/UI immersive program at
                BrainStation, focusing on mastering the fundamentals of product
                design. The course covered key aspects, including user research,
                wireframing, prototyping, and usability testing. The hands-on
                and collaborative learning environment provided practical
                insights, equipping me with the skills to create user-centered
                digital experiences. This experience has not only enhanced my
                proficiency in UX/UI but has also prepared me for impactful
                contributions in the dynamic field of digital design.
              </p>
            </div>
            <a
              href="https://www.figma.com/proto/YHKLRhhrPw9K2L2Rs2M92Y/Property-Pal---Presentation?page-id=0%3A1&type=design&node-id=76-1150&viewport=10136%2C7619%2C1.15&t=5L2OkM3D2eXDdgfV-1&scaling=min-zoom&starting-point-node-id=76%3A1150"
              target="_blank"
            >
              <button className="active:scale-101 disabled:bg-opacity-65 group mt-3 flex h-[3rem] w-full items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline-none transition-all hover:scale-105 hover:bg-gray-950 focus:scale-110 disabled:scale-100 dark:bg-gray-800">
                View Case Study
              </button>
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
}
