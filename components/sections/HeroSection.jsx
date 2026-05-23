"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Code, Rocket, Mail, ArrowRight } from "lucide-react";

const slides = [
  {
    bgStyle: "linear-gradient(135deg, #fce7f3, #fecdd3, #ffe4e6)",
    bgStyleDark: "linear-gradient(135deg, #1a0a10, #2a0a15, #1f0a12)",
    accentColor: "#db2777",
    greeting: "Hello World!",
    greetingIcon: Code,
    title: "I'm Basirat",
    subtitle: "Hamayoon",
    description: "A passionate MERN Stack Developer crafting beautiful, responsive web applications that make the internet a more delightful place.",
    tagline: "< Full Stack Developer />",
    buttonGradient: "linear-gradient(to right, #ec4899, #f43f5e)",
    bubbleColors: ["#f9a8d4", "#fda4af", "#f472b6", "#fecdd3"],
  },
  {
    bgStyle: "linear-gradient(135deg, #ede9fe, #e0e7ff, #ddd6fe)",
    bgStyleDark: "linear-gradient(135deg, #0f0a1e, #0c0a1f, #110a1e)",
    accentColor: "#7c3aed",
    greeting: "Welcome!",
    greetingIcon: Rocket,
    title: "I Build",
    subtitle: "Digital Dreams",
    description: "Transforming ideas into powerful web applications using MongoDB, Express.js, React.js & Node.js. Let's create something amazing together!",
    tagline: "{ MERN Stack Magic }",
    buttonGradient: "linear-gradient(to right, #a855f7, #6366f1)",
    bubbleColors: ["#c4b5fd", "#a78bfa", "#818cf8", "#ddd6fe"],
  },
  {
    bgStyle: "linear-gradient(135deg, #d1fae5, #dcfce7, #ccfbf1)",
    bgStyleDark: "linear-gradient(135deg, #0a1e15, #0a1f0c, #0a1e14)",
    accentColor: "#059669",
    greeting: "Let's Connect!",
    greetingIcon: Mail,
    title: "Code With",
    subtitle: "Passion",
    description: "From pixel-perfect frontends to robust backends, I bring creativity & technical excellence to every project I touch.",
    tagline: "/* Creative Coder */",
    buttonGradient: "linear-gradient(to right, #10b981, #14b8a6)",
    bubbleColors: ["#6ee7b7", "#86efac", "#5eead4", "#a7f3d0"],
  },
];

