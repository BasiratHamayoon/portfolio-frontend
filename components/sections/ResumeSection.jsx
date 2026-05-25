"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FileText,
  Download,
  Eye,
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Briefcase,
  Code,
  Zap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    degree: "BS in Information Technology",
    institution: "University of Agriculture Peshawar",
    year: "2022 – 2026",
    status: "Ongoing",
    icon: GraduationCap,
    color: "#a855f7",
    gradient: "linear-gradient(135deg, #a855f7, #7c3aed)",
    description: "Currently pursuing a 4-year degree focusing on software development, databases, and IT infrastructure.",
  },
  {
    degree: "Diploma in Information Technology",
    institution: "Govt. College of Technology, Kohat Road Peshawar",
    year: "2022 – 2023",
    status: "Completed",
    icon: Award,
    color: "#ec4899",
    gradient: "linear-gradient(135deg, #ec4899, #f43f5e)",
    description: "Specialized diploma covering web technologies, programming fundamentals, and computer networking.",
  },
  {
    degree: "FSC – Computer Science",
    institution: "Govt. Girls Degree College, Peshawar",
    year: "2020 – 2022",
    status: "Completed",
    icon: BookOpen,
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #14b8a6)",
    description: "Pre-engineering track with focus on computer science, mathematics, and physics.",
  },
];

const trainings = [
  {
    title: "MERN Stack / Full Stack Dev",
    organization: "Saylani Mass IT Training",
    year: "2024 – 2025",
    color: "#f59e0b",
  },
  {
    title: "Advanced Web App Development",
    organization: "NAVTTC – Govt. of Pakistan",
    year: "2024",
    color: "#6366f1",
  },
  {
    title: "Web Development Mentor",
    organization: "Women Fortune Tech",
    year: "2025",
    color: "#06b6d4",
  },
];

const highlights = [
  { label: "Projects", value: "10+", icon: Code, color: "#ec4899" },
  { label: "Certifications", value: "12+", icon: Award, color: "#a855f7" },
  { label: "Experience", value: "1+ Year", icon: Briefcase, color: "#10b981" },
  { label: "Trainings", value: "3+", icon: BookOpen, color: "#f59e0b" },
];

