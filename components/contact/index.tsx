"use client";

import React from "react";
import { SectionHeading, SubmitBtn, GlassCard } from "@/components";
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
      className="flex min-h-screen w-full flex-col items-center justify-center scroll-mt-28 px-4 text-center"
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
      <GlassCard className="w-full max-w-[33rem] p-6 sm:p-12">
        <SectionHeading>Contact me</SectionHeading>

        <p className="text-gray-700 -mt-6 dark:text-white/80">
          Please contact me directly at{" "}
          <a className="underline" href="mailto:ayaz2589@gmail.com">
            ayaz2589@gmail.com
          </a>{" "}
          or through this form.
        </p>

        <form
          className="mt-10 flex flex-col dark:text-black"
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
            className="h-14 w-full px-4 rounded-xl borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="h-52 w-full my-3 rounded-xl borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <SubmitBtn />
        </form>
      </GlassCard>
    </motion.section>
  );
}
