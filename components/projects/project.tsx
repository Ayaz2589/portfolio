"use client";

import React from "react";
import { projectsData } from "@/lib";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  imageUrl,
  tags,
  link,
  repository,
}: ProjectProps) {
  return (
    <div className="mb-3 sm:mb-8 last:mb-0">
      <section className="bg-gray-100/60 m-auto max-w-[95%] sm:max-w-[42rem] overflow-hidden sm:pr-8 relative sm:h-[26rem] shadow-sm transition group-even:pl-8 rounded-xl">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
          <h3 className="text-2xl text-left font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap gap-2 sm:mt-auto mt-4">
            {tags.map((tag) => (
              <li
                key={tag}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            {title === "Node Services" ? (
              <button
                type="button"
                className="text-white bg-gray-800  focus:outline-none focus:ring-4 focus:ring-gray-300 text-xs rounded-full px-4 py-2 me-2 mb-2 dark:bg-gray-800 dark:focus:ring-gray-700 dark:border-gray-700"
                disabled
              >
                <div className="flex gap-2 items-center">
                  <p>Service is live</p>
                  <div className="w-[5px] h-[5px] rounded-full bg-green-500"></div>
                </div>
              </button>
            ) : (
              <a href={link} target="_blank">
                <button
                  type="button"
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 text-xs rounded-full px-4 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  View Live App
                </button>
              </a>
            )}
            <a href={repository} target="_blank">
              <button
                type="button"
                className="text-grap-700 bg-gray-200 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 text-xs rounded-full px-4 py-2 me-2 mb-2 border border-gray-200/30 dark:bg-gray-200/30 dark:hover:bg-white dark:focus:ring-gray-700 dark:border-gray-700"
              >
                View Repository
              </button>
            </a>
          </div>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          className="hidden sm:block absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 hover:scale-[1.04] hover:-translate-x-3 hover:translate-y-3 hover:-rotate-6 transition"
        />
      </section>
    </div>
  );
}
