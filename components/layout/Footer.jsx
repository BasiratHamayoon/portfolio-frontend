"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, ArrowUp, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const InstagramIcon = ({ size = 18 }) => (
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
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
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
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 18 }) => (
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
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

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

export default function Footer() {
  const [isDark, setIsDark] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const footerRef = useRef(null);
  const cardRef = useRef(null);
  const lineRef = useRef(null);
  const logoBlockRef = useRef(null);
  const logoIconRef = useRef(null);
  const emailRef = useRef(null);
  const rightRef = useRef(null);
  const socialsRef = useRef([]);
  const bottomRef = useRef(null);
  const copyRef = useRef(null);
  const topButtonRef = useRef(null);
  const ambientRefs = useRef([]);

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
        cardRef.current,
        {
          y: 80,
          opacity: 0,
          scale: 0.96,
          rotateX: 10,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        logoBlockRef.current,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        emailRef.current,
        { x: -50, opacity: 0, scale: 0.92 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.35,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        rightRef.current,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const socialEls = socialsRef.current.filter(Boolean);
      if (socialEls.length) {
        gsap.fromTo(
          socialEls,
          {
            y: 40,
            opacity: 0,
            scale: 0,
            rotate: -180,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 0.7,
            stagger: 0.1,
            delay: 0.45,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 92%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      gsap.fromTo(
        bottomRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.55,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        copyRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.to(logoIconRef.current, {
        y: -5,
        rotate: 8,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(topButtonRef.current, {
        y: -6,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      ambientRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.to(el, {
          x: i % 2 === 0 ? 14 : -14,
          y: i % 2 === 0 ? -18 : 18,
          scale: 1.15,
          duration: 4 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={footerRef} className="relative py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={cardRef}
          className="relative overflow-hidden"
          style={{
            borderRadius: "34px 34px 22px 22px",
            background: isDark
              ? "linear-gradient(135deg, rgba(10,10,10,0.94), rgba(15,10,30,0.96))"
              : "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(245,244,255,0.96))",
            border: isDark
              ? "1px solid rgba(255,255,255,0.06)"
              : "1px solid rgba(168,85,247,0.12)",
            boxShadow: isDark
              ? "0 25px 80px rgba(0,0,0,0.45)"
              : "0 25px 80px rgba(168,85,247,0.10)",
            backdropFilter: "blur(18px)",
          }}
        >
          <div
            ref={(el) => (ambientRefs.current[0] = el)}
            className="absolute -top-16 -left-10 w-40 h-40 rounded-full blur-3xl opacity-30 pointer-events-none"
            style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
          />
          <div
            ref={(el) => (ambientRefs.current[1] = el)}
            className="absolute -bottom-14 right-8 w-44 h-44 rounded-full blur-3xl opacity-25 pointer-events-none"
            style={{ background: "linear-gradient(135deg, #10b981, #06b6d4)" }}
          />
          <div
            ref={(el) => (ambientRefs.current[2] = el)}
            className="absolute top-8 right-1/4 w-20 h-20 rounded-full blur-2xl opacity-20 pointer-events-none"
            style={{ background: "linear-gradient(135deg, #f59e0b, #ec4899)" }}
          />

          <div
            ref={lineRef}
            className="h-[3px]"
            style={{
              background:
                "linear-gradient(to right, #ec4899 0%, #a855f7 45%, #10b981 100%)",
            }}
          />

          <div className="relative px-6 sm:px-8 lg:px-10 py-8 sm:py-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="flex-1 min-w-0">
                <div ref={logoBlockRef} className="flex flex-col items-start gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      ref={logoIconRef}
                      className="w-12 h-12 flex items-center justify-center text-white font-bold text-xl"
                      style={{
                        background: "linear-gradient(135deg, #a855f7, #ec4899)",
                        borderRadius: "34% 66% 70% 30% / 30% 30% 70% 70%",
                        boxShadow: "0 10px 30px rgba(168,85,247,0.35)",
                        fontFamily: "'Bubblegum Sans', cursive",
                      }}
                    >
                      B
                    </div>

                    <div>
                      <h3
                        className="text-2xl sm:text-3xl font-bold leading-none"
                        style={{
                          fontFamily: "'Bubblegum Sans', cursive",
                          background: "linear-gradient(to right, #a855f7, #ec4899)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        Basirat
                      </h3>
                      <p
                        className="text-xs sm:text-sm mt-1"
                        style={{
                          fontFamily: "'Comic Neue', cursive",
                          color: isDark ? "#9ca3af" : "#6b7280",
                        }}
                      >
                        MERN Stack Developer crafting modern web experiences
                      </p>
                    </div>
                  </div>

                  <a
                    ref={emailRef}
                    href="https://mail.google.com/mail/?view=cm&to=basirathumayun@gmail.com&su=Hello%20Basirat&body=Hi%20Basirat%2C%0A%0AI%20would%20like%20to%20connect%20with%20you."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-3 no-underline transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5"
                    style={{
                      background: isDark
                        ? "rgba(168,85,247,0.10)"
                        : "rgba(168,85,247,0.06)",
                      border: "1px dashed rgba(168,85,247,0.35)",
                      borderRadius: "18px 6px 18px 6px",
                      boxShadow: "4px 4px 0px rgba(168,85,247,0.10)",
                    }}
                  >
                    <div
                      className="w-8 h-8 flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, #a855f7, #ec4899)",
                        borderRadius: "10px 3px 10px 3px",
                        color: "#fff",
                      }}
                    >
                      <Mail size={14} />
                    </div>
                    <div className="flex flex-col items-start leading-none">
                      <span
                        className="text-[10px] uppercase tracking-widest font-bold"
                        style={{
                          fontFamily: "'Comic Neue', cursive",
                          color: "#a855f7",
                        }}
                      >
                        Email Me
                      </span>
                      <span
                        className="text-sm sm:text-base font-bold"
                        style={{
                          fontFamily: "'Comic Neue', cursive",
                          color: isDark ? "#e5e7eb" : "#374151",
                        }}
                      >
                        basirathumayun@gmail.com
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              <div
                ref={rightRef}
                className="flex flex-col items-start lg:items-end gap-4"
              >
                <div className="text-left lg:text-right">
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 mb-2"
                    style={{
                      borderRadius: "14px 5px 14px 5px",
                      background: isDark
                        ? "rgba(236,72,153,0.10)"
                        : "rgba(236,72,153,0.06)",
                      border: "1px solid rgba(236,72,153,0.20)",
                    }}
                  >
                    <Sparkles size={14} style={{ color: "#ec4899" }} />
                    <span
                      className="text-xs font-bold tracking-wider"
                      style={{
                        fontFamily: "'Comic Neue', cursive",
                        color: "#ec4899",
                      }}
                    >
                      LET&apos;S CONNECT
                    </span>
                  </div>

                  <p
                    className="text-sm"
                    style={{
                      fontFamily: "'Comic Neue', cursive",
                      color: isDark ? "#9ca3af" : "#6b7280",
                    }}
                  >
                    Open for freelance, remote roles, and collaborations
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {socialLinks.map((social, i) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      ref={(el) => (socialsRef.current[i] = el)}
                      className="group p-3.5 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                      style={{
                        backgroundColor:
                          hoveredSocial === i
                            ? `${social.hoverColor}20`
                            : isDark
                            ? "rgba(255,255,255,0.05)"
                            : "rgba(0,0,0,0.04)",
                        color:
                          hoveredSocial === i
                            ? social.hoverColor
                            : isDark
                            ? "#9ca3af"
                            : "#6b7280",
                        border: `1px solid ${
                          hoveredSocial === i
                            ? `${social.hoverColor}40`
                            : isDark
                            ? "rgba(255,255,255,0.08)"
                            : "rgba(0,0,0,0.06)"
                        }`,
                        borderRadius:
                          i % 2 === 0 ? "16px 5px 16px 5px" : "5px 16px 5px 16px",
                        boxShadow:
                          hoveredSocial === i
                            ? `5px 5px 0px ${social.hoverColor}18`
                            : "0 0 0 transparent",
                        backdropFilter: "blur(10px)",
                      }}
                      onMouseEnter={() => setHoveredSocial(i)}
                      onMouseLeave={() => setHoveredSocial(null)}
                      aria-label={social.label}
                    >
                      <social.icon size={19} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div
              ref={bottomRef}
              className="mt-8 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4"
              style={{
                borderTop: isDark
                  ? "1px solid rgba(255,255,255,0.06)"
                  : "1px solid rgba(168,85,247,0.10)",
              }}
            >
              <p
                ref={copyRef}
                className="text-center sm:text-left text-sm"
                style={{
                  fontFamily: "'Comic Neue', cursive",
                  color: isDark ? "#9ca3af" : "#6b7280",
                }}
              >
                Crafted and designed by{" "}
                <span
                  className="font-bold"
                  style={{ color: isDark ? "#c084fc" : "#7c3aed" }}
                >
                  Basirat Hamayoon
                </span>{" "}
                © {new Date().getFullYear()}
              </p>

              <button
                ref={topButtonRef}
                onClick={scrollToTop}
                className="flex items-center gap-2 px-4 py-2.5 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #a855f7, #ec4899)",
                  color: "#fff",
                  borderRadius: "14px 5px 14px 5px",
                  boxShadow: "5px 5px 0px rgba(168,85,247,0.22)",
                  fontFamily: "'Comic Neue', cursive",
                }}
                aria-label="Scroll to top"
              >
                <ArrowUp size={16} />
                <span className="text-sm font-bold">Back to top</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}