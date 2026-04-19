// src/components/sections/LanguageSection.jsx
"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useStore } from "@/store/useStore";
import { SectionReveal } from "@/components/effects/SectionReveal";
import { Globe2, Languages, Sparkles, BadgeCheck } from "lucide-react";

const proficiencyMap = {
  Native:       { level: 5, label: "Native"       },
  Fluent:       { level: 4, label: "Fluent"        },
  Professional: { level: 3, label: "Professional"  },
  Intermediate: { level: 2, label: "Intermediate"  },
  Beginner:     { level: 1, label: "Beginner"      },
};

function getProficiency(prof = "") {
  const found = Object.entries(proficiencyMap).find(([key]) =>
    prof.toLowerCase().includes(key.toLowerCase())
  );
  return found ? found[1] : { level: 3, label: prof || "Proficient" };
}

function getInitials(name = "") {
  return name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase();
}

function LanguageStat({ lang, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const proficiency = getProficiency(lang.proficiency);
  const initials = getInitials(lang.name);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5, type: "spring", stiffness: 200 }}
    >
      <motion.div
        className="group relative rounded-2xl border border-border/30 p-5 overflow-hidden cursor-default
                   hover:border-primary/40 transition-all duration-500"
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Hover glow */}
        <div className="absolute inset-0 bg-primary/[0.03] opacity-0 group-hover:opacity-100
                        transition-opacity duration-500" />

        {/* BG initials watermark */}
        <div className="absolute -bottom-2 -right-1 text-[72px] font-black leading-none
                        text-primary/[0.04] select-none pointer-events-none">
          {initials}
        </div>

        <div className="relative z-10">
          {/* Top row */}
          <div className="flex items-center justify-between mb-4">
            <div className="h-10 w-10 rounded-xl border border-primary/20
                            flex items-center justify-center text-sm font-black text-primary
                            group-hover:bg-primary group-hover:text-primary-foreground
                            group-hover:border-primary transition-all duration-300">
              {initials}
            </div>

            <span className="inline-flex items-center gap-1 rounded-full border border-primary/20
                             bg-primary/[0.06] px-2.5 py-1 text-[9px] font-black uppercase
                             tracking-[0.15em] text-primary">
              <BadgeCheck className="h-2.5 w-2.5" />
              {proficiency.label}
            </span>
          </div>

          {/* Language name */}
          <h3 className="text-xl font-black text-foreground mb-3
                         group-hover:text-primary transition-colors duration-300">
            {lang.name}
          </h3>

          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.span
                key={i}
                className={`rounded-full transition-all duration-300 ${
                  i < proficiency.level
                    ? "h-2.5 w-2.5 bg-primary shadow-sm shadow-primary/30"
                    : "h-2 w-2 bg-primary/15"
                }`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.08 + i * 0.06, type: "spring", stiffness: 300 }}
              />
            ))}
            <span className="ml-2 text-[10px] font-black text-muted-foreground/40 tabular-nums">
              {proficiency.level}/5
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function LanguageSection() {
  const { languages, fetchLanguages, isLoadingLanguages } = useStore();

  useEffect(() => { fetchLanguages(); }, [fetchLanguages]);

  return (
    <section id="languages" className="relative py-24 md:py-32 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-dot opacity-[0.10] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 h-[420px] w-[420px] rounded-full
                      bg-primary/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <SectionReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/[0.06]
                            border border-primary/20 px-4 py-1.5 mb-5">
              <Languages className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-bold text-primary tracking-wide">
                {languages.length} Languages
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
              Beyond <span className="gradient-text">Code</span>
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              The languages I speak to connect and collaborate across cultures.
            </p>
          </div>
        </SectionReveal>

        {/* Loading */}
        {isLoadingLanguages ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl border border-border/30 p-5 h-36">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 rounded-xl shimmer-bg" />
                  <div className="h-6 w-20 rounded-full shimmer-bg" />
                </div>
                <div className="h-5 w-24 rounded shimmer-bg mb-3" />
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4, 5].map((j) => (
                    <div key={j} className="h-2.5 w-2.5 rounded-full shimmer-bg" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : languages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {languages.map((lang, i) => (
              <LanguageStat key={lang._id} lang={lang} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Globe2 className="h-10 w-10 mx-auto text-muted-foreground/20 mb-3" />
            <p className="text-sm text-muted-foreground">No languages added yet.</p>
          </div>
        )}

        {/* Bottom */}
        <SectionReveal>
          <div className="flex items-center justify-center gap-3 mt-16 opacity-30">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}