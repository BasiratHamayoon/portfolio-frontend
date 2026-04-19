// src/components/sections/ExperienceSection.jsx
"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useStore } from "@/store/useStore";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionReveal } from "@/components/effects/SectionReveal";
import { Building2, Calendar, MapPin, ChevronRight, Briefcase } from "lucide-react";

export function ExperienceSection() {
  const { experiences, fetchExperiences, isLoadingExperiences } = useStore();

  useEffect(() => { fetchExperiences(); }, [fetchExperiences]);

  const skeletons = [1, 2, 3];

  return (
    <section id="experience" className="section-padding relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-dot opacity-30 pointer-events-none" />

      <div className="container-max">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey and the companies I've had the privilege to work with."
        />

        {isLoadingExperiences ? (
          <div className="space-y-6 max-w-4xl mx-auto">
            {skeletons.map((i) => (
              <div key={i} className="glass rounded-3xl p-8 h-40 shimmer-bg" />
            ))}
          </div>
        ) : (
          <div className="relative max-w-4xl mx-auto">

            {/* Vertical timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px timeline-line hidden sm:block" />

            <div className="space-y-12">
              {experiences.map((exp, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <SectionReveal key={exp._id} delay={i * 0.15} direction={isLeft ? "left" : "right"}>
                    <div className={`relative flex items-start gap-8 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-row`}>

                      {/* Timeline dot */}
                      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-8 z-10 hidden sm:flex">
                        <motion.div
                          className="h-5 w-5 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50"
                          whileInView={{ scale: [0, 1.3, 1] }}
                          transition={{ duration: 0.5, delay: i * 0.15 }}
                        />
                        {exp.endDate.toLowerCase() === "present" && (
                          <div className="absolute inset-0 rounded-full bg-primary animate-pulse-ring" />
                        )}
                      </div>

                      {/* Card */}
                      <motion.div
                        className={`glass rounded-3xl p-8 border border-border/50 card-glow-hover flex-1
                                    ${isLeft ? "md:mr-8" : "md:ml-8"}`}
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl font-black text-foreground">{exp.role}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <Building2 className="h-4 w-4 text-primary" />
                              <span className="text-primary font-bold">{exp.company}</span>
                            </div>
                          </div>

                          <div className="flex flex-col items-end gap-2">
                            <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold border
                              ${exp.endDate.toLowerCase() === "present"
                                ? "bg-green-500/10 text-green-500 border-green-500/20"
                                : "bg-muted text-muted-foreground border-border/50"
                              }`}>
                              {exp.endDate.toLowerCase() === "present" && (
                                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                              )}
                              {exp.endDate.toLowerCase() === "present" ? "Current" : "Completed"}
                            </span>

                            <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                              <Calendar className="h-3.5 w-3.5" />
                              {exp.startDate} — {exp.endDate}
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                          {exp.description}
                        </p>

                        {exp.technologies?.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, j) => (
                              <motion.span
                                key={j}
                                className="tech-tag"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: j * 0.05 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </SectionReveal>
                );
              })}
            </div>

            {/* Empty state */}
            {!isLoadingExperiences && experiences.length === 0 && (
              <div className="text-center py-20 glass rounded-3xl">
                <Briefcase className="h-16 w-16 mx-auto text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground font-semibold">No experience data yet.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}