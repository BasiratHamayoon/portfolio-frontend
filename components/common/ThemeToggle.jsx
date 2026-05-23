"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-14 h-8 rounded-full p-1 transition-all duration-500 hover:scale-110"
      style={{
        background: isDark
          ? "linear-gradient(to right, #4338ca, #7c3aed)"
          : "linear-gradient(to right, #fbbf24, #f97316)",
        border: "2px solid",
        borderColor: isDark ? "#6366f1" : "#fbbf24",
        borderRadius: "20px",
        boxShadow: isDark
          ? "3px 3px 0px rgba(255,255,255,0.1)"
          : "3px 3px 0px rgba(0,0,0,0.2)",
      }}
      aria-label="Toggle theme"
    >
      <div
        className="w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-500"
        style={{
          transform: isDark ? "translateX(24px)" : "translateX(0px)",
          boxShadow: "2px 2px 0px rgba(0,0,0,0.1)",
          background: isDark ? "#1e1b4b" : "#ffffff",
        }}
      >
        {isDark ? <Moon size={12} color="#a5b4fc" /> : <Sun size={12} color="#f59e0b" />}
      </div>
    </button>
  );
}