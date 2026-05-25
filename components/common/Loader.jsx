"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Loader() {
  const [isDark, setIsDark] = useState(false);

  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const dotsRef = useRef([]);
  const codeRef = useRef(null);
  const circleRef = useRef(null);
  const starsRef = useRef([]);
  const progressRef = useRef(null);
  useEffect(() => {
    const check = () =>
      document.documentElement.classList.contains("dark");
    const stored = localStorage.getItem("theme");
    if (stored === "dark") setIsDark(true);
    else if (stored === "light") setIsDark(false);
    else setIsDark(check());
    const observer = new MutationObserver(() => setIsDark(check()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);
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

  const bg = isDark
    ? "linear-gradient(135deg, #0a0a0f, #1a0f2e, #0a1e15)"
    : "linear-gradient(135deg, #fce7f3, #ede9fe, #d1fae5)";

  const starFills = ["#f472b6", "#a78bfa", "#6ee7b7", "#fbbf24", "#ec4899"];

  const bubbleBgs = isDark
    ? ["#be185d", "#6d28d9", "#047857"]
    : ["#f9a8d4", "#c4b5fd", "#6ee7b7"];

  const logoBorder = isDark ? "4px solid rgba(255,255,255,0.1)" : "4px solid white";

  const logoShadow = isDark
    ? "0 8px 40px rgba(168,85,247,0.5), inset 0 -3px 0 rgba(0,0,0,0.2)"
    : "0 8px 30px rgba(168, 85, 247, 0.4), inset 0 -3px 0 rgba(0,0,0,0.1)";

  const orbitBorder = isDark
    ? "3px dashed rgba(168,85,247,0.4)"
    : "3px dashed #a855f7";

  const orbitOpacity = isDark ? 0.5 : 0.3;

  const codeBg = isDark
    ? "rgba(168,85,247,0.15)"
    : "rgba(168, 85, 247, 0.1)";

  const codeBorder = isDark
    ? "2px dashed rgba(168,85,247,0.4)"
    : "2px dashed #a855f7";

  const codeColor = isDark ? "#c084fc" : "#7c3aed";

  const codeShadow = isDark
    ? "3px 3px 0px rgba(168,85,247,0.15)"
    : "3px 3px 0px rgba(0,0,0,0.08)";

  const progressBg = isDark
    ? "rgba(168,85,247,0.12)"
    : "rgba(168, 85, 247, 0.15)";

  const progressBarShadow = isDark
    ? "0 0 15px rgba(168,85,247,0.5)"
    : "0 0 10px rgba(168, 85, 247, 0.4)";

  const progressTrackShadow = isDark
    ? "inset 0 1px 3px rgba(0,0,0,0.3), 3px 3px 0px rgba(168,85,247,0.08)"
    : "inset 0 1px 3px rgba(0,0,0,0.1), 3px 3px 0px rgba(0,0,0,0.05)";

  const waitColor = isDark ? "#4b5563" : "#9ca3af";

  const dotShadow = (i) => {
    const color =
      i % 3 === 0 ? "#ec4899" : i % 3 === 1 ? "#a855f7" : "#10b981";
    return isDark
      ? `0 0 10px ${color}60`
      : "2px 2px 0px rgba(0,0,0,0.1)";
  };

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-colors duration-500"
      style={{ background: bg }}
    >
      {[
        { t: "15%", l: "10%",  w: 30, h: 30, idx: 0, pos: "top-[15%] left-[10%]"  },
        { t: "20%", l: "85%",  w: 24, h: 24, idx: 1, pos: "top-[20%] right-[15%]" },
        { t: "75%", l: "20%",  w: 20, h: 20, idx: 2, pos: "bottom-[25%] left-[20%]" },
        { t: "70%", l: "88%",  w: 26, h: 26, idx: 3, pos: "bottom-[30%] right-[12%]" },
        { t: "60%", l: "8%",   w: 18, h: 18, idx: 4, pos: "top-[60%] left-[8%]"   },
      ].map((s) => (
        <div
          key={s.idx}
          className={`absolute ${s.pos}`}
          ref={(el) => (starsRef.current[s.idx] = el)}
        >
          <svg
            width={s.w}
            height={s.h}
            viewBox="0 0 24 24"
            fill={starFills[s.idx]}
            stroke="none"
            style={{
              filter: isDark
                ? `drop-shadow(0 0 6px ${starFills[s.idx]})`
                : "none",
            }}
          >
            <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" />
          </svg>
        </div>
      ))}
      <div
        className="absolute top-[10%] left-[40%] w-16 h-16 rounded-full"
        style={{
          backgroundColor: bubbleBgs[0],
          opacity: isDark ? 0.12 : 0.20,
          animation: "float-random 4s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-[50%] right-[8%] w-12 h-12 rounded-full"
        style={{
          backgroundColor: bubbleBgs[1],
          opacity: isDark ? 0.12 : 0.20,
          animation: "float-random 5s ease-in-out infinite",
          animationDelay: "1s",
        }}
      />
      <div
        className="absolute bottom-[15%] left-[30%] w-10 h-10 rounded-full"
        style={{
          backgroundColor: bubbleBgs[2],
          opacity: isDark ? 0.12 : 0.20,
          animation: "float-random 6s ease-in-out infinite",
          animationDelay: "2s",
        }}
      />
      {isDark && (
        <>
          <div
            className="absolute top-1/4 left-1/4 w-60 h-60 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(168,85,247,0.15), transparent)",
              filter: "blur(60px)",
              animation: "float-random 8s ease-in-out infinite",
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-52 h-52 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(236,72,153,0.12), transparent)",
              filter: "blur(60px)",
              animation: "float-random 6s ease-in-out infinite reverse",
            }}
          />
          <div
            className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(16,185,129,0.1), transparent)",
              filter: "blur(50px)",
              animation: "float-random 7s ease-in-out infinite",
              animationDelay: "2s",
            }}
          />
        </>
      )}
      <div ref={circleRef} className="relative mb-8">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #a855f7, #ec4899)",
            boxShadow: logoShadow,
            border: logoBorder,
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          }}
        >
          <span
            className="text-white text-3xl font-extrabold"
            style={{
              fontFamily: "'Bubblegum Sans', cursive",
              textShadow: "2px 2px 0px rgba(0,0,0,0.2)",
            }}
          >
            B
          </span>
        </div>
        <div
          className="absolute -inset-3 rounded-full"
          style={{
            border: orbitBorder,
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            animation: "spin-slow 4s linear infinite reverse",
            opacity: orbitOpacity,
          }}
        />
        {isDark && (
          <div
            className="absolute -inset-6 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(168,85,247,0.15), transparent)",
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              animation: "spin-slow 6s linear infinite",
            }}
          />
        )}
      </div>
      <div ref={codeRef} className="mb-4">
        <span
          className="px-4 py-2 inline-block text-sm font-mono"
          style={{
            background: codeBg,
            borderRadius: "15px 5px 15px 5px",
            border: codeBorder,
            color: codeColor,
            boxShadow: codeShadow,
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
              background:
                i % 3 === 0
                  ? "#ec4899"
                  : i % 3 === 1
                  ? "#a855f7"
                  : "#10b981",
              boxShadow: dotShadow(i),
            }}
          />
        ))}
      </div>
      <div
        className="w-48 h-3 rounded-full overflow-hidden"
        style={{
          backgroundColor: progressBg,
          borderRadius: "10px 3px 10px 3px",
          boxShadow: progressTrackShadow,
        }}
      >
        <div
          ref={progressRef}
          className="h-full rounded-full"
          style={{
            background:
              "linear-gradient(to right, #ec4899, #a855f7, #10b981)",
            borderRadius: "10px 3px 10px 3px",
            boxShadow: progressBarShadow,
          }}
        />
      </div>
      <p
        className="mt-4 text-xs tracking-widest"
        style={{
          fontFamily: "'Comic Neue', cursive",
          color: waitColor,
        }}
      >
        PLEASE WAIT
      </p>
    </div>
  );
}