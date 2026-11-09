import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Scale,
  ShieldCheck,
  ArrowUpRight,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Gavel,
  Briefcase,
  Building2,
  Users,
  FileText,
  Landmark,
  Menu,
  X,
  Quote,
  Star,
  CheckCircle2,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  THEME SYSTEM                                                      */
/* ------------------------------------------------------------------ */
const THEME = {
  bg: "#F9F6F0",
  bgSoft: "#F0EAE1",
  surface: "#FFFFFF",
  ink: "#1A1612",
  muted: "#736B63",
  line: "#E2D9CC",
  accent: "#8C5E32",
  accentHover: "#734A24",
  dark: "#0F0D0B",
  darkSurface: "#181512",
  darkLine: "#2B2620",
  onAccent: "#FAF7F2",
};

const HERO_IMAGE = "";
const FIRM = "Aldridge & Mensah";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Practice Areas", href: "#services" },
  { label: "About Firm", href: "#about" },
  { label: "Track Record", href: "#cases" },
];

const SERVICES = [
  {
    icon: Briefcase,
    title: "Corporate & Commercial",
    text: "Formation, regulatory governance, cross-border M&A, and commercial contracts crafted for longevity.",
  },
  {
    icon: Gavel,
    title: "Dispute Litigation",
    text: "Uncompromising trial and appellate advocacy across state courts, commercial tribunals, and arbitration.",
  },
  {
    icon: Building2,
    title: "Real Estate & Land Title",
    text: "Rigorous due diligence, acquisition conveyancing, and complex boundary dispute resolution.",
  },
  {
    icon: Users,
    title: "Family & Private Wealth",
    text: "Discreet advisory on high-net-worth estate planning, trusts, fiduciary matters, and family counsel.",
  },
  {
    icon: FileText,
    title: "Intellectual Property",
    text: "Securing patents, trademarks, proprietary codebases, and global licensing rights.",
  },
  {
    icon: Landmark,
    title: "Regulatory Compliance",
    text: "Navigating statutory audits, institutional enforcement, and proactive tax risk mitigation.",
  },
];

const STATS = [
  { value: "25+", label: "Years of Practice" },
  { value: "1,800+", label: "Matters Resolved" },
  { value: "98.4%", label: "Favorable Outcomes" },
  { value: "14", label: "Senior Advocates" },
];

const STEPS = [
  { n: "01", title: "Preliminary Case Audit", text: "Direct review of your exposure, legal standing, and timeline." },
  { n: "02", title: "Strategic Roadmap", text: "Clear counsel on remedies, costs, milestones, and contingency paths." },
  { n: "03", title: "Rigorous Representation", text: "Active partner presence across filings, depositions, and negotiations." },
  { n: "04", title: "Resolution & Assurance", text: "Enforcement of final rulings and ongoing structural protections." },
];

const CASES = [
  { tag: "Corporate M&A", title: "Acquisition of pan-African cold-chain logistics syndicate", result: "Completed in 68 days" },
  { tag: "Litigation", title: "Defending an eight-figure commercial breach claim in Supreme Court", result: "Total dismissal" },
  { tag: "Real Estate", title: "Multi-party land adjudication over 120-acre commercial tract", result: "Freehold confirmed" },
];

const TESTIMONIALS = [
  {
    name: "Kwame Asante",
    role: "CEO, Westbridge Capital",
    text: "Aldridge & Mensah provided strategic clarity during a contentious shareholder dispute. They think three moves ahead.",
  },
  {
    name: "Dr. Efua Darko",
    role: "Healthcare Systems Director",
    text: "Their attention to statutory detail and responsive partner access set them apart from standard full-service law firms.",
  },
  {
    name: "Daniel Osei",
    role: "Managing Director, Global Transit",
    text: "Commanding presence in arbitration and thorough cross-examination. Our go-to counsel across all African operations.",
  },
];

