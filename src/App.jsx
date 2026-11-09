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
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    document.querySelectorAll(".am-reveal").forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const handleBrief = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const practice = String(data.get("practice") || "General enquiry");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Confidential enquiry — ${practice}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nArea of counsel: ${practice}\n\nMatter summary:\n${message}`,
    );
    setNotice("Your email application is opening with your enquiry prepared.");
    window.location.href = `mailto:counsel@aldridgemensah.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className={`am-page${scrolled ? " has-scrolled" : ""}`}>
      <style>{`
        .am-page {
          --am-ivory: #f5f0e7;
          --am-paper: #fbf8f2;
          --am-limestone: #e9e0d2;
          --am-ink: #27231f;
          --am-charcoal: #282722;
          --am-muted: #746d63;
          --am-line: #d9cdbb;
          --am-bronze: #8d6541;
          --am-bronze-light: #c3a27c;
          min-height: 100dvh;
          overflow: clip;
          background: var(--am-ivory);
          color: var(--am-ink);
          font-family: "Plus Jakarta Sans", sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .am-page *, .am-page *::before, .am-page *::after { box-sizing: border-box; }
        .am-page a { color: inherit; text-decoration: none; }
        .am-page button, .am-page input, .am-page textarea, .am-page select { font: inherit; }
        .am-page button { color: inherit; }
        .am-page .am-serif { font-family: "Instrument Serif", Georgia, serif; }
        .am-page .am-cinzel { font-family: "Cinzel", Georgia, serif; }
        .am-container { width: min(1180px, calc(100% - 64px)); margin-inline: auto; }
        .am-topline {
          height: 34px; display: flex; align-items: center; justify-content: center;
          background: var(--am-charcoal); color: #e9dfd1; font-size: 9px;
          letter-spacing: .19em; text-transform: uppercase;
        }
        .am-header {
          position: sticky; top: 0; z-index: 30;
          background: rgba(245,240,231,.93); border-bottom: 1px solid transparent;
          transition: background .3s ease, border-color .3s ease, box-shadow .3s ease;
          backdrop-filter: blur(14px);
        }
        .am-page.has-scrolled .am-header {
          background: rgba(245,240,231,.97); border-color: var(--am-line);
          box-shadow: 0 8px 24px rgba(44,35,23,.045);
        }
        .am-nav {
          min-height: 82px; display: flex; align-items: center; justify-content: space-between;
          gap: 24px;
        }
        .am-brand { display: inline-flex; align-items: center; gap: 12px; flex-shrink: 0; }
        .am-mark {
          width: 36px; height: 36px; display: grid; place-items: center;
          border: 1px solid var(--am-bronze); color: var(--am-bronze);
          transform: rotate(45deg); transition: transform .35s ease;
        }
        .am-mark svg { transform: rotate(-45deg); }
        .am-brand:hover .am-mark { transform: rotate(135deg); }
        .am-brand-name { display: block; font-size: 12px; letter-spacing: .13em; text-transform: uppercase; }
        .am-brand-caption {
          display: block; margin-top: 3px; color: var(--am-muted); font-size: 8px;
          letter-spacing: .18em; text-transform: uppercase;
        }
        .am-links { display: flex; align-items: center; gap: clamp(18px, 3vw, 42px); }
        .am-links a {
          position: relative; padding: 8px 0; color: #514b44; font-size: 10px;
          letter-spacing: .1em; text-transform: uppercase;
        }
        .am-links a::after {
          position: absolute; right: 0; bottom: 2px; left: 0; height: 1px;
          background: var(--am-bronze); content: ""; transform: scaleX(0);
          transform-origin: right; transition: transform .3s ease;
        }
        .am-links a:hover::after { transform: scaleX(1); transform-origin: left; }
        .am-button {
          min-height: 46px; display: inline-flex; align-items: center; justify-content: center;
          gap: 16px; padding: 0 20px; border: 1px solid var(--am-bronze);
          background: var(--am-bronze); color: #fbf8f2 !important;
          font-size: 9px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase;
          transition: background .25s ease, color .25s ease, transform .25s ease;
        }
        .am-button:hover { background: transparent; color: var(--am-bronze) !important; transform: translateY(-2px); }
        .am-button svg { transition: transform .25s ease; }
        .am-button:hover svg { transform: translate(2px, -2px); }
        .am-menu-button {
          display: none; width: 44px; height: 44px; place-items: center;
          background: transparent; border: 1px solid var(--am-line); cursor: pointer;
        }
        .am-mobile-nav { display: none; }
        .am-hero { position: relative; padding: 60px 0 76px; }
        .am-hero-grid {
          display: grid; grid-template-columns: minmax(0, .91fr) minmax(0, 1.09fr);
          align-items: center; gap: 62px;
        }
        .am-kicker {
          display: inline-flex; align-items: center; gap: 12px; color: var(--am-bronze);
          font-size: 9px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase;
        }
        .am-kicker::before { width: 30px; height: 1px; background: currentColor; content: ""; }
        .am-hero h1 {
          max-width: 600px; margin: 25px 0 20px; font-size: clamp(48px, 6.3vw, 82px);
          font-weight: 400; letter-spacing: -.055em; line-height: .99;
        }
        .am-hero h1 em { color: var(--am-bronze); font-weight: 400; }
        .am-hero-copy {
          max-width: 430px; color: var(--am-muted); font-size: 13px; line-height: 1.95;
        }
        .am-hero-actions { display: flex; align-items: center; gap: 24px; margin-top: 30px; }
        .am-text-link {
          display: inline-flex; align-items: center; gap: 9px; color: var(--am-ink);
          font-size: 9px; font-weight: 700; letter-spacing: .13em; text-transform: uppercase;
        }
        .am-text-link svg { color: var(--am-bronze); transition: transform .25s ease; }
        .am-text-link:hover svg { transform: translateX(4px); }
        .am-hero-note {
          display: flex; align-items: center; gap: 12px; margin-top: 54px;
          color: var(--am-muted); font-size: 10px; letter-spacing: .04em;
        }
        .am-hero-note::before { width: 36px; height: 1px; background: var(--am-bronze-light); content: ""; }
        .am-hero-image {
          position: relative; min-height: 536px; background: #b9a58e;
          box-shadow: 21px 21px 0 var(--am-limestone);
        }
        .am-hero-image::before {
          position: absolute; z-index: 1; top: -18px; left: -18px; width: 78px; height: 78px;
          border-top: 1px solid var(--am-bronze); border-left: 1px solid var(--am-bronze);
          content: "";
        }
        .am-hero-image img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; }
        .am-image-caption {
          position: absolute; right: 0; bottom: 0; left: 0; z-index: 2;
          display: flex; justify-content: space-between; align-items: center; gap: 12px;
          padding: 16px 20px; background: rgba(39,35,31,.86); color: #f5f0e7;
          font-size: 8px; letter-spacing: .16em; text-transform: uppercase;
        }
        .am-image-caption span:last-child { color: #d1b394; }
        .am-rule { height: 1px; background: var(--am-line); }
        .am-intro-band { padding: 28px 0; background: var(--am-paper); }
        .am-intro-band-inner {
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
        }
        .am-intro-band p {
          max-width: 730px; margin: 0; color: var(--am-ink);
          font-family: "Instrument Serif", Georgia, serif; font-size: clamp(19px, 2.2vw, 27px);
          line-height: 1.3;
        }
        .am-intro-mark { color: var(--am-bronze); flex-shrink: 0; }
        .am-section { padding: 108px 0; }
        .am-section-head { max-width: 670px; }
        .am-section-head h2, .am-firm-copy h2, .am-process-heading h2, .am-contact-copy h2 {
          margin: 19px 0 0; font-size: clamp(36px, 4.4vw, 56px);
          font-weight: 400; letter-spacing: -.045em; line-height: 1.07;
        }
        .am-section-head h2 em, .am-firm-copy h2 em, .am-process-heading h2 em,
        .am-contact-copy h2 em { color: var(--am-bronze); font-weight: 400; }
        .am-section-head > p { max-width: 500px; margin: 17px 0 0; color: var(--am-muted); font-size: 12px; line-height: 1.9; }
        .am-practice-layout { display: grid; grid-template-columns: .72fr 1.28fr; gap: 90px; margin-top: 59px; }
        .am-practice-aside { position: sticky; top: 130px; align-self: start; }
        .am-practice-aside p { max-width: 235px; color: var(--am-muted); font-size: 12px; line-height: 1.9; }
        .am-aside-note {
          margin-top: 35px; padding: 18px 0 0; border-top: 1px solid var(--am-line);
          color: var(--am-bronze); font-size: 9px; letter-spacing: .14em; line-height: 1.8;
          text-transform: uppercase;
        }
        .am-practice-list { border-top: 1px solid var(--am-line); }
        .am-practice-row {
          display: grid; grid-template-columns: 42px 36px minmax(170px, .82fr) minmax(180px, 1.18fr) 18px;
          gap: 16px; align-items: start; padding: 24px 4px; border-bottom: 1px solid var(--am-line);
          transition: padding .3s ease, background .3s ease;
        }
        .am-practice-row:hover { padding-inline: 14px; background: rgba(255,255,255,.38); }
        .am-practice-num { padding-top: 3px; color: var(--am-bronze); font-family: "Instrument Serif", Georgia, serif; font-size: 20px; }
        .am-practice-icon { color: var(--am-bronze); }
        .am-practice-row h3 { margin: 1px 0 0; font-size: 12px; font-weight: 600; line-height: 1.55; }
        .am-practice-row p { margin: 0; color: var(--am-muted); font-size: 10px; line-height: 1.8; }
        .am-row-arrow { margin-top: 3px; color: var(--am-bronze); transition: transform .25s ease; }
        .am-practice-row:hover .am-row-arrow { transform: translate(3px, -3px); }
        .am-firm { padding: 82px 0; background: var(--am-charcoal); color: var(--am-paper); }
        .am-firm-layout { display: grid; grid-template-columns: 1fr .82fr; gap: 95px; align-items: center; }
        .am-firm-photo { position: relative; min-height: 410px; }
        .am-firm-photo img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 28% center; filter: saturate(.75); }
        .am-firm-photo::after { position: absolute; inset: 0; background: linear-gradient(0deg, rgba(31,29,25,.32), transparent 50%); content: ""; }
        .am-firm-photo-label {
          position: absolute; bottom: 18px; left: 20px; z-index: 2; color: #f4eee4;
          font-size: 8px; letter-spacing: .16em; text-transform: uppercase;
        }
        .am-firm-copy .am-kicker { color: #c9a77e; }
        .am-firm-copy h2 { max-width: 460px; }
        .am-firm-copy h2 em { color: #c9a77e; }
        .am-firm-copy > p { max-width: 470px; margin: 22px 0 0; color: #c9c1b6; font-size: 12px; line-height: 2; }
        .am-firm-points { display: grid; gap: 0; margin-top: 27px; border-top: 1px solid rgba(245,240,231,.17); }
        .am-firm-point {
          display: flex; align-items: center; gap: 13px; padding: 13px 0;
          border-bottom: 1px solid rgba(245,240,231,.17); color: #e4ddd3; font-size: 10px;
        }
        .am-firm-point::before { width: 5px; height: 5px; border: 1px solid #c9a77e; content: ""; transform: rotate(45deg); }
        .am-firm-copy .am-button { margin-top: 28px; border-color: #c9a77e; background: #c9a77e; color: #292722 !important; }
        .am-firm-copy .am-button:hover { background: transparent; color: #e7d8c4 !important; }
        .am-process { background: var(--am-paper); }
        .am-process-heading { display: flex; align-items: end; justify-content: space-between; gap: 34px; }
        .am-process-heading h2 { max-width: 620px; }
        .am-process-heading > p { max-width: 270px; margin: 0 0 4px; color: var(--am-muted); font-size: 11px; line-height: 1.9; }
        .am-stages { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; margin-top: 57px; border-top: 1px solid var(--am-line); }
        .am-stage { position: relative; padding: 26px 24px 0 0; }
        .am-stage:not(:first-child) { padding-left: 24px; border-left: 1px solid var(--am-line); }
        .am-stage-number { color: var(--am-bronze); font-family: "Instrument Serif", Georgia, serif; font-size: 28px; }
        .am-stage h3 { margin: 18px 0 9px; font-size: 12px; font-weight: 600; }
        .am-stage p { max-width: 220px; margin: 0; color: var(--am-muted); font-size: 10px; line-height: 1.9; }
        .am-contact { padding: 90px 0; }
        .am-contact-panel {
          display: grid; grid-template-columns: .88fr 1.12fr; gap: 80px;
          padding: 56px 62px; background: var(--am-limestone);
        }
        .am-contact-copy h2 { max-width: 410px; }
        .am-contact-copy > p { max-width: 370px; margin: 17px 0 0; color: var(--am-muted); font-size: 11px; line-height: 1.9; }
        .am-contact-details { display: grid; gap: 14px; margin-top: 34px; }
        .am-contact-details a, .am-contact-details span {
          display: flex; align-items: center; gap: 12px; color: var(--am-ink); font-size: 10px;
        }
        .am-contact-details svg { flex-shrink: 0; color: var(--am-bronze); }
        .am-form { display: grid; gap: 15px; align-content: center; }
        .am-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .am-field { display: grid; gap: 7px; }
        .am-field label { color: #625a50; font-size: 8px; font-weight: 700; letter-spacing: .13em; text-transform: uppercase; }
        .am-field input, .am-field textarea, .am-field select {
          width: 100%; min-height: 45px; padding: 12px 13px; border: 1px solid #d2c4b1;
          border-radius: 0; outline: none; background: rgba(251,248,242,.68); color: var(--am-ink);
          font-size: 10px; transition: border-color .2s ease, background .2s ease;
        }
        .am-field textarea { min-height: 104px; resize: vertical; }
        .am-field input:focus, .am-field textarea:focus, .am-field select:focus { border-color: var(--am-bronze); background: var(--am-paper); }
        .am-form .am-button { justify-self: start; cursor: pointer; }
        .am-form-note { margin: 0; color: var(--am-muted); font-size: 9px; line-height: 1.7; }
        .am-form-status { min-height: 15px; margin: 0; color: #59412c; font-size: 10px; }
        .am-footer { padding: 26px 0; background: var(--am-charcoal); color: #c9c1b6; }
        .am-footer-inner { display: flex; align-items: center; justify-content: space-between; gap: 22px; }
        .am-footer-brand { display: flex; align-items: center; gap: 10px; color: var(--am-paper); }
        .am-footer-brand svg { color: #c9a77e; }
        .am-footer-brand span { font-family: "Cinzel", Georgia, serif; font-size: 9px; letter-spacing: .12em; text-transform: uppercase; }
        .am-footer-nav { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; }
        .am-footer-nav a, .am-copyright { color: #b8afa2; font-size: 8px; letter-spacing: .08em; }
        .am-footer-nav a:hover { color: #f5f0e7; }
        .am-reveal { opacity: 0; transform: translateY(18px); transition: opacity .65s ease, transform .65s cubic-bezier(.22,1,.36,1); }
        .am-reveal.is-visible { opacity: 1; transform: translateY(0); }
        .am-hero-copyblock { animation: am-arrive .8s cubic-bezier(.22,1,.36,1) both; }
        .am-hero-image { animation: am-arrive .9s .12s cubic-bezier(.22,1,.36,1) both; }
        @keyframes am-arrive { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 980px) {
          .am-hero-grid { gap: 40px; }
          .am-hero-image { min-height: 470px; }
          .am-practice-layout { gap: 45px; grid-template-columns: .6fr 1.4fr; }
          .am-practice-row { grid-template-columns: 30px 28px minmax(135px,.9fr) minmax(150px,1.1fr) 16px; gap: 12px; }
          .am-firm-layout { gap: 55px; }
          .am-contact-panel { gap: 45px; padding: 44px; }
        }
        @media (max-width: 760px) {
          .am-container { width: min(100% - 40px, 580px); }
          .am-topline { height: 30px; font-size: 8px; }
          .am-nav { min-height: 70px; }
          .am-links, .am-nav > .am-button { display: none; }
          .am-menu-button { display: grid; }
          .am-mobile-nav {
            position: absolute; top: 100%; right: 0; left: 0; display: grid; gap: 0;
            padding: 4px 20px 20px; border-bottom: 1px solid var(--am-line);
            background: var(--am-paper); box-shadow: 0 14px 20px rgba(44,35,23,.08);
          }
          .am-mobile-nav a:not(.am-button) { padding: 15px 0; border-bottom: 1px solid var(--am-line); font-size: 10px; letter-spacing: .12em; text-transform: uppercase; }
          .am-mobile-nav .am-button { margin-top: 17px; }
          .am-hero { padding: 44px 0 50px; }
          .am-hero-grid { grid-template-columns: 1fr; gap: 38px; }
          .am-hero h1 { max-width: 560px; font-size: clamp(51px, 12vw, 78px); }
          .am-hero-copy { font-size: 12px; }
          .am-hero-note { margin-top: 32px; }
          .am-hero-image { min-height: 420px; margin-right: 10px; box-shadow: 11px 11px 0 var(--am-limestone); }
          .am-intro-band { padding: 22px 0; }
          .am-intro-band-inner { align-items: flex-start; }
          .am-intro-mark { margin-top: 3px; }
          .am-section { padding: 76px 0; }
          .am-practice-layout { grid-template-columns: 1fr; gap: 28px; margin-top: 38px; }
          .am-practice-aside { position: static; }
          .am-practice-aside p { max-width: 500px; margin: 10px 0 0; }
          .am-aside-note { display: none; }
          .am-practice-row { grid-template-columns: 27px 26px minmax(0, 1fr) 16px; gap: 10px; padding: 19px 2px; }
          .am-practice-row p { grid-column: 3 / 4; margin-top: -2px; }
          .am-row-arrow { grid-column: 4; grid-row: 1; }
          .am-firm { padding: 58px 0 68px; }
          .am-firm-layout { grid-template-columns: 1fr; gap: 38px; }
          .am-firm-photo { min-height: 340px; }
          .am-firm-copy { order: -1; }
          .am-firm-copy > p { font-size: 11px; }
          .am-process-heading { display: block; }
          .am-process-heading > p { margin-top: 16px; }
          .am-stages { grid-template-columns: 1fr 1fr; row-gap: 26px; margin-top: 40px; }
          .am-stage { min-height: 150px; }
          .am-stage:nth-child(3) { padding-left: 0; border-left: 0; }
          .am-contact { padding: 58px 0; }
          .am-contact-panel { grid-template-columns: 1fr; gap: 35px; padding: 30px 24px; }
          .am-footer-inner { flex-direction: column; text-align: center; }
          .am-footer-nav { gap: 15px; }
        }
        @media (max-width: 430px) {
          .am-container { width: calc(100% - 36px); }
          .am-brand-name { font-size: 10px; }
          .am-brand-caption { font-size: 7px; }
          .am-hero h1 { font-size: 50px; }
          .am-hero-actions { align-items: flex-start; flex-direction: column; gap: 18px; }
          .am-hero-image { min-height: 330px; }
          .am-practice-row { grid-template-columns: 24px 22px minmax(0,1fr) 14px; gap: 8px; }
          .am-practice-row h3 { font-size: 11px; }
          .am-practice-row p { font-size: 9px; }
          .am-stages { column-gap: 8px; }
          .am-stage { padding-right: 8px; }
          .am-stage:not(:first-child) { padding-left: 12px; }
          .am-stage:nth-child(3) { padding-left: 0; }
          .am-stage h3 { font-size: 11px; }
          .am-stage p { font-size: 9px; }
          .am-form-row { grid-template-columns: 1fr; }
        }
        @media (prefers-reduced-motion: reduce) {
          .am-page *, .am-page *::before, .am-page *::after {
            scroll-behavior: auto !important; animation-duration: .01ms !important;
            animation-iteration-count: 1 !important; transition-duration: .01ms !important;
          }
          .am-reveal { opacity: 1; transform: none; }
        }
      `}</style>

      <div className="am-topline">Counsel for business leaders &amp; families · Accra, Ghana</div>
      <header className="am-header">
        <div className="am-container am-nav">
          <a className="am-brand" href="#home" aria-label={`${firmName} home`}>
            <span className="am-mark"><Scale size={17} strokeWidth={1.5} /></span>
            <span>
              <span className="am-brand-name am-cinzel">{firmName}</span>
              <span className="am-brand-caption">Counsel · Advocacy · Trust</span>
            </span>
          </a>
          <nav className="am-links" aria-label="Main navigation">
            {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <a className="am-button" href="#contact">Arrange a consultation <ArrowUpRight size={14} /></a>
          <button
            className="am-menu-button"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
          {menuOpen && (
            <nav className="am-mobile-nav" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
              ))}
              <a className="am-button" href="#contact" onClick={() => setMenuOpen(false)}>
                Arrange a consultation <ArrowUpRight size={14} />
              </a>
            </nav>
          )}
        </div>
      </header>

      <section className="am-hero" id="home">
        <div className="am-container am-hero-grid">
          <div className="am-hero-copyblock">
            <span className="am-kicker">A law firm in Accra</span>
            <h1 className="am-serif">Counsel for <em>consequential</em> moments.</h1>
            <p className="am-hero-copy">
              Strategic counsel, measured advocacy, and partner-led guidance for the decisions that shape businesses and families.
            </p>
            <div className="am-hero-actions">
              <a className="am-button" href="#contact">Speak with counsel <ArrowUpRight size={14} /></a>
              <a className="am-text-link" href="#practice">Explore our practice <ArrowRight size={14} /></a>
            </div>
            <div className="am-hero-note">Considered advice. Direct partner stewardship.</div>
          </div>
          <div className="am-hero-image">
            <img
              src="/images/accra-law-library.jpg"
              alt="Illustrative law-firm library with warm shelves and a sunlit consultation table"
            />
            <div className="am-image-caption"><span>Thoughtful counsel, close at hand</span><span>Accra · Ghana</span></div>
          </div>
        </div>
      </section>

      <div className="am-rule" />
      <section className="am-intro-band" aria-label="Our counsel">
        <div className="am-container am-intro-band-inner">
          <p>Clear thinking and careful representation, guided by what matters most to you.</p>
          <Scale className="am-intro-mark" size={28} strokeWidth={1.25} />
        </div>
      </section>

      <section className="am-section" id="practice">
        <div className="am-container">
          <div className="am-section-head am-reveal">
            <span className="am-kicker">Practice areas</span>
            <h2 className="am-serif">The right counsel, <em>for the matter at hand.</em></h2>
            <p>Our work spans business, disputes, property, private wealth, and the regulatory questions that connect them.</p>
          </div>
          <div className="am-practice-layout">
            <aside className="am-practice-aside am-reveal">
              <p>We bring a considered, partner-led perspective to matters where sound judgment and discretion are essential.</p>
              <div className="am-aside-note">Six areas of counsel<br />One direct point of contact</div>
            </aside>
            <div className="am-practice-list">
              {practices.map((practice, index) => {
                const Icon = practice.icon;
                return (
                  <a className="am-practice-row am-reveal" href="#contact" key={practice.number} style={{ transitionDelay: `${index * 45}ms` }}>
                    <span className="am-practice-num">{practice.number}</span>
                    <Icon className="am-practice-icon" size={19} strokeWidth={1.5} />
                    <h3>{practice.title}</h3>
                    <p>{practice.description}</p>
                    <ArrowUpRight className="am-row-arrow" size={15} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="am-firm" id="firm">
        <div className="am-container am-firm-layout">
          <div className="am-firm-photo am-reveal">
            <img src="/images/accra-law-library.jpg" alt="The warm, composed interior of a legal library" loading="lazy" />
            <span className="am-firm-photo-label">A place for careful thought · Accra</span>
          </div>
          <div className="am-firm-copy am-reveal">
            <span className="am-kicker">The firm</span>
            <h2 className="am-serif">Sound judgment. <em>Personal counsel.</em></h2>
            <p>
              Founded on the belief that superior legal counsel pairs deep statutory knowledge with candid commercial pragmatism, Aldridge &amp; Mensah serves leaders, institutions, and families facing defining milestones.
            </p>
            <div className="am-firm-points">
              <div className="am-firm-point">Direct partner stewardship through each matter</div>
              <div className="am-firm-point">Candid advice on options, costs, and next steps</div>
              <div className="am-firm-point">Discreet counsel for business and private matters</div>
            </div>
            <a className="am-button" href="#contact">Meet with our counsel <ArrowUpRight size={14} /></a>
          </div>
        </div>
      </section>

      <section className="am-section am-process" id="approach">
        <div className="am-container">
          <div className="am-process-heading am-reveal">
            <div>
              <span className="am-kicker">Our approach</span>
              <h2 className="am-serif">A measured path from <em>question to resolution.</em></h2>
            </div>
            <p>Good counsel begins with listening, then makes the way forward easier to see.</p>
          </div>
          <div className="am-stages">
            {stages.map((stage, index) => (
              <article className="am-stage am-reveal" key={stage.number} style={{ transitionDelay: `${index * 80}ms` }}>
                <span className="am-stage-number">{stage.number}</span>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="am-contact" id="contact">
        <div className="am-container am-contact-panel am-reveal">
          <div className="am-contact-copy">
            <span className="am-kicker">Start with an initial conversation</span>
            <h2 className="am-serif">Let us understand <em>what matters.</em></h2>
            <p>Share a brief outline so the firm can direct your enquiry to the right person.</p>
            <div className="am-contact-details">
              <a href="tel:+233302000000"><Phone size={15} /> +233 (0) 30 200 0000</a>
              <a href="mailto:counsel@aldridgemensah.com"><Mail size={15} /> counsel@aldridgemensah.com</a>
              <span><MapPin size={15} /> 14 Independence Avenue, Ridge, Accra</span>
            </div>
          </div>
          <form className="am-form" onSubmit={handleBrief}>
            <div className="am-form-row">
              <div className="am-field">
                <label htmlFor="am-name">Full name</label>
                <input id="am-name" name="name" type="text" placeholder="Your name" autoComplete="name" required />
              </div>
              <div className="am-field">
                <label htmlFor="am-email">Email address</label>
                <input id="am-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
              </div>
            </div>
            <div className="am-form-row">
              <div className="am-field">
                <label htmlFor="am-phone">Phone / WhatsApp</label>
                <input id="am-phone" name="phone" type="tel" placeholder="+233" autoComplete="tel" />
              </div>
              <div className="am-field">
                <label htmlFor="am-practice">Area of counsel</label>
                <select id="am-practice" name="practice" defaultValue="">
                  <option value="" disabled>Select an area</option>
                  {practices.map((practice) => <option key={practice.number} value={practice.title}>{practice.title}</option>)}
                  <option value="General enquiry">Other / not sure</option>
                </select>
              </div>
            </div>
            <div className="am-field">
              <label htmlFor="am-message">Brief outline of the matter</label>
              <textarea id="am-message" name="message" placeholder="Share only what is necessary for an initial conversation." required />
            </div>
            <button className="am-button" type="submit">Prepare an email enquiry <ArrowUpRight size={14} /></button>
            <p className="am-form-note">Submitting opens an email addressed to the firm. Please avoid including sensitive details in your initial message.</p>
            <p className="am-form-status" role="status">{notice}</p>
          </form>
        </div>
      </section>

      <footer className="am-footer">
        <div className="am-container am-footer-inner">
          <a className="am-footer-brand" href="#home"><Scale size={17} strokeWidth={1.4} /><span>{firmName}</span></a>
          <nav className="am-footer-nav" aria-label="Footer navigation">
            {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <div className="am-copyright">© {currentYear} {firmName}</div>
        </div>
      </footer>
    </main>
  );
}
