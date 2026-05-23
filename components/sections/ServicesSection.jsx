"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code,
  Server,
  Database,
  Globe,
  ArrowRight,
  Sparkles,
  Zap,
  Layout,
  Mail,
  FileSpreadsheet,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Layout,
    title: "Frontend Development",
    description: "Crafting pixel-perfect, responsive interfaces that users love to interact with.",
    tools: ["React.js", "Next.js", "Tailwind CSS", "Redux"],
    gradient: "linear-gradient(135deg, #ec4899, #f43f5e)",
    accentColor: "#ec4899",
    darkAccent: "#fb7185",
    pattern: "radial-gradient(circle at 20% 80%, rgba(236,72,153,0.15) 0%, transparent 50%)",
    number: "01",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Building powerful server-side systems with secure APIs and smart architecture.",
    tools: ["Node.js", "Express.js", "JWT Auth", "REST APIs"],
    gradient: "linear-gradient(135deg, #a855f7, #7c3aed)",
    accentColor: "#a855f7",
    darkAccent: "#c084fc",
    pattern: "radial-gradient(circle at 80% 20%, rgba(168,85,247,0.15) 0%, transparent 50%)",
    number: "02",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Architecting efficient data solutions that scale with your application needs.",
    tools: ["MongoDB", "Atlas", "Mongoose", "MySQL"],
    gradient: "linear-gradient(135deg, #10b981, #14b8a6)",
    accentColor: "#10b981",
    darkAccent: "#34d399",
    pattern: "radial-gradient(circle at 50% 50%, rgba(16,185,129,0.15) 0%, transparent 50%)",
    number: "03",
  },
  {
    icon: Code,
    title: "Full Stack MERN",
    description: "Complete end-to-end web solutions from database to deployment, all in one.",
    tools: ["MongoDB", "Express", "React", "Node.js"],
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    accentColor: "#f59e0b",
    darkAccent: "#fbbf24",
    pattern: "radial-gradient(circle at 80% 80%, rgba(245,158,11,0.15) 0%, transparent 50%)",
    number: "04",
  },
  {
    icon: FileSpreadsheet,
    title: "MS Office Suite",
    description: "Professional document creation, data analysis, and presentations using Microsoft Office tools.",
    tools: ["MS Word", "MS Excel", "PowerPoint", "Access"],
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    accentColor: "#6366f1",
    darkAccent: "#818cf8",
    pattern: "radial-gradient(circle at 20% 20%, rgba(99,102,241,0.15) 0%, transparent 50%)",
    number: "05",
  },
  {
    icon: Globe,
    title: "Deploy & DevOps",
    description: "Launching your applications to the world with optimized performance and CI/CD.",
    tools: ["Git", "Vercel", "Netlify", "GitHub Actions"],
    gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
    accentColor: "#06b6d4",
    darkAccent: "#22d3ee",
    pattern: "radial-gradient(circle at 50% 80%, rgba(6,182,212,0.15) 0%, transparent 50%)",
    number: "06",
  },
];

