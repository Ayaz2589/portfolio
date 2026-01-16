"use client";

import React from "react";
import Image from "next/image";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView, useActiveSection } from "@/hooks";
import { GlassButton } from "@/components";

export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSection();
  const { ref } = useSectionInView({ sectionName: "Home" });

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28"
      id="home"
    >
      <div className="flex items-center justify-center flex-col">
        <div className="my-10">
          <Image
            src="/picture.png"
            alt="Ayaz's profile picture"
            height={192}
            width={192}
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-[0.25rem] border-white shadow-xl"
          />
        </div>

        <h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
          <span className="font-bold">Hello, I'm Ayaz.</span> I'm a{" "}
          <span className="font-bold">software engineer</span> with{" "}
          <span className="font-bold">9+ years</span> of experience. I enjoy
          building <span className="italic">sites & apps</span>. My focus is{" "}
          <span className="underline">React</span>.
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium">
        <GlassButton
          as="a"
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-60 group-hover:translate-x-1 transition" />
        </GlassButton>
        <GlassButton as="a" href="/ayaz_resume_full_2024.pdf" download>
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </GlassButton>
        <GlassButton
          as="a"
          href="https://www.linkedin.com/in/ayaz2589/"
          target="_blank"
          className="h-12 w-12 p-0 text-gray-700 hover:text-gray-950"
          aria-label="LinkedIn"
        >
          <BsLinkedin />
        </GlassButton>
        <GlassButton
          as="a"
          href="https://github.com/Ayaz2589"
          target="_blank"
          className="h-12 w-12 p-0 text-[1.35rem] text-gray-700 hover:text-gray-950"
          aria-label="GitHub"
        >
          <FaGithubSquare />
        </GlassButton>
      </div>
    </section>
  );
}
