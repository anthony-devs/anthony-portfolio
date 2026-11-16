import Link from "next/link";
import type { Repo } from "@/content/github";
import { langColors, type Project } from "@/content/site";
import { ChevronRight } from "./icons";

export function ProjectCard({ p }: { p: Project }) {
  const href = p.caseStudy ? `/work/${p.slug}/` : p.href ?? p.liveUrl ?? "#";
  const external = !p.caseStudy && /^https?:/.test(href);

  return (
    <article
      className={`press group relative flex flex-col overflow-hidden rounded-[14px] border bg-panel hover:border-accent ${
        p.featured ? "border-accent" : "border-line"
      }`}
    >
      {p.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={p.image}
          alt=""
          loading="lazy"
          className="aspect-video w-full border-b border-line object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      )}
      <div className="flex grow flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-2">
          {/* The name link stretches over the whole card */}
          <Link
            href={href}
            {...(external ? { target: "_blank", rel: "noopener" } : {})}
            className="font-mono text-[15px] font-semibold text-accent-text! after:absolute after:inset-0 after:content-['']"
          >
            {p.name}
          </Link>
          <span className="rounded-full border border-line-strong px-2.5 py-0.5 text-xs text-soft">{p.badge}</span>
        </div>
        <p className="m-0 grow text-[15px] font-light text-soft">{p.description}</p>
        <div className="flex flex-wrap items-center gap-4 text-xs text-muted">
          {p.langs.map((l) => (
            <span key={l} className="flex items-center gap-1.5">
              <span aria-hidden="true" className="size-2.5 rounded-full" style={{ background: langColors[l] ?? "#8e9a94" }} />
              {l}
            </span>
          ))}
          {p.extra && <span>{p.extra}</span>}
          {p.liveUrl && (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener"
              className="relative z-10 ml-auto flex min-h-8 items-center gap-1.5 rounded-full bg-accent px-3 text-xs font-semibold text-ink! hover:brightness-110"
            >
              <span aria-hidden="true" className="size-1.5 rounded-full bg-ink" />
              Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function ServiceCard({ title, price, image }: { title: string; price: string; image: string | null }) {
  return (
    <Link
      href="/#contact"
      className="press flex items-center gap-3.5 rounded-xl border border-line-strong bg-panel py-2 pl-2 pr-3.5 text-fg! hover:border-accent"
    >
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt="" className="h-16 w-[76px] shrink-0 rounded-lg object-cover" />
      ) : (
        <div
          aria-hidden="true"
          className="flex h-16 w-[76px] shrink-0 items-center justify-center rounded-lg bg-thumb font-mono text-[10px] text-faint"
        >
          [IMG]
        </div>
      )}
      <div className="flex min-w-0 grow flex-col">
        <span className="text-[13px] font-bold uppercase leading-tight tracking-[0.02em]">{title}</span>
        <span className="font-mono text-xs text-muted">{price}</span>
      </div>
      <span aria-hidden="true" className="flex size-[30px] shrink-0 items-center justify-center rounded-full bg-accent text-ink">
        <ChevronRight size={14} strokeWidth={3} />
      </span>
    </Link>
  );
}

export function RepoCard({ r }: { r: Repo }) {
  return (
    <article className="press relative flex flex-col gap-2.5 rounded-[14px] border border-line bg-panel p-5 hover:border-accent">
      <div className="flex items-center justify-between gap-2">
        <a
          href={r.url}
          target="_blank"
          rel="noopener"
          className="font-mono text-[15px] font-semibold text-accent-text! after:absolute after:inset-0 after:content-['']"
        >
          {r.name}
        </a>
        <span className="font-mono text-xs text-muted">{r.year}</span>
      </div>
      {r.description && <p className="m-0 grow text-[14px] font-light text-soft">{r.description}</p>}
      <div className="flex flex-wrap items-center gap-4 text-xs text-muted">
        {r.lang && (
          <span className="flex items-center gap-1.5">
            <span aria-hidden="true" className="size-2.5 rounded-full" style={{ background: langColors[r.lang] ?? "#8e9a94" }} />
            {r.lang}
          </span>
        )}
        {r.stars > 0 && <span>★ {r.stars}</span>}
      </div>
    </article>
  );
}
