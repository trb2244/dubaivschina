import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  FileText,
  Gavel,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  Users,
  X,
} from "lucide-react";

const firmName = "Aldridge & Mensah";
const currentYear = new Date().getFullYear();
const navItems = [
  { label: "Practice", href: "#practice" },
  { label: "The firm", href: "#firm" },
  { label: "Our approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];
const practices = [
  {
    number: "01",
    title: "Corporate & Commercial",
    description:
      "Formation, regulatory governance, cross-border M&A, and commercial contracts crafted for longevity.",
    icon: Building2,
  },
  {
    number: "02",
    title: "Dispute Litigation",
    description:
      "Trial and appellate advocacy across state courts, commercial tribunals, and arbitration.",
    icon: Gavel,
  },
  {
    number: "03",
    title: "Real Estate & Land Title",
    description:
      "Due diligence, acquisition conveyancing, and complex boundary dispute resolution.",
    icon: Landmark,
  },
  {
    number: "04",
    title: "Family & Private Wealth",
    description:
      "Discreet advisory on estate planning, trusts, fiduciary matters, and family counsel.",
    icon: Users,
  },
  {
    number: "05",
    title: "Intellectual Property",
    description:
      "Counsel on patents, trademarks, proprietary codebases, and licensing rights.",
    icon: FileText,
  },
  {
    number: "06",
    title: "Regulatory Compliance",
    description:
      "Guidance through statutory audits, institutional enforcement, and tax risk.",
    icon: Scale,
  },
];
const stages = [
  {
    number: "01",
    title: "Understand the matter",
    text: "A direct review of your position, priorities, and the decisions ahead.",
  },
  {
    number: "02",
    title: "Set a clear course",
    text: "Practical counsel on available options, costs, milestones, and risks.",
  },
  {
    number: "03",
    title: "Work alongside you",
    text: "Partner-led representation through filings, negotiations, and hearings.",
  },
  {
    number: "04",
    title: "Reach a resolution",
    text: "Focused work toward resolution, with attention to what follows.",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      document.querySelectorAll(".am2-reveal").forEach((el) => el.classList.add("is-visible"));
      return () => window.removeEventListener("scroll", onScroll);
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -34px 0px" },
    );
    document.querySelectorAll(".am2-reveal").forEach((el) => observer.observe(el));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const handleBrief = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const practice = String(data.get("practice") || "General enquiry");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Enquiry — ${practice}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nArea of counsel: ${practice}\n\nBrief outline:\n${message}`,
    );
    setNotice("Your email application should open with a draft addressed to the firm.");
    window.location.href = `mailto:counsel@aldridgemensah.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className={`am2-page${scrolled ? " has-scrolled" : ""}`}>
      <style>{`
        .am2-page {
          --paper: #fbfaf7; --white: #fffefa; --ink: #172637; --navy: #172b40;
          --muted: #5d6872; --line: #d9dfe1; --burgundy: #77364a; --blue: #52758d;
          --pale-blue: #edf2f3; --pale-rose: #f4ecec;
          min-height: 100dvh; overflow: clip; background: var(--paper); color: var(--ink);
          font-family: "Plus Jakarta Sans", sans-serif; -webkit-font-smoothing: antialiased;
        }
        .am2-page *, .am2-page *::before, .am2-page *::after { box-sizing: border-box; }
        .am2-page a { color: inherit; text-decoration: none; }
        .am2-page button, .am2-page input, .am2-page textarea, .am2-page select { font: inherit; }
        .am2-page button { color: inherit; }
        .am2-page .am2-serif { font-family: "Instrument Serif", Georgia, serif; font-weight: 400; }
        .am2-container { width: min(1180px, calc(100% - 64px)); margin-inline: auto; }
        .am2-utility {
          display: flex; justify-content: space-between; align-items: center; gap: 18px;
          min-height: 34px; padding: 0 max(32px, calc((100% - 1180px) / 2));
          background: var(--navy); color: #f5f4f0; font-size: 9px; letter-spacing: .11em;
        }
        .am2-utility span:last-child { color: #d6c3c8; }
        .am2-header {
          position: sticky; top: 0; z-index: 20; background: rgba(251,250,247,.95);
          border-bottom: 1px solid transparent; backdrop-filter: blur(12px);
          transition: border-color .3s ease, box-shadow .3s ease, background .3s ease;
        }
        .am2-page.has-scrolled .am2-header {
          border-color: var(--line); background: rgba(251,250,247,.98);
          box-shadow: 0 8px 24px rgba(23,38,55,.05);
        }
        .am2-nav { min-height: 80px; display: flex; align-items: center; justify-content: space-between; gap: 25px; }
        .am2-brand { display: inline-flex; align-items: center; gap: 13px; flex-shrink: 0; }
        .am2-brand-mark {
          width: 40px; height: 40px; display: grid; place-items: center; color: var(--burgundy);
          border: 1px solid #c9aeb6; border-radius: 50%;
        }
        .am2-brand-name { display: block; font-family: "Cinzel", Georgia, serif; font-size: 12px; letter-spacing: .095em; }
        .am2-brand-caption { display: block; margin-top: 4px; color: var(--muted); font-size: 8px; letter-spacing: .14em; text-transform: uppercase; }
        .am2-links { display: flex; align-items: center; gap: clamp(18px, 3vw, 40px); }
        .am2-links a { position: relative; padding: 10px 0; color: #354451; font-size: 10px; letter-spacing: .09em; text-transform: uppercase; }
        .am2-links a::after { position: absolute; right: 0; bottom: 4px; left: 0; height: 1px; background: var(--burgundy); content: ""; transform: scaleX(0); transform-origin: right; transition: transform .28s ease; }
        .am2-links a:hover::after { transform: scaleX(1); transform-origin: left; }
        .am2-button {
          min-height: 46px; display: inline-flex; align-items: center; justify-content: center; gap: 13px;
          padding: 0 19px; border: 1px solid var(--burgundy); background: var(--burgundy); color: white !important;
          font-size: 9px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase;
          transition: background .22s ease, color .22s ease, transform .22s ease;
        }
        .am2-button:hover { background: transparent; color: var(--burgundy) !important; transform: translateY(-2px); }
        .am2-button svg { transition: transform .22s ease; }
        .am2-button:hover svg { transform: translate(2px,-2px); }
        .am2-menu-button { display: none; width: 44px; height: 44px; place-items: center; border: 1px solid var(--line); background: transparent; cursor: pointer; }
        .am2-mobile-nav { display: none; }
        .am2-hero {
          min-height: min(700px, calc(100svh - 114px)); position: relative; display: flex; align-items: center;
          background-image: linear-gradient(90deg, rgba(15,31,47,.82) 0%, rgba(20,38,55,.65) 43%, rgba(20,38,55,.08) 100%), linear-gradient(0deg, rgba(14,29,43,.22), transparent 55%), url("/images/accra-courthouse-hero.jpg");
          background-size: cover; background-position: center 48%; color: #fffefa;
        }
        .am2-hero::after { position: absolute; inset: 0; border-bottom: 5px solid var(--burgundy); content: ""; pointer-events: none; opacity: .86; }
        .am2-hero-inner { position: relative; z-index: 1; padding-top: 68px; padding-bottom: 78px; }
        .am2-kicker { display: inline-flex; align-items: center; gap: 12px; color: #dfc6cc; font-size: 9px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; }
        .am2-kicker::before { width: 29px; height: 1px; background: currentColor; content: ""; }
        .am2-hero h1 { max-width: 800px; margin: 22px 0 22px; font-size: clamp(60px, 8.4vw, 108px); line-height: .91; letter-spacing: -.045em; }
        .am2-hero h1 em { color: #e2c5cc; font-weight: 400; }
        .am2-hero-copy { max-width: 495px; margin: 0; color: rgba(255,254,250,.87); font-size: 13px; line-height: 1.95; }
        .am2-hero-actions { display: flex; align-items: center; gap: 27px; margin-top: 30px; }
        .am2-hero .am2-button { border-color: #f6f2ec; background: #f6f2ec; color: var(--navy) !important; }
        .am2-hero .am2-button:hover { color: white !important; border-color: white; background: transparent; }
        .am2-inline-link { display: inline-flex; align-items: center; gap: 9px; color: white; font-size: 9px; font-weight: 700; letter-spacing: .13em; text-transform: uppercase; }
        .am2-inline-link svg { color: #e0bdc6; transition: transform .2s ease; }
        .am2-inline-link:hover svg { transform: translateX(4px); }
        .am2-hero-bottom { position: absolute; right: max(32px, calc((100% - 1180px)/2)); bottom: 25px; z-index: 2; display: flex; align-items: center; gap: 10px; color: rgba(255,255,255,.82); font-size: 8px; letter-spacing: .16em; text-transform: uppercase; }
        .am2-hero-bottom svg { color: #e2c5cc; }
        .am2-hero-content { animation: am2-rise .8s cubic-bezier(.2,.8,.2,1) both; }
        .am2-intro { padding: 30px 0; background: var(--white); border-bottom: 1px solid var(--line); }
        .am2-intro-inner { display: flex; justify-content: space-between; align-items: center; gap: 32px; }
        .am2-intro p { max-width: 830px; margin: 0; font-size: clamp(19px, 2.4vw, 29px); line-height: 1.35; }
        .am2-intro p em { color: var(--burgundy); }
        .am2-intro-mark { flex: 0 0 auto; color: var(--blue); }
        .am2-section { padding: 105px 0; }
        .am2-section-head { max-width: 675px; }
        .am2-section-head h2, .am2-firm-copy h2, .am2-process-head h2, .am2-contact-copy h2 {
          margin: 18px 0 0; font-size: clamp(39px, 5vw, 62px); line-height: 1.02; letter-spacing: -.035em;
        }
        .am2-section-head h2 em, .am2-firm-copy h2 em, .am2-process-head h2 em, .am2-contact-copy h2 em { color: var(--burgundy); }
        .am2-section-head > p { max-width: 520px; margin: 18px 0 0; color: var(--muted); font-size: 12px; line-height: 1.9; }
        .am2-practice-layout { display: grid; grid-template-columns: .74fr 1.26fr; gap: 78px; margin-top: 58px; }
        .am2-aside { position: sticky; top: 122px; align-self: start; }
        .am2-aside p { max-width: 260px; color: var(--muted); font-size: 12px; line-height: 1.95; }
        .am2-aside-note { margin-top: 34px; padding-top: 17px; border-top: 1px solid var(--line); color: var(--blue); font-size: 9px; letter-spacing: .13em; line-height: 1.8; text-transform: uppercase; }
        .am2-practice-list { border-top: 1px solid var(--line); }
        .am2-practice-row {
          display: grid; grid-template-columns: 38px 28px minmax(160px,.8fr) minmax(175px,1.2fr) 16px;
          gap: 15px; align-items: start; padding: 23px 4px; border-bottom: 1px solid var(--line);
          transition: padding .25s ease, background .25s ease;
        }
        .am2-practice-row:hover { padding-inline: 12px; background: #f3f5f4; }
        .am2-practice-num { color: var(--burgundy); font-size: 18px; }
        .am2-practice-icon { color: var(--blue); }
        .am2-practice-row h3 { margin: 1px 0 0; font-size: 12px; font-weight: 600; line-height: 1.55; }
        .am2-practice-row p { margin: 0; color: var(--muted); font-size: 10px; line-height: 1.85; }
        .am2-row-arrow { color: var(--burgundy); transition: transform .2s ease; }
        .am2-practice-row:hover .am2-row-arrow { transform: translate(3px,-3px); }
        .am2-firm { padding: 86px 0; background: var(--navy); color: var(--white); }
        .am2-firm-layout { display: grid; grid-template-columns: 1.02fr .98fr; align-items: center; gap: 86px; }
        .am2-firm-plate { position: relative; min-height: 410px; display: flex; align-items: end; padding: 25px; overflow: hidden; background: linear-gradient(140deg, rgba(76,104,122,.5), transparent 62%), var(--pale-blue); color: var(--navy); }
        .am2-firm-plate::before { position: absolute; inset: 18px; border: 1px solid rgba(23,43,64,.3); content: ""; }
        .am2-firm-plate::after { position: absolute; top: 52px; left: 50%; width: 1px; height: 68%; background: rgba(23,43,64,.28); content: ""; transform: rotate(26deg); }
        .am2-plate-caption { position: relative; z-index: 1; display: flex; align-items: center; gap: 12px; padding: 12px 15px; background: rgba(255,254,250,.9); color: var(--navy); font-size: 8px; letter-spacing: .14em; text-transform: uppercase; }
        .am2-plate-caption svg { color: var(--burgundy); }
        .am2-firm-copy .am2-kicker { color: #d9b5bf; }
        .am2-firm-copy h2 { max-width: 520px; }
        .am2-firm-copy h2 em { color: #d9b5bf; }
        .am2-firm-copy > p { max-width: 475px; margin: 22px 0 0; color: #d5dce0; font-size: 12px; line-height: 2; }
        .am2-firm-points { margin-top: 26px; border-top: 1px solid rgba(255,255,255,.2); }
        .am2-firm-point { display: flex; align-items: center; gap: 13px; padding: 13px 0; border-bottom: 1px solid rgba(255,255,255,.2); color: #eff0ed; font-size: 10px; }
        .am2-firm-point::before { width: 6px; height: 6px; border: 1px solid #d9b5bf; content: ""; transform: rotate(45deg); }
        .am2-firm-copy .am2-button { margin-top: 28px; border-color: #d9b5bf; background: #d9b5bf; color: var(--navy) !important; }
        .am2-firm-copy .am2-button:hover { background: transparent; color: white !important; }
        .am2-process { background: var(--pale-blue); }
        .am2-process-head { display: flex; align-items: end; justify-content: space-between; gap: 36px; }
        .am2-process-head h2 { max-width: 640px; }
        .am2-process-head > p { max-width: 285px; margin: 0 0 5px; color: var(--muted); font-size: 11px; line-height: 1.9; }
        .am2-stages { display: grid; grid-template-columns: repeat(4,1fr); margin-top: 56px; border-top: 1px solid #c9d3d7; }
        .am2-stage { padding: 25px 24px 0 0; }
        .am2-stage:not(:first-child) { padding-left: 23px; border-left: 1px solid #c9d3d7; }
        .am2-stage-number { color: var(--burgundy); font-size: 26px; }
        .am2-stage h3 { margin: 17px 0 9px; font-size: 12px; font-weight: 600; }
        .am2-stage p { max-width: 220px; margin: 0; color: var(--muted); font-size: 10px; line-height: 1.9; }
        .am2-contact { padding: 92px 0; }
        .am2-contact-panel { display: grid; grid-template-columns: .85fr 1.15fr; gap: 76px; padding: 56px 60px; background: var(--pale-rose); }
        .am2-contact-copy h2 { max-width: 440px; }
        .am2-contact-copy > p { max-width: 370px; margin: 18px 0 0; color: var(--muted); font-size: 11px; line-height: 1.9; }
        .am2-contact-details { display: grid; gap: 15px; margin-top: 34px; }
        .am2-contact-details a, .am2-contact-details span { display: flex; align-items: center; gap: 12px; color: var(--ink); font-size: 10px; }
        .am2-contact-details svg { flex: 0 0 auto; color: var(--burgundy); }
        .am2-form { display: grid; gap: 15px; align-content: center; }
        .am2-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .am2-field { display: grid; gap: 7px; }
        .am2-field label { color: #495561; font-size: 8px; font-weight: 700; letter-spacing: .13em; text-transform: uppercase; }
        .am2-field input, .am2-field textarea, .am2-field select {
          width: 100%; min-height: 45px; padding: 12px 13px; border: 1px solid #d1c5c7;
          border-radius: 0; outline: none; background: rgba(255,254,250,.78); color: var(--ink); font-size: 10px;
          transition: border-color .2s ease, background .2s ease;
        }
        .am2-field textarea { min-height: 100px; resize: vertical; }
        .am2-field input:focus, .am2-field textarea:focus, .am2-field select:focus { border-color: var(--blue); background: var(--white); }
        .am2-form .am2-button { justify-self: start; cursor: pointer; }
        .am2-form-note { margin: 0; color: var(--muted); font-size: 9px; line-height: 1.75; }
        .am2-form-status { min-height: 14px; margin: 0; color: var(--burgundy); font-size: 10px; }
        .am2-footer { padding: 26px 0; background: #102236; color: #d4dce0; }
        .am2-footer-inner { display: flex; align-items: center; justify-content: space-between; gap: 22px; }
        .am2-footer-brand { display: flex; align-items: center; gap: 10px; color: var(--white); }
        .am2-footer-brand svg { color: #d9b5bf; }
        .am2-footer-brand span { font-family: "Cinzel", Georgia, serif; font-size: 9px; letter-spacing: .12em; text-transform: uppercase; }
        .am2-footer-nav { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; }
        .am2-footer-nav a, .am2-copyright { color: #b6c0c6; font-size: 8px; letter-spacing: .08em; }
        .am2-footer-nav a:hover { color: white; }
        .am2-reveal { opacity: 0; transform: translateY(17px); transition: opacity .65s ease, transform .65s cubic-bezier(.22,1,.36,1); }
        .am2-reveal.is-visible { opacity: 1; transform: translateY(0); }
        @keyframes am2-rise { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 980px) {
          .am2-practice-layout { gap: 42px; grid-template-columns: .62fr 1.38fr; }
          .am2-practice-row { grid-template-columns: 30px 24px minmax(130px,.9fr) minmax(145px,1.1fr) 14px; gap: 11px; }
          .am2-firm-layout { gap: 48px; }
          .am2-contact-panel { gap: 42px; padding: 44px; }
        }
        @media (max-width: 760px) {
          .am2-container { width: min(calc(100% - 40px), 600px); }
          .am2-utility { justify-content: center; text-align: center; min-height: 30px; padding-inline: 20px; font-size: 8px; }
          .am2-utility span:last-child { display: none; }
          .am2-nav { min-height: 70px; }
          .am2-links, .am2-nav > .am2-button { display: none; }
          .am2-menu-button { display: grid; }
          .am2-mobile-nav { position: absolute; top: 100%; right: 0; left: 0; display: grid; gap: 0; padding: 4px 20px 20px; border-bottom: 1px solid var(--line); background: var(--white); box-shadow: 0 14px 20px rgba(23,38,55,.08); }
          .am2-mobile-nav a:not(.am2-button) { padding: 15px 0; border-bottom: 1px solid var(--line); font-size: 10px; letter-spacing: .12em; text-transform: uppercase; }
          .am2-mobile-nav .am2-button { margin-top: 16px; }
          .am2-hero { min-height: 660px; min-height: min(760px, calc(100svh - 100px)); align-items: center; background-position: 58% center; }
          .am2-hero::before { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(15,31,47,.76), rgba(15,31,47,.48) 75%, rgba(15,31,47,.25)); content: ""; }
          .am2-hero-inner { padding-top: 58px; padding-bottom: 75px; }
          .am2-hero h1 { font-size: clamp(58px, 12vw, 86px); }
          .am2-hero-copy { font-size: 12px; }
          .am2-hero-bottom { right: 20px; bottom: 19px; }
          .am2-intro { padding: 23px 0; }
          .am2-section { padding: 76px 0; }
          .am2-practice-layout { grid-template-columns: 1fr; gap: 25px; margin-top: 40px; }
          .am2-aside { position: static; }
          .am2-aside p { max-width: 500px; margin: 8px 0 0; }
          .am2-aside-note { display: none; }
          .am2-practice-row { grid-template-columns: 26px 22px minmax(0,1fr) 14px; gap: 10px; padding: 19px 2px; }
          .am2-practice-row p { grid-column: 3 / 4; margin-top: -1px; }
          .am2-row-arrow { grid-column: 4; grid-row: 1; }
          .am2-firm { padding: 62px 0 70px; }
          .am2-firm-layout { grid-template-columns: 1fr; gap: 35px; }
          .am2-firm-copy { order: -1; }
          .am2-firm-plate { min-height: 330px; }
          .am2-process-head { display: block; }
          .am2-process-head > p { margin-top: 16px; }
          .am2-stages { grid-template-columns: 1fr 1fr; row-gap: 26px; margin-top: 42px; }
          .am2-stage { min-height: 145px; }
          .am2-stage:nth-child(3) { padding-left: 0; border-left: 0; }
          .am2-contact { padding: 60px 0; }
          .am2-contact-panel { grid-template-columns: 1fr; gap: 36px; padding: 31px 24px; }
          .am2-footer-inner { flex-direction: column; text-align: center; }
          .am2-footer-nav { gap: 15px; }
        }
        @media (max-width: 430px) {
          .am2-container { width: calc(100% - 36px); }
          .am2-brand-name { font-size: 10px; }
          .am2-brand-caption { font-size: 7px; }
          .am2-hero { min-height: 620px; }
          .am2-hero h1 { font-size: 57px; }
          .am2-hero-actions { align-items: flex-start; flex-direction: column; gap: 18px; }
          .am2-intro-inner { align-items: flex-start; }
          .am2-intro-mark { width: 23px; margin-top: 3px; }
          .am2-practice-row { grid-template-columns: 23px 20px minmax(0,1fr) 13px; gap: 8px; }
          .am2-practice-row h3 { font-size: 11px; }
          .am2-practice-row p { font-size: 9px; }
          .am2-stages { column-gap: 8px; }
          .am2-stage { padding-right: 7px; }
          .am2-stage:not(:first-child) { padding-left: 12px; }
          .am2-stage:nth-child(3) { padding-left: 0; }
          .am2-stage h3 { font-size: 11px; }
          .am2-stage p { font-size: 9px; }
          .am2-form-row { grid-template-columns: 1fr; }
        }
        @media (prefers-reduced-motion: reduce) {
          .am2-page *, .am2-page *::before, .am2-page *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }
          .am2-reveal { opacity: 1; transform: none; }
        }
      `}</style>

      <div className="am2-utility">
        <span>Independent counsel · Accra, Ghana</span>
        <span>For business leaders &amp; families</span>
      </div>
      <header className="am2-header">
        <div className="am2-container am2-nav">
          <a className="am2-brand" href="#home" aria-label={`${firmName} home`}>
            <span className="am2-brand-mark"><Scale size={19} strokeWidth={1.4} /></span>
            <span>
              <span className="am2-brand-name">{firmName}</span>
              <span className="am2-brand-caption">Counsel · Advocacy · Trust</span>
            </span>
          </a>
          <nav className="am2-links" aria-label="Main navigation">
            {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <a className="am2-button" href="#contact">Arrange a consultation <ArrowUpRight size={14} /></a>
          <button className="am2-menu-button" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="am2-mobile-menu" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
          {menuOpen && (
            <nav id="am2-mobile-menu" className="am2-mobile-nav" aria-label="Mobile navigation">
              {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
              <a className="am2-button" href="#contact" onClick={() => setMenuOpen(false)}>Arrange a consultation <ArrowUpRight size={14} /></a>
            </nav>
          )}
        </div>
      </header>

      <section className="am2-hero" id="home" aria-label="Welcome to Aldridge and Mensah">
        <div className="am2-container am2-hero-inner">
          <div className="am2-hero-content">
            <span className="am2-kicker">A law firm in Accra</span>
            <h1 className="am2-serif">Welcome to<br /><em>Aldridge &amp; Mensah.</em></h1>
            <p className="am2-hero-copy">Strategic counsel, measured advocacy, and partner-led guidance for decisions that shape businesses and families.</p>
            <div className="am2-hero-actions">
              <a className="am2-button" href="#contact">Speak with counsel <ArrowUpRight size={14} /></a>
              <a className="am2-inline-link" href="#practice">Explore our practice <ArrowRight size={14} /></a>
            </div>
          </div>
        </div>
        <div className="am2-hero-bottom"><MapPin size={13} /> Accra, Ghana <span aria-hidden="true">·</span> Independence Avenue</div>
      </section>

      <section className="am2-intro" aria-label="Our counsel">
        <div className="am2-container am2-intro-inner">
          <p className="am2-serif">Clear thinking and careful representation, guided by <em>what matters most to you.</em></p>
          <Scale className="am2-intro-mark" size={30} strokeWidth={1.2} />
        </div>
      </section>

      <section className="am2-section" id="practice">
        <div className="am2-container">
          <div className="am2-section-head am2-reveal">
            <span className="am2-kicker" style={{ color: "var(--burgundy)" }}>Practice areas</span>
            <h2 className="am2-serif">The right counsel, <em>for the matter at hand.</em></h2>
            <p>Our work spans business, disputes, property, private wealth, and the regulatory questions that connect them.</p>
          </div>
          <div className="am2-practice-layout">
            <aside className="am2-aside am2-reveal">
              <p>We bring a considered, partner-led perspective to matters where sound judgment and discretion are essential.</p>
              <div className="am2-aside-note">Six areas of counsel<br />One direct point of contact</div>
            </aside>
            <div className="am2-practice-list">
              {practices.map((practice, index) => {
                const Icon = practice.icon;
                return (
                  <a className="am2-practice-row am2-reveal" href="#contact" key={practice.number} style={{ transitionDelay: `${index * 45}ms` }}>
                    <span className="am2-practice-num am2-serif">{practice.number}</span>
                    <Icon className="am2-practice-icon" size={19} strokeWidth={1.5} />
                    <h3>{practice.title}</h3>
                    <p>{practice.description}</p>
                    <ArrowUpRight className="am2-row-arrow" size={15} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="am2-firm" id="firm">
        <div className="am2-container am2-firm-layout">
          <div className="am2-firm-plate am2-reveal" aria-label="A considered place for counsel">
            <div className="am2-plate-caption"><Landmark size={15} strokeWidth={1.5} /> A law firm rooted in Accra</div>
          </div>
          <div className="am2-firm-copy am2-reveal">
            <span className="am2-kicker">The firm</span>
            <h2 className="am2-serif">Sound judgment.<br /><em>Personal counsel.</em></h2>
            <p>Founded on the belief that superior legal counsel pairs deep statutory knowledge with candid commercial pragmatism, Aldridge &amp; Mensah serves leaders, institutions, and families facing defining milestones.</p>
            <div className="am2-firm-points">
              <div className="am2-firm-point">Direct partner stewardship through each matter</div>
              <div className="am2-firm-point">Candid advice on options, costs, and next steps</div>
              <div className="am2-firm-point">Discreet counsel for business and private matters</div>
            </div>
            <a className="am2-button" href="#contact">Meet with our counsel <ArrowUpRight size={14} /></a>
          </div>
        </div>
      </section>

      <section className="am2-section am2-process" id="approach">
        <div className="am2-container">
          <div className="am2-process-head am2-reveal">
            <div>
              <span className="am2-kicker" style={{ color: "var(--burgundy)" }}>Our approach</span>
              <h2 className="am2-serif">A measured path from <em>question to resolution.</em></h2>
            </div>
            <p>Good counsel begins with listening, then makes the way forward easier to see.</p>
          </div>
          <div className="am2-stages">
            {stages.map((stage, index) => (
              <article className="am2-stage am2-reveal" key={stage.number} style={{ transitionDelay: `${index * 70}ms` }}>
                <span className="am2-stage-number am2-serif">{stage.number}</span>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="am2-contact" id="contact">
        <div className="am2-container am2-contact-panel am2-reveal">
          <div className="am2-contact-copy">
            <span className="am2-kicker" style={{ color: "var(--burgundy)" }}>Start with an initial conversation</span>
            <h2 className="am2-serif">Let us understand <em>what matters.</em></h2>
            <p>Share a brief outline so the firm can direct your enquiry to the right person.</p>
            <div className="am2-contact-details">
              <a href="tel:+233302000000"><Phone size={15} /> +233 (0) 30 200 0000</a>
              <a href="mailto:counsel@aldridgemensah.com"><Mail size={15} /> counsel@aldridgemensah.com</a>
              <span><MapPin size={15} /> 14 Independence Avenue, Ridge, Accra</span>
            </div>
          </div>
          <form className="am2-form" onSubmit={handleBrief}>
            <div className="am2-form-row">
              <div className="am2-field">
                <label htmlFor="am2-name">Full name</label>
                <input id="am2-name" name="name" type="text" placeholder="Your name" autoComplete="name" required />
              </div>
              <div className="am2-field">
                <label htmlFor="am2-email">Email address</label>
                <input id="am2-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
              </div>
            </div>
            <div className="am2-form-row">
              <div className="am2-field">
                <label htmlFor="am2-phone">Phone / WhatsApp</label>
                <input id="am2-phone" name="phone" type="tel" placeholder="+233" autoComplete="tel" />
              </div>
              <div className="am2-field">
                <label htmlFor="am2-practice">Area of counsel</label>
                <select id="am2-practice" name="practice" defaultValue="">
                  <option value="" disabled>Select an area</option>
                  {practices.map((practice) => <option key={practice.number} value={practice.title}>{practice.title}</option>)}
                  <option value="General enquiry">Other / not sure</option>
                </select>
              </div>
            </div>
            <div className="am2-field">
              <label htmlFor="am2-message">Brief outline of the matter</label>
              <textarea id="am2-message" name="message" placeholder="Share only what is necessary for an initial conversation." required />
            </div>
            <button className="am2-button" type="submit">Prepare an email enquiry <ArrowUpRight size={14} /></button>
            <p className="am2-form-note">This form prepares an email in your email application; it does not submit information to this website. Please do not include sensitive or confidential details in your initial message.</p>
            <p className="am2-form-status" role="status" aria-live="polite">{notice}</p>
          </form>
        </div>
      </section>

      <footer className="am2-footer">
        <div className="am2-container am2-footer-inner">
          <a className="am2-footer-brand" href="#home"><Scale size={17} strokeWidth={1.4} /><span>{firmName}</span></a>
          <nav className="am2-footer-nav" aria-label="Footer navigation">
            {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <div className="am2-copyright">© {currentYear} {firmName}</div>
        </div>
      </footer>
    </main>
  );
}
