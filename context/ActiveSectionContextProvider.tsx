"use client";

import React, { useEffect, useRef, useState, createContext } from "react";
import { links } from "@/lib";

export type ActiveSectionType = (typeof links)[number]["name"] | null;

type ActiveSectionContextType = {
  activeSection: ActiveSectionType;
  setActiveSection: React.Dispatch<React.SetStateAction<ActiveSectionType>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<ActiveSectionType>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  const ratiosRef = useRef(new Map<ActiveSectionType, number>());

  useEffect(() => {
    if (typeof window === "undefined") return;

    ratiosRef.current.clear();

    const sectionElements = links
      .map((link) => document.querySelector(link.hash))
      .filter(Boolean) as HTMLElement[];

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() - timeOfLastClick < 1000) return;

        for (const entry of entries) {
          const id = `#${(entry.target as HTMLElement).id}`;
          const link = links.find((item) => item.hash === id);
          if (!link) continue;
          ratiosRef.current.set(
            link.name,
            entry.isIntersecting ? entry.intersectionRatio : 0
          );
        }

        let nextSection: ActiveSectionType = null;
        let maxRatio = 0;
        ratiosRef.current.forEach((ratio, name) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            nextSection = name;
          }
        });

        if (nextSection) {
          setActiveSection((prev) =>
            prev === nextSection ? prev : nextSection
          );
        }
      },
      {
        rootMargin: "-30% 0px -30% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [setActiveSection, timeOfLastClick]);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}
