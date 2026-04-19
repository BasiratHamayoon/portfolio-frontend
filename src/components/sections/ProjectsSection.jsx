// src/components/sections/ProjectSection.jsx
"use client";
import { useEffect, useState, useMemo, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useStore } from "@/store/useStore";
import { SectionReveal } from "@/components/effects/SectionReveal";
import { ExternalLink, Layers, Sparkles, ArrowUpRight, Folder } from "lucide-react";
import { FiGithub } from "react-icons/fi";

function ProjectRow({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.06, duration: 0.5, type: "spring", stiffness: 200 }}
    >
      <motion.div
        className="group relative flex items-center gap-4 rounded-xl border border-border/30
                   px-4 py-3.5 cursor-default transition-all duration-400
                   hover:border-primary/40 h-full"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ y: -3 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Top gradient line */}
        <motion.div
          className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Left — Icon */}
        <motion.div
          className="h-9 w-9 rounded-lg border border-primary/20 flex items-center justify-center
                     text-primary transition-all duration-300 shrink-0
                     group-hover:bg-primary group-hover:text-primary-foreground
                     group-hover:border-primary group-hover:shadow-md group-hover:shadow-primary/20"
          whileHover={{ rotate: -6 }}
        >
          <Folder className="h-4 w-4" />
        </motion.div>

        {/* Center — Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <h3 className="text-sm font-black text-foreground truncate
                           group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <span className="text-[9px] font-black text-muted-foreground/20 tabular-nums shrink-0">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <p className="text-[11px] text-muted-foreground truncate leading-relaxed mb-1.5">
            {project.description}
          </p>

          {/* Tech pills */}
          <div className="flex items-center gap-1 flex-wrap">
            {project.technologies?.slice(0, 3).map((tech, j) => (
              <span
                key={j}
                className="inline-flex items-center gap-0.5 rounded-full px-2 py-0.5
                           text-[8px] font-bold border border-primary/15
                           text-muted-foreground group-hover:border-primary/25
                           group-hover:text-primary transition-all duration-300"
              >
                <span className="h-0.5 w-0.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                {tech}
              </span>
            ))}
            {project.technologies?.length > 3 && (
              <span className="text-[8px] font-bold text-muted-foreground/30">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Right — Links + Arrow */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="flex items-center gap-1 opacity-0 -translate-x-2
                          group-hover:opacity-100 group-hover:translate-x-0
                          transition-all duration-300">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="h-7 w-7 rounded-md border border-border/30 flex items-center justify-center
                           text-muted-foreground hover:text-primary hover:border-primary/30
                           transition-all hover:scale-110"
                onClick={(e) => e.stopPropagation()}
              >
                <FiGithub className="h-3 w-3" />
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="h-7 w-7 rounded-md border border-border/30 flex items-center justify-center
                           text-muted-foreground hover:text-primary hover:border-primary/30
                           transition-all hover:scale-110"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>

          <motion.div
            className="h-6 w-6 rounded-md flex items-center justify-center
                       text-muted-foreground/20 group-hover:text-primary
                       transition-colors duration-300"
            animate={{ x: hovered ? 2 : 0 }}
          >
            <ArrowUpRight className="h-3 w-3" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectSection() {
  const { projects, fetchProjects, isLoadingProjects } = useStore();
  const [filter, setFilter] = useState("All");

  useEffect(() => { fetchProjects(); }, [fetchProjects]);

  const allTechs = useMemo(() => {
    const techs = new Set();
    projects.forEach((p) => p.technologies?.forEach((t) => techs.add(t)));
    return ["All", ...Array.from(techs).slice(0, 8)];
  }, [projects]);

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.technologies?.includes(filter))),
    [projects, filter]
  );

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-dot opacity-[0.12] pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-[500px] h-[500px]
                      bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <SectionReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/[0.06]
                            border border-primary/20 px-4 py-1.5 mb-5">
              <Layers className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-bold text-primary tracking-wide">
                {projects.length} Projects
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              A showcase of what I've built — from concept to deployment.
            </p>
          </div>
        </SectionReveal>

        {/* ── Filter ── */}
        <SectionReveal>
          <div className="flex justify-center mb-10">
            <div className="inline-flex flex-wrap justify-center gap-1.5 p-1.5 rounded-2xl
                            border border-border/30">
              {allTechs.map((tech) => {
                const isActive = filter === tech;
                return (
                  <motion.button
                    key={tech}
                    onClick={() => setFilter(tech)}
                    className={`relative px-4 py-2 rounded-xl text-xs font-bold
                               transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? "text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-primary/[0.04]"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="project-filter"
                        className="absolute inset-0 rounded-xl bg-primary shadow-lg shadow-primary/20"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{tech}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </SectionReveal>

        {/* ── Project Grid — 2 per row ── */}
        {isLoadingProjects ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4 rounded-xl border border-border/30 px-4 py-3.5">
                <div className="h-9 w-9 rounded-lg shimmer-bg shrink-0" />
                <div className="flex-1 space-y-1.5">
                  <div className="h-4 w-36 rounded shimmer-bg" />
                  <div className="h-3 w-full rounded shimmer-bg" />
                  <div className="flex gap-1">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="h-4 w-12 rounded-full shimmer-bg" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
            >
              {filtered.map((project, i) => (
                <ProjectRow key={project._id} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Empty */}
        {!isLoadingProjects && filtered.length === 0 && (
          <div className="text-center py-14">
            <Folder className="h-9 w-9 mx-auto text-muted-foreground/20 mb-3" />
            <p className="text-xs text-muted-foreground">No projects match this filter.</p>
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