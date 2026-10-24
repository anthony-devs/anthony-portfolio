import { ProjectCard, ServiceCard } from "@/components/cards";
import { Contact } from "@/components/contact";
import { Footer, Nav } from "@/components/nav";
import { Sidebar } from "@/components/sidebar";
import { SectionHeading } from "@/components/ui";
import { projects, services, shipLog, site, tools } from "@/content/site";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto flex max-w-[1240px] flex-wrap items-start gap-10 px-6 pb-16 pt-10">
        <Sidebar />

        <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-12">
          {/* README */}
          <section aria-label="About" className="overflow-hidden rounded-2xl border border-line bg-panel">
            <div className="border-b border-line px-[22px] py-3 font-mono text-[13px] text-muted">
              {site.handle} / <span className="text-fg">README.md</span>
            </div>
            <div className="flex flex-col gap-[22px] px-6 pb-7 pt-9 sm:px-8">
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium tracking-[0.5em] text-accent"></span>
                <span className="text-[64px] font-semibold leading-[0.95] tracking-[-0.04em] text-[#d9dedb] sm:text-[96px]">
                  {site.firstName} {site.lastName}
                </span>
              </div>
              <div aria-hidden="true" className="h-px w-[140px] bg-accent" />
              <h2 className="m-0 max-w-[680px] text-[26px] font-normal leading-[1.2] sm:text-[34px]">{site.headline}</h2>
              <p className="m-0 max-w-[640px] font-light text-soft">{site.intro}</p>
              <div className="grid max-w-[640px] grid-cols-3 gap-3">
                {site.stats.map((s) => (
                  <div key={s.label} className="rounded-[10px] border border-line px-4 py-3.5">
                    <div className="font-mono text-2xl font-semibold">{s.value}</div>
                    <div className="text-[13px] text-muted">{s.label}</div>
                  </div>
                ))}
              </div>
              <div
                aria-label="Tools I use"
                className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-4 text-xl font-semibold text-faint"
              >
                {tools.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </section>

          {/* Work */}
          <section id="work" aria-labelledby="work-h" className="flex scroll-mt-6 flex-col gap-[18px]">
            <SectionHeading
              id="work-h"
              aside={
                <a href={site.links.github} className="text-[15px]">
                  All projects
                </a>
              }
            >
              pinned work
            </SectionHeading>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {projects.map((p) => (
                <ProjectCard key={p.slug} p={p} />
              ))}
            </div>
          </section>

          {/* Services */}
          <section id="services" aria-labelledby="svc-h" className="flex scroll-mt-6 flex-col gap-[18px]">
            <SectionHeading id="svc-h">what I do</SectionHeading>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-3.5">
              {services.map((s) => (
                <ServiceCard key={s.title} {...s} />
              ))}
            </div>
          </section>

          {/* Ship log */}
          <section id="log" aria-labelledby="log-h" className="flex flex-col gap-[18px]">
            <SectionHeading id="log-h">ship log</SectionHeading>
            <ol className="m-0 list-none overflow-hidden rounded-[14px] border border-line bg-panel p-0">
              {shipLog.map((e, i) => (
                <li
                  key={e.title}
                  className={`flex flex-wrap items-baseline gap-x-5 gap-y-2 px-5 py-4 ${
                    i < shipLog.length - 1 ? "border-b border-line" : ""
                  }`}
                >
                  <span className="w-[84px] font-mono text-[13px] text-muted">{e.date}</span>
                  <span className="min-w-0 flex-[1_1_300px]">
                    <strong className="font-semibold">{e.title}</strong>{" "}
                    <span className="font-light text-soft">{e.note}</span>
                  </span>
                </li>
              ))}
            </ol>
          </section>

          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
