"use client";

import React, { useState, useEffect } from "react";
import { links } from "@/lib";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSection } from "@/hooks";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { RoundGlassButton } from "@/components";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu on resize if screen becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[1000] sm:hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={isOpen ? "open" : "closed"}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          <RoundGlassButton
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="h-14 w-14 shadow-2xl !bg-white/40 backdrop-blur-lg border-white/50"
          >
            {isOpen ? (
              <HiX className="text-3xl text-gray-800 dark:text-white" />
            ) : (
              <HiMenu className="text-3xl text-gray-800 dark:text-white" />
            )}
          </RoundGlassButton>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[-1] bg-black/10 backdrop-blur-[2px]"
            />

            {/* Menu Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute bottom-20 right-0 w-[12rem] overflow-hidden rounded-[2rem] border border-white/40 bg-white/40 p-3 shadow-[0_8px_32px_rgba(31,41,55,0.2)] backdrop-blur-xl dark:border-white/20 dark:bg-white/10"
            >
              <ul className="flex flex-col gap-2">
                {links.map((link, index) => (
                  <motion.li
                    key={link.hash}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.hash}
                      onClick={(event) => {
                        event.preventDefault();
                        setActiveSection(link.name);
                        setTimeOfLastClick(Date.now());
                        setIsOpen(false);
                        const target = document.querySelector(link.hash);
                        if (!target) return;

                        const elementRect = target.getBoundingClientRect();
                        const absoluteElementTop =
                          elementRect.top + window.pageYOffset;
                        const middle =
                          absoluteElementTop -
                          window.innerHeight / 2 +
                          elementRect.height / 2;

                        window.scrollTo({
                          top: link.name === "Experience" ? absoluteElementTop + 20 : middle + 50,
                          behavior: "smooth",
                        });
                      }}
                      className={clsx(
                        "flex w-full items-center justify-center rounded-2xl px-4 py-3 text-[0.95rem] font-medium transition-all active:scale-95",
                        {
                          "bg-white/60 text-gray-950 shadow-sm dark:bg-white/20 dark:text-white":
                            activeSection === link.name,
                          "text-gray-700 hover:bg-white/20 dark:text-gray-200 dark:hover:bg-white/5":
                            activeSection !== link.name,
                        }
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
