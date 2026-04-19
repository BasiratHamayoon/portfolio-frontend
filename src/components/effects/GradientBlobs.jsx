// src/components/effects/GradientBlobs.jsx
"use client";

export function GradientBlobs() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute -top-[40%] -left-[20%] w-[80vw] h-[80vw] rounded-full bg-primary/5 blur-[150px] animate-blob" />
      <div className="absolute -bottom-[40%] -right-[20%] w-[70vw] h-[70vw] rounded-full bg-primary/5 blur-[150px] animate-blob animation-delay-4000" />
      <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-primary/3 blur-[120px] animate-blob animation-delay-2000" />

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .animate-blob { animation: blob 20s infinite alternate cubic-bezier(0.4, 0, 0.2, 1); }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
}