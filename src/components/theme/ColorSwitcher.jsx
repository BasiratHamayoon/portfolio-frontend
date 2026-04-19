// src/components/theme/ColorSwitcher.jsx
"use client";
import { useEffect, useState } from "react";
import { useStore } from "@/store/useStore";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const colors = [
  { name: "Teal", value: "0.627 0.135 192.312", hex: "#14b8a6" },
  { name: "Orange", value: "0.646 0.222 41.116", hex: "#f97316" },
  { name: "Purple", value: "0.584 0.233 301.442", hex: "#a855f7" },
  { name: "Emerald", value: "0.622 0.165 150.364", hex: "#10b981" },
  { name: "Rose", value: "0.585 0.22 3.958", hex: "#f43f5e" },
  { name: "Blue", value: "0.623 0.214 259.815", hex: "#3b82f6" },
];

export function ColorSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { themeColor, setThemeColor, initTheme } = useStore();

  useEffect(() => {
    setMounted(true);
    initTheme();
  }, [initTheme]);

  if (!mounted) return null;

  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex gap-2 items-center">
        {colors.map((c) => (
          <Tooltip key={c.name}>
            <TooltipTrigger asChild>
              <button
                onClick={() => setThemeColor(c.value)}
                className={`w-5 h-5 rounded-full border-2 transition-all duration-300 cursor-pointer ${
                  themeColor === c.value
                    ? "scale-125 border-foreground shadow-lg"
                    : "border-transparent hover:scale-110 opacity-60 hover:opacity-100"
                }`}
                style={{ backgroundColor: c.hex }}
              />
            </TooltipTrigger>
            <TooltipContent side="bottom" className="text-xs">{c.name}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}