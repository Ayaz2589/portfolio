"use client";

import React from "react";
import { SectionHeading, GlassCard } from "@/components";
import { useSectionInView } from "@/hooks";
import { experiencesData } from "@/lib";
import { motion } from "framer-motion";

const leftAlign =
  "mb-0 flex justify-between flex-row-reverse items-center w-full left-timeline";

const rightAlign = "flex justify-between items-center w-full right-timeline";

export default function Experience() {
  const { ref } = useSectionInView({
    sectionName: "Experience",
    threshold: 0.2,
  });
  return (
    <section
      ref={ref}
      id="experience"
      className="flex min-h-screen w-full scroll-mt-28 flex-col items-center justify-center py-24 text-center sm:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionHeading>Experience</SectionHeading>
      </motion.div>
      <div className="container mx-auto h-full w-full">
        <div className="wrap relative h-full overflow-hidden p-4 sm:p-10">
          <div
            className="absolute hidden h-full w-1 rounded-full bg-white/30 sm:block"
            style={{ left: "49.9%" }}
          ></div>
          {experiencesData.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className={index % 2 === 0 ? leftAlign : rightAlign}
            >
              <TimelineCard value={data} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ value }: { value: any }) {
  return (
    <>
      <div className="order-1 hidden sm:block sm:w-5/12"></div>
      <div className="z-20 order-1 hidden h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/30 shadow-xl backdrop-blur-md sm:flex">
        <h1 className="mx-auto text-lg font-semibold text-white">
          {value.icon}
        </h1>
      </div>
      <GlassCard className="order-1 mb-4 min-h-[10rem] w-full p-6 text-left text-white sm:mb-0 sm:w-5/12 sm:p-6">
        <h3 className="text-lg font-bold text-white">{value.title}</h3>
        <h4 className="mb-2 text-sm font-medium text-white/90">
          {value.company}
        </h4>
        <p className="text-xs text-white/80">{value.location}</p>
        <p className="text-xs text-white/80">{value.date}</p>
        <hr className="my-3 h-[1px] border-t-0 bg-white/40 opacity-100" />
        <p className="py-3 text-sm leading-6 text-white/90">
          {value.description}
        </p>
      </GlassCard>
    </>
  );
}
