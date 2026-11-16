/**
 * EVERYTHING ON THE HOME PAGE LIVES HERE.
 * Edit text, links, projects and prices in this file. No component changes needed.
 * Anything still in [BRACKETS] is a placeholder for you to fill in.
 */

export const site = {
  name: "Anthony Ude",
  handle: "anthony-devs",
  firstName: "ANTHONY",
  lastName: "Ude",
  title: "Senior Mobile Engineer",
  url: "https://[YOUR-DOMAIN].dev",
  status: "Open to remote roles and contracts",

  // Drop your avatar in /public (e.g. /public/avatar.png) and set this to "/avatar.png".
  avatar: "/avatar.jpeg" as string | null,

  // Put your CV in /public/cv.pdf
  cvPath: "/cv.pdf",

  bio: "Senior mobile engineer. Flutter and native iOS, with React and Next.js on the web. I design, build and ship whole products on my own, from the Figma file to the store listing.",

  headline:
    "I build mobile products end to end, the kind most teams need five people for.",
  intro:
    "4+ years in production Flutter, plus native iOS and modern web. I take a product from the first Figma frame to a live app with a real backend, real payments and real users. 10+ apps shipped.",

  stats: [
    { value: "4+", label: "years in production" },
    { value: "10+", label: "apps shipped" },
    //{ value: "1", label: "person, whole stack" },
  ],

  links: {
    email: "mailto:somtochukwuanthony460@gmail.com",
    bookCall: "https://cal.com/anthony-somtochukwu-ude-upodb1/30min",
    whatsapp: "https://wa.me/+2347044124323",
    github: "https://github.com/anthony-devs",
    linkedin: "https://linkedin.com/in/anthony-ude-882b45263",
    x: "https://x.com/anthony-devs",
    instagram: "https://instagram.com/anthony.iso",
  },
};

export const stack: { group: string; items: string[] }[] = [
  { group: "Mobile", items: ["Flutter", "Dart", "SwiftUI", "React Native"] },
  { group: "Web", items: ["React", "Next.js", "TypeScript", "Tailwind", "PWA"] },
  {
    group: "Backend & AI",
    items: ["Node.js", "Firebase", "Supabase", "PostgreSQL", "Flask", "Docker", "Claude API", "Figma"],
  },
];

// Language dot colours for project cards.
export const langColors: Record<string, string> = {
  Flutter: "#1fb8b0",
  Flask: "#e0b341",
  "Claude API": "#d98a5e",
  React: "#5aa7e0",
  "Next.js": "#e8edea",
  SwiftUI: "#f05138",
  Python: "#4b8bbe",
  JavaScript: "#e9d44d",
};

export type Project = {
  slug: string;          // used in the URL: /work/<slug>
  name: string;          // repo-style name shown on the card
  badge: string;
  description: string;
  langs: string[];       // get a coloured dot (see langColors)
  extra?: string;        // plain text after the dots
  caseStudy?: boolean;   // true = card links to /work/<slug>
  href?: string;         // external link if there's no case study
  featured?: boolean;    // green border
  image?: string;        // cover image in /public, 16:9 (e.g. /work/hattrick.jpg)
  liveUrl?: string;      // shows a "Live" button on the card
};

export const projects: Project[] = [
  {
    slug: "rev-games",
    name: "rev-games",
    badge: "Production",
    description:
      "Real-money casino platform. 24 games, server-owned wallet and outcomes, verified payouts, admin console. Shipped as a PWA.",
    langs: ["Flutter", "Flask"],
    extra: "Firebase · Railway",
    caseStudy: true,
    featured: true,
    image: "/work/rev-games.jpg",
    liveUrl: "https://app.revgames.online",
  },
  {
    slug: "hattrick",
    name: "hattrick",
    badge: "Production",
    description:
      "Quiz-to-earn sports trivia with prize tiers up to ₦10M. Built solo. Cut load time from 900ms to 180ms.",
    langs: ["Flutter"],
    extra: "Firebase",
    image: "/work/hattrick.jpg",
  },
  {
    slug: "dscvr",
    name: "dscvr",
    badge: "Live",
    description:
      "AI research library for students, researchers and professionals. One search across every free source, Pinda AI on the Claude API, law libraries for 24 countries.",
    langs: ["Flutter", "Flask", "Claude API"],
    extra: "Firebase · Railway",
    caseStudy: true,
    image: "/work/dscvr.jpg",
    liveUrl: "https://askpinda.com",
  },
  {
    slug: "excelsior-legal",
    name: "excelsior-legal",
    badge: "Web",
    description: "Website for Excelsior Pratique Legale, a law firm. Practice areas, team and contact, built to load fast on any phone.",
    langs: ["React"],
    image: "/work/excelsior.jpg",
  },
];

export const services = [
  { title: "Flutter app builds", price: "from $500", image: "/services/flutter-apps.svg" as string | null },
  { title: "AI in your app", price: "from $150", image: "/services/ai.svg" as string | null },
  { title: "Backend & scaling", price: "from $500", image: "/services/backend.svg" as string | null },
  { title: "Web apps & landing pages", price: "from $250", image: "/services/web.svg" as string | null },
  { title: "App rescue & redesign", price: "from $450", image: "/services/rescue.svg" as string | null },
  { title: "Monthly retainer", price: "from $400/mo", image: "/services/retainer.svg" as string | null },
];

// Built from commit history across github.com/anthony-devs. Newest first.
export const shipLog = [
  { date: "Nov 2026", title: "DSCVR", note: "launched at askpinda.com: new landing site, shared-link pages, link previews, daily alerts" },
  { date: "Nov 2026", title: "DSCVR", note: "law libraries for 24 countries, guided tours on every page, built-in PDF reader" },
  { date: "Nov 2026", title: "DSCVR", note: "Pinda the pangolin: new brand, logo and app icons" },
  { date: "Nov 2026", title: "DSCVR", note: "paid plans with usage budgets, admin dashboard, developer console, authenticator sign-in for admins" },
  { date: "Nov 2026", title: "Rev Games", note: "full redesign: illustrated arcade art, Chip the mascot, rebuilt crash game" },
  { date: "Oct 2026", title: "DSCVR", note: "sharing with view, fork and comment, Parliament fact-check, custom UI kit with spring motion" },
  { date: "Oct 2026", title: "Rev Games", note: "v1.0.3 live as a PWA; game server split into its own private repo" },
  { date: "Oct 2026", title: "Rev Games", note: "round limits with paid top-ups, live odds tuning, admin dashboard" },
  { date: "Oct 2026", title: "Rev Games", note: "brief to first build in a week: auth, wallet, slots, crash game" },
  { date: "Jan 2026", title: "Anonymous", note: "anonymous social app: Flutter client and Flask REST API" },
  { date: "May 2025", title: "Period Flow", note: "offline-first period tracker with local sync on Hive" },
  { date: "May 2024", title: "Sports Prediction", note: "football match outcome predictor on live data in Python" },
  { date: "Apr 2024", title: "Hattrick", note: "third full redesign; load time down from 900ms to 180ms" },
  { date: "Nov 2023", title: "Hattrick", note: "coin purchases, profiles, super quiz; server migration" },
  { date: "Sep 2023", title: "Hattrick", note: "first commit: sign-up, leaderboards, live quizzes" },
];
