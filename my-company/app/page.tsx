"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Rocket, Smartphone, MonitorSmartphone, Sparkles, Server, Mail, CheckCircle2, ArrowRight, Github, Linkedin, Triangle } from "lucide-react";

// A single-file landing page meant for Next.js (App Router). Drop this into app/page.tsx
// Tailwind CSS recommended. All styles rely on Tailwind utility classes.
// Animations by framer-motion; icons by lucide-react.

export default function WebDevLandingPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
      <GradientBackground />
      <Header />
      <Hero />
      <LogosBar />
      <Services />
      <Work />
      <Process />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}

function GradientBackground() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-500/20 via-fuchsia-500/20 to-indigo-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-tr from-blue-400/10 via-cyan-400/10 to-teal-400/10 blur-3xl" />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-white/60 backdrop-blur-md dark:bg-gray-950/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-md">
            <Code2 className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight">NovaWeb</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <a className="nav-link" href="#services">Services</a>
          <a className="nav-link" href="#work">Work</a>
          <a className="nav-link" href="#process">Process</a>
          <a className="nav-link" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 active:scale-[.98] md:block dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
            Get a quote
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        aria-label="Toggle menu"
        onClick={() => setOpen((s) => !s)}
        className="rounded-xl border border-gray-200 bg-white p-2 shadow-sm active:scale-95 dark:border-gray-800 dark:bg-gray-900"
      >
        <Triangle className={`h-4 w-4 transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
      </button>
      {open && (
        <div className="absolute left-0 right-0 mt-2 border-t border-white/10 bg-white/90 p-4 backdrop-blur-md dark:bg-gray-950/90">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            <a className="nav-link" href="#services" onClick={() => setOpen(false)}>Services</a>
            <a className="nav-link" href="#work" onClick={() => setOpen(false)}>Work</a>
            <a className="nav-link" href="#process" onClick={() => setOpen(false)}>Process</a>
            <a className="nav-link" href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:pt-24">
      <div className="grid items-center gap-10 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1 lg:col-span-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs font-medium text-gray-600 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/70 dark:text-gray-300">
            <Sparkles className="h-3.5 w-3.5" /> Next.js • TypeScript • Tailwind
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Ship beautiful web apps
            <span className="block bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">faster than ever</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-gray-600 dark:text-gray-300">
            We build lightning‑fast, accessible, and scalable products using the modern React/Next.js stack.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-5 py-3 text-white shadow-lg shadow-indigo-600/20 transition active:scale-[.98]">
              Start your project <ArrowRight className="h-4 w-4 transition -translate-x-0 group-hover:translate-x-0.5" />
            </a>
            <a href="#work" className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-gray-800 shadow-sm hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100">
              View work
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4" /> Core Web Vitals A+</div>
            <div className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4" /> WCAG AA</div>
            <div className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4" /> ISO-grade CI/CD</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 lg:order-2 lg:col-span-6"
        >
          <div className="relative mx-auto aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 shadow-xl">
            <MockBrowser>
              <div className="grid gap-3 sm:grid-cols-2">
                <Tile title="Next.js SSR" icon={Rocket}>
                  Hybrid rendering for blazing speed and SEO.
                </Tile>
                <Tile title="Responsive" icon={Smartphone}>
                  Pixel‑perfect on every device.
                </Tile>
                <Tile title="API‑Ready" icon={Server}>
                  Robust REST/GraphQL integration.
                </Tile>
                <Tile title="DX Obsessed" icon={MonitorSmartphone}>
                  Clean code, tests, and CI from day one.
                </Tile>
              </div>
            </MockBrowser>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MockBrowser({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full rounded-2xl bg-gray-950">
      <div className="flex items-center gap-2 border-b border-gray-800 px-4 py-2">
        <div className="h-3 w-3 rounded-full bg-red-500/70" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <div className="h-3 w-3 rounded-full bg-green-500/70" />
        <div className="ml-3 h-6 flex-1 rounded-md bg-gray-800" />
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function Tile({ title, icon: Icon, children }: { title: string; icon: any; children: React.ReactNode }) {
  return (
    <div className="group rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/80 to-gray-900/40 p-4 shadow-inner transition hover:border-indigo-600/50">
      <div className="flex items-center gap-2">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-600/80 to-fuchsia-600/80 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-gray-300">{children}</p>
    </div>
  );
}

function LogosBar() {
  const logos = [
    "Next.js",
    "TypeScript",
    "Vercel",
    "Tailwind",
    "Postgres",
    "Stripe",
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="grid grid-cols-2 items-center gap-6 opacity-70 sm:grid-cols-3 md:grid-cols-6">
        {logos.map((name) => (
          <div key={name} className="text-center text-sm font-semibold tracking-wide text-gray-500 dark:text-gray-400">
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      title: "Custom Web Apps",
      icon: Rocket,
      desc: "Full‑stack Next.js apps with App Router, SSR/SSG, and edge‑ready APIs.",
      points: ["Design systems", "Auth & permissions", "Observability"],
    },
    {
      title: "Responsive Sites",
      icon: Smartphone,
      desc: "Marketing sites that load instantly and rank higher with perfect Core Web Vitals.",
      points: ["A11y first", "SEO & schema", "i18n"]
    },
    {
      title: "Integrations & APIs",
      icon: Server,
      desc: "Payments, analytics, CRMs, webhooks, GraphQL, and third‑party SDKs.",
      points: ["Stripe & Paddle", "Contentlayer / Sanity", "REST & GraphQL"]
    }
  ];

  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What we do</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">End‑to‑end product development with craftsmanship and care.</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
            </div>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{s.desc}</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {s.points.map((p) => (
                <li key={p} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-indigo-600" /> {p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Work() {
  const items = [
    { title: "SaaS Analytics", tag: "Next.js + Postgres", href: "#" },
    { title: "E‑commerce Headless", tag: "Stripe + GraphQL", href: "#" },
    { title: "Marketing Revamp", tag: "SSG + CMS", href: "#" },
    { title: "Mobile Companion", tag: "PWA + Push", href: "#" },
    { title: "Dashboard", tag: "Charts + RBAC", href: "#" },
    { title: "Docs Site", tag: "MDX + Search", href: "#" },
  ];
  return (
    <section id="work" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Selected work</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">A peek at recent projects and experiments.</p>
        </div>
        <a href="#contact" className="hidden rounded-xl border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50 md:block dark:border-gray-800 dark:hover:bg-gray-900">Let’s collaborate</a>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <motion.a
            key={item.title}
            href={item.href}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-indigo-600/15 to-fuchsia-600/15" />
            <div className="mt-4">
              <div className="text-xs text-indigo-600">{item.tag}</div>
              <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
            </div>
            <span className="absolute right-4 top-4 rounded-full border border-gray-200 bg-white p-2 text-gray-700 shadow-sm transition group-hover:translate-x-1 dark:border-gray-800 dark:bg-gray-950">
              <ArrowRight className="h-4 w-4" />
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { title: "Discover", desc: "Goals, users, success metrics.", icon: Sparkles },
    { title: "Design", desc: "Wireframes, UI, design system.", icon: MonitorSmartphone },
    { title: "Develop", desc: "Next.js, TypeScript, APIs, tests.", icon: Code2 },
    { title: "Deploy", desc: "CI/CD, analytics, observability.", icon: Rocket },
  ];
  return (
    <section id="process" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How we build</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">A collaborative, transparent, and test‑driven approach.</p>
      </div>
      <ol className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
        {steps.map((s, i) => (
          <li key={s.title} className="relative rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <div className="absolute -left-3 -top-3 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white shadow-md">
              {i + 1}
            </div>
            <div className="flex items-center gap-2">
              <s.icon className="h-5 w-5 text-indigo-600" />
              <h3 className="font-semibold">{s.title}</h3>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{s.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote:
        "They delivered ahead of schedule with Core Web Vitals in the green across the board.",
      name: "Amira K.", role: "VP Product, FintechCo",
    },
    {
      quote:
        "Best developer experience I've seen—clean commits, docs, and tests from day one.",
      name: "Jonah P.", role: "CTO, Health SaaS",
    },
    {
      quote:
        "Our conversion rate lifted 34% after the redesign and Next.js migration.",
      name: "Maya S.", role: "Growth Lead, Retailer",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What clients say</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">Outcomes over output—measured and repeatable.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((t) => (
          <blockquote key={t.name} className="rounded-3xl border border-gray-200 bg-white p-6 text-sm shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <p className="text-gray-700 dark:text-gray-200">“{t.quote}”</p>
            <footer className="mt-4 text-gray-500">— {t.name}, {t.role}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-600 to-fuchsia-600 p-8 text-white shadow-xl">
        <div className="absolute right-0 top-0 -mr-6 -mt-6 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold leading-tight">Ready to launch something great?</h3>
            <p className="mt-2 text-white/90">Tell us about your goals—get a roadmap and quote in 48 hours.</p>
          </div>
          <div className="flex w-full justify-end">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-gray-900 shadow-sm active:scale-[.98]">
              Talk to us <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    // Demo: simulate a request
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let’s build together</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Share a few details about your project. We’ll reply with a short plan and estimate.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-indigo-600" /> Fixed‑scope or retainer</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-indigo-600" /> Transparent timelines</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-indigo-600" /> Source code ownership</li>
          </ul>

          <div className="mt-6 flex gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input label="Name" name="name" required placeholder="Ada Lovelace" />
              <Input label="Email" name="email" type="email" required placeholder="you@company.com" />
            </div>
            <Input label="Company" name="company" placeholder="Acme Inc." />
            <Input label="Budget" name="budget" placeholder="€15k – €50k" />
            <div>
              <label className="mb-1 block text-sm font-medium">Project details</label>
              <textarea
                name="details"
                required
                placeholder="What are you trying to build? Goals, timeline, must‑haves…"
                className="min-h-[120px] w-full rounded-xl border border-gray-300 bg-transparent px-3 py-2 outline-none focus:border-indigo-600 dark:border-gray-700"
              />
            </div>
            <button
              disabled={status === "loading"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 font-medium text-white shadow-sm active:scale-[.98] disabled:opacity-60 dark:bg-white dark:text-gray-900"
            >
              {status === "loading" ? "Sending…" : "Send message"}
            </button>
            {status === "success" && (
              <p className="text-sm text-green-600">Thanks! We’ll get back to you shortly.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Input({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-300 bg-transparent px-3 py-2 outline-none focus:border-indigo-600 dark:border-gray-700"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-8 border-t border-gray-200 py-10 dark:border-gray-800">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <div className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white">
            <Code2 className="h-4 w-4" />
          </div>
          <span>© {new Date().getFullYear()} NovaWeb. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a className="hover:underline" href="#">Privacy</a>
          <a className="hover:underline" href="#">Terms</a>
          <a className="hover:underline" href="#">Imprint</a>
        </div>
      </div>
    </footer>
  );
}

// Utilities
const navLink = `text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white`;
// Add this to the global scope for simplicity
;(globalThis as any).navLink = navLink;

// Helper className for nav links
declare global { var navLink: string }

// Apply it to anchor tags with className="nav-link"
const observer = typeof window !== 'undefined' ? new MutationObserver(() => {
  document.querySelectorAll('a.nav-link').forEach((el) => el.setAttribute('class', navLink));
}) : null;
if (typeof window !== 'undefined' && observer) {
  observer.observe(document.documentElement, { childList: true, subtree: true });
}
