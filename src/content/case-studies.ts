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
    liveUrl: "https://rev-games.web.app/",
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
        { kind: "payments", name: "Paystack, Flutterwave, Stripe", note: "Deposits and payouts behind one interface" },
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
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
