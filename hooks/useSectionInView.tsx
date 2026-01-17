"use client";

import { useInView } from "react-intersection-observer";
import { ActiveSectionType } from "@/context";

type Props = {
  sectionName: ActiveSectionType;
  threshold?: number;
};

export default function useSectionInView({
  sectionName: _sectionName,
  threshold = 0.5,
}: Props) {
  const { ref } = useInView({
    threshold,
  });
  return { ref };
}
