"use client";

import React from "react";
import { links } from "@/lib";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSection } from "@/hooks";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();
  return (
    <header className="relative z-[999]">
      <div
        className="pointer-events-none fixed left-1/2 top-0 h-[4.5rem] w-full -translate-x-1/2 rounded-none border border-white border-opacity-40 bg-white bg-opacity-60 shadow-lg shadow-black/[0.03] backdrop-blur-[0.3rem] dark:bg-opacity-75 sm:top-6 sm:h-[3.25rem] sm:w-[41rem] sm:rounded-full"
        aria-hidden="true"
      ></div>
      <nav className="fixed left-1/2 top-[0.15rem] z-[1000] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <li
              key={link.hash}
              className="relative flex h-3/4 items-center justify-center"
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 transition hover:text-gray-950",
                  { "text-gray-950": activeSection === link.name },
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-gray-200"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
