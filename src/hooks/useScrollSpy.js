// src/hooks/useScrollSpy.js
"use client";
import { useEffect } from "react";
import { useStore } from "@/store/useStore";

export function useScrollSpy(sectionIds) {
  const setActiveSection = useStore((s) => s.setActiveSection);

  useEffect(() => {
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds, setActiveSection]);
}