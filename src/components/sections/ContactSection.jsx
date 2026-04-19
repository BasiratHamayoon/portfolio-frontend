// src/components/sections/ContactSection.jsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useStore } from "@/store/useStore";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionReveal } from "@/components/effects/SectionReveal";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, MapPin, Phone, Send, Loader2, MessageSquare } from "lucide-react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "basirathumayun@gmail.com",
    href: "mailto:basirathumayun@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+923189890697",
    href: "tel:+923189890697",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kohat Road, Peshawar",
    href: null,
  },
];

const socialLinks = [
  {
    icon: FiGithub,
    href: "https://github.com/basirathamayoon",
    label: "GitHub",
  },
  {
    icon: FiLinkedin,
    href: "https://linkedin.com/in/basirathamayoon",
    label: "LinkedIn",
  },
  {
    icon: FiMail,
    href: "mailto:basirathumayun@gmail.com",
    label: "Email",
  },
];

export function ContactSection() {
  const { submitContact } = useStore();
  const [form, setForm]     = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      await submitContact(form);
      toast.success("Message sent! I'll get back to you soon. 🚀");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `h-12 glass border transition-all duration-300 focus-visible:ring-2
     focus-visible:ring-primary/50 rounded-xl
     ${focused === field ? "border-primary/60 bg-card/80" : "border-border/50 bg-card/40"}`;

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 hero-gradient opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="container-max">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or just want to chat? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — Info */}
          <SectionReveal direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-black text-foreground mb-3">
                  Let's Build Something{" "}
                  <span className="gradient-text">Amazing Together</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  I'm currently available for freelance projects, full-time positions,
                  and interesting collaborations. Based in Peshawar, open to remote
                  opportunities worldwide.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      className="flex items-center gap-4 p-4 glass rounded-2xl border border-border/50 card-glow-hover group"
                      whileHover={{ x: 4 }}
                    >
                      <div className="p-3 rounded-xl bg-primary/10 text-primary
                                      group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-semibold text-foreground hover:text-primary transition-colors text-sm"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-semibold text-foreground text-sm">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Socials */}
              <div>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">
                  Find me on
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((s) => {
                    const Icon = s.icon;
                    return (
                      <MagneticButton key={s.label}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={s.label}
                          className="h-12 w-12 glass rounded-2xl border border-border/50
                                     flex items-center justify-center text-muted-foreground
                                     hover:text-primary hover:border-primary/50 hover:bg-primary/10
                                     transition-all hover:scale-110 cursor-pointer"
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      </MagneticButton>
                    );
                  })}
                </div>
              </div>

              {/* Response badge */}
              <div className="flex items-center gap-3 glass rounded-2xl border border-green-500/20 p-4">
                <div className="relative h-3 w-3 shrink-0">
                  <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
                  <div className="relative h-3 w-3 rounded-full bg-green-500" />
                </div>
                <p className="text-sm font-semibold text-foreground">
                  Usually responds within{" "}
                  <span className="text-green-500 font-black">24 hours</span>
                </p>
              </div>
            </div>
          </SectionReveal>

          {/* Right — Form */}
          <SectionReveal direction="right" delay={0.2}>
            <motion.div
              className="glass rounded-3xl p-8 border border-border/50 relative overflow-hidden"
              whileHover={{ boxShadow: "0 25px 50px -12px oklch(var(--primary) / 0.15)" }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-black text-foreground">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      Full Name
                    </Label>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      className={inputClass("name")}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      Email Address
                    </Label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      className={inputClass("email")}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Subject
                  </Label>
                  <Input
                    name="subject"
                    placeholder="Project collaboration, job opportunity..."
                    value={form.subject}
                    onChange={handleChange}
                    onFocus={() => setFocused("subject")}
                    onBlur={() => setFocused(null)}
                    className={inputClass("subject")}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Message
                  </Label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project, what you need, and when you need it..."
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    rows={5}
                    required
                    className={`w-full resize-none rounded-xl px-4 py-3 text-sm outline-none
                                transition-all duration-300 glass border focus:ring-2
                                focus:ring-primary/50 text-foreground placeholder:text-muted-foreground
                                ${focused === "message"
                                  ? "border-primary/60 bg-card/80"
                                  : "border-border/50 bg-card/40"
                                }`}
                  />
                </div>

                <MagneticButton className="w-full">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full rounded-xl font-bold text-base shadow-lg shadow-primary/20
                               hover:shadow-primary/40 transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    {loading ? (
                      <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="mr-2 h-5 w-5" /> Send Message</>
                    )}
                  </Button>
                </MagneticButton>
              </form>
            </motion.div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}