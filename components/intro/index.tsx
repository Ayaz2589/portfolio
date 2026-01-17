"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView, useActiveSection } from "@/hooks";
import { GlassButton, RoundGlassButton } from "@/components";

export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSection();
  const { ref: sectionRef } = useSectionInView({ sectionName: "Home" });

  const divRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

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
      className="relative flex h-screen w-full items-center justify-center text-center"
      id="home"
    >
      <motion.div
        style={{ y, opacity, scale }}
        className="w-full max-w-[50rem] px-4"
      >
        <div className="flex flex-col items-center">
          <Image
            src="/picture.png"
            alt="Ayaz's profile picture"
            height={192}
            width={192}
            priority={true}
            className="h-24 w-24 rounded-full border-[0.25rem] border-white object-cover shadow-xl"
          />
          <h1 className="mb-8 mt-6 text-2xl font-medium !leading-[1.5] sm:text-4xl">
            <span className="font-bold">Hello, I'm Ayaz.</span> I'm a{" "}
            <span className="font-bold">software engineer</span> with{" "}
            <span className="font-bold">10 years</span> of experience. I enjoy
            building <span className="italic">sites & apps</span>. My focus is{" "}
            <span className="underline">React</span>.
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 text-lg font-medium sm:flex-row">
          <GlassButton
            as="a"
            href="#contact"
            onClick={(event) => {
              event.preventDefault();
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
              const target = document.querySelector("#contact");
              if (target) {
                const elementRect = target.getBoundingClientRect();
                const absoluteElementTop =
                  elementRect.top + window.pageYOffset;
                const middle =
                  absoluteElementTop -
                  window.innerHeight / 2 +
                  elementRect.height / 2;

                window.scrollTo({
                  top: middle + 50,
                  behavior: "smooth",
                });
              }
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-60 transition group-hover:translate-x-1" />
          </GlassButton>
          <GlassButton as="a" href="/ayaz_resume_full_2024.pdf" download>
            Download CV{" "}
            <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
          </GlassButton>
          <RoundGlassButton
            as="a"
            href="https://www.linkedin.com/in/ayaz2589/"
            target="_blank"
            className="text-gray-700 hover:text-gray-950"
            aria-label="LinkedIn"
          >
            <BsLinkedin />
          </RoundGlassButton>
          <RoundGlassButton
            as="a"
            href="https://github.com/Ayaz2589"
            target="_blank"
            className="text-[1.35rem] text-gray-700 hover:text-gray-950"
            aria-label="GitHub"
          >
            <FaGithubSquare />
          </RoundGlassButton>
        </div>
      </motion.div>
    </section>
  );
}
