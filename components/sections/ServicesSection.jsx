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
  Star,
  Rocket,
  Award,
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
    number: "01",
    achievement: "50+ Projects",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Building powerful server-side systems with secure APIs and smart architecture.",
    tools: ["Node.js", "Express.js", "JWT Auth", "REST APIs"],
    gradient: "linear-gradient(135deg, #a855f7, #7c3aed)",
    accentColor: "#a855f7",
    darkAccent: "#c084fc",
    number: "02",
    achievement: "100+ APIs",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Architecting efficient data solutions that scale with your application needs.",
    tools: ["MongoDB", "Atlas", "Mongoose", "MySQL"],
    gradient: "linear-gradient(135deg, #10b981, #14b8a6)",
    accentColor: "#10b981",
    darkAccent: "#34d399",
    number: "03",
    achievement: "99.9% Uptime",
  },
  {
    icon: Code,
    title: "Full Stack MERN",
    description: "Complete end-to-end web solutions from database to deployment, all in one.",
    tools: ["MongoDB", "Express", "React", "Node.js"],
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    accentColor: "#f59e0b",
    darkAccent: "#fbbf24",
    number: "04",
    achievement: "30+ Apps",
  },
  {
    icon: FileSpreadsheet,
    title: "MS Office Suite",
    description: "Professional document creation, data analysis, and presentations.",
    tools: ["MS Word", "MS Excel", "PowerPoint", "Access"],
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    accentColor: "#6366f1",
    darkAccent: "#818cf8",
    number: "05",
    achievement: "1000+ Reports",
  },
  {
    icon: Globe,
    title: "Deploy & DevOps",
    description: "Launching your applications to the world with optimized performance.",
    tools: ["Git", "Vercel", "Netlify", "GitHub Actions"],
    gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
    accentColor: "#06b6d4",
    darkAccent: "#22d3ee",
    number: "06",
    achievement: "24/7 Support",
  },
];

