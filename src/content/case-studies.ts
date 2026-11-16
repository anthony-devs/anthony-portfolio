/**
 * CASE STUDIES. Each entry becomes a page at /work/<slug>.
 * To add one: copy the rev-games object, change the slug, and set
 * `caseStudy: true` on the matching project in site.ts.
 */

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  heroImage: string | null; // e.g. "/work/rev-games/hero.png" in /public
  liveUrl?: string;
  liveLabel?: string;
  facts: { label: string; value: string }[];
  brief: string[];
  architecture: {
    main: { kind: string; name: string; note: string; highlight?: boolean }[];
    side: { kind: string; name: string; note: string }[];
  };
  decisions: { title: string; body: string }[];
  screens: { label: string; image: string | null }[];
  results: { value: string; label: string }[];
  quote: { text: string; author: string } | null;
  cta: { title: string; body: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "rev-games",
    title: "Rev Games: a real-money casino platform, built solo in 4 weeks.",
    summary:
      "24 games, a wallet the server controls, verified payouts and an admin console. I designed the UI, built the app and the game server, and shipped it.",
    tags: ["Client project", "Real money", "Oct 2026"],
    heroImage: "/work/rev-games/hero.jpg",
    liveUrl: "https://app.revgames.online",
    facts: [
      { label: "Role", value: "Design, app, backend" },
      { label: "App", value: "Flutter, BLoC, PWA" },
      { label: "Server", value: "Flask on Railway" },
      { label: "Data", value: "Firebase Auth, Firestore" },
    ],
    brief: [
      "The client wanted a casino app that runs on real money from day one, with a demo mode so new players can try every game first. The games couldn't be hardcoded: the client needed to add, reorder and feature games without shipping a new build.",
      "It also had to pass App Store and Play review, run on phones, iPad, desktop and web, and feel fast enough that nobody waits on a button.",
    ],
    architecture: {
      main: [
        { kind: "client", name: "Flutter PWA", note: "Lobby, 24 games, wallet, checkout" },
        { kind: "server", name: "Flask game server", note: "Owns outcomes, balances and the catalog", highlight: true },
        { kind: "data", name: "Firestore", note: "Users, wallets, round history" },
      ],
      side: [
        { kind: "ops", name: "Admin console", note: "Every payout checked by hand before it goes out" },
        { kind: "payments", name: "Payments layer", note: "Card, bank and USDT deposits and payouts behind one interface" },
      ],
    },
    decisions: [
      {
        title: "The server decides every outcome",
        body: "With real money, the app can't be trusted with results. The client only shows what the server already settled, so a modified app can't change a win or a balance.",
      },
      {
        title: "A catalog driven by config",
        body: "Games, order and featured slots come from the backend. The client changes the lobby without waiting on a new build or a store review.",
      },
      {
        title: "Demo and live as two modes, one app",
        body: "Demo runs on coins with friendlier odds so new players learn the games. Live runs on real money with a full checkout. One switch, separate balances.",
      },
      {
        title: "PWA first",
        body: "One Flutter codebase served on the web reached players on every device at once, while store submissions ran in parallel.",
      },
    ],
    screens: [
      { label: "Lobby, featured games first", image: "/work/rev-games/lobby.jpg" },
      { label: "Sign in, or play as a guest", image: "/work/rev-games/signin.jpg" },
    ],
    results: [
      { value: "24", label: "games at launch" },
      { value: "4", label: "weeks, brief to launch" },
      { value: "42", label: "players in month one" },
    ],
    quote: { text: "I Love the way you work and finish before deadlines", author: "Emannuel Opawale, Owner" },
    cta: {
      title: "Need something like this built?",
      body: "Real-time apps, wallets, payments, admin tools. I've done the hard parts already.",
    },
  },
  {
    slug: "dscvr",
    title: "DSCVR: an AI research library that finds the sources for you.",
    summary:
      "Students, researchers and professionals search every free source at once, save what matters into one library, and ask Pinda, an AI assistant that has read it all. I designed it, built it, branded it and launched it alone.",
    tags: ["Own product", "AI", "Live", "Nov 2026"],
    heroImage: "/work/dscvr.jpg",
    liveUrl: "https://askpinda.com",
    liveLabel: "Visit askpinda.com",
    facts: [
      { label: "Role", value: "Product, design, app, backend, brand" },
      { label: "App", value: "Flutter, web-first PWA" },
      { label: "Server", value: "Flask on Railway" },
      { label: "AI", value: "Claude API (Pinda)" },
    ],
    brief: [
      "Research is scattered. Papers live in one place, videos in another, notes in a third, and law reports somewhere else behind a paywall. Students and professionals waste hours just finding things, then lose them again.",
      "DSCVR puts it in one place: Categories, then Topics, then Materials (PDFs, links, notes and videos). One search covers every free source, and Pinda answers questions using what is actually in your library, with citations. It had to work for a first-year student and a practising lawyer, and it had to make money without an AI bill that grows faster than revenue.",
    ],
    architecture: {
      main: [
        { kind: "client", name: "Flutter PWA", note: "Library, Discover, reader, Sessions, Pinda chat" },
        { kind: "server", name: "Flask API", note: "Search across sources, caching, plans and usage budgets", highlight: true },
        { kind: "ai", name: "Pinda on Claude", note: "Answers grounded in your library, with a fallback model" },
      ],
      side: [
        { kind: "data", name: "Firebase", note: "Auth, Firestore streaming, sharing permissions" },
        { kind: "ops", name: "Admin and developer console", note: "Users, AI cost per model, blog, alerts, authenticator sign-in" },
      ],
    },
    decisions: [
      {
        title: "AI calls go through the server, never the app",
        body: "The Claude key never ships to a browser. Every Pinda request runs through the server, which checks the user's plan, counts usage and falls back to another model if the fast one is down.",
      },
      {
        title: "Usage budgets instead of unlimited AI",
        body: "Free Students and Researchers plans get a usage budget, the way Claude does it. Paid plans raise it. The AI bill can't outrun revenue, and the admin console shows cost per model in real time.",
      },
      {
        title: "One search, every free source",
        body: "Discover queries scholarly databases, encyclopedias, video and law libraries together, then caches results. When one source fails, another fills in, so a search never comes back empty.",
      },
      {
        title: "Built for professions, not just students",
        body: "Law searches follow the country you pick, with law libraries for 24 countries. Health and other fields get their own source packs. A lawyer and a nursing student see different, relevant results.",
      },
      {
        title: "Figma-style sharing",
        body: "Share a topic with view, fork or comment access. Others can copy your research into their own library without touching yours.",
      },
    ],
    screens: [],
    results: [
      { value: "3", label: "editions: Students, Researchers, Enterprise" },
      { value: "24", label: "countries of law libraries" },
      { value: "1", label: "person, design to launch" },
    ],
    quote: null,
    cta: {
      title: "Want AI in your product that people actually use?",
      body: "Search, assistants grounded in your own data, usage limits that protect your margins. I've built all of it.",
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
