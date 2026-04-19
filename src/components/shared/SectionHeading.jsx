// src/components/shared/SectionHeading.jsx
"use client";
import { SectionReveal } from "@/components/effects/SectionReveal";

export function SectionHeading({ title, subtitle, align = "center" }) {
  return (
    <SectionReveal>
      <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
          {title.split(" ").map((word, i) => (
            <span key={i}>
              {i === title.split(" ").length - 1 ? (
                <span className="text-primary">{word}</span>
              ) : (
                word + " "
              )}
            </span>
          ))}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className={`mt-6 flex gap-1 ${align === "center" ? "justify-center" : "justify-start"}`}>
          <div className="h-1 w-12 bg-primary rounded-full" />
          <div className="h-1 w-6 bg-primary/50 rounded-full" />
          <div className="h-1 w-3 bg-primary/25 rounded-full" />
        </div>
      </div>
    </SectionReveal>
  );
}