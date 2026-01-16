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
        className="pointer-events-none fixed left-1/2 top-0 h-[4.5rem] w-full -translate-x-1/2 rounded-none border border-white/40 bg-white/30 shadow-[0_8px_30px_rgba(31,41,55,0.12)] backdrop-blur-md dark:border-white/20 dark:bg-white/10 sm:top-6 sm:h-[3.25rem] sm:w-[41rem] sm:rounded-full"
        aria-hidden="true"
      ></div>
      <nav className="fixed left-1/2 top-[0.15rem] z-[1000] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-600 dark:text-gray-200 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <li
              key={link.hash}
              className="relative flex h-3/4 items-center justify-center"
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-2 transition hover:text-gray-950 dark:hover:text-white",
                  {
                    "text-gray-950 dark:text-white":
                      activeSection === link.name,
                  },
                )}
                href={link.hash}
                onClick={(event) => {
                  event.preventDefault();
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                  const target = document.querySelector(link.hash);
                  if (!target) return;
                  const rect = target.getBoundingClientRect();
                  const targetTop = rect.top + window.scrollY;
                  const offset = window.innerHeight / 2 - rect.height / 2;
                  window.scrollTo({
                    top: targetTop - offset,
                    behavior: "smooth",
                  });
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <span className="dark:bg-white/15 absolute inset-0 -z-10 rounded-full border border-white/40 bg-white/40 backdrop-blur-sm dark:border-white/20"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
