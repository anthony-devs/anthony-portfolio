/**
 * ALL PROJECTS, PULLED FROM GITHUB AT BUILD TIME.
 * Every public repo on github.com/anthony-devs shows up on the home page
 * automatically. Hide a repo by adding its name to `hidden`.
 * Rebuild (redeploy) to pick up new repos.
 */

const USER = "anthony-devs";

// Repos that never show: pinned work (already above), forks are skipped anyway.
const hidden = new Set([
  "anthony-devs",
  "anthony-portfolio",
  "dscvr",
  "rev-game-mvp",
  "hattrick",
  "acrylic",
  "androidCracker",
  "Blue-Hat",
  "ftpbrute",
]);

// GitHub labels most Flutter repos as C++ (from the desktop runners). Fix that.
const langOverride: Record<string, string> = {
  this_is_nigeria: "Flutter",
  period_flow: "Flutter",
  our_space: "Flutter",
  "anonymous-flutter": "Flutter",
  "jobs-jungle": "Flutter",
  "anonymous-backend": "Flask",
  "hattrick-server": "Flask",
  sports_prediction: "Python",
  "hattrick-web": "JavaScript",
  jamor: "HTML/CSS",
};

export type Repo = {
  name: string;
  description: string;
  url: string;
  homepage: string | null;
  lang: string | null;
  year: string;
  stars: number;
};

type ApiRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  pushed_at: string;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
};

export async function getRepos(): Promise<Repo[]> {
  try {
    const headers: Record<string, string> = { Accept: "application/vnd.github+json" };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    const res = await fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=pushed`, {
      headers,
      cache: "force-cache",
    });
    if (!res.ok) return [];
    const data = (await res.json()) as ApiRepo[];
    return data
      .filter((r) => !r.fork && !r.archived && !hidden.has(r.name))
      .map((r) => ({
        name: r.name,
        description: r.description ?? "",
        url: r.html_url,
        homepage: r.homepage || null,
        lang: langOverride[r.name] ?? r.language,
        year: r.pushed_at.slice(0, 4),
        stars: r.stargazers_count,
      }));
  } catch {
    // Offline build: the section just hides itself.
    return [];
  }
}
