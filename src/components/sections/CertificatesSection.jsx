// src/components/sections/CertificateSection.jsx
"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useStore } from "@/store/useStore";
import { SectionReveal } from "@/components/effects/SectionReveal";
import {
  Award, ShieldCheck, ExternalLink, Sparkles, Calendar, BadgeCheck,
} from "lucide-react";

function CertChip({ cert, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.7, y: 15 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.03,
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
    >
      {cert.imageUrl ? (
        <a
          href={cert.imageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2.5 rounded-full
                     px-5 py-2.5 cursor-pointer border border-primary/20 bg-primary/[0.04]
                     text-foreground transition-all duration-300
                     hover:bg-primary hover:text-primary-foreground hover:border-primary
                     hover:shadow-xl hover:shadow-primary/20"
        >
          <ShieldCheck className="h-3.5 w-3.5 text-primary group-hover:text-primary-foreground
                                   transition-colors shrink-0" />
          <span className="text-sm font-semibold whitespace-nowrap">{cert.title}</span>

          <ExternalLink className="h-3 w-3 opacity-0 -translate-x-1
                                    group-hover:opacity-100 group-hover:translate-x-0
                                    transition-all duration-300 shrink-0" />

          {/* Shine */}
          <span className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent
                            -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </span>
        </a>
      ) : (
        <span className="inline-flex items-center gap-2.5 rounded-full
                         px-5 py-2.5 border border-primary/20 bg-primary/[0.04]
                         text-foreground cursor-default">
          <ShieldCheck className="h-3.5 w-3.5 text-primary shrink-0" />
          <span className="text-sm font-semibold whitespace-nowrap">{cert.title}</span>
        </span>
      )}
    </motion.div>
  );
}

export function CertificateSection() {
  const { certificates, fetchCertificates, isLoadingCertificates } = useStore();

  useEffect(() => { fetchCertificates(); }, [fetchCertificates]);

  // Group by issuer
  const grouped = certificates.reduce((acc, cert) => {
    const key = cert.issuer || "Other";
    (acc[key] = acc[key] || []).push(cert);
    return acc;
  }, {});

  return (
    <section id="certificates" className="relative py-24 md:py-32 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-grid opacity-[0.08] pointer-events-none" />
      <div className="absolute top-1/3 right-[-15%] w-[500px] h-[500px]
                      bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-10%] w-[400px] h-[400px]
                      bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <SectionReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/[0.06]
                            border border-primary/20 px-4 py-1.5 mb-5">
              <Award className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-bold text-primary tracking-wide">
                {certificates.length} Verified Credentials
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
              My <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              Tap any credential to view the original certificate.
            </p>
          </div>
        </SectionReveal>

        {/* Loading */}
        {isLoadingCertificates ? (
          <div className="space-y-10">
            {[1, 2].map((g) => (
              <div key={g}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-8 w-8 rounded-lg shimmer-bg" />
                  <div className="h-4 w-32 rounded shimmer-bg" />
                </div>
                <div className="flex flex-wrap gap-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="h-10 rounded-full shimmer-bg"
                         style={{ width: `${120 + Math.random() * 80}px` }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : certificates.length > 0 ? (
          <div className="space-y-12">
            {Object.entries(grouped).map(([issuer, certs], gi) => (
              <motion.div
                key={issuer}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: gi * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {/* Issuer header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 border border-primary/20
                                  flex items-center justify-center">
                    <BadgeCheck className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-black text-foreground">{issuer}</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/15 to-transparent" />
                  <span className="text-[10px] font-bold text-muted-foreground tabular-nums">
                    {certs.length}
                  </span>
                </div>

                {/* Cert chips — flowing cloud */}
                <div className="flex flex-wrap gap-2.5 pl-11">
                  {certs.map((cert, ci) => (
                    <CertChip key={cert._id} cert={cert} index={gi * 5 + ci} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Award className="h-10 w-10 mx-auto text-muted-foreground/20 mb-3" />
            <p className="text-sm text-muted-foreground">No certifications added yet.</p>
          </div>
        )}

        {/* Bottom */}
        <SectionReveal>
          <div className="flex items-center justify-center gap-3 mt-20 opacity-30">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}