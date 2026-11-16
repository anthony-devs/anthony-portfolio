import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "@/components/icons";
import { Footer, Nav } from "@/components/nav";
import { Placeholder } from "@/components/ui";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { site } from "@/content/site";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  return cs ? { title: cs.title.split(":")[0], description: cs.summary } : {};
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="m-0 text-[26px] font-semibold tracking-[-0.015em]">
      {children}
    </h2>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <>
      <Nav crumb={cs.slug} />
      <main className="mx-auto flex max-w-[980px] flex-col gap-14 px-6 pb-[72px] pt-12">
        {/* Hero */}
        <section aria-labelledby="hero-h" className="flex flex-col gap-5">
          <Link href="/#work" className="flex w-fit items-center gap-1.5 text-sm">
            <ChevronLeft />
            All work
          </Link>
          <div className="flex flex-wrap gap-2">
            {cs.tags.map((t) => (
              <span key={t} className="rounded-full border border-line-strong px-2.5 py-0.5 text-xs text-soft">
                {t}
              </span>
            ))}
          </div>
          <h1
            id="hero-h"
            className="m-0 max-w-[820px] text-[36px] font-semibold leading-[1.08] tracking-[-0.025em] sm:text-[48px]"
          >
            {cs.title}
          </h1>
          <p className="m-0 max-w-[700px] text-lg font-light text-soft">{cs.summary}</p>
          {cs.liveUrl && (
            <a
              href={cs.liveUrl}
              target="_blank"
              rel="noopener"
              className="press flex w-fit min-h-11 items-center gap-2.5 rounded-full bg-accent px-5 text-[15px] font-semibold text-ink! hover:brightness-110"
            >
              <span aria-hidden="true" className="size-2 rounded-full bg-ink" />
              {cs.liveLabel ?? "Open the live app"}
            </a>
          )}
        </section>

        {cs.heroImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={cs.heroImage} alt={`${cs.slug} hero`} className="aspect-video w-full rounded-[14px] border border-line object-cover" />
        ) : (
          <Placeholder label="Hero shot: lobby on phone + desktop" className="aspect-video rounded-[14px]" />
        )}

        {/* Facts */}
        <section
          aria-label="Project facts"
          className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-px overflow-hidden rounded-xl border border-line bg-line"
        >
          {cs.facts.map((f) => (
            <div key={f.label} className="bg-panel px-5 py-[18px]">
              <div className="text-xs uppercase tracking-[0.06em] text-muted">{f.label}</div>
              <div className="font-medium">{f.value}</div>
            </div>
          ))}
        </section>

        {/* Brief */}
        <section aria-labelledby="brief-h" className="flex max-w-[720px] flex-col gap-3.5">
          <H2 id="brief-h">The brief</H2>
          {cs.brief.map((p, i) => (
            <p key={i} className="m-0 font-light text-soft">
              {p}
            </p>
          ))}
        </section>

        {/* Architecture */}
        <section aria-labelledby="arch-h" className="flex flex-col gap-5">
          <H2 id="arch-h">How it fits together</H2>
          <div className="flex flex-wrap items-stretch gap-3 rounded-xl border border-line bg-panel p-6">
            {cs.architecture.main.map((n, i) => (
              <div key={n.name} className="contents">
                {i > 0 && (
                  <div aria-hidden="true" className="flex items-center font-mono text-muted">
                    →
                  </div>
                )}
                <div
                  className={`flex-[1_1_180px] rounded-[10px] border bg-raised p-4 ${
                    n.highlight ? "border-accent" : "border-line-strong"
                  }`}
                >
                  <div className="font-mono text-xs text-accent-text">{n.kind}</div>
                  <div className="font-semibold">{n.name}</div>
                  <div className="text-[13px] text-muted">{n.note}</div>
                </div>
              </div>
            ))}
            <div className="flex basis-full flex-wrap gap-3">
              {cs.architecture.side.map((n) => (
                <div key={n.name} className="flex-[1_1_240px] rounded-[10px] border border-dashed border-line-strong p-4">
                  <div className="font-mono text-xs text-accent-text">{n.kind}</div>
                  <div className="font-semibold">{n.name}</div>
                  <div className="text-[13px] text-muted">{n.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Decisions */}
        <section aria-labelledby="dec-h" className="flex flex-col gap-5">
          <H2 id="dec-h">Decisions that mattered</H2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {cs.decisions.map((d, i) => (
              <div key={d.title} className="flex flex-col gap-2 rounded-xl border border-line bg-panel p-[22px]">
                <div className="font-mono text-[13px] text-muted">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="m-0 text-[17px] font-semibold">{d.title}</h3>
                <p className="m-0 text-sm font-light text-soft">{d.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Screens */}
        {cs.screens.length > 0 && (
        <section aria-labelledby="shots-h" className="flex flex-col gap-5">
          <H2 id="shots-h">Inside the app</H2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,260px))] gap-4">
            {cs.screens.map((s) => (
              <figure key={s.label} className="m-0 flex flex-col gap-2">
                {s.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={s.image} alt={s.label} className="aspect-[9/19] w-full rounded-[20px] border border-line object-cover" />
                ) : (
                  <Placeholder label={s.label.split(",")[0]} className="aspect-[9/19] rounded-[20px]" />
                )}
                <figcaption className="text-[13px] text-muted">{s.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>
        )}

        {/* Results */}
        <section aria-labelledby="res-h" className="flex flex-col gap-5">
          <H2 id="res-h">Where it landed</H2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
            {cs.results.map((r) => (
              <div key={r.label} className="rounded-xl border border-line bg-panel p-5">
                <div className="font-mono text-[30px] font-semibold">{r.value}</div>
                <div className="text-sm text-muted">{r.label}</div>
              </div>
            ))}
          </div>
          {cs.quote && (
            <blockquote className="m-0 flex flex-col gap-2.5 rounded-xl border border-line bg-raised p-6">
              <p className="m-0 text-lg leading-normal">{cs.quote.text}</p>
              <footer className="text-sm text-muted">{cs.quote.author}</footer>
            </blockquote>
          )}
        </section>

        {/* CTA */}
        <section
          aria-labelledby="next-h"
          className="flex flex-wrap items-center justify-between gap-5 rounded-xl border border-line bg-panel p-7"
        >
          <div className="min-w-0 flex-[1_1_320px]">
            <h2 id="next-h" className="m-0 text-[22px] font-semibold">
              {cs.cta.title}
            </h2>
            <p className="m-0 font-light text-soft">{cs.cta.body}</p>
          </div>
          <a
            href={site.links.bookCall}
            className="press rounded-full bg-accent px-5 py-3 text-[15px] font-semibold text-ink! hover:brightness-110"
          >
            Book a call
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
