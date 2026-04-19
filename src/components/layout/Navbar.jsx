// src/components/layout/Navbar.jsx
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useStore } from "@/store/useStore";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { ColorSwitcher } from "@/components/theme/ColorSwitcher";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { Button } from "@/components/ui/button";
import { Menu, ExternalLink, X } from "lucide-react";

const navLinks = [
  { name: "Home",         href: "#hero"         },
  { name: "About",        href: "#about"        },
  { name: "Experience",   href: "#experience"   },
  { name: "Skills",       href: "#skills"       },
  { name: "Projects",     href: "#projects"     },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact",      href: "#contact"      },
];

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useStore((s) => s.activeSection);
  const { cv, fetchCv } = useStore();

  useScrollSpy([
    "hero", "about", "experience", "skills",
    "projects", "certificates", "contact",
  ]);

  useEffect(() => {
    fetchCv();
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchCv]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleViewCv = () => {
    if (!cv?.resumeUrl) return;
    window.open(cv.resumeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#hero"
            className="text-2xl font-black tracking-wider text-foreground hover:text-primary transition-colors"
          >
            BASIRAT<span className="text-primary">.</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 text-sm font-semibold transition-colors cursor-pointer rounded-full ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-primary/10 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </button>
              );
            })}
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center gap-2">

            {/* Desktop: Color + Theme + Resume */}
            <div className="hidden lg:flex items-center gap-2">
              <ColorSwitcher />
              <ThemeToggle />
              {cv && (
                <Button
                  onClick={handleViewCv}
                  size="sm"
                  className="rounded-full px-5 shadow-lg shadow-primary/20
                             hover:shadow-primary/40 transition-all hover:scale-105 cursor-pointer ml-1"
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> Resume
                </Button>
              )}
            </div>

            {/* Tablet: Resume button only */}
            {cv && (
              <Button
                onClick={handleViewCv}
                size="sm"
                className="hidden sm:flex lg:hidden rounded-full px-4 shadow-lg shadow-primary/20
                           hover:shadow-primary/40 transition-all hover:scale-105 cursor-pointer"
              >
                <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Resume
              </Button>
            )}

            {/* Mobile: Theme Toggle + Burger — always visible below lg */}
            <div className="flex items-center gap-1.5 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                className="h-10 w-10 flex items-center justify-center rounded-full
                           hover:bg-accent hover:text-accent-foreground
                           transition-colors cursor-pointer border border-border/50"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* ═══════════════════════════════════════════════
          Custom Mobile Sidebar — NO Sheet component
          ═══════════════════════════════════════════════ */}

      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden"
        initial={false}
        animate={{ opacity: mobileOpen ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        style={{ pointerEvents: mobileOpen ? "auto" : "none" }}
        onClick={() => setMobileOpen(false)}
      />

      {/* Sidebar Panel */}
      <motion.aside
        className="fixed top-0 right-0 bottom-0 z-[70] w-72 bg-background border-l border-border/50
                   shadow-2xl flex flex-col lg:hidden"
        initial={{ x: "100%" }}
        animate={{ x: mobileOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Header */}
        <div className="p-5 border-b border-border/50 flex items-center justify-between shrink-0">
          <span className="text-lg font-black text-primary tracking-wider">BASIRAT.</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="h-8 w-8 rounded-full flex items-center justify-center
                       hover:bg-muted transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold
                            transition-all cursor-pointer ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Bottom Controls */}
        <div className="p-4 border-t border-border/50 space-y-4 shrink-0">
          {/* Color Switcher */}
          <div>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-2">
              Accent Color
            </span>
            <ColorSwitcher />
          </div>

          {/* Resume Button */}
          {cv && (
            <Button
              onClick={() => {
                handleViewCv();
                setMobileOpen(false);
              }}
              size="sm"
              className="w-full rounded-xl cursor-pointer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Resume
            </Button>
          )}
        </div>
      </motion.aside>
    </>
  );
}