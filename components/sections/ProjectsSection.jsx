"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import {
  FolderKanban,
  ExternalLink,
  Sparkles,
  Users,
  ShoppingBag,
  Layers,
  ArrowRight,
  Globe,
  Code,
  Palette,
  X,
  Award,
  Rocket,
  Heart,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const GithubIcon = ({ size = 18, className = "", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Branch LMS",
    subtitle: "Learning Management System",
    description: "A comprehensive Learning Management System featuring separate portals for Admin, HR, Account, Teachers, and Students. Each role has a tailored dashboard with specific functionalities, full backend integration, bilingual support (Arabic/English), and dark/light theme.",
    fullDescription: "A comprehensive Learning Management System featuring separate portals for Admin, HR, Account, Teachers, and Students. Each role has a tailored dashboard with specific functionalities, full backend integration, bilingual support (Arabic/English), and dark/light theme.",
    category: "Full Stack Application",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "i18next", "Tailwind CSS", "JWT Auth"],
    features: [
      "5 Role-based Portals (Admin, HR, Account, Teacher, Student)",
      "Dual Language Support (Arabic & English)",
      "Dark/Light Theme Toggle",
      "Real-time Data Integration",
      "Complete Backend API Integration",
      "Responsive Design for All Devices",
    ],
    githubLinks: {
      admin: "https://github.com/tribyteorg/branch-admin-frontend",
      hr: "https://github.com/tribyteorg/branch-hr-frontend",
      account: "https://github.com/tribyteorg/branch-account-frontend",
      teacher: "https://github.com/tribyteorg/branch-teachers-frontend",
      student: "https://github.com/tribyteorg/branch-student-frontend",
    },
    images: ["/p11.png", "/p12.png", "/p13.png"],
    gradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
    accentColor: "#10b981",
    glowColor: "#34d399",
    darkBg: "rgba(2, 44, 34, 0.95)",
    lightBg: "rgba(240, 253, 244, 0.95)",
    icon: Users,
    number: "01",
    stats: [
      { label: "User Portals", value: "5" },
      { label: "Languages", value: "2" },
      { label: "Modules", value: "20+" },
    ],
    modules: ["Admin Panel", "HR Management", "Accounts", "Teacher Dashboard", "Student Portal"],
  },
  {
    id: 2,
    title: "Tribyte Solutions",
    subtitle: "Official Corporate Website",
    description: "A complete corporate website for Tribyte Solutions featuring an admin dashboard for content management, user-side interface, and robust backend integration. Built with modern technologies for optimal performance and user experience.",
    fullDescription: "A complete corporate website for Tribyte Solutions featuring an admin dashboard for content management, user-side interface, and robust backend integration. Built with modern technologies for optimal performance and user experience.",
    category: "Corporate Website",
    technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Framer Motion"],
    features: [
      "Admin Dashboard with Full Control",
      "Dynamic Content Management",
      "User-side Interface",
      "Complete Backend API",
      "SEO Optimized",
      "Responsive Design",
    ],
    githubLinks: {},
    images: ["/p21.png", "/p22.png", "/p23.png"],
    gradient: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
    accentColor: "#ec4899",
    glowColor: "#f472b6",
    darkBg: "rgba(44, 14, 30, 0.95)",
    lightBg: "rgba(253, 242, 248, 0.95)",
    icon: Globe,
    number: "02",
    stats: [
      { label: "Pages", value: "12+" },
      { label: "API Endpoints", value: "30+" },
      { label: "Dynamic Sections", value: "15+" },
    ],
  },
  {
    id: 3,
    title: "نظر للبصريات",
    subtitle: "Optical E-commerce Platform",
    description: "A sophisticated optical store e-commerce platform featuring an admin dashboard for managing products, orders, inventory, and customer data, along with a complete user-facing website for seamless shopping experience with multilingual support.",
    fullDescription: "A sophisticated optical store e-commerce platform featuring an admin dashboard for managing products, orders, inventory, and customer data, along with a complete user-facing website for seamless shopping experience.",
    category: "E-commerce Platform",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "i18next", "Tailwind CSS", "Redux Toolkit"],
    features: [
      "Admin Dashboard for Product Management",
      "User-facing E-commerce Website",
      "Order Tracking System",
      "Inventory Management",
      "Customer Management",
      "Bilingual Support (Arabic/English)",
      "Dark/Light Theme",
      "Secure Authentication",
    ],
    githubLinks: {
      admin: "https://github.com/tribyteorg/glasses_admin_frontend",
      user: "https://github.com/tribyteorg/glasses_user_frontend",
    },
    images: ["/p31.png", "/p32.png", "/p33.png"],
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
    accentColor: "#8b5cf6",
    glowColor: "#a78bfa",
    darkBg: "rgba(30, 27, 75, 0.95)",
    lightBg: "rgba(245, 243, 255, 0.95)",
    icon: ShoppingBag,
    number: "03",
    stats: [
      { label: "System Modules", value: "8+" },
      { label: "Languages", value: "2" },
      { label: "Products Managed", value: "1000+" },
    ],
    modules: ["Admin Panel", "User Dashboard", "Order Management", "Inventory Control", "Customer Management"],
  },
];

