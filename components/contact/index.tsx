"use client";

import React from "react";
import { SectionHeading, SubmitBtn } from "@/components";
import { useSectionInView } from "@/hooks";
import { sendEmail } from "@/server";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function Contact() {
  const { ref } = useSectionInView({ sectionName: "Contact" });

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28 pt-[5rem] mx-auto"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:ayaz2589@gmail.com">
          ayaz2589@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="w-[95%] sm:w-full mt-10 flex flex-col dark:text-black mx-auto"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-xl borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-xl borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
