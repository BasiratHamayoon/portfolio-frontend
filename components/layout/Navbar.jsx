"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { Menu, X, Home, Zap, FolderKanban, MessageCircle, ArrowRight } from "lucide-react";
import ThemeToggle from "@/components/common/ThemeToggle";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Services", href: "#services", icon: Zap },
  { name: "Projects", href: "#projects", icon: FolderKanban },
];

const socialLinks = [
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/basirat_humayun2?igsh=MjNuMHMya2Zhd2Jr",
    hoverColor: "#ec4899",
    label: "Instagram",
  },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/basirat-humayun-a8083a259",
    hoverColor: "#2563eb",
    label: "LinkedIn",
  },
  {
    icon: GithubIcon,
    href: "https://github.com/BasiratHamayoon?tab=overview&from=2024-01-01&to=2024-01-21",
    hoverColor: "#6b7280",
    label: "GitHub",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [isDark, setIsDark] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const socialsRef = useRef([]);
  const buttonRef = useRef(null);

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
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 100);

      const sections = ["home", "services", "projects"];
      let current = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }

      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
      );

      gsap.fromTo(
        logoRef.current,
        { x: -50, opacity: 0, scale: 0.5, rotation: -10 },
        {
          x: 0, opacity: 1, scale: 1, rotation: 0,
          duration: 1, delay: 0.3, ease: "back.out(1.7)",
        }
      );

      linksRef.current.forEach((el, i) => {
        if (el) {
          gsap.fromTo(
            el,
            { y: -30, opacity: 0, scale: 0.8 },
            {
              y: 0, opacity: 1, scale: 1,
              duration: 0.6, delay: 0.5 + i * 0.15, ease: "back.out(1.7)",
            }
          );
        }
      });

      socialsRef.current.forEach((el, i) => {
        if (el) {
          gsap.fromTo(
            el,
            { scale: 0, rotation: -180 },
            {
              scale: 1, rotation: 0,
              duration: 0.6, delay: 0.8 + i * 0.1, ease: "back.out(2)",
            }
          );
        }
      });

      if (buttonRef.current) {
        gsap.fromTo(
          buttonRef.current,
          { x: 50, opacity: 0, scale: 0.5 },
          {
            x: 0, opacity: 1, scale: 1,
            duration: 0.8, delay: 1.1, ease: "elastic.out(1, 0.5)",
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const getActiveLinkColor = (linkHref) => {
    const sectionName = linkHref.replace("#", "");
    if (activeSection === sectionName) {
      return "#a855f7";
    }
    return scrolled
      ? isDark ? "#d1d5db" : "#374151"
      : isDark ? "#e5e7eb" : "#1f2937";
  };

  const isLinkActive = (linkHref) => {
    return activeSection === linkHref.replace("#", "");
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled
          ? isDark
            ? "rgba(10, 10, 10, 0.85)"
            : "rgba(255, 255, 255, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.1)" : "none",
      }}
    >
      <div
        className="h-1 transition-opacity duration-500"
        style={{
          background: "linear-gradient(to right, #ec4899, #a855f7, #10b981)",
          opacity: scrolled ? 1 : 0,
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">

          <Link
            href="/"
            ref={logoRef}
            className="flex items-center gap-2 group no-underline"
          >
            <div className="relative">
              <div
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white font-bold text-lg md:text-xl transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, #a855f7, #ec4899)",
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                  boxShadow: "0 4px 15px rgba(168, 85, 247, 0.4)",
                }}
              >
                B
              </div>
            </div>
            <div className="hidden sm:block">
              <span
                className="text-lg md:text-xl font-bold"
                style={{
                  fontFamily: "'Bubblegum Sans', cursive",
                  background: "linear-gradient(to right, #a855f7, #ec4899, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Basirat
              </span>
              <span
                className="text-xs block -mt-1 tracking-wider"
                style={{
                  fontFamily: "'Comic Neue', cursive",
                  color: scrolled
                    ? isDark ? "#9ca3af" : "#6b7280"
                    : isDark ? "#d1d5db" : "#4b5563",
                }}
              >
                MERN Developer
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                ref={(el) => (linksRef.current[i] = el)}
                className="relative px-4 py-2 rounded-xl no-underline transition-all duration-300 group"
                style={{
                  fontFamily: "'Comic Neue', cursive",
                  color: getActiveLinkColor(link.href),
                }}
              >
                <span className="relative z-10 flex items-center gap-1.5 font-bold text-sm tracking-wide">
                  <link.icon
                    size={16}
                    className="transition-all group-hover:scale-110"
                    style={{
                      color: isLinkActive(link.href) ? "#a855f7" : "inherit",
                    }}
                  />
                  {link.name}
                </span>
                <span
                  className="absolute inset-0 rounded-xl transition-transform duration-300 origin-center"
                  style={{
                    backgroundColor: "rgba(168, 85, 247, 0.1)",
                    transform: isLinkActive(link.href) ? "scale(1)" : "scale(0)",
                  }}
                />
                <span
                  className="absolute bottom-0 left-1/2 h-0.5 rounded-full transition-all duration-300"
                  style={{
                    width: isLinkActive(link.href) ? "75%" : "0%",
                    transform: "translateX(-50%)",
                    background: "linear-gradient(to right, #a855f7, #ec4899)",
                  }}
                />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div
              className="flex items-center gap-1 px-3 py-1.5 rounded-full border transition-all duration-500"
              style={{
                backgroundColor: scrolled
                  ? isDark ? "rgba(31, 41, 55, 0.8)" : "rgba(249, 250, 251, 0.8)"
                  : isDark ? "rgba(0, 0, 0, 0.3)" : "rgba(255, 255, 255, 0.5)",
                borderColor: scrolled
                  ? isDark ? "rgba(75, 85, 99, 0.5)" : "rgba(229, 231, 235, 0.8)"
                  : "rgba(255, 255, 255, 0.3)",
              }}
            >
              {socialLinks.map((social, i) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={(el) => (socialsRef.current[i] = el)}
                  className="p-2 rounded-full transition-all duration-300 hover:scale-125 hover:rotate-12"
                  style={{
                    color: hoveredSocial === i
                      ? social.hoverColor
                      : scrolled
                        ? isDark ? "#d1d5db" : "#374151"
                        : isDark ? "#e5e7eb" : "#1f2937",
                  }}
                  onMouseEnter={() => setHoveredSocial(i)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>

            <ThemeToggle />

            <a
              href="https://mail.google.com/mail/?view=cm&to=basirathumayun@gmail.com&su=Hello%20Basirat&body=Hi%20Basirat%2C%0A%0AI%20would%20like%20to%20connect%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              ref={buttonRef}
              className="relative group no-underline"
            >
              <div
                className="absolute -inset-1 rounded-2xl blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(to right, #a855f7, #ec4899, #a855f7)",
                }}
              />
              <div
                className="relative px-5 py-2.5 text-white font-bold text-sm flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(to right, #a855f7, #ec4899)",
                  fontFamily: "'Comic Neue', cursive",
                  borderRadius: "20px 8px 20px 8px",
                  boxShadow: "0 4px 15px rgba(168, 85, 247, 0.3)",
                }}
              >
                <MessageCircle size={16} />
                Let&apos;s Connect
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </div>
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl transition-transform hover:scale-110"
              style={{
                backgroundColor: "rgba(168, 85, 247, 0.1)",
                color: "#a855f7",
              }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className="md:hidden overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: mobileOpen ? "500px" : "0px",
          opacity: mobileOpen ? 1 : 0,
        }}
      >
        <div
          className="px-6 pb-6 pt-2 border-t"
          style={{
            backgroundColor: isDark
              ? "rgba(10, 10, 10, 0.95)"
              : "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(20px)",
            borderColor: "rgba(168, 85, 247, 0.1)",
          }}
        >
          <div className="space-y-1 mb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl no-underline transition-all duration-300"
                style={{
                  fontFamily: "'Comic Neue', cursive",
                  color: isLinkActive(link.href) ? "#a855f7" : isDark ? "#d1d5db" : "#374151",
                  backgroundColor: isLinkActive(link.href)
                    ? "rgba(168, 85, 247, 0.1)"
                    : "transparent",
                }}
              >
                <link.icon size={20} />
                <span className="font-bold">{link.name}</span>
                {isLinkActive(link.href) && (
                  <span
                    className="ml-auto w-2 h-2 rounded-full"
                    style={{ backgroundColor: "#a855f7" }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 mb-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border transition-all duration-300 hover:scale-110"
                style={{
                  borderColor: isDark
                    ? "rgba(75, 85, 99, 0.5)"
                    : "rgba(229, 231, 235, 0.8)",
                  color: isDark ? "#d1d5db" : "#374151",
                }}
              >
                <social.icon />
              </a>
            ))}
          </div>

          <a
            href="https://mail.google.com/mail/?view=cm&to=basirathumayun@gmail.com&su=Hello%20Basirat&body=Hi%20Basirat%2C%0A%0AI%20would%20like%20to%20connect%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 w-full text-center px-5 py-3 text-white font-bold no-underline transition-all duration-300"
            style={{
              background: "linear-gradient(to right, #a855f7, #ec4899)",
              fontFamily: "'Comic Neue', cursive",
              borderRadius: "20px 8px 20px 8px",
            }}
          >
            <MessageCircle size={16} />
            Let&apos;s Connect
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </nav>
  );
}