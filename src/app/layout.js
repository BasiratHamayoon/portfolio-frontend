// src/app/layout.js
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Toaster } from "sonner";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Basirat Hamayoon | MERN Stack Developer",
  description:
    "Full-stack developer specializing in React, Next.js, Node.js, and MongoDB. Building exceptional digital experiences.",
  keywords: [
    "MERN Stack",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Basirat Hamayoon",
  ],
  authors: [{ name: "Basirat Hamayoon" }],
  openGraph: {
    title: "Basirat Hamayoon | MERN Stack Developer",
    description:
      "Full-stack developer specializing in modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="top-right"
            richColors
            closeButton
            toastOptions={{
              style: { borderRadius: "1rem", fontSize: "0.875rem" },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}