function ServiceCard({ service, index, isDark }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const iconRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      {
        y: 60,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        delay: index * 0.08,
        ease: "back.out(1)",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [index]);

  useEffect(() => {
    if (isHovered) {
      gsap.to(iconRef.current, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(glowRef.current, {
        scale: 1.1,
        opacity: 0.4,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(iconRef.current, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      });
      gsap.to(glowRef.current, {
        scale: 1,
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
      });
    }
  }, [isHovered]);

  const IconComponent = service.icon;

  return (
    <div
      ref={cardRef}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect - only visible on hover */}
      <div
        ref={glowRef}
        className="absolute -inset-4 rounded-2xl opacity-0 pointer-events-none"
        style={{
          background: service.gradient,
          filter: "blur(20px)",
          transition: "opacity 0.2s ease",
        }}
      />

      <div
        className="relative overflow-hidden transition-all duration-300 cursor-pointer h-full"
        style={{
          borderRadius: "24px",
          background: isDark
            ? `linear-gradient(135deg, rgba(25, 25, 40, 0.95), rgba(18, 18, 30, 0.95))`
            : `linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 255, 0.98))`,
          border: `2px solid ${isHovered ? service.accentColor + "40" : service.accentColor + "12"}`,
          transform: isHovered ? "translateY(-6px)" : "translateY(0)",
          transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          boxShadow: isHovered
            ? `0 20px 35px -14px ${service.accentColor}50`
            : "none",
        }}
      >
        <div className="p-6">
          {/* Number and Achievement Row */}
          <div className="flex justify-between items-start mb-4">
            <div
              className="text-4xl font-black opacity-15"
              style={{
                fontFamily: "'Bangers', cursive",
                color: service.accentColor,
              }}
            >
              {service.number}
            </div>
            <div
              className="px-3 py-1 rounded-full text-xs font-bold"
              style={{
                background: `${service.accentColor}12`,
                color: service.accentColor,
                border: `1px solid ${service.accentColor}25`,
                fontFamily: "'Bubblegum Sans', cursive",
              }}
            >
              {service.achievement}
            </div>
          </div>

          {/* Icon */}
          <div className="relative mb-4">
            <div
              ref={iconRef}
              className="relative w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300"
              style={{
                background: `${service.accentColor}08`,
                borderRadius: "14px",
                border: `1px solid ${service.accentColor}15`,
              }}
            >
              <IconComponent
                size={28}
                style={{ color: service.accentColor }}
                className="transition-all duration-300"
              />
            </div>
          </div>

          {/* Title */}
          <h3
            className="text-xl font-bold mb-2"
            style={{
              fontFamily: "'Bubblegum Sans', cursive",
              color: isDark ? "#f0f0f0" : "#1a1a2e",
            }}
          >
            {service.title}
          </h3>

          {/* Description */}
          <p
            className="text-sm leading-relaxed mb-4"
            style={{
              fontFamily: "'Comic Neue', cursive",
              color: isDark ? "#a1a1aa" : "#6b7280",
              lineHeight: "1.5",
            }}
          >
            {service.description}
          </p>

          {/* Tools */}
          <div className="flex flex-wrap gap-2">
            {service.tools.map((tool, i) => (
              <span
                key={tool}
                className="px-2.5 py-1 text-xs rounded-full transition-all duration-200"
                style={{
                  background: isHovered
                    ? `${service.accentColor}15`
                    : isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)",
                  color: service.accentColor,
                  fontFamily: "'Comic Neue', cursive",
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Decorative Corner - only visible on hover */}
        {isHovered && (
          <div
            className="absolute bottom-0 right-0 w-20 h-20 opacity-10 pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${service.accentColor}, transparent)`,
              filter: "blur(18px)",
              transition: "opacity 0.3s ease",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [isDark, setIsDark] = useState(false);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const badgeRef = useRef(null);
  const decorRef = useRef(null);
  const floatingIconsRef = useRef([]);

  const floatingIcons = [Rocket, Star, Award, Sparkles, Zap, Code];

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
      // Section entrance
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Badge animation
      gsap.fromTo(
        badgeRef.current,
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: badgeRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Heading animation - split text effect
      const headingText = headingRef.current;
      if (headingText) {
        const words = headingText.textContent?.split(" ") || [];
        headingText.innerHTML = "";
        words.forEach((word, i) => {
          const span = document.createElement("span");
          span.textContent = word + " ";
          span.style.display = "inline-block";
          span.style.opacity = "0";
          span.style.transform = "translateY(50px) rotateX(90deg)";
          span.style.fontFamily = "'Bubblegum Sans', cursive";
          headingText.appendChild(span);
          gsap.to(span, {
            opacity: 1,
            transform: "translateY(0) rotateX(0)",
            duration: 0.6,
            delay: 0.2 + i * 0.1,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: headingText,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        });
      }

      // Floating icons animation
      floatingIconsRef.current.forEach((el, i) => {
        if (el) {
          gsap.to(el, {
            y: -25,
            x: i % 2 === 0 ? 20 : -20,
            duration: 4 + i,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.3,
          });
          gsap.to(el, {
            rotation: 360,
            duration: 18 + i * 3,
            repeat: -1,
            ease: "linear",
          });
        }
      });

      // Decorative shape animation
      gsap.to(decorRef.current, {
        scale: 1.15,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
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
          ? "radial-gradient(ellipse at top, #1a0f2a 0%, #0a0a0f 100%)"
          : "radial-gradient(ellipse at top, #f8f9ff 0%, #f0f2ff 100%)",
      }}
    >
      {/* Animated Background Elements */}
      <div
        ref={decorRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-25 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.15), rgba(236,72,153,0.06))",
          filter: "blur(80px)",
        }}
      />

      {/* Floating Icons Background */}
      {floatingIcons.map((Icon, i) => (
        <div
          key={i}
          ref={(el) => (floatingIconsRef.current[i] = el)}
          className="absolute pointer-events-none"
          style={{
            top: `${12 + (i * 10)}%`,
            left: `${3 + (i * 12)}%`,
            opacity: 0.04,
          }}
        >
          <Icon size={40 + i * 10} />
        </div>
      ))}

      {/* Animated Gradient Orbs */}
      <div
        className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, #ec4899, transparent)",
          filter: "blur(60px)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-20 right-10 w-72 h-72 rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, #a855f7, transparent)",
          filter: "blur(60px)",
          animation: "float 10s ease-in-out infinite reverse",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div ref={badgeRef} className="inline-block mb-5">
            <span
              className="inline-flex items-center gap-2.5 px-6 py-2.5 font-bold text-sm tracking-wider"
              style={{
                fontFamily: "'Bubblegum Sans', cursive",
                borderRadius: "25px 8px 25px 8px",
                boxShadow: "6px 6px 0px rgba(168,85,247,0.15)",
                border: "2px dashed #a855f7",
                color: "#a855f7",
                background: isDark ? "rgba(168, 85, 247, 0.1)" : "rgba(168, 85, 247, 0.06)",
              }}
            >
              <Zap size={15} />
              WHAT I OFFER
              <Sparkles size={15} />
            </span>
          </div>

          <h2
            ref={headingRef}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-5"
            style={{ fontFamily: "'Bubblegum Sans', cursive", color: isDark ? "#f5f5f5" : "#1a1a2e" }}
          >
            My Services
          </h2>

          <p
            className="text-base max-w-xl mx-auto leading-relaxed"
            style={{
              fontFamily: "'Comic Neue', cursive",
              color: isDark ? "#a1a1aa" : "#6b7280",
            }}
          >
            From concept to deployment, I bring your digital vision to life with modern technologies and creative solutions.
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {["#ec4899", "#a855f7", "#10b981", "#f59e0b", "#6366f1", "#06b6d4"].map((color, i) => (
              <div
                key={i}
                className="h-1 rounded-full transition-all duration-300"
                style={{
                  width: i === 2 ? "40px" : "20px",
                  background: color,
                  animation: `pulse-width ${2 + i * 0.3}s ease-in-out infinite`,
                  boxShadow: `0 0 8px ${color}`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Services Grid - 3x2 Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isDark={isDark}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center p-10 rounded-3xl relative overflow-hidden group/cta" style={{
          background: isDark ? "linear-gradient(135deg, rgba(168,85,247,0.1), rgba(236,72,153,0.06))" : "linear-gradient(135deg, rgba(168,85,247,0.06), rgba(236,72,153,0.03))",
          border: `2px solid ${isDark ? "rgba(168,85,247,0.15)" : "rgba(168,85,247,0.1)"}`,
          borderRadius: "35px 10px 35px 10px",
        }}>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 mb-4 rounded-full" style={{ background: "#a855f715", border: "1px solid #a855f730" }}>
              <Mail size={15} className="text-purple-400" />
              <span className="text-sm font-bold text-purple-400" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>AVAILABLE FOR PROJECTS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "'Bubblegum Sans', cursive", color: isDark ? "#f5f5f5" : "#1a1a2e" }}>
              Got a project in{" "}
              <span style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                mind?
              </span>
            </h3>
            <p className="text-sm mb-6" style={{ fontFamily: "'Comic Neue', cursive", color: isDark ? "#a1a1aa" : "#6b7280" }}>
              I would love to hear about your ideas. Whether it is a fresh project or an existing one that needs improvement, let us make it happen together.
            </p>
            <a href="https://mail.google.com/mail/?view=cm&to=basirathumayun@gmail.com&su=Project%20Inquiry&body=Hi%20Basirat%2C%0A%0AI%20have%20a%20project%20idea%20I%20would%20like%20to%20discuss%20with%20you." target="_blank" rel="noopener noreferrer" className="group/btn inline-flex items-center gap-2.5 px-8 py-3 text-white font-bold text-sm transition-all duration-300 hover:scale-105 hover:gap-4" style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)", borderRadius: "25px 8px 25px 8px", boxShadow: "6px 6px 0px rgba(168,85,247,0.25)", fontFamily: "'Bubblegum Sans', cursive" }}>
              Get In Touch <Mail size={15} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>
            <p className="text-center mt-3 text-xs" style={{ fontFamily: "'Comic Neue', cursive", color: isDark ? "#6b7280" : "#9ca3af" }}>
              basirathumayun@gmail.com
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-width {
          0%, 100% { width: 18px; opacity: 0.5; }
          50% { width: 45px; opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(8px); }
        }
      `}</style>
    </section>
  );
}