function TimelineCard({ item, index, isDark, isFromLeft }) {
  const cardRef = useRef(null);
  const dotRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        {
          x: isFromLeft ? -200 : 200,
          opacity: 0,
          rotateY: isFromLeft ? -20 : 20,
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
        dotRef.current,
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [isFromLeft]);

  const IconComponent = item.icon;

  return (
    <div
      ref={cardRef}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: "1200px" }}
    >
      <div className="flex items-start gap-4 sm:gap-6">
        <div className="flex flex-col items-center flex-shrink-0">
          <div
            ref={dotRef}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-500 relative z-10"
            style={{
              background: isHovered
                ? item.gradient
                : isDark
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(0,0,0,0.03)",
              boxShadow: isHovered
                ? `0 8px 25px ${item.color}40, 4px 4px 0px ${item.color}20`
                : `3px 3px 0px ${isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.05)"}`,
              borderRadius: index % 2 === 0 ? "18px 6px 18px 6px" : "6px 18px 6px 18px",
            }}
          >
            <IconComponent
              size={24}
              style={{ color: isHovered ? "#fff" : item.color }}
              className="transition-colors duration-300"
            />
          </div>
          {index < education.length - 1 && (
            <div
              className="w-0.5 h-16 sm:h-20 mt-2 transition-all duration-500"
              style={{
                background: `linear-gradient(to bottom, ${item.color}40, transparent)`,
              }}
            />
          )}
        </div>

        <div
          className="flex-1 p-5 sm:p-7 transition-all duration-500 cursor-pointer"
          style={{
            borderRadius: index % 2 === 0 ? "24px 8px 24px 8px" : "8px 24px 8px 24px",
            backgroundColor: isDark
              ? "rgba(17, 17, 17, 0.6)"
              : "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(20px)",
            border: `2px solid ${isHovered
              ? item.color + "40"
              : isDark
                ? "rgba(255,255,255,0.05)"
                : "rgba(0,0,0,0.04)"}`,
            boxShadow: isHovered
              ? `0 20px 50px ${item.color}15, 6px 6px 0px ${item.color}10`
              : isDark
                ? "0 2px 10px rgba(0,0,0,0.2), 3px 3px 0px rgba(255,255,255,0.02)"
                : "0 2px 10px rgba(0,0,0,0.04), 3px 3px 0px rgba(0,0,0,0.03)",
            transform: isHovered ? "translateY(-3px)" : "translateY(0)",
            backgroundImage: isHovered
              ? `radial-gradient(circle at ${index % 2 === 0 ? "20% 80%" : "80% 20%"}, ${item.color}08 0%, transparent 50%)`
              : "none",
          }}
        >
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold tracking-wider transition-all duration-300"
              style={{
                fontFamily: "'Comic Neue', cursive",
                borderRadius: "10px 3px 10px 3px",
                background: isHovered ? item.gradient : `${item.color}10`,
                color: isHovered ? "#fff" : item.color,
                boxShadow: isHovered ? `2px 2px 0px ${item.color}25` : "none",
              }}
            >
              <Calendar size={10} />
              {item.year}
            </span>
            <span
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold tracking-wider"
              style={{
                fontFamily: "'Comic Neue', cursive",
                borderRadius: "3px 10px 3px 10px",
                backgroundColor:
                  item.status === "Ongoing"
                    ? isDark
                      ? "rgba(16,185,129,0.15)"
                      : "rgba(16,185,129,0.1)"
                    : isDark
                      ? "rgba(168,85,247,0.15)"
                      : "rgba(168,85,247,0.1)",
                color: item.status === "Ongoing" ? "#10b981" : "#a855f7",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  backgroundColor:
                    item.status === "Ongoing" ? "#10b981" : "#a855f7",
                  animation:
                    item.status === "Ongoing"
                      ? "float 1.5s ease-in-out infinite"
                      : "none",
                }}
              />
              {item.status}
            </span>
          </div>

          <h4
            className="text-lg sm:text-xl font-bold mb-1.5 transition-colors duration-300"
            style={{
              fontFamily: "'Bubblegum Sans', cursive",
              color: isHovered
                ? item.color
                : isDark
                  ? "#f5f5f5"
                  : "#1a1a2e",
            }}
          >
            {item.degree}
          </h4>

          <div
            className="flex items-center gap-1.5 mb-3"
            style={{ color: isDark ? "#9ca3af" : "#6b7280" }}
          >
            <MapPin size={13} />
            <span
              className="text-xs sm:text-sm font-bold"
              style={{ fontFamily: "'Comic Neue', cursive" }}
            >
              {item.institution}
            </span>
          </div>

          <p
            className="text-xs sm:text-sm leading-relaxed"
            style={{
              fontFamily: "'Comic Neue', cursive",
              color: isDark ? "#6b7280" : "#9ca3af",
            }}
          >
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function TrainingBadge({ training, index, isDark }) {
  const badgeRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        badgeRef.current,
        {
          x: index % 2 === 0 ? -150 : 150,
          opacity: 0,
          scale: 0.8,
          rotation: index % 2 === 0 ? -10 : 10,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "elastic.out(1, 0.6)",
          scrollTrigger: {
            trigger: badgeRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={badgeRef}
      className="group cursor-pointer transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      <div
        className="p-4 sm:p-5 transition-all duration-500"
        style={{
          borderRadius: index % 2 === 0 ? "20px 6px 20px 6px" : "6px 20px 6px 20px",
          backgroundColor: isDark
            ? "rgba(17, 17, 17, 0.6)"
            : "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(20px)",
          border: `2px solid ${isHovered
            ? training.color + "40"
            : isDark
              ? "rgba(255,255,255,0.05)"
              : "rgba(0,0,0,0.04)"}`,
          boxShadow: isHovered
            ? `0 15px 40px ${training.color}15, 4px 4px 0px ${training.color}10`
            : isDark
              ? "0 2px 10px rgba(0,0,0,0.2)"
              : "0 2px 10px rgba(0,0,0,0.04)",
        }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center mb-3 transition-all duration-300"
          style={{
            background: isHovered
              ? `linear-gradient(135deg, ${training.color}, ${training.color}cc)`
              : `${training.color}10`,
            borderRadius: index % 2 === 0 ? "14px 4px 14px 4px" : "4px 14px 4px 14px",
            boxShadow: isHovered ? `3px 3px 0px ${training.color}20` : "none",
          }}
        >
          <Award
            size={18}
            style={{ color: isHovered ? "#fff" : training.color }}
            className="transition-colors duration-300"
          />
        </div>

        <h5
          className="text-sm sm:text-base font-bold mb-1 transition-colors duration-300"
          style={{
            fontFamily: "'Bubblegum Sans', cursive",
            color: isHovered ? training.color : isDark ? "#f5f5f5" : "#1a1a2e",
          }}
        >
          {training.title}
        </h5>

        <p
          className="text-xs mb-2"
          style={{
            fontFamily: "'Comic Neue', cursive",
            color: isDark ? "#9ca3af" : "#6b7280",
          }}
        >
          {training.organization}
        </p>

        <span
          className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-bold"
          style={{
            fontFamily: "'Comic Neue', cursive",
            borderRadius: "8px 3px 8px 3px",
            backgroundColor: `${training.color}10`,
            color: training.color,
          }}
        >
          <Calendar size={9} />
          {training.year}
        </span>
      </div>
    </div>
  );
}

function HighlightCard({ item, index, isDark }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        {
          y: 60,
          opacity: 0,
          scale: 0.7,
          rotation: index % 2 === 0 ? -15 : 15,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.9,
          delay: index * 0.12,
          ease: "elastic.out(1, 0.6)",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [index]);

  const IconComponent = item.icon;

  return (
    <div
      ref={cardRef}
      className="text-center group cursor-pointer transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered
          ? "translateY(-5px) scale(1.05)"
          : "translateY(0) scale(1)",
      }}
    >
      <div
        className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 flex items-center justify-center transition-all duration-500"
        style={{
          borderRadius: index % 2 === 0 ? "18px 6px 18px 6px" : "6px 18px 6px 18px",
          background: isHovered
            ? `linear-gradient(135deg, ${item.color}, ${item.color}cc)`
            : isDark
              ? "rgba(255,255,255,0.05)"
              : "rgba(0,0,0,0.03)",
          boxShadow: isHovered
            ? `0 10px 30px ${item.color}30, 4px 4px 0px ${item.color}15`
            : `3px 3px 0px ${isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.05)"}`,
        }}
      >
        <IconComponent
          size={26}
          style={{ color: isHovered ? "#fff" : item.color }}
          className="transition-colors duration-300"
        />
      </div>

      <div
        className="text-2xl sm:text-3xl font-extrabold mb-0.5 transition-colors duration-300"
        style={{
          fontFamily: "'Bangers', cursive",
          letterSpacing: "1px",
          color: isHovered ? item.color : isDark ? "#f5f5f5" : "#1a1a2e",
        }}
      >
        {item.value}
      </div>

      <div
        className="text-xs font-bold tracking-wider"
        style={{
          fontFamily: "'Comic Neue', cursive",
          color: isDark ? "#6b7280" : "#9ca3af",
        }}
      >
        {item.label}
      </div>
    </div>
  );
}