const FloatingBubble = ({ color, size, top, left, delay }) => (
  <div
    className="floating-bubble"
    style={{
      backgroundColor: color,
      width: size,
      height: size,
      top: top,
      left: left,
      animationDelay: delay,
      filter: "blur(1px)",
    }}
  />
);

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const textRef = useRef(null);
  const greetingRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const taglineRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);
  const dotsRef = useRef([]);
  const timelineRef = useRef(null);

  const slide = slides[currentSlide];
  const GreetingIcon = slide.greetingIcon;

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

  const animateSlide = useCallback(() => {
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    const tl = gsap.timeline();
    timelineRef.current = tl;

    tl.fromTo(
      greetingRef.current,
      { y: 40, opacity: 0, scale: 0.8, rotationX: 90 },
      { y: 0, opacity: 1, scale: 1, rotationX: 0, duration: 0.7, ease: "back.out(1.7)" }
    )
      .fromTo(
        titleRef.current,
        { x: -100, opacity: 0, skewX: -10 },
        { x: 0, opacity: 1, skewX: 0, duration: 0.8, ease: "elastic.out(1, 0.5)" },
        "-=0.3"
      )
      .fromTo(
        subtitleRef.current,
        { x: -100, opacity: 0, skewX: -10 },
        { x: 0, opacity: 1, skewX: 0, duration: 0.8, ease: "elastic.out(1, 0.5)" },
        "-=0.5"
      )
      .fromTo(
        taglineRef.current,
        { y: 20, opacity: 0, scale: 0.5 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(2)" },
        "-=0.3"
      )
      .fromTo(
        descRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.2"
      )
      .fromTo(
        buttonsRef.current,
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" },
        "-=0.2"
      );
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { x: 100, opacity: 0, scale: 0.7, rotation: 10 },
        { x: 0, opacity: 1, scale: 1, rotation: 0, duration: 1.2, delay: 0.5, ease: "elastic.out(1, 0.5)" }
      );
      gsap.to(imageRef.current, {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  useEffect(() => {
    animateSlide();
  }, [currentSlide, animateSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    if (index !== currentSlide) {
      gsap.to(textRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.3,
        onComplete: () => setCurrentSlide(index),
      });
    }
  };

  const dotColors = ["#ec4899", "#a855f7", "#10b981"];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 slide-bg"
      style={{
        background: isDark ? slide.bgStyleDark : slide.bgStyle,
        transition: "background 0.8s ease-in-out",
      }}
    >
      {slide.bubbleColors.map((color, i) => (
        <FloatingBubble
          key={`${currentSlide}-bubble-${i}`}
          color={color}
          size={`${40 + i * 25}px`}
          top={`${15 + i * 20}%`}
          left={`${5 + i * 25}%`}
          delay={`${i * 0.5}s`}
        />
      ))}
      <FloatingBubble color={slide.bubbleColors[0]} size="60px" top="70%" left="80%" delay="1s" />
      <FloatingBubble color={slide.bubbleColors[1]} size="35px" top="20%" left="70%" delay="2s" />
      <FloatingBubble color={slide.bubbleColors[2]} size="45px" top="80%" left="15%" delay="1.5s" />

      {[...Array(6)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-2 h-2 rounded-full opacity-40"
          style={{
            backgroundColor: slide.accentColor,
            top: `${10 + Math.random() * 80}%`,
            left: `${Math.random() * 100}%`,
            animation: `float-random ${3 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-80px)]">
          <div ref={textRef} className="order-1 lg:order-1 text-center lg:text-left pb-8 lg:pb-0">
            <div ref={greetingRef} className="inline-block mb-4">
              <span
                className="inline-flex items-center gap-2 px-5 py-2 backdrop-blur-sm font-bold text-sm tracking-wider"
                style={{
                  fontFamily: "'Comic Neue', cursive",
                  borderRadius: "20px 5px 20px 5px",
                  boxShadow: "3px 3px 0px rgba(0,0,0,0.1)",
                  border: `2px dashed ${slide.accentColor}`,
                  color: slide.accentColor,
                  backgroundColor: isDark ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.7)",
                }}
              >
                <GreetingIcon size={16} />
                {slide.greeting}
              </span>
            </div>

            <h1 className="mb-2">
              <span
                ref={titleRef}
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bubble-text leading-tight"
                style={{
                  fontFamily: "'Bubblegum Sans', cursive",
                  color: isDark ? "#f5f5f5" : "#1a1a2e",
                }}
              >
                {slide.title}
              </span>
              <span
                ref={subtitleRef}
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bubble-text leading-tight"
                style={{
                  fontFamily: "'Bubblegum Sans', cursive",
                  color: slide.accentColor,
                }}
              >
                {slide.subtitle}
              </span>
            </h1>

            <div ref={taglineRef} className="mb-4">
              <span
                className="inline-block px-4 py-1.5 font-mono text-sm sm:text-base tracking-wider"
                style={{
                  borderRadius: "10px 3px 10px 3px",
                  color: slide.accentColor,
                  backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
                }}
              >
                {slide.tagline}
              </span>
            </div>

            <p
              ref={descRef}
              className="text-base sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8"
              style={{
                fontFamily: "'Comic Neue', cursive",
                color: isDark ? "#d1d5db" : "#4b5563",
              }}
            >
              {slide.description}
            </p>

            <div ref={buttonsRef} className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group relative px-7 py-3 text-white font-bold text-sm flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 no-underline"
                style={{
                  background: slide.buttonGradient,
                  fontFamily: "'Comic Neue', cursive",
                  borderRadius: "20px 8px 20px 8px",
                  boxShadow: "4px 4px 0px rgba(0,0,0,0.15)",
                }}
              >
                <Rocket size={16} className="group-hover:scale-110 transition-transform" />
                View My Projects
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="mailto:basirathumayun@gmail.com"
                className="group px-7 py-3 backdrop-blur-sm font-bold text-sm flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 no-underline"
                style={{
                  fontFamily: "'Comic Neue', cursive",
                  borderRadius: "8px 20px 8px 20px",
                  boxShadow: "4px 4px 0px rgba(0,0,0,0.1)",
                  border: "2px solid",
                  borderColor: isDark ? "#4b5563" : "#d1d5db",
                  backgroundColor: isDark ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.8)",
                  color: isDark ? "#e5e7eb" : "#1f2937",
                }}
              >
                <Mail size={16} />
                Hire Me
              </a>
            </div>
          </div>

          <div className="order-2 lg:order-2 flex justify-center items-center relative">
            <div ref={imageRef} className="relative">
              <div
                className="absolute -inset-4 rounded-full opacity-20 blur-xl"
                style={{
                  background: slide.buttonGradient,
                  animation: "float 3s ease-in-out infinite",
                }}
              />

              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 cartoon-image overflow-hidden">
                <Image
                  src="/image.png"
                  alt="Basirat Hamayoon"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
                />
              </div>

              <div
                className="absolute -bottom-2 -right-2 px-3 py-1.5 rounded-xl shadow-lg"
                style={{
                  borderRadius: "15px 5px 15px 5px",
                  boxShadow: "3px 3px 0px rgba(0,0,0,0.1)",
                  backgroundColor: isDark ? "#1f2937" : "#ffffff",
                  border: `1px solid ${isDark ? "#374151" : "#e5e7eb"}`,
                  animation: "bounce-slow 2s ease-in-out infinite",
                }}
              >
                <span
                  className="text-xs font-bold flex items-center gap-1"
                  style={{
                    fontFamily: "'Comic Neue', cursive",
                    color: slide.accentColor,
                  }}
                >
                  <Code size={12} />
                  MERN Stack
                </span>
              </div>

              <div
                className="absolute -top-2 -left-2 px-3 py-1.5 rounded-xl shadow-lg"
                style={{
                  borderRadius: "5px 15px 5px 15px",
                  boxShadow: "3px 3px 0px rgba(0,0,0,0.1)",
                  backgroundColor: isDark ? "#1f2937" : "#ffffff",
                  border: `1px solid ${isDark ? "#374151" : "#e5e7eb"}`,
                }}
              >
                <span className="flex items-center gap-1.5">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: "#22c55e",
                      animation: "float 1.5s ease-in-out infinite",
                    }}
                  />
                  <span
                    className="text-xs font-bold"
                    style={{
                      fontFamily: "'Comic Neue', cursive",
                      color: isDark ? "#d1d5db" : "#374151",
                    }}
                  >
                    Available for work
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex items-center gap-3" style={{ transform: "translateX(-50%)" }}>
        {slides.map((_, i) => (
          <button
            key={i}
            ref={(el) => (dotsRef.current[i] = el)}
            onClick={() => goToSlide(i)}
            className="relative transition-all duration-500"
            style={{
              width: i === currentSlide ? "40px" : "16px",
              height: "16px",
              borderRadius: i === currentSlide ? "10px 3px 10px 3px" : "50%",
              background: i === currentSlide ? dotColors[i] : "rgba(156, 163, 175, 0.5)",
              boxShadow: i === currentSlide ? "2px 2px 0px rgba(0,0,0,0.15)" : "none",
              cursor: "pointer",
              border: "none",
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}