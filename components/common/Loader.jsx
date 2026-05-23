"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Loader() {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const dotsRef = useRef([]);
  const codeRef = useRef(null);
  const circleRef = useRef(null);
  const starsRef = useRef([]);
  const progressRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        circleRef.current,
        { scale: 0, rotation: 0 },
        { scale: 1, rotation: 360, duration: 1.5, ease: "elastic.out(1, 0.5)" }
      );

      gsap.to(circleRef.current, {
        rotation: 360,
        duration: 3,
        repeat: -1,
        ease: "linear",
        delay: 1.5,
      });

      gsap.fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.5, ease: "back.out(1.7)" }
      );

      gsap.fromTo(
        codeRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, delay: 0.8, ease: "back.out(2)" }
      );

      dotsRef.current.forEach((dot, i) => {
        if (dot) {
          gsap.fromTo(
            dot,
            { scale: 0 },
            {
              scale: 1,
              duration: 0.5,
              delay: 1 + i * 0.2,
              repeat: -1,
              yoyo: true,
              ease: "power2.inOut",
            }
          );
        }
      });

      starsRef.current.forEach((star, i) => {
        if (star) {
          gsap.fromTo(
            star,
            { scale: 0, rotation: 0, opacity: 0 },
            {
              scale: 1,
              rotation: 180,
              opacity: 1,
              duration: 0.8,
              delay: 0.3 + i * 0.15,
              ease: "back.out(2)",
            }
          );
          gsap.to(star, {
            y: -10,
            duration: 1 + i * 0.3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1 + i * 0.2,
          });
        }
      });

      gsap.fromTo(
        progressRef.current,
        { width: "0%" },
        { width: "100%", duration: 2.5, delay: 0.3, ease: "power2.inOut" }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #fce7f3, #ede9fe, #d1fae5)",
      }}
    >
      <div className="absolute top-[15%] left-[10%]" ref={(el) => (starsRef.current[0] = el)}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="#f472b6" stroke="none">
          <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" />
        </svg>
      </div>
      <div className="absolute top-[20%] right-[15%]" ref={(el) => (starsRef.current[1] = el)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#a78bfa" stroke="none">
          <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" />
        </svg>
      </div>
      <div className="absolute bottom-[25%] left-[20%]" ref={(el) => (starsRef.current[2] = el)}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#6ee7b7" stroke="none">
          <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" />
        </svg>
      </div>
      <div className="absolute bottom-[30%] right-[12%]" ref={(el) => (starsRef.current[3] = el)}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#fbbf24" stroke="none">
          <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" />
        </svg>
      </div>
      <div className="absolute top-[60%] left-[8%]" ref={(el) => (starsRef.current[4] = el)}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#ec4899" stroke="none">
          <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" />
        </svg>
      </div>

      <div className="absolute top-[10%] left-[40%] w-16 h-16 rounded-full opacity-20" style={{ backgroundColor: "#f9a8d4", animation: "float-random 4s ease-in-out infinite" }} />
      <div className="absolute top-[50%] right-[8%] w-12 h-12 rounded-full opacity-20" style={{ backgroundColor: "#c4b5fd", animation: "float-random 5s ease-in-out infinite", animationDelay: "1s" }} />
      <div className="absolute bottom-[15%] left-[30%] w-10 h-10 rounded-full opacity-20" style={{ backgroundColor: "#6ee7b7", animation: "float-random 6s ease-in-out infinite", animationDelay: "2s" }} />

      <div ref={circleRef} className="relative mb-8">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #a855f7, #ec4899)",
            boxShadow: "0 8px 30px rgba(168, 85, 247, 0.4), inset 0 -3px 0 rgba(0,0,0,0.1)",
            border: "4px solid white",
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          }}
        >
          <span
            className="text-white text-3xl font-extrabold"
            style={{ fontFamily: "'Bubblegum Sans', cursive", textShadow: "2px 2px 0px rgba(0,0,0,0.2)" }}
          >
            B
          </span>
        </div>
        <div
          className="absolute -inset-3 rounded-full opacity-30"
          style={{
            border: "3px dashed #a855f7",
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            animation: "spin-slow 4s linear infinite reverse",
          }}
        />
      </div>

      <div ref={codeRef} className="mb-4">
        <span
          className="px-4 py-2 inline-block text-sm font-mono"
          style={{
            background: "rgba(168, 85, 247, 0.1)",
            borderRadius: "15px 5px 15px 5px",
            border: "2px dashed #a855f7",
            color: "#7c3aed",
            boxShadow: "3px 3px 0px rgba(0,0,0,0.08)",
          }}
        >
          {"<Basirat />"} Loading...
        </span>
      </div>

      <h2
        ref={textRef}
        className="text-2xl md:text-3xl font-bold mb-6 text-center"
        style={{
          fontFamily: "'Bubblegum Sans', cursive",
          background: "linear-gradient(to right, #a855f7, #ec4899)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textShadow: "none",
        }}
      >
        Building Something Amazing
      </h2>

      <div className="flex items-center gap-3 mb-8">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            ref={(el) => (dotsRef.current[i] = el)}
            className="w-3 h-3 rounded-full"
            style={{
              background: i % 3 === 0 ? "#ec4899" : i % 3 === 1 ? "#a855f7" : "#10b981",
              boxShadow: "2px 2px 0px rgba(0,0,0,0.1)",
            }}
          />
        ))}
      </div>

      <div
        className="w-48 h-3 rounded-full overflow-hidden"
        style={{
          backgroundColor: "rgba(168, 85, 247, 0.15)",
          borderRadius: "10px 3px 10px 3px",
          boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1), 3px 3px 0px rgba(0,0,0,0.05)",
        }}
      >
        <div
          ref={progressRef}
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(to right, #ec4899, #a855f7, #10b981)",
            borderRadius: "10px 3px 10px 3px",
            boxShadow: "0 0 10px rgba(168, 85, 247, 0.4)",
          }}
        />
      </div>

      <p
        className="mt-4 text-xs tracking-widest"
        style={{
          fontFamily: "'Comic Neue', cursive",
          color: "#9ca3af",
        }}
      >
        PLEASE WAIT
      </p>
    </div>
  );
}