// src/components/sections/HeroSection.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useStore } from "@/store/useStore";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { Button } from "@/components/ui/button";
import {
  Sparkles, Code2, Zap, ExternalLink,
} from "lucide-react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import {
  SiReact, SiNodedotjs, SiMongodb, SiNextdotjs,
  SiTailwindcss, SiExpress, SiRedux, SiJavascript,
} from "react-icons/si";

const floatingIcons = [
  { Icon: SiReact,       color: "text-cyan-400",          x: "6%",  y: "25%", delay: 0,   dur: 7  },
  { Icon: SiNodedotjs,   color: "text-green-500",         x: "90%", y: "20%", delay: 1,   dur: 9  },
  { Icon: SiMongodb,     color: "text-green-600",         x: "88%", y: "70%", delay: 2,   dur: 8  },
  { Icon: SiNextdotjs,   color: "text-foreground",        x: "5%",  y: "72%", delay: 0.5, dur: 11 },
  { Icon: SiTailwindcss, color: "text-sky-400",           x: "82%", y: "45%", delay: 1.5, dur: 7  },
  { Icon: SiExpress,     color: "text-muted-foreground",  x: "12%", y: "55%", delay: 3,   dur: 10 },
  { Icon: SiRedux,       color: "text-purple-500",        x: "50%", y: "8%",  delay: 2.5, dur: 6  },
  { Icon: SiJavascript,  color: "text-yellow-400",        x: "35%", y: "80%", delay: 0.8, dur: 12 },
];

const socials = [
  { icon: FiGithub,   href: "https://github.com/basirathamayoon",      label: "GitHub"   },
  { icon: FiLinkedin, href: "https://linkedin.com/in/basirathamayoon", label: "LinkedIn" },
  { icon: FiMail,     href: "mailto:basirathumayun@gmail.com",         label: "Email"    },
];

export function HeroSection() {
  const { cv, fetchCv } = useStore();
  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  const mouseX  = useMotionValue(0);
  const mouseY  = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const rotateX = useTransform(springY, [-300, 300], [5, -5]);
  const rotateY = useTransform(springX, [-300, 300], [-5, 5]);

  useEffect(() => { setMounted(true); fetchCv(); }, [fetchCv]);

  useEffect(() => {
    const handleMouse = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    };
    const el = containerRef.current;
    el?.addEventListener("mousemove", handleMouse);
    return () => el?.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  const handleViewCv = () => {
    if (!cv?.resumeUrl) return;
    window.open(cv.resumeUrl, "_blank", "noopener,noreferrer");
  };

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* ---- Background Layers ---- */}
      <div className="absolute inset-0 bg-grid opacity-30 z-0" />
      <div className="absolute inset-0 hero-gradient z-0" />

      {/* Radial accent behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[min(700px,90vw)] h-[min(700px,90vw)] rounded-full
                      bg-primary/[0.04] blur-[80px] z-0 pointer-events-none" />

      {/* ---- Floating Tech Icons ---- */}
      {mounted && floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute z-10 pointer-events-none hidden lg:block"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.45, scale: 1 }}
          transition={{ delay: item.delay + 0.6, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, -14, 0], rotate: [0, 6, -6, 0] }}
            transition={{ duration: item.dur, repeat: Infinity, ease: "easeInOut" }}
          >
            <item.Icon className={`h-7 w-7 ${item.color} drop-shadow-md`} />
          </motion.div>
        </motion.div>
      ))}

      {/* ---- Orbiting Ring (single, subtle) ---- */}
      {mounted && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <motion.div
            className="absolute rounded-full border border-primary/[0.07]"
            style={{ width: "min(600px, 85vw)", height: "min(600px, 85vw)" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-primary/30" />
          </motion.div>
        </div>
      )}

      {/* ---- Main Content ---- */}
      <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto">


        {/* ── Name ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className="text-sm pt-20 sm:text-base font-semibold text-muted-foreground mb-2 tracking-wide">
            Hi there, I'm
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-3">
            <motion.span className="gradient-text inline-block" style={{ rotateX, rotateY }}>
              Basirat
            </motion.span>
            <br />
            <span className="text-foreground">Hamayoon</span>
          </h1>
        </motion.div>

        {/* ── Role Typing ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-5 h-8"
        >
          <Code2 className="h-4 w-4 text-primary shrink-0" />
          <TypeAnimation
            sequence={[
              "MERN Stack Developer",      2200,
              "Full Stack Engineer",       2200,
              "React & Next.js Developer", 2200,
              "Node.js Backend Developer", 2200,
              "Web Development Mentor",    2200,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-base sm:text-lg font-bold text-primary"
          />
        </motion.div>

        {/* ── Description ── */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto mb-9
                     leading-relaxed text-balance"
        >
          Crafting responsive, user-friendly web applications with modern
          technologies. Currently building at{" "}
          <span className="text-primary font-bold">TriByte Solutions</span>{" "}
          & mentoring the next generation of developers.
        </motion.p>

        {/* ── CTA Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          <MagneticButton>
            <Button
              onClick={() => scrollTo("projects")}
              size="lg"
              className="rounded-full px-7 h-12 text-sm font-bold shadow-xl shadow-primary/25
                         hover:shadow-primary/40 transition-all hover:scale-105 cursor-pointer"
            >
              <Zap className="mr-2 h-4 w-4" /> View My Work
            </Button>
          </MagneticButton>

          <MagneticButton>
            <Button
              onClick={() => scrollTo("contact")}
              variant="outline"
              size="lg"
              className="rounded-full px-7 h-12 text-sm font-bold border-primary/30
                         hover:bg-primary/10 hover:border-primary/60 transition-all
                         hover:scale-105 cursor-pointer"
            >
              <FiMail className="mr-2 h-4 w-4" /> Get In Touch
            </Button>
          </MagneticButton>

          {cv && (
            <MagneticButton>
              <Button
                onClick={handleViewCv}
                variant="ghost"
                size="lg"
                className="rounded-full px-7 h-12 text-sm font-bold
                           hover:bg-primary/10 transition-all hover:scale-105 cursor-pointer"
              >
                <ExternalLink className="mr-2 h-4 w-4" /> Resume
              </Button>
            </MagneticButton>
          )}
        </motion.div>

        {/* ── Social Row ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.25, duration: 0.5 }}
          className="flex items-center justify-center gap-3"
        >
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <MagneticButton key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="h-10 w-10 rounded-full border border-border/50 flex items-center justify-center
                             text-muted-foreground hover:text-primary hover:border-primary/50
                             hover:bg-primary/10 transition-all hover:scale-110 cursor-pointer"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </MagneticButton>
            );
          })}

          <div className="h-4 w-px bg-border/60 mx-1" />

          <span className="text-xs font-semibold text-muted-foreground">
            Open to remote & on-site
          </span>
        </motion.div>
      </div>
    </section>
  );
}