function ImageSlider({ images, accentColor }) {
  const [current, setCurrent] = useState(0);
  const imgRef = useRef(null);

  const goTo = (idx) => {
    gsap.to(imgRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.25,
      onComplete: () => {
        setCurrent(idx);
        gsap.to(imgRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.35,
          ease: "back.out(1.4)",
        });
      },
    });
  };

  const next = () => goTo((current + 1) % images.length);

  useEffect(() => {
    const timer = setInterval(() => next(), 3500);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div ref={imgRef} className="relative w-full h-full">
        <Image
          src={images[current]}
          alt="Project screenshot"
          fill
          className="object-contain p-3"
          sizes="(max-width: 1024px) 100vw, 45vw"
          priority
        />
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="transition-all duration-300"
              style={{
                width: i === current ? "20px" : "6px",
                height: "6px",
                borderRadius: "4px",
                backgroundColor: i === current ? accentColor : `${accentColor}60`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, index, isDark }) {
  const [isHovered, setIsHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null);
  const numberRef = useRef(null);
  const expandedRef = useRef(null);
  const IconComponent = project.icon;
  const isEven = index % 2 === 0;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        {
          x: isEven ? -150 : 150,
          opacity: 0,
          rotateY: isEven ? -20 : 20,
          scale: 0.88,
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
        { x: isEven ? -60 : 60, opacity: 0, scale: 0.5 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
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
  }, [index, isEven]);

  const handleExpand = () => {
    if (!expanded) {
      setExpanded(true);
      setTimeout(() => {
        if (expandedRef.current) {
          gsap.fromTo(
            expandedRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
          );
        }
        cardRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 50);
    } else {
      setExpanded(false);
      setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 50);
    }
  };
  

  return (
    <div
      ref={cardRef}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: "1500px" }}
    >
      <div
        className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none"
        style={{ background: project.gradient }}
      />

      <div
        className="relative overflow-hidden transition-all duration-500"
        style={{
          borderRadius: isEven ? "40px 12px 40px 12px" : "12px 40px 12px 40px",
          backgroundColor: isDark ? project.darkBg : project.lightBg,
          backdropFilter: "blur(20px)",
          border: `2px solid ${isHovered ? project.accentColor + "60" : project.accentColor + "20"}`,
          boxShadow: isHovered
            ? `0 30px 70px -20px ${project.glowColor}60, 0 0 0 1px ${project.accentColor}20`
            : "0 8px 30px rgba(0,0,0,0.1)",
          transform: isHovered ? "translateY(-6px)" : "translateY(0)",
          transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        }}
      >
        <div
          ref={numberRef}
          className="absolute select-none pointer-events-none font-extrabold"
          style={{
            fontFamily: "'Bangers', cursive",
            fontSize: "120px",
            lineHeight: 1,
            color: project.accentColor,
            opacity: 0.04,
            top: isEven ? "-10px" : "auto",
            bottom: isEven ? "auto" : "-10px",
            right: isEven ? "-10px" : "auto",
            left: isEven ? "auto" : "-10px",
            letterSpacing: "4px",
          }}
        >
          {project.number}
        </div>

        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            width: "300px",
            height: "300px",
            background: `radial-gradient(circle, ${project.accentColor}15, transparent)`,
            top: isEven ? "-100px" : "auto",
            bottom: isEven ? "auto" : "-100px",
            right: isEven ? "-100px" : "auto",
            left: isEven ? "auto" : "-100px",
            filter: "blur(40px)",
          }}
        />

        {!expanded ? (
          <div className="flex flex-col lg:flex-row">
            <div
              className="relative overflow-hidden flex-shrink-0 lg:w-2/5"
              style={{
                height: "300px",
                borderRadius: isEven ? "38px 0 0 38px" : "0 38px 38px 0",
              }}
            >
              <div
                className="w-full h-full"
                style={{
                  background: isDark
                    ? `linear-gradient(135deg, ${project.accentColor}20, ${project.accentColor}05)`
                    : `linear-gradient(135deg, ${project.accentColor}12, ${project.accentColor}03)`,
                }}
              >
                <ImageSlider
                  images={project.images}
                  accentColor={project.accentColor}
                />
              </div>

              <div
                className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{
                  fontFamily: "'Comic Neue', cursive",
                  backgroundColor: `${project.accentColor}25`,
                  backdropFilter: "blur(10px)",
                  border: `1px solid ${project.accentColor}50`,
                  color: project.accentColor,
                }}
              >
                <IconComponent size={11} />
                {project.category}
              </div>
            </div>

            <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between relative z-10">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: project.gradient,
                          boxShadow: `3px 3px 0px ${project.accentColor}30`,
                          borderRadius: isEven ? "12px 4px 12px 4px" : "4px 12px 4px 12px",
                        }}
                      >
                        <IconComponent size={16} color="#fff" />
                      </div>
                      <span
                        className="text-xs font-bold tracking-wider"
                        style={{
                          fontFamily: "'Comic Neue', cursive",
                          color: project.accentColor,
                        }}
                      >
                        {project.subtitle}
                      </span>
                    </div>

                    <h3
                      className="text-2xl sm:text-3xl font-extrabold leading-tight mb-1"
                      style={{
                        fontFamily: "'Bubblegum Sans', cursive",
                        color: isDark ? "#f5f5f5" : "#1a1a2e",
                      }}
                    >
                      {project.title}
                    </h3>
                  </div>

                  <div
                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center font-extrabold text-lg transition-all duration-300"
                    style={{
                      fontFamily: "'Bangers', cursive",
                      letterSpacing: "1px",
                      background: isHovered ? project.gradient : `${project.accentColor}15`,
                      color: isHovered ? "#fff" : project.accentColor,
                      borderRadius: isEven ? "14px 4px 14px 4px" : "4px 14px 4px 14px",
                      boxShadow: isHovered ? `4px 4px 0px ${project.accentColor}30` : "none",
                    }}
                  >
                    {project.number}
                  </div>
                </div>

                <div
                  className="p-4 rounded-2xl text-sm leading-relaxed"
                  style={{
                    fontFamily: "'Comic Neue', cursive",
                    color: isDark ? "#e2e8f0" : "#374151",
                    background: isDark
                      ? `${project.accentColor}12`
                      : `${project.accentColor}08`,
                    borderLeft: `3px solid ${project.accentColor}`,
                    borderTopRightRadius: "16px",
                    borderBottomRightRadius: "16px",
                    borderTopLeftRadius: "4px",
                    borderBottomLeftRadius: "4px",
                  }}
                >
                  {project.description}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech, i) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold transition-all duration-300"
                      style={{
                        fontFamily: "'Comic Neue', cursive",
                        borderRadius: i % 2 === 0 ? "10px 3px 10px 3px" : "3px 10px 3px 10px",
                        background: isHovered
                          ? project.gradient
                          : isDark ? `${project.accentColor}20` : `${project.accentColor}12`,
                        color: isHovered ? "#fff" : project.accentColor,
                        transform: isHovered ? "translateY(-2px)" : "none",
                      }}
                    >
                      <Code size={9} />
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span
                      className="px-2.5 py-1 text-xs font-bold"
                      style={{
                        fontFamily: "'Comic Neue', cursive",
                        color: isDark ? "#6b7280" : "#9ca3af",
                      }}
                    >
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              <div
                className="flex items-center justify-between flex-wrap gap-3 mt-5 pt-4"
                style={{ borderTop: `1px solid ${project.accentColor}15` }}
              >
                <div className="flex items-center gap-5">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div
                        className="text-xl font-extrabold leading-none"
                        style={{
                          fontFamily: "'Bangers', cursive",
                          color: project.accentColor,
                          letterSpacing: "1px",
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        className="text-xs mt-0.5"
                        style={{
                          fontFamily: "'Comic Neue', cursive",
                          color: isDark ? "#6b7280" : "#9ca3af",
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleExpand}
                  className="group/btn flex items-center gap-2 px-5 py-2.5 font-bold text-sm transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                  style={{
                    fontFamily: "'Comic Neue', cursive",
                    borderRadius: isEven ? "16px 5px 16px 5px" : "5px 16px 5px 16px",
                    background: project.gradient,
                    color: "#fff",
                    boxShadow: `4px 4px 0px ${project.accentColor}30`,
                  }}
                >
                  <Sparkles size={14} />
                  View Details
                  <ChevronDown size={14} className="group-hover/btn:translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div ref={expandedRef}>
            <div className="flex flex-col lg:flex-row">
              <div
                className="lg:w-5/12 flex-shrink-0"
                style={{ borderRight: `1px solid ${project.accentColor}15` }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{ height: "280px" }}
                >
                  <div
                    className="w-full h-full"
                    style={{
                      background: isDark
                        ? `linear-gradient(135deg, ${project.accentColor}15, transparent)`
                        : `linear-gradient(135deg, ${project.accentColor}08, transparent)`,
                    }}
                  >
                    <ImageSlider
                      images={project.images}
                      accentColor={project.accentColor}
                    />
                  </div>

                  <div
                    className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                    style={{
                      fontFamily: "'Comic Neue', cursive",
                      backgroundColor: `${project.accentColor}25`,
                      backdropFilter: "blur(10px)",
                      border: `1px solid ${project.accentColor}50`,
                      color: project.accentColor,
                    }}
                  >
                    <IconComponent size={11} />
                    {project.category}
                  </div>
                </div>

                <div
                  className="p-5 space-y-4"
                  style={{ borderTop: `1px solid ${project.accentColor}15` }}
                >
                  <div>
                    <h4
                      className="text-sm font-bold mb-2.5 flex items-center gap-2"
                      style={{
                        fontFamily: "'Bubblegum Sans', cursive",
                        color: isDark ? "#f0f0f0" : "#1f2937",
                      }}
                    >
                      <Rocket size={13} style={{ color: project.accentColor }} />
                      Project Impact
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      {project.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="text-center p-2.5 rounded-xl transition-all hover:scale-105"
                          style={{
                            background: `${project.accentColor}12`,
                            border: `1px solid ${project.accentColor}20`,
                            borderRadius: "12px 4px 12px 4px",
                          }}
                        >
                          <div
                            className="text-lg font-extrabold leading-none"
                            style={{
                              fontFamily: "'Bangers', cursive",
                              color: project.accentColor,
                              letterSpacing: "1px",
                            }}
                          >
                            {stat.value}
                          </div>
                          <div
                            className="text-xs mt-1"
                            style={{
                              fontFamily: "'Comic Neue', cursive",
                              color: isDark ? "#9ca3af" : "#6b7280",
                            }}
                          >
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4
                      className="text-sm font-bold mb-2.5 flex items-center gap-2"
                      style={{
                        fontFamily: "'Bubblegum Sans', cursive",
                        color: isDark ? "#f0f0f0" : "#1f2937",
                      }}
                    >
                      <Code size={13} style={{ color: project.accentColor }} />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-bold transition-all hover:scale-105"
                          style={{
                            fontFamily: "'Comic Neue', cursive",
                            borderRadius: i % 2 === 0 ? "8px 2px 8px 2px" : "2px 8px 2px 8px",
                            background: `${project.accentColor}18`,
                            color: project.accentColor,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.modules && (
                    <div>
                      <h4
                        className="text-sm font-bold mb-2.5 flex items-center gap-2"
                        style={{
                          fontFamily: "'Bubblegum Sans', cursive",
                          color: isDark ? "#f0f0f0" : "#1f2937",
                        }}
                      >
                        <Layers size={13} style={{ color: project.accentColor }} />
                        System Modules
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.modules.map((module) => (
                          <span
                            key={module}
                            className="px-2.5 py-1.5 text-xs rounded-full transition-all hover:scale-105"
                            style={{
                              fontFamily: "'Comic Neue', cursive",
                              background: `${project.accentColor}20`,
                              color: project.accentColor,
                              border: `1px solid ${project.accentColor}30`,
                            }}
                          >
                            {module}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-1 p-6 sm:p-7 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center"
                      style={{
                        background: project.gradient,
                        borderRadius: isEven ? "14px 4px 14px 4px" : "4px 14px 4px 14px",
                        boxShadow: `4px 4px 0px ${project.accentColor}25`,
                      }}
                    >
                      <IconComponent size={20} color="#fff" />
                    </div>
                    <div>
                      <h3
                        className="text-xl sm:text-2xl font-extrabold leading-tight"
                        style={{
                          fontFamily: "'Bubblegum Sans', cursive",
                          color: isDark ? "#f5f5f5" : "#1a1a2e",
                        }}
                      >
                        {project.title}
                      </h3>
                      <span
                        className="text-xs font-bold"
                        style={{
                          fontFamily: "'Comic Neue', cursive",
                          color: project.accentColor,
                        }}
                      >
                        {project.subtitle}
                      </span>
                    </div>
                  </div>

                  <div
                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center font-extrabold text-lg"
                    style={{
                      fontFamily: "'Bangers', cursive",
                      letterSpacing: "1px",
                      background: project.gradient,
                      color: "#fff",
                      borderRadius: isEven ? "14px 4px 14px 4px" : "4px 14px 4px 14px",
                      boxShadow: `4px 4px 0px ${project.accentColor}30`,
                    }}
                  >
                    {project.number}
                  </div>
                </div>

                <div>
                  <h4
                    className="text-sm font-bold mb-2 flex items-center gap-2"
                    style={{
                      fontFamily: "'Bubblegum Sans', cursive",
                      color: isDark ? "#f0f0f0" : "#1f2937",
                    }}
                  >
                    <Heart size={13} style={{ color: project.accentColor }} />
                    About This Project
                  </h4>
                  <p
                    className="text-sm leading-relaxed p-4 rounded-2xl"
                    style={{
                      fontFamily: "'Comic Neue', cursive",
                      color: isDark ? "#e2e8f0" : "#374151",
                      background: `${project.accentColor}08`,
                      borderLeft: `3px solid ${project.accentColor}`,
                      borderTopRightRadius: "18px",
                      borderBottomRightRadius: "18px",
                      borderTopLeftRadius: "4px",
                      borderBottomLeftRadius: "4px",
                    }}
                  >
                    {project.fullDescription}
                  </p>
                </div>

                <div>
                  <h4
                    className="text-sm font-bold mb-2.5 flex items-center gap-2"
                    style={{
                      fontFamily: "'Bubblegum Sans', cursive",
                      color: isDark ? "#f0f0f0" : "#1f2937",
                    }}
                  >
                    <Award size={13} style={{ color: project.accentColor }} />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2 p-2.5 rounded-xl transition-all hover:translate-x-1"
                        style={{
                          fontFamily: "'Comic Neue', cursive",
                          color: isDark ? "#cbd5e1" : "#374151",
                          fontSize: "12px",
                          background: `${project.accentColor}06`,
                          borderRadius: idx % 2 === 0 ? "10px 3px 10px 3px" : "3px 10px 3px 10px",
                        }}
                      >
                        <div
                          className="w-2 h-2 rounded-full mt-0.5 flex-shrink-0"
                          style={{ background: project.gradient }}
                        />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {Object.keys(project.githubLinks).length > 0 && (
                  <div>
                    <h4
                      className="text-sm font-bold mb-2.5 flex items-center gap-2"
                      style={{
                        fontFamily: "'Bubblegum Sans', cursive",
                        color: isDark ? "#f0f0f0" : "#1f2937",
                      }}
                    >
                      <GithubIcon size={13} style={{ color: project.accentColor }} />
                      GitHub Repositories
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(project.githubLinks).map(([role, link]) =>
                        link ? (
                          <a
                            key={role}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 no-underline"
                            style={{
                              fontFamily: "'Comic Neue', cursive",
                              background: `${project.accentColor}15`,
                              color: project.accentColor,
                              border: `1px solid ${project.accentColor}30`,
                              borderRadius: "10px 3px 10px 3px",
                              boxShadow: `2px 2px 0px ${project.accentColor}15`,
                            }}
                          >
                            <GithubIcon size={11} />
                            {role === "admin"
                              ? "Admin Panel"
                              : role === "user"
                                ? "User Website"
                                : role.charAt(0).toUpperCase() + role.slice(1) + " Portal"}
                            <ExternalLink size={10} />
                          </a>
                        ) : null
                      )}
                    </div>
                  </div>
                )}

                <div
                  className="pt-4 mt-2"
                  style={{ borderTop: `1px solid ${project.accentColor}15` }}
                >
                  <button
                    onClick={handleExpand}
                    className="group/btn flex items-center gap-2 px-6 py-2.5 font-bold text-sm transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                    style={{
                      fontFamily: "'Comic Neue', cursive",
                      borderRadius: isEven ? "16px 5px 16px 5px" : "5px 16px 5px 16px",
                      background: `${project.accentColor}15`,
                      color: project.accentColor,
                      border: `2px solid ${project.accentColor}35`,
                      boxShadow: `3px 3px 0px ${project.accentColor}15`,
                    }}
                  >
                    <ChevronUp size={14} />
                    Less Details
                    <X size={14} className="group-hover/btn:rotate-90 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div
          className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"
          style={{ background: project.gradient }}
        />
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [isDark, setIsDark] = useState(false);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const badgeRef = useRef(null);
  const decorRef = useRef(null);
  const floatingElementsRef = useRef([]);

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

      gsap.fromTo(
        badgeRef.current,
        { y: -50, opacity: 0, scale: 0.5, rotation: -15 },
        {
          y: 0,
          opacity: 1,
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
            delay: 0.3 + i * 0.1,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: headingText,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        });
      }

      floatingElementsRef.current.forEach((el, i) => {
        if (el) {
          gsap.to(el, {
            y: -25,
            duration: 3 + i,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.5,
          });
          gsap.to(el, {
            rotation: 360,
            duration: 20 + i * 5,
            repeat: -1,
            ease: "linear",
          });
        }
      });

      gsap.to(decorRef.current, {
        scale: 1.2,
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
      id="projects"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{
        background: isDark
          ? "radial-gradient(ellipse at top, #1a0f2e 0%, #0a0a0f 100%)"
          : "radial-gradient(ellipse at top, #f8f9ff 0%, #f0f2ff 100%)",
      }}
    >
      <div
        ref={decorRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.2), rgba(236,72,153,0.08))",
          filter: "blur(80px)",
        }}
      />

      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          ref={(el) => { if (el) floatingElementsRef.current[i] = el; }}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${15 + i * 12}px`,
            height: `${15 + i * 12}px`,
            background: `linear-gradient(135deg, ${["#10b981", "#ec4899", "#8b5cf6", "#f59e0b", "#06b6d4", "#a855f7", "#34d399", "#f472b6"][i]}, transparent)`,
            top: `${5 + i * 11}%`,
            left: `${(i * 13) % 100}%`,
            opacity: 0.2,
            filter: "blur(10px)",
            boxShadow: `0 0 30px ${["#10b981", "#ec4899", "#8b5cf6"][i % 3]}`,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <div ref={badgeRef} className="inline-block mb-6">
            <span
              className="inline-flex items-center gap-2.5 px-6 py-2.5 font-bold text-sm tracking-wider"
              style={{
                fontFamily: "'Bubblegum Sans', cursive",
                borderRadius: "25px 8px 25px 8px",
                boxShadow: "6px 6px 0px rgba(168,85,247,0.2)",
                border: "2px dashed #a855f7",
                color: "#a855f7",
                background: isDark ? "rgba(168, 85, 247, 0.12)" : "rgba(168, 85, 247, 0.08)",
              }}
            >
              <FolderKanban size={15} />
              MY PORTFOLIO
              <Sparkles size={15} />
            </span>
          </div>

          <h2
            ref={headingRef}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-5"
            style={{
              fontFamily: "'Bubblegum Sans', cursive",
              color: isDark ? "#f5f5f5" : "#1a1a2e",
            }}
          >
            Featured Projects
          </h2>

          <p
            className="text-base max-w-xl mx-auto leading-relaxed"
            style={{
              fontFamily: "'Comic Neue', cursive",
              color: isDark ? "#a1a1aa" : "#6b7280",
            }}
          >
            Here are some of my recent works. Each project is built with passion and attention to detail.
          </p>

          <div className="flex items-center justify-center gap-2.5 mt-8">
            {["#10b981", "#ec4899", "#8b5cf6", "#f59e0b", "#06b6d4", "#a855f7"].map((color, i) => (
              <div
                key={i}
                className="h-1.5 rounded-full"
                style={{
                  width: i === 2 ? "40px" : "20px",
                  background: color,
                  boxShadow: `0 0 8px ${color}`,
                  animation: `pulse-width ${2 + i * 0.3}s ease-in-out infinite`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isDark={isDark}
            />
          ))}
        </div>

        <div
          className="mt-20 text-center p-10 relative overflow-hidden group/cta"
          style={{
            background: isDark
              ? "linear-gradient(135deg, rgba(168,85,247,0.12), rgba(236,72,153,0.08))"
              : "linear-gradient(135deg, rgba(168,85,247,0.08), rgba(236,72,153,0.05))",
            border: `2px solid ${isDark ? "rgba(168,85,247,0.2)" : "rgba(168,85,247,0.15)"}`,
            borderRadius: "45px 12px 45px 12px",
          }}
        >
          <div
            className="absolute inset-0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background: "radial-gradient(circle at center, rgba(168,85,247,0.1), transparent)",
            }}
          />
          <div className="relative z-10">
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 mb-4 rounded-full"
              style={{ background: "#a855f720", border: "1px solid #a855f740" }}
            >
              <Palette size={15} className="text-purple-400" />
              <span
                className="text-sm font-bold text-purple-400"
                style={{ fontFamily: "'Bubblegum Sans', cursive" }}
              >
                Have a Project Idea?
              </span>
            </div>
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3"
              style={{
                fontFamily: "'Bubblegum Sans', cursive",
                color: isDark ? "#f5f5f5" : "#1a1a2e",
              }}
            >
              Let&apos;s Create Something{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #a855f7, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Amazing Together
              </span>
            </h3>
            <p
              className="text-sm mb-6"
              style={{
                fontFamily: "'Comic Neue', cursive",
                color: isDark ? "#a1a1aa" : "#6b7280",
              }}
            >
              I&apos;m always excited to work on new projects. Let&apos;s bring your vision to life!
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&to=basirathumayun@gmail.com&su=Project%20Inquiry&body=Hi%20Basirat%2C%0A%0AI%20have%20an%20exciting%20project%20idea%20for%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2.5 px-8 py-3 text-white font-bold text-sm transition-all duration-300 hover:scale-105 hover:gap-4 no-underline"
              style={{
                background: "linear-gradient(135deg, #a855f7, #ec4899)",
                borderRadius: "28px 8px 28px 8px",
                boxShadow: "6px 6px 0px rgba(168,85,247,0.3)",
                fontFamily: "'Bubblegum Sans', cursive",
              }}
            >
              Start a Project
              <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-width {
          0%, 100% { width: 15px; opacity: 0.5; }
          50% { width: 45px; opacity: 1; }
        }
      `}</style>
    </section>
  );
}