export default function ResumeSection() {
  const [isDark, setIsDark] = useState(false);
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingWordRefs = useRef([]);
  const subheadingRef = useRef(null);
  const dotsRef = useRef([]);
  const decorRef = useRef(null);
  const cvCardRef = useRef(null);
  const cvContentRef = useRef(null);
  const cvButtonsRef = useRef(null);
  const eduTitleRef = useRef(null);
  const trainTitleRef = useRef(null);

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
        cvCardRef.current,
        { x: -200, opacity: 0, rotateY: -20, scale: 0.85 },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cvCardRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        cvContentRef.current,
        { x: -100, opacity: 0, skewX: 5 },
        {
          x: 0,
          opacity: 1,
          skewX: 0,
          duration: 0.9,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cvCardRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        cvButtonsRef.current,
        { x: 150, opacity: 0, scale: 0.5 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.4,
          ease: "elastic.out(1, 0.6)",
          scrollTrigger: {
            trigger: cvCardRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        eduTitleRef.current,
        { x: 200, opacity: 0, skewX: -10 },
        {
          x: 0,
          opacity: 1,
          skewX: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: eduTitleRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        trainTitleRef.current,
        { x: -200, opacity: 0, skewX: 10 },
        {
          x: 0,
          opacity: 1,
          skewX: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: trainTitleRef.current,
            start: "top 88%",
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
      id="resume"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{
        background: isDark
          ? "linear-gradient(180deg, #0a0a0a 0%, #0a0f1a 50%, #0a0a0a 100%)"
          : "linear-gradient(180deg, #fafafa 0%, #f0f5ff 50%, #fafafa 100%)",
      }}
    >
      <div
        className="absolute top-20 right-16 w-2 h-2 rounded-full"
        style={{
          backgroundColor: "#a855f7",
          boxShadow: "0 0 20px rgba(168,85,247,0.5)",
          animation: "float-random 4s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-1/3 left-12 w-3 h-3 rounded-full"
        style={{
          backgroundColor: "#ec4899",
          boxShadow: "0 0 20px rgba(236,72,153,0.5)",
          animation: "float-random 5s ease-in-out infinite",
          animationDelay: "1s",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full"
        style={{
          backgroundColor: "#10b981",
          boxShadow: "0 0 20px rgba(16,185,129,0.5)",
          animation: "float-random 6s ease-in-out infinite",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute bottom-20 left-1/3 w-1.5 h-1.5 rounded-full"
        style={{
          backgroundColor: "#f59e0b",
          boxShadow: "0 0 15px rgba(245,158,11,0.5)",
          animation: "float-random 4.5s ease-in-out infinite",
          animationDelay: "0.5s",
        }}
      />

      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full"
        style={{
          background: "linear-gradient(135deg, rgba(168,85,247,0.08), rgba(99,102,241,0.05))",
          filter: "blur(80px)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full"
        style={{
          background: "linear-gradient(135deg, rgba(236,72,153,0.08), rgba(245,158,11,0.05))",
          filter: "blur(80px)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16 sm:mb-20 relative">
          <div
            ref={decorRef}
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            <svg width="120" height="120" viewBox="0 0 120 120" style={{ opacity: 0.06 }}>
              <polygon
                points="60,5 72,40 110,40 80,60 90,95 60,75 30,95 40,60 10,40 48,40"
                fill={isDark ? "#fff" : "#000"}
              />
            </svg>
          </div>

          <div ref={badgeRef} className="inline-block mb-6">
            <span
              className="inline-flex items-center gap-2.5 px-6 py-2.5 font-bold text-sm tracking-wider"
              style={{
                fontFamily: "'Bubblegum Sans', cursive",
                borderRadius: "25px 8px 25px 8px",
                boxShadow: "6px 6px 0px rgba(168,85,247,0.2)",
                border: "2px dashed #a855f7",
                color: "#a855f7",
                background: isDark
                  ? "rgba(168, 85, 247, 0.12)"
                  : "rgba(168, 85, 247, 0.08)",
              }}
            >
              <FileText size={15} />
              MY RESUME
              <Sparkles size={15} />
            </span>
          </div>

          <h2
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold bubble-text mb-5 flex items-center justify-center gap-3 sm:gap-5 flex-wrap"
            style={{ fontFamily: "'Bubblegum Sans', cursive" }}
          >
            <span
              ref={(el) => (headingWordRefs.current[0] = el)}
              style={{
                color: isDark ? "#f5f5f5" : "#1a1a2e",
                display: "inline-block",
              }}
            >
              My
            </span>
                <span
                ref={(el) => (headingWordRefs.current[1] = el)}
                style={{
                color: isDark ? "#f5f5f5" : "#1a1a2e",
                display: "inline-block",
                }}
                >
                Resume
                </span>
          </h2>

          <p
            ref={subheadingRef}
            className="text-base max-w-xl mx-auto leading-relaxed"
            style={{
              fontFamily: "'Comic Neue', cursive",
              color: isDark ? "#a1a1aa" : "#6b7280",
            }}
          >
            A snapshot of my education, training, and professional journey as a MERN Stack Developer.
          </p>

          <div className="flex items-center justify-center gap-2.5 mt-8">
            {["#a855f7", "#ec4899", "#10b981", "#f59e0b"].map((color, i) => (
              <div
                key={i}
                ref={(el) => (dotsRef.current[i] = el)}
                className="h-1.5 rounded-full"
                style={{
                  width: i === 0 ? "40px" : "20px",
                  background: color,
                  boxShadow: `0 0 8px ${color}`,
                  animation: `pulse-width ${2 + i * 0.3}s ease-in-out infinite`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {highlights.map((item, index) => (
            <HighlightCard
              key={item.label}
              item={item}
              index={index}
              isDark={isDark}
            />
          ))}
        </div>

        <div
          ref={cvCardRef}
          className="mb-16 sm:mb-20 relative"
          style={{ perspective: "1200px" }}
        >
          <div
            className="relative p-6 sm:p-10 overflow-hidden"
            style={{
              borderRadius: "30px 10px 30px 10px",
              background: isDark
                ? "linear-gradient(135deg, rgba(168,85,247,0.1), rgba(236,72,153,0.05))"
                : "linear-gradient(135deg, rgba(168,85,247,0.06), rgba(236,72,153,0.03))",
              border: `2px solid ${isDark
                ? "rgba(168,85,247,0.15)"
                : "rgba(168,85,247,0.1)"}`,
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
              className="absolute top-4 right-4 sm:top-6 sm:right-8 font-extrabold text-6xl sm:text-8xl select-none pointer-events-none"
              style={{
                fontFamily: "'Bangers', cursive",
                color: isDark
                  ? "rgba(255,255,255,0.02)"
                  : "rgba(0,0,0,0.02)",
                letterSpacing: "4px",
              }}
            >
              CV
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
              <div ref={cvContentRef} className="flex-1 text-center sm:text-left">
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 mb-4"
                  style={{
                    borderRadius: "12px 4px 12px 4px",
                    backgroundColor: isDark
                      ? "rgba(168,85,247,0.1)"
                      : "rgba(168,85,247,0.08)",
                    border: "1px dashed rgba(168,85,247,0.3)",
                  }}
                >
                  <FileText size={12} style={{ color: "#a855f7" }} />
                  <span
                    className="text-xs font-bold tracking-wider"
                    style={{
                      fontFamily: "'Comic Neue', cursive",
                      color: "#a855f7",
                    }}
                  >
                    DOWNLOAD OR VIEW
                  </span>
                </div>

                <h3
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3"
                  style={{
                    fontFamily: "'Bubblegum Sans', cursive",
                    color: isDark ? "#f5f5f5" : "#1a1a2e",
                  }}
                >
                  Grab my{" "}
                  <span
                    style={{
                      background: "linear-gradient(to right, #a855f7, #ec4899)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    CV
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
                  Download my full resume to explore my complete skill set, certifications, work experience, and project portfolio.
                </p>
              </div>

              <div ref={cvButtonsRef} className="flex flex-col gap-3 flex-shrink-0">
                <a
                  href="/resume.pdf"
                  download="Basirat_Hamayoon_CV.pdf"
                  className="group relative inline-flex items-center gap-3 no-underline"
                >
                  <div
                    className="absolute -inset-2 rounded-3xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(135deg, #a855f7, #ec4899)",
                    }}
                  />
                  <div
                    className="relative px-8 py-4 text-white font-bold text-base flex items-center gap-3 transition-all duration-300 group-hover:scale-105 group-active:scale-95"
                    style={{
                      background: "linear-gradient(135deg, #a855f7, #ec4899)",
                      fontFamily: "'Comic Neue', cursive",
                      borderRadius: "22px 8px 22px 8px",
                      boxShadow:
                        "6px 6px 0px rgba(168,85,247,0.2), 0 10px 30px rgba(168,85,247,0.25)",
                    }}
                  >
                    <Download size={20} />
                    <span>Download CV</span>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </div>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 font-bold text-sm no-underline transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    fontFamily: "'Comic Neue', cursive",
                    borderRadius: "8px 20px 8px 20px",
                    border: `2px solid ${isDark
                      ? "rgba(168,85,247,0.3)"
                      : "rgba(168,85,247,0.2)"}`,
                    backgroundColor: isDark
                      ? "rgba(168,85,247,0.08)"
                      : "rgba(168,85,247,0.05)",
                    color: "#a855f7",
                    boxShadow: "4px 4px 0px rgba(168,85,247,0.1)",
                  }}
                >
                  <Eye size={16} />
                  View Online
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <div ref={eduTitleRef} className="flex items-center gap-3">
              <div
                className="w-10 h-10 flex items-center justify-center"
                style={{
                  borderRadius: "14px 4px 14px 4px",
                  background: "linear-gradient(135deg, #a855f7, #7c3aed)",
                  boxShadow: "3px 3px 0px rgba(168,85,247,0.2)",
                }}
              >
                <GraduationCap size={20} color="#fff" />
              </div>
              <h3
                className="text-2xl sm:text-3xl font-bold"
                style={{
                  fontFamily: "'Bubblegum Sans', cursive",
                  color: isDark ? "#f5f5f5" : "#1a1a2e",
                }}
              >
                Education
              </h3>
            </div>
            <div
              className="flex-1 h-0.5 hidden sm:block"
              style={{
                background: "linear-gradient(to right, #a855f7, transparent)",
                borderRadius: "4px",
              }}
            />
          </div>

          <div className="space-y-2">
            {education.map((item, index) => (
              <TimelineCard
                key={item.degree}
                item={item}
                index={index}
                isDark={isDark}
                isFromLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <div
              className="flex-1 h-0.5 hidden sm:block"
              style={{
                background: "linear-gradient(to left, #f59e0b, transparent)",
                borderRadius: "4px",
              }}
            />
            <div ref={trainTitleRef} className="flex items-center gap-3">
              <div
                className="w-10 h-10 flex items-center justify-center"
                style={{
                  borderRadius: "4px 14px 4px 14px",
                  background: "linear-gradient(135deg, #f59e0b, #ef4444)",
                  boxShadow: "3px 3px 0px rgba(245,158,11,0.2)",
                }}
              >
                <Award size={20} color="#fff" />
              </div>
              <h3
                className="text-2xl sm:text-3xl font-bold"
                style={{
                  fontFamily: "'Bubblegum Sans', cursive",
                  color: isDark ? "#f5f5f5" : "#1a1a2e",
                }}
              >
                Training & Certifications
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {trainings.map((training, index) => (
              <TrainingBadge
                key={training.title}
                training={training}
                index={index}
                isDark={isDark}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-width {
          0%,
          100% {
            width: 15px;
            opacity: 0.5;
          }
          50% {
            width: 45px;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}