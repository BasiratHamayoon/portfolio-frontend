// src/components/sections/AboutSection.jsx
"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useStore } from "@/store/useStore";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { SectionReveal } from "@/components/effects/SectionReveal";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, ExternalLink, Code2, Briefcase, Award, Users,
  GraduationCap, BookOpen, Zap, Target, Trophy, Calendar,
  MapPin, Mail, Phone, Sparkles, BookMarked, Cpu,
} from "lucide-react";
import {
  SiReact, SiNodedotjs, SiMongodb, SiNextdotjs,
  SiTailwindcss, SiExpress, SiJavascript, SiGit,
  SiRedux, SiPostman, SiFigma, SiPython,
} from "react-icons/si";

const techStack = [
  { Icon: SiReact,       name: "React",      },
  { Icon: SiNextdotjs,   name: "Next.js",    },
  { Icon: SiNodedotjs,   name: "Node.js",    },
  { Icon: SiExpress,     name: "Express",    },
  { Icon: SiMongodb,     name: "MongoDB",    },
  { Icon: SiJavascript,  name: "JavaScript", },
  { Icon: SiTailwindcss, name: "Tailwind",   },
  { Icon: SiRedux,       name: "Redux",      },
  { Icon: SiGit,         name: "Git",        },
  { Icon: SiPostman,     name: "Postman",    },
  { Icon: SiFigma,       name: "Figma",      },
  { Icon: SiPython,      name: "Python",     },
];

const stats = [
  { value: 3,  suffix: "+", label: "Years",    sub: "Experience", icon: Briefcase },
  { value: 20, suffix: "+", label: "Projects", sub: "Delivered",  icon: Code2     },
  { value: 14, suffix: "+", label: "Certs",    sub: "Achieved",   icon: Award     },
  { value: 50, suffix: "+", label: "Students", sub: "Mentored",   icon: Users     },
];

const milestones = [
  {
    year: "2025",
    items: [
      { title: "MERN Stack Developer", org: "TriByte Solutions — STP Peshawar", icon: Briefcase, current: true },
      { title: "Web Dev Mentor",       org: "Women Fortune Tech",               icon: Trophy,    current: false },
    ],
  },
  {
    year: "2024",
    items: [
      { title: "Full Stack Training",     org: "Sylani Mass IT Training Center", icon: Zap,    current: false },
      { title: "Web App Development",     org: "NAVTTC — Govt. of Pakistan",     icon: Target, current: false },
    ],
  },
  {
    year: "2022",
    items: [
      { title: "BS Information Technology", org: "Univ. of Agriculture Peshawar", icon: GraduationCap, current: false },
      { title: "Diploma in IT",             org: "Govt. College of Technology",   icon: BookOpen,      current: false },
    ],
  },
  {
    year: "2020",
    items: [
      { title: "FSC Computer Science", org: "Govt. Girls Degree College", icon: BookMarked, current: false },
    ],
  },
];