function ServiceCard({ service, index, isDark }) {
  const cardRef = useRef(null);
  const numberRef = useRef(null);
  const iconContainerRef = useRef(null);
  const contentRef = useRef(null);
  const toolsRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const isFromLeft = index % 2 === 0;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        {
          x: isFromLeft ? -200 : 200,
          opacity: 0,
          rotateY: isFromLeft ? -25 : 25,
          scale: 0.85,
        },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        numberRef.current,
        {
          x: isFromLeft ? -50 : 50,
          opacity: 0,
          scale: 0,
          rotation: isFromLeft ? -45 : 45,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.9,
          delay: 0.3,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        iconContainerRef.current,
        {
          x: isFromLeft ? -80 : 80,
          scale: 0,
          rotation: isFromLeft ? -180 : 180,
          opacity: 0,
        },
        {
          x: 0,
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1,
          delay: 0.15,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        {
          x: isFromLeft ? -60 : 60,
          opacity: 0,
          skewX: isFromLeft ? -5 : 5,
        },
        {
          x: 0,
          opacity: 1,
          skewX: 0,
          duration: 0.8,
          delay: 0.35,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        toolsRef.current,
        {
          x: isFromLeft ? -40 : 40,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [index, isFromLeft]);

  useEffect(() => {
    if (isHovered && iconContainerRef.current) {
      gsap.to(iconContainerRef.current, {
        y: -8,
        scale: 1.1,
        duration: 0.4,
        ease: "back.out(1.7)",
      });
    } else if (iconContainerRef.current) {
      gsap.to(iconContainerRef.current, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isHovered]);

  const IconComponent = service.icon;
  const isEven = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: "1200px" }}
    >
      <div
        className="relative flex flex-col sm:flex-row items-start gap-5 sm:gap-8 p-6 sm:p-8 transition-all duration-500 cursor-pointer"
        style={{
          borderRadius: isEven ? "30px 8px 30px 8px" : "8px 30px 8px 30px",
          backgroundColor: isDark ? "rgba(17, 17, 17, 0.6)" : "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(20px)",
          border: `2px solid ${isHovered ? service.accentColor + "40" : isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)"}`,
          boxShadow: isHovered
            ? `0 25px 60px ${service.accentColor}20, 0 0 0 1px ${service.accentColor}15, 8px 8px 0px ${service.accentColor}10`
            : isDark
              ? "0 2px 10px rgba(0,0,0,0.2), 4px 4px 0px rgba(255,255,255,0.02)"
              : "0 2px 10px rgba(0,0,0,0.04), 4px 4px 0px rgba(0,0,0,0.03)",
          transform: isHovered ? "translateY(-4px)" : "translateY(0)",
          backgroundImage: isHovered ? service.pattern : "none",
        }}
      >
        <div
          ref={numberRef}
          className="absolute top-3 right-4 sm:top-4 sm:right-6 font-extrabold text-5xl sm:text-7xl select-none pointer-events-none transition-all duration-500"
          style={{
            fontFamily: "'Bangers', cursive",
            color: isHovered
              ? isDark ? service.darkAccent : service.accentColor
              : isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
            opacity: isHovered ? 0.15 : 1,
            letterSpacing: "2px",
          }}
        >
          {service.number}
        </div>

        <div className="flex-shrink-0">
          <div
            ref={iconContainerRef}
            className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center transition-all duration-300"
            style={{
              borderRadius: isEven ? "20px 6px 20px 6px" : "6px 20px 6px 20px",
              background: isHovered ? service.gradient : isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
              boxShadow: isHovered
                ? `6px 6px 0px ${service.accentColor}25, 0 10px 30px ${service.accentColor}20`
                : `4px 4px 0px ${isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.05)"}`,
            }}
          >
            <IconComponent
              size={32}
              style={{
                color: isHovered ? "#ffffff" : isDark ? service.darkAccent : service.accentColor,
              }}
              className="transition-colors duration-300"
            />

            <div
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                background: service.gradient,
                transform: isHovered ? "scale(1)" : "scale(0)",
                boxShadow: `0 2px 8px ${service.accentColor}40`,
              }}
            >
              <Sparkles size={8} color="#fff" />
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-0 relative z-10">
          <div ref={contentRef}>
            <h3
              className="text-xl sm:text-2xl font-bold mb-2 transition-colors duration-300"
              style={{
                fontFamily: "'Bubblegum Sans', cursive",
                color: isHovered
                  ? isDark ? service.darkAccent : service.accentColor
                  : isDark ? "#f5f5f5" : "#1a1a2e",
              }}
            >
              {service.title}
            </h3>

            <p
              className="text-sm sm:text-base leading-relaxed mb-4"
              style={{
                fontFamily: "'Comic Neue', cursive",
                color: isDark ? "#9ca3af" : "#6b7280",
                maxWidth: "400px",
              }}
            >
              {service.description}
            </p>
          </div>

          <div ref={toolsRef} className="flex flex-wrap gap-2">
            {service.tools.map((tool, i) => (
              <span
                key={tool}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold transition-all duration-300"
                style={{
                  fontFamily: "'Comic Neue', cursive",
                  borderRadius: i % 2 === 0 ? "10px 3px 10px 3px" : "3px 10px 3px 10px",
                  background: isHovered
                    ? service.gradient
                    : isDark
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(0,0,0,0.04)",
                  color: isHovered ? "#ffffff" : isDark ? "#9ca3af" : "#6b7280",
                  boxShadow: isHovered ? `2px 2px 0px ${service.accentColor}30` : "none",
                  transform: isHovered ? `translateY(-${i % 2 === 0 ? 2 : 0}px)` : "translateY(0)",
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 h-0.5 group-hover:w-1/2 transition-all duration-700 ease-out"
        style={{
          background: service.gradient,
          borderRadius: "4px",
          left: isFromLeft ? "32px" : "auto",
          right: isFromLeft ? "auto" : "32px",
          width: "0",
        }}
      />
    </div>
  );
}

export default function ServicesSection() {
  const [isDark, setIsDark] = useState(false);
  const sectionRef = useRef(null);
  const headingWordRefs = useRef([]);
  const subheadingRef = useRef(null);
  const badgeRef = useRef(null);
  const decorRef = useRef(null);
  const ctaRef = useRef(null);
  const ctaButtonRef = useRef(null);
  const ctaTextRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    setIsDark(document.documentElement.classList.contains("dark"));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        badgeRef.current,
        { x: 150, opacity: 0, scale: 0.5, rotation: 15 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      headingWordRefs.current.forEach((el, i) => {
        if (el) {
          gsap.fromTo(
            el,
            {
              x: 200 + i * 50,
              opacity: 0,
              rotateZ: 10,
              skewX: -15,
              scale: 0.7,
            },
            {
              x: 0,
              opacity: 1,
              rotateZ: 0,
              skewX: 0,
              scale: 1,
              duration: 1.2,
              delay: 0.1 + i * 0.15,
              ease: "power4.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      gsap.fromTo(
        subheadingRef.current,
        { x: 120, opacity: 0, skewX: -8 },
        {
          x: 0,
          opacity: 1,
          skewX: 0,
          duration: 1,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      dotsRef.current.forEach((el, i) => {
        if (el) {
          gsap.fromTo(
            el,
            { x: 100 + i * 20, opacity: 0, scale: 0 },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 0.6,
              delay: 0.5 + i * 0.08,
              ease: "back.out(3)",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      gsap.fromTo(
        decorRef.current,
        { x: 200, scale: 0, rotation: -180, opacity: 0 },
        {
          x: 0,
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.3,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.to(decorRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "linear",
      });

      gsap.fromTo(
        ctaRef.current,
        { x: 200, opacity: 0, rotateY: 15, scale: 0.85 },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ctaTextRef.current,
        { x: 100, opacity: 0, skewX: -10 },
        {
          x: 0,
          opacity: 1,
          skewX: 0,
          duration: 0.9,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ctaButtonRef.current,
        { x: 150, opacity: 0, scale: 0.5, rotation: 10 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          delay: 0.4,
          ease: "elastic.out(1, 0.6)",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{
        background: isDark
          ? "linear-gradient(180deg, #0a0a0a 0%, #0f0f1a 50%, #0a0a0a 100%)"
          : "linear-gradient(180deg, #fafafa 0%, #f0f0ff 50%, #fafafa 100%)",
      }}
    >
      <div
        className="absolute top-20 left-10 w-2 h-2 rounded-full"
        style={{
          backgroundColor: "#ec4899",
          boxShadow: "0 0 20px rgba(236,72,153,0.5)",
          animation: "float-random 4s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-40 right-20 w-3 h-3 rounded-full"
        style={{
          backgroundColor: "#a855f7",
          boxShadow: "0 0 20px rgba(168,85,247,0.5)",
          animation: "float-random 5s ease-in-out infinite",
          animationDelay: "1s",
        }}
      />
      <div
        className="absolute bottom-40 left-1/4 w-2 h-2 rounded-full"
        style={{
          backgroundColor: "#10b981",
          boxShadow: "0 0 20px rgba(16,185,129,0.5)",
          animation: "float-random 6s ease-in-out infinite",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full"
        style={{
          backgroundColor: "#f59e0b",
          boxShadow: "0 0 15px rgba(245,158,11,0.5)",
          animation: "float-random 4.5s ease-in-out infinite",
          animationDelay: "0.5s",
        }}
      />
      <div
        className="absolute bottom-1/4 right-10 w-2.5 h-2.5 rounded-full"
        style={{
          backgroundColor: "#06b6d4",
          boxShadow: "0 0 20px rgba(6,182,212,0.5)",
          animation: "float-random 5.5s ease-in-out infinite",
          animationDelay: "1.5s",
        }}
      />

      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full"
        style={{
          background: "linear-gradient(135deg, rgba(236,72,153,0.08), rgba(168,85,247,0.05))",
          filter: "blur(80px)",
          transform: "translate(-40%, -40%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full"
        style={{
          background: "linear-gradient(135deg, rgba(16,185,129,0.08), rgba(6,182,212,0.05))",
          filter: "blur(80px)",
          transform: "translate(40%, 40%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16 sm:mb-20 relative">
          <div
            ref={decorRef}
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            <svg width="120" height="120" viewBox="0 0 120 120" style={{ opacity: 0.06 }}>
              <polygon points="60,5 72,40 110,40 80,60 90,95 60,75 30,95 40,60 10,40 48,40" fill={isDark ? "#fff" : "#000"} />
            </svg>
          </div>

          <div ref={badgeRef} className="inline-block mb-6">
            <span
              className="inline-flex items-center gap-2 px-6 py-2.5 font-bold text-sm tracking-wider"
              style={{
                fontFamily: "'Comic Neue', cursive",
                borderRadius: "20px 5px 20px 5px",
                boxShadow: "4px 4px 0px rgba(168,85,247,0.15)",
                border: "2px dashed #a855f7",
                color: "#a855f7",
                backgroundColor: isDark ? "rgba(168, 85, 247, 0.08)" : "rgba(168, 85, 247, 0.05)",
              }}
            >
              <Zap size={15} />
              WHAT I OFFER
              <Sparkles size={15} />
            </span>
          </div>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bubble-text mb-5 flex items-center justify-center gap-3 sm:gap-5 flex-wrap"
            style={{ fontFamily: "'Bubblegum Sans', cursive" }}
          >
            <span
              ref={(el) => (headingWordRefs.current[0] = el)}
              style={{ color: isDark ? "#f5f5f5" : "#1a1a2e", display: "inline-block" }}
            >
              My
            </span>
            <span
              ref={(el) => (headingWordRefs.current[1] = el)}
              style={{
                background: "linear-gradient(135deg, #a855f7, #ec4899, #f43f5e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
              }}
            >
              Services
            </span>
          </h2>

          <p
            ref={subheadingRef}
            className="text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
            style={{
              fontFamily: "'Comic Neue', cursive",
              color: isDark ? "#9ca3af" : "#6b7280",
            }}
          >
            From concept to deployment, I bring your digital vision to life with modern technologies and creative solutions.
          </p>

          <div className="flex items-center justify-center gap-2 mt-6">
            {["#ec4899", "#a855f7", "#10b981", "#f59e0b", "#6366f1", "#06b6d4"].map((color, i) => (
              <div
                key={i}
                ref={(el) => (dotsRef.current[i] = el)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: color,
                  animation: `float ${2 + i * 0.3}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="space-y-5 sm:space-y-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isDark={isDark}
            />
          ))}
        </div>

        <div ref={ctaRef} className="mt-20 sm:mt-24 relative" style={{ perspective: "1200px" }}>
          <div
            className="relative p-8 sm:p-12 overflow-hidden"
            style={{
              borderRadius: "30px 10px 30px 10px",
              background: isDark
                ? "linear-gradient(135deg, rgba(168,85,247,0.1), rgba(236,72,153,0.05))"
                : "linear-gradient(135deg, rgba(168,85,247,0.06), rgba(236,72,153,0.03))",
              border: `2px solid ${isDark ? "rgba(168,85,247,0.15)" : "rgba(168,85,247,0.1)"}`,
              boxShadow: isDark
                ? "0 20px 60px rgba(0,0,0,0.3), 8px 8px 0px rgba(168,85,247,0.05)"
                : "0 20px 60px rgba(168,85,247,0.08), 8px 8px 0px rgba(168,85,247,0.05)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-40 h-40 rounded-full"
              style={{
                background: "linear-gradient(135deg, rgba(168,85,247,0.1), transparent)",
                filter: "blur(40px)",
                transform: "translate(20%, -20%)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-40 h-40 rounded-full"
              style={{
                background: "linear-gradient(135deg, rgba(236,72,153,0.1), transparent)",
                filter: "blur(40px)",
                transform: "translate(-20%, 20%)",
              }}
            />

            <div
              className="absolute top-4 right-4 sm:top-6 sm:right-6 font-extrabold text-6xl sm:text-8xl select-none pointer-events-none"
              style={{
                fontFamily: "'Bangers', cursive",
                color: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
                letterSpacing: "4px",
              }}
            >
              ?!
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
              <div ref={ctaTextRef} className="flex-1 text-center sm:text-left">
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 mb-4"
                  style={{
                    borderRadius: "12px 4px 12px 4px",
                    backgroundColor: isDark ? "rgba(168,85,247,0.1)" : "rgba(168,85,247,0.08)",
                    border: "1px dashed rgba(168,85,247,0.3)",
                  }}
                >
                  <Sparkles size={12} style={{ color: "#a855f7" }} />
                  <span
                    className="text-xs font-bold tracking-wider"
                    style={{ fontFamily: "'Comic Neue', cursive", color: "#a855f7" }}
                  >
                    AVAILABLE FOR PROJECTS
                  </span>
                </div>

                <h3
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3"
                  style={{
                    fontFamily: "'Bubblegum Sans', cursive",
                    color: isDark ? "#f5f5f5" : "#1a1a2e",
                  }}
                >
                  Got a project in{" "}
                  <span
                    style={{
                      background: "linear-gradient(to right, #a855f7, #ec4899)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    mind?
                  </span>
                </h3>

                <p
                  className="text-sm sm:text-base max-w-md"
                  style={{
                    fontFamily: "'Comic Neue', cursive",
                    color: isDark ? "#9ca3af" : "#6b7280",
                    lineHeight: "1.7",
                  }}
                >
                  I would love to hear about your ideas. Whether it is a fresh project or an existing one that needs improvement, let us make it happen together.
                </p>
              </div>

              <div ref={ctaButtonRef} className="flex-shrink-0">
                <a
                  href="https://mail.google.com/mail/?view=cm&to=basirathumayun@gmail.com&su=Project%20Inquiry&body=Hi%20Basirat%2C%0A%0AI%20have%20a%20project%20idea%20I%20would%20like%20to%20discuss%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 no-underline"
                >
                  <div
                    className="absolute -inset-2 rounded-3xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
                  />
                  <div
                    className="relative px-8 py-4 text-white font-bold text-base flex items-center gap-3 transition-all duration-300 group-hover:scale-105 group-active:scale-95"
                    style={{
                      background: "linear-gradient(135deg, #a855f7, #ec4899)",
                      fontFamily: "'Comic Neue', cursive",
                      borderRadius: "22px 8px 22px 8px",
                      boxShadow: "6px 6px 0px rgba(168,85,247,0.2), 0 10px 30px rgba(168,85,247,0.25)",
                    }}
                  >
                    <Mail size={20} />
                    <span>Get In Touch</span>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </div>
                </a>

                <p
                  className="text-center mt-3 text-xs"
                  style={{
                    fontFamily: "'Comic Neue', cursive",
                    color: isDark ? "#6b7280" : "#9ca3af",
                  }}
                >
                  basirathumayun@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
