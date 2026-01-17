"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";
import { GlassButton } from "@/components";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <GlassButton
      type="submit"
      disabled={pending}
      className="mt-3 h-[3rem] w-[8rem] self-center"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-gray-900 dark:border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </GlassButton>
  );
}
