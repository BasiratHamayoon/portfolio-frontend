// src/components/layout/Footer.jsx
"use client";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { MapPin, Phone, Mail, Heart, ArrowUp, Code2 } from "lucide-react";

const socialLinks = [
  { icon: FiGithub,   href: "https://github.com/basirathamayoon",      label: "GitHub"   },
  { icon: FiLinkedin, href: "https://linkedin.com/in/basirathamayoon", label: "LinkedIn" },
  { icon: FiMail,     href: "mailto:basirathumayun@gmail.com",         label: "Email"    },
];

const navLinks = [
  { name: "About",        href: "#about"        },
  { name: "Experience",   href: "#experience"   },
  { name: "Skills",       href: "#skills"       },
  { name: "Projects",     href: "#projects"     },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact",      href: "#contact"      },
];

export function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-border/50 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black text-foreground mb-2">
              BASIRAT<span className="text-primary">.</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              MERN Stack & Full Stack Developer based in Peshawar, Pakistan.
              Passionate about building responsive, user-friendly web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-black text-foreground uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="mailto:basirathumayun@gmail.com"
                 className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 text-primary/60" />
                basirathumayun@gmail.com
              </a>
              <a href="tel:+923189890697"
                 className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary/60" />
                +923189890697
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary/60" />
                Kohat Road, Peshawar
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row
                        items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} Basirat Hamayoon. Made with
            <Heart className="h-3 w-3 text-red-500 fill-red-500" />
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full border border-border/50 flex items-center
                             justify-center text-muted-foreground hover:text-primary
                             hover:border-primary/50 hover:bg-primary/10 transition-all hover:scale-110"
                  title={link.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>

          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Built with
            <Code2 className="h-3 w-3 text-primary" />
            <span className="text-primary font-bold">Next.js</span> &
            <span className="text-primary font-bold">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}