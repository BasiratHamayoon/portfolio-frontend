// src/components/sections/SkillsSection.jsx
"use client";
import { useEffect, useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useStore } from "@/store/useStore";
import { SectionReveal } from "@/components/effects/SectionReveal";
import { Cpu, Sparkles } from "lucide-react";

/* ═══════ SKILL PILL ═══════ */
function SkillPill({ skill, index, total }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  // Stagger size variation for visual rhythm
  const isLarge = index % 5 === 0;
  const isMedium = index % 3 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.02,
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
    >
      <motion.span
        className={`group relative inline-flex items-center gap-2 rounded-full
                   cursor-default border border-primary/20 bg-primary/[0.04]
                   text-foreground transition-all duration-400
                   hover:bg-primary hover:text-primary-foreground hover:border-primary
                   hover:shadow-xl hover:shadow-primary/20
                   ${isLarge ? "px-6 py-3 text-sm" : isMedium ? "px-5 py-2.5 text-[13px]" : "px-4 py-2 text-xs"} 
                   font-semibold`}
        whileHover={{ scale: 1.12, y: -5, zIndex: 20 }}
        whileTap={{ scale: 0.92 }}
      >
        {/* Dot */}
        <span className="h-1.5 w-1.5 rounded-full bg-primary
                         group-hover:bg-primary-foreground group-hover:shadow-sm
                         transition-colors duration-300 shrink-0" />

        {skill.name}

        {/* Shine sweep */}
        <span className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent
                          -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </span>
      </motion.span>
    </motion.div>
  );
}

/* ═══════ ORBIT DECORATION ═══════ */
function OrbitRing({ size, duration, dotSize, offset }) {
  return (
    <motion.div
      className="absolute rounded-full border border-primary/[0.06]"
      style={{
        width: size,
        height: size,
        top: "50%",
        left: "50%",
        marginTop: -size / 2,
        marginLeft: -size / 2,
      }}
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <div
        className="absolute rounded-full bg-primary/30"
        style={{
          width: dotSize,
          height: dotSize,
          top: offset,
          left: "50%",
          marginLeft: -dotSize / 2,
        }}
      />
    </motion.div>
  );
}

/* ═══════ MAIN COMPONENT ═══════ */
export function SkillsSection() {
  const { skills, fetchSkills, isLoading } = useStore();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => { fetchSkills(); }, [fetchSkills]);

  // Shuffle skills for organic feel but keep stable
  const displaySkills = useMemo(() => {
    if (!skills.length) return [];
    // Interleave from different categories for mixed layout
    const cats = {};
    skills.forEach((s) => {
      (cats[s.category] = cats[s.category] || []).push(s);
    });
    const result = [];
    const arrays = Object.values(cats);
    const maxLen = Math.max(...arrays.map((a) => a.length));
    for (let i = 0; i < maxLen; i++) {
      arrays.forEach((arr) => {
        if (arr[i]) result.push(arr[i]);
      });
    }
    return result;
  }, [skills]);

  return (
    <section id="skills" className="relative py-28 md:py-36 overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-[150px]" />

        {/* Orbit rings decoration */}
        <div className="absolute inset-0 flex items-center justify-center opacity-40 hidden lg:block">
          <OrbitRing size={500} duration={35} dotSize={6} offset={-3} />
          <OrbitRing size={700} duration={50} dotSize={4} offset={-2} />
          <OrbitRing size={900} duration={70} dotSize={3} offset={-1.5} />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <SectionReveal>
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-primary/[0.06]
                          border border-primary/20 px-4 py-1.5 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Cpu className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-bold text-primary tracking-wide">
                {skills.length} Technologies & Growing
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-5">
              My <span className="gradient-text">Arsenal</span>
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              Every tool I reach for when building something meaningful.
            </p>
          </div>
        </SectionReveal>

        {/* ── Skills Cloud ── */}
        <div ref={containerRef}>
          {isLoading ? (
            <div className="flex flex-wrap justify-center gap-3">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-full shimmer-bg"
                  style={{
                    width: `${65 + Math.random() * 55}px`,
                    height: `${32 + (i % 3) * 6}px`,
                  }}
                />
              ))}
            </div>
          ) : (
            <motion.div
              className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {displaySkills.map((skill, i) => (
                <SkillPill
                  key={skill._id}
                  skill={skill}
                  index={i}
                  total={displaySkills.length}
                />
              ))}
            </motion.div>
          )}

          {/* Empty */}
          {!isLoading && skills.length === 0 && (
            <div className="text-center py-16">
              <Cpu className="h-10 w-10 mx-auto text-muted-foreground/20 mb-3" />
              <p className="text-sm text-muted-foreground">No skills added yet.</p>
            </div>
          )}
        </div>

        {/* ── Bottom accent ── */}
        <SectionReveal>
          <div className="flex items-center justify-center gap-3 mt-20 opacity-30">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}