/* ------------------------------ Components ----------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Reveal({ children, i = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      custom={i}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

function PillButton({ children, href = "#contact", variant = "solid", className = "" }) {
  const isSolid = variant === "solid";
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`group inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${className}`}
      style={{
        background: isSolid ? THEME.accent : "transparent",
        color: isSolid ? THEME.onAccent : THEME.ink,
        border: isSolid ? "1px solid transparent" : `1px solid ${THEME.line}`,
        boxShadow: isSolid ? "0 4px 14px rgba(140, 94, 50, 0.18)" : "none",
      }}
    >
      <span>{children}</span>
      <ArrowUpRight
        size={14}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </motion.a>
  );
}

function SectionTag({ children, dark = false }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em]"
      style={{
        background: dark ? THEME.darkSurface : THEME.bgSoft,
        color: dark ? "#d9a65e" : THEME.accent,
        border: `1px solid ${dark ? THEME.darkLine : THEME.line}`,
      }}
    >
      {children}
    </span>
  );
}

function ScalesArt() {
  return (
    <svg viewBox="0 0 300 360" className="h-full w-full select-none" fill="none">
      <defs>
        <linearGradient id="bronzeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#DFB77C" />
          <stop offset="50%" stopColor="#8C5E32" />
          <stop offset="100%" stopColor="#4A2F17" />
        </linearGradient>
      </defs>
      <g stroke="url(#bronzeGrad)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="150" y1="55" x2="150" y2="295" />
        <line x1="55" y1="90" x2="245" y2="90" />
        <path d="M55 90 L25 185 M55 90 L85 185 M25 185 Q55 215 85 185 Z" />
        <path d="M245 90 L215 185 M245 90 L275 185 M215 185 Q245 215 275 185 Z" />
        <path d="M110 325 L190 325 M125 305 L175 305" />
      </g>
      <circle cx="150" cy="45" r="10" fill="url(#bronzeGrad)" />
      <circle cx="150" cy="90" r="5" fill="url(#bronzeGrad)" />
      <path d="M130 295 H170 L180 325 H120 Z" fill="url(#bronzeGrad)" opacity="0.9" />
    </svg>
  );
}

/* -------------------------------- Page ------------------------------- */
export default function App() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="min-h-screen antialiased selection:bg-[#8C5E32] selection:text-white"
      style={{
        background: THEME.bg,
        color: THEME.ink,
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        html { scroll-behavior: smooth; }
        .font-serif-italic { font-family: 'Instrument Serif', Georgia, serif; font-style: italic; }
        .font-cinzel { font-family: 'Cinzel', Georgia, serif; }
      `}</style>

      {/* ----------------------------- NAVBAR ---------------------------- */}
      <header
        className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? `${THEME.bg}f0` : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? `1px solid ${THEME.line}` : "1px solid transparent",
        }}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
          <a href="#home" className="flex items-center gap-2.5 text-base font-bold tracking-tight">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-lg"
              style={{ background: THEME.bgSoft, border: `1px solid ${THEME.line}`, color: THEME.accent }}
            >
              <Scale size={18} />
            </span>
            <span className="font-cinzel text-sm sm:text-base tracking-wider uppercase text-neutral-900">
              {FIRM}
            </span>
          </a>

          <nav className="hidden items-center gap-1.5 md:flex">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-700 transition-colors hover:text-black hover:bg-black/5"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <PillButton href="#contact">Consult With Counsel</PillButton>
          </div>

          <button
            className="rounded-lg p-2 md:hidden"
            style={{ border: `1px solid ${THEME.line}` }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden md:hidden"
              style={{ background: THEME.bg, borderBottom: `1px solid ${THEME.line}` }}
            >
              <div className="flex flex-col gap-2 px-6 py-6">
                {NAV.map((n) => (
                  <a
                    key={n.label}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="py-2 text-xs font-semibold uppercase tracking-wider text-neutral-800"
                  >
                    {n.label}
                  </a>
                ))}
                <PillButton href="#contact" className="mt-4 justify-center">
                  Consult With Counsel
                </PillButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ------------------------------ HERO ----------------------------- */}
      <section
        id="home"
        className="relative overflow-hidden px-6 pt-32 sm:px-8 md:pt-40"
        style={{
          background: `radial-gradient(ellipse at 50% -10%, #FFFFFF 0%, ${THEME.bg} 75%)`,
        }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <SectionTag>Premier Corporate & Civil Advocates</SectionTag>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-4xl font-normal tracking-tight text-neutral-900 sm:text-6xl md:text-7xl leading-[1.08]"
          >
            YOUR{" "}
            <span
              className="font-serif-italic inline-block font-normal px-2"
              style={{ color: THEME.accent }}
            >
              legal partner
            </span>{" "}
            IN
            <br />
            EVERY SITUATION.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-sm md:text-base leading-relaxed"
            style={{ color: THEME.muted }}
          >
            Delivering strategic counsel, measured trial advocacy, and high-consequence corporate structuring with direct partner stewardship.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <PillButton href="#contact">Schedule Private Review</PillButton>
            <PillButton href="#services" variant="outline">
              Explore Practice Areas
            </PillButton>
          </motion.div>
        </div>

        {/* Hero Visual Display Symmetrical Pedestal */}
        <div className="mx-auto mt-14 max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            
            {/* Left Column Metric / Intro */}
            <div className="hidden lg:col-span-3 lg:flex flex-col gap-6 text-left border-l pl-6" style={{ borderColor: THEME.line }}>
              <div>
                <p className="text-2xl font-bold text-neutral-900">$2.4B+</p>
                <p className="text-xs uppercase tracking-wider text-neutral-500 mt-1">Transaction Value Secured</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-neutral-900">Tier 1</p>
                <p className="text-xs uppercase tracking-wider text-neutral-500 mt-1">Commercial Litigation Rating</p>
              </div>
              <p className="text-xs leading-relaxed text-neutral-600">
                Direct partner engagement on every brief. We enforce capped caseloads to maintain rigorous judicial preparation.
              </p>
            </div>

            {/* Center Pedestal Showcase */}
            <div className="lg:col-span-6 flex justify-center">
              <div
                className="relative flex h-[360px] w-full max-w-[340px] items-center justify-center rounded-2xl p-6 shadow-sm sm:h-[420px]"
                style={{
                  background: THEME.bgSoft,
                  border: `1px solid ${THEME.line}`,
                }}
              >
                {HERO_IMAGE ? (
                  <img src={HERO_IMAGE} alt="Scales of Justice" className="h-full w-full object-contain" />
                ) : (
                  <div className="h-full w-full p-2">
                    <ScalesArt />
                  </div>
                )}
                <div
                  className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl px-4 py-2.5 backdrop-blur-md"
                  style={{ background: `${THEME.bg}d9`, border: `1px solid ${THEME.line}` }}
                >
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-800">
                    Advocacy &bull; Jurisprudence &bull; Trust
                  </span>
                  <ShieldCheck size={16} style={{ color: THEME.accent }} />
                </div>
              </div>
            </div>

            {/* Right Column Accreditations */}
            <div className="hidden lg:col-span-3 lg:flex flex-col gap-6 text-right border-r pr-6" style={{ borderColor: THEME.line }}>
              <div>
                <p className="text-2xl font-bold text-neutral-900">25+ Yrs</p>
                <p className="text-xs uppercase tracking-wider text-neutral-500 mt-1">Superior Court Standing</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-neutral-900">100%</p>
                <p className="text-xs uppercase tracking-wider text-neutral-500 mt-1">Confidentiality Assured</p>
              </div>
              <p className="text-xs leading-relaxed text-neutral-600">
                Operating under strict attorney-client privilege protocols with encrypted communication channels for corporate clients.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------- STATS BANNER ----------------------- */}
      <section className="mt-16 border-y" style={{ background: THEME.dark, borderColor: THEME.darkLine, color: "#F5F1E8" }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-6 py-12 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} i={i} className="text-center">
              <div className="font-serif-italic text-4xl sm:text-5xl" style={{ color: "#d9a65e" }}>
                {s.value}
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/50">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ----------------------------- SERVICES -------------------------- */}
      <section id="services" className="px-6 py-28 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionTag>Core Capabilities</SectionTag>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
              Disciplined expertise where it <span className="font-serif-italic text-4xl sm:text-6xl" style={{ color: THEME.accent }}>matters</span> most.
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed" style={{ color: THEME.muted }}>
              Comprehensive representation spanning high-stakes corporate disputes, sovereign acquisitions, and regulatory compliance.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} i={i}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-full flex-col justify-between rounded-2xl p-8 transition-shadow hover:shadow-lg"
                  style={{ background: THEME.surface, border: `1px solid ${THEME.line}` }}
                >
                  <div>
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ background: THEME.bgSoft, color: THEME.accent, border: `1px solid ${THEME.line}` }}
                    >
                      <s.icon size={22} />
                    </div>
                    <h3 className="mt-6 text-xl font-bold tracking-tight text-neutral-900">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: THEME.muted }}>
                      {s.text}
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider"
                    style={{ color: THEME.accent }}
                  >
                    <span>Request Brief</span>
                    <ArrowRight size={14} />
                  </a>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ ABOUT ---------------------------- */}
      <section id="about" className="px-6 py-28 sm:px-8" style={{ background: THEME.bgSoft, borderTop: `1px solid ${THEME.line}` }}>
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <SectionTag>About The Firm</SectionTag>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-5xl leading-tight">
              Uncompromising integrity. <br />
              <span className="font-serif-italic text-4xl sm:text-6xl" style={{ color: THEME.accent }}>Results</span> that endure.
            </h2>
            <p className="mt-5 text-sm sm:text-base leading-relaxed" style={{ color: THEME.muted }}>
              Founded on the belief that superior legal counsel pairs deep statutory knowledge with candid commercial pragmatism, {FIRM} serves as premier counsel to leaders, institutions, and families facing defining milestones.
            </p>
            <div className="mt-8 space-y-3.5">
              {[
                "Every client matter led directly by a Named Partner",
                "Transparent retainer frameworks without hidden billing surges",
                "Rapid response protocols with same-day file reviews",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 text-sm font-medium text-neutral-800">
                  <CheckCircle2 size={18} style={{ color: THEME.accent }} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <div className="mt-9">
              <PillButton href="#contact">Meet Senior Counsel</PillButton>
            </div>
          </Reveal>

          <Reveal i={2} className="md:col-span-5 flex justify-center">
            <div
              className="relative aspect-square w-full max-w-sm rounded-2xl p-8 text-center flex flex-col justify-center items-center shadow-md"
              style={{ background: THEME.dark, color: "#FAF7F2", border: `1px solid ${THEME.darkLine}` }}
            >
              <Scale size={48} className="stroke-[1.2]" style={{ color: "#d9a65e" }} />
              <p className="mt-6 font-serif-italic text-2xl italic leading-snug">
                "Justice is the constant and perpetual will to render unto each his right."
              </p>
              <div className="mt-4 border-t pt-3 text-[10px] uppercase tracking-widest text-neutral-400" style={{ borderColor: THEME.darkLine }}>
                Corpus Juris Civilis
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ----------------------------- METHODOLOGY ----------------------- */}
      <section className="px-6 py-28 sm:px-8 border-t" style={{ borderColor: THEME.line }}>
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <SectionTag>Our Framework</SectionTag>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
              From inquiry to <span className="font-serif-italic text-4xl sm:text-6xl" style={{ color: THEME.accent }}>resolution</span>.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.n} i={i}>
                <div className="border-t-2 pt-6 transition-colors duration-300 hover:border-black" style={{ borderColor: THEME.line }}>
                  <span className="font-serif-italic text-3xl font-normal" style={{ color: THEME.accent }}>
                    {step.n}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-neutral-900">{step.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed" style={{ color: THEME.muted }}>
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------- TRACK RECORD ---------------------- */}
      <section id="cases" className="px-6 py-28 sm:px-8" style={{ background: THEME.dark, color: "#F5F1E8" }}>
        <div className="mx-auto max-w-6xl">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionTag dark>Verified Matters</SectionTag>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                Demonstrated in <span className="font-serif-italic text-4xl sm:text-6xl" style={{ color: "#d9a65e" }}>practice</span>.
              </h2>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-white transition">
              <span>View Caseload Archive</span>
              <ArrowUpRight size={15} />
            </a>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {CASES.map((c, i) => (
              <Reveal key={c.title} i={i}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex h-full flex-col justify-between rounded-2xl p-8"
                  style={{ background: THEME.darkSurface, border: `1px solid ${THEME.darkLine}` }}
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#d9a65e" }}>
                      {c.tag}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold leading-snug text-neutral-100">{c.title}</h3>
                  </div>
                  <div className="mt-8 border-t pt-4 text-xs font-semibold text-neutral-400" style={{ borderColor: THEME.darkLine }}>
                    Outcome: <span className="text-white">{c.result}</span>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------- TESTIMONIALS ------------------------ */}
      <section className="px-6 py-28 sm:px-8 border-t" style={{ borderColor: THEME.line }}>
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <SectionTag>Client Endorsements</SectionTag>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
              Retained by those who expect <span className="font-serif-italic text-4xl sm:text-6xl" style={{ color: THEME.accent }}>precision</span>.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} i={i}>
                <div
                  className="flex h-full flex-col justify-between rounded-2xl p-8"
                  style={{ background: THEME.surface, border: `1px solid ${THEME.line}` }}
                >
                  <div>
                    <div className="flex gap-1" style={{ color: THEME.accent }}>
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Star key={k} size={15} fill="currentColor" />
                      ))}
                    </div>
                    <p className="mt-5 text-sm leading-relaxed" style={{ color: THEME.muted }}>
                      "{t.text}"
                    </p>
                  </div>
                  <div className="mt-6 border-t pt-4" style={{ borderColor: THEME.line }}>
                    <div className="text-sm font-bold text-neutral-900">{t.name}</div>
                    <div className="text-xs text-neutral-500">{t.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ CONTACT -------------------------- */}
      <section id="contact" className="px-6 pb-28 sm:px-8">
        <Reveal>
          <div
            className="mx-auto grid max-w-6xl gap-12 rounded-3xl p-8 sm:p-12 md:grid-cols-12 md:p-16"
            style={{ background: THEME.dark, color: "#F5F1E8", border: `1px solid ${THEME.darkLine}` }}
          >
            <div className="md:col-span-5 flex flex-col justify-between">
              <div>
                <SectionTag dark>Privileged Intake</SectionTag>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl leading-tight">
                  Consult with our{" "}
                  <span className="font-serif-italic text-4xl sm:text-6xl" style={{ color: "#d9a65e" }}>
                    partners
                  </span>.
                </h2>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-neutral-400">
                  Initial consultations are held in strict legal confidence. We analyze your position and advise on your viable options without delay.
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs sm:text-sm text-neutral-300">
                <div className="flex items-center gap-3">
                  <Phone size={16} style={{ color: "#d9a65e" }} /> +233 (0) 30 200 0000
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} style={{ color: "#d9a65e" }} /> counsel@aldridgemensah.com
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} style={{ color: "#d9a65e" }} /> 14 Independence Avenue, Ridge, Accra
                </div>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="md:col-span-7 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Legal Name"
                  className="w-full rounded-xl bg-white/5 px-4 py-3 text-xs sm:text-sm outline-none placeholder:text-neutral-500 focus:ring-1"
                  style={{ border: `1px solid ${THEME.darkLine}`, "--tw-ring-color": "#d9a65e" }}
                />
                <input
                  type="email"
                  placeholder="Official Email Address"
                  className="w-full rounded-xl bg-white/5 px-4 py-3 text-xs sm:text-sm outline-none placeholder:text-neutral-500 focus:ring-1"
                  style={{ border: `1px solid ${THEME.darkLine}`, "--tw-ring-color": "#d9a65e" }}
                />
              </div>
              <input
                type="tel"
                placeholder="Direct Phone / WhatsApp"
                className="w-full rounded-xl bg-white/5 px-4 py-3 text-xs sm:text-sm outline-none placeholder:text-neutral-500 focus:ring-1"
                style={{ border: `1px solid ${THEME.darkLine}`, "--tw-ring-color": "#d9a65e" }}
              />
              <textarea
                rows={4}
                placeholder="Brief summary of matter (Protected by client privilege)"
                className="w-full resize-none rounded-xl bg-white/5 px-4 py-3 text-xs sm:text-sm outline-none placeholder:text-neutral-500 focus:ring-1"
                style={{ border: `1px solid ${THEME.darkLine}`, "--tw-ring-color": "#d9a65e" }}
              />
              <button
                type="submit"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full px-8 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:brightness-110"
                style={{ background: THEME.accent, color: THEME.onAccent }}
              >
                <span>Submit Confidential Brief</span>
                <ArrowUpRight size={15} />
              </button>
            </form>
          </div>
        </Reveal>
      </section>

      {/* ------------------------------ FOOTER --------------------------- */}
      <footer className="border-t px-6 py-10 sm:px-8" style={{ borderColor: THEME.line, color: THEME.muted }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-xs md:flex-row">
          <div className="flex items-center gap-2 font-cinzel text-neutral-900 tracking-wider font-semibold">
            <Scale size={16} style={{ color: THEME.accent }} /> {FIRM}
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-neutral-600">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} className="hover:text-black transition">
                {n.label}
              </a>
            ))}
          </div>
          <div className="text-center md:text-right">
            &copy; {new Date().getFullYear()} {FIRM} LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}