function BentoItem({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={`relative rounded-3xl overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

export function AboutSection() {
  const { cv, fetchCv } = useStore();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => { fetchCv(); }, [fetchCv]);

  const handleViewCv = () => {
    if (!cv?.resumeUrl) return;
    window.open(cv.resumeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="about" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">

      {/* Parallax BG — visible through transparent cells */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px]
                        bg-primary/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px]
                        bg-primary/[0.03] rounded-full blur-[100px]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Heading ── */}
        <SectionReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/[0.06]
                            border border-primary/20 px-4 py-1.5 mb-5">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-bold text-primary tracking-wide">
                Get To Know Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              The story, the skills, and the journey behind the code.
            </p>
          </div>
        </SectionReveal>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-auto">

          {/* ─── CELL 1: Identity ─── */}
          <BentoItem className="lg:col-span-7 md:col-span-2" delay={0}>
            <div className="relative h-full border border-border/30 p-8 sm:p-10
                            rounded-3xl group hover:border-primary/30 transition-all duration-500">

              <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-bl from-primary/[0.06]
                              to-transparent rounded-bl-[80px] pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="relative">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-primary/50
                                    flex items-center justify-center text-2xl font-black text-primary-foreground
                                    shadow-xl shadow-primary/30">
                      B
                    </div>
                    <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-green-500
                                    border-[3px] border-background flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-foreground">Basirat Hamayoon</h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-sm font-bold text-primary">MERN Stack Developer</span>
                      <span className="text-muted-foreground/40">·</span>
                      <span className="text-xs text-muted-foreground font-medium">Peshawar, PK</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed max-w-lg mb-6">
                  I build <span className="text-foreground font-semibold">performant full-stack web apps</span> with
                  the MERN stack. Currently shipping products at{" "}
                  <span className="text-primary font-bold">TriByte Solutions</span> and mentoring
                  aspiring developers to write better code.
                </p>

                <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground mb-8">
                  <a href="mailto:basirathumayun@gmail.com"
                     className="flex items-center gap-1.5 hover:text-primary transition-colors">
                    <Mail className="h-3.5 w-3.5" /> basirathumayun@gmail.com
                  </a>
                  <a href="tel:+923189890697"
                     className="flex items-center gap-1.5 hover:text-primary transition-colors">
                    <Phone className="h-3.5 w-3.5" /> +923189890697
                  </a>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" /> Kohat Road, Peshawar
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  <MagneticButton>
                    <Button
                      onClick={() =>
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="rounded-full px-6 h-11 text-sm font-bold shadow-lg shadow-primary/20
                                 hover:scale-105 transition-all cursor-pointer"
                    >
                      <ArrowRight className="mr-2 h-4 w-4" /> Let's Talk
                    </Button>
                  </MagneticButton>
                  {cv && (
                    <MagneticButton>
                      <Button
                        onClick={handleViewCv}
                        variant="outline"
                        className="rounded-full px-6 h-11 text-sm font-bold border-primary/30
                                   hover:bg-primary/10 hover:scale-105 transition-all cursor-pointer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Resume
                      </Button>
                    </MagneticButton>
                  )}
                </div>
              </div>
            </div>
          </BentoItem>

          {/* ─── CELL 2: Stats ─── */}
          <BentoItem className="lg:col-span-5" delay={0.1}>
            <div className="h-full border border-border/30 p-6 rounded-3xl
                            hover:border-primary/30 transition-all duration-500">
              <div className="grid grid-cols-2 gap-3 h-full">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      className="relative group rounded-2xl border border-border/20 p-5
                                 flex flex-col justify-between cursor-default
                                 hover:border-primary/30 transition-all duration-400"
                      whileHover={{ scale: 1.03, y: -2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="text-4xl sm:text-5xl font-black text-foreground leading-none tracking-tight">
                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="mt-2">
                        <p className="text-xs font-black text-primary uppercase tracking-wider">{stat.label}</p>
                        <p className="text-[10px] text-muted-foreground font-medium">{stat.sub}</p>
                      </div>
                      <div className="absolute top-3 right-3 h-8 w-8 rounded-full border border-primary/10
                                      flex items-center justify-center opacity-0 group-hover:opacity-100
                                      transition-opacity">
                        <Icon className="h-3.5 w-3.5 text-primary" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </BentoItem>

          {/* ─── CELL 3: Tech Stack ─── */}
          <BentoItem className="lg:col-span-12 md:col-span-2" delay={0.2}>
            <div className="border border-border/30 px-6 py-7 rounded-3xl
                            hover:border-primary/30 transition-all duration-500">
              <div className="flex items-center gap-2 mb-5">
                <Cpu className="h-4 w-4 text-primary" />
                <span className="text-xs font-black text-muted-foreground uppercase tracking-widest">
                  Tech Stack
                </span>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-3">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    className="group flex flex-col items-center gap-2 p-3 rounded-xl
                               hover:bg-primary/[0.06] transition-all cursor-default"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6, scale: 1.1 }}
                  >
                    <div className="h-10 w-10 rounded-xl border border-border/30
                                    flex items-center justify-center group-hover:border-primary/30
                                    group-hover:shadow-lg group-hover:shadow-primary/10 transition-all">
                      <tech.Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-[10px] font-bold text-muted-foreground group-hover:text-primary
                                     transition-colors text-center leading-tight">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </BentoItem>

          {/* ─── CELL 4: Journey ─── */}
          <BentoItem className="lg:col-span-12 md:col-span-2" delay={0.3}>
            <div className="border border-border/30 p-6 sm:p-8 rounded-3xl
                            hover:border-primary/30 transition-all duration-500">
              <div className="flex items-center gap-2 mb-8">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span className="text-xs font-black text-muted-foreground uppercase tracking-widest">
                  Journey
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent ml-2" />
              </div>

              <div className="relative">
                <div className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r
                                from-primary/20 via-border/40 to-transparent z-0 hidden sm:block" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {milestones.map((group, gi) => (
                    <motion.div
                      key={group.year}
                      className="relative"
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: gi * 0.12, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {/* Year — uses primary color from palette */}
                      <div className="relative z-10 mb-5">
                        <div className="inline-flex items-center gap-2 bg-primary rounded-full
                                        px-4 py-1.5 shadow-lg shadow-primary/20">
                          <Calendar className="h-3 w-3 text-primary-foreground" />
                          <span className="text-xs font-black text-primary-foreground tracking-wider">
                            {group.year}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {group.items.map((item) => {
                          const Icon = item.icon;
                          return (
                            <motion.div
                              key={item.title}
                              className={`group relative rounded-xl p-4 border transition-all duration-300 cursor-default
                                         ${item.current
                                           ? "border-primary/30"
                                           : "border-border/20 hover:border-primary/20"
                                         }`}
                              whileHover={{ x: 3 }}
                            >
                              {item.current && (
                                <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full
                                                bg-green-500/10 px-2 py-0.5">
                                  <span className="h-1 w-1 rounded-full bg-green-500 animate-pulse" />
                                  <span className="text-[8px] font-black text-green-500 uppercase">Now</span>
                                </div>
                              )}

                              <div className="flex items-start gap-3">
                                <div className={`p-1.5 rounded-lg shrink-0 transition-colors
                                               ${item.current
                                                 ? "bg-primary/10 text-primary"
                                                 : "text-muted-foreground group-hover:text-primary"
                                               }`}>
                                  <Icon className="h-3.5 w-3.5" />
                                </div>
                                <div className="min-w-0 pr-12">
                                  <h4 className="text-xs font-bold text-foreground leading-tight">
                                    {item.title}
                                  </h4>
                                  <p className="text-[10px] text-muted-foreground mt-0.5 truncate font-medium">
                                    {item.org}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </BentoItem>
        </div>
      </div>
    </section>
  );
}