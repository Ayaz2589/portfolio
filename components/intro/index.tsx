"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView, useActiveSection } from "@/hooks";

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
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
          className="my-10"
        >
          <Image
            src="/picture.png"
            alt="Ayaz's profile picture"
            height={192}
            width={192}
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-[0.25rem] border-white shadow-xl"
          />
        </motion.div>

        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hello, I'm Ayaz.</span> I'm a{" "}
          <span className="font-bold">Software Engineer</span> with{" "}
          <span className="font-bold">9+ years</span> of experience. I enjoy
          building <span className="italic">sites & apps</span>. My focus is{" "}
          <span className="underline">React</span>.
        </motion.h1>
      </div>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          deplay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-60 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer border border-black/10"
          href="/ayaz_resume_full_2024.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
          href="https://www.linkedin.com/in/ayaz2589/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-105 hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
          href="https://github.com/Ayaz2589"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
