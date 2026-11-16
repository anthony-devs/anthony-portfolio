import { site, stack } from "@/content/site";
import { GitHub, LinkedIn } from "./icons";
import { Chip } from "./ui";

export function Sidebar() {
  return (
    <aside className="flex min-w-0 max-w-[320px] flex-[1_1_260px] flex-col gap-5">
      {site.avatar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={site.avatar}
          alt={`${site.name}`}
          className="aspect-square w-full max-w-[160px] sm:max-w-[280px] rounded-full border border-line-strong bg-[#0f2219] object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label="Avatar placeholder"
          className="flex aspect-square w-full max-w-[160px] sm:max-w-[280px] items-center justify-center rounded-full border border-line-strong bg-[#0f2219] font-mono text-[13px] text-muted"
        >
          [YOUR 3D AVATAR]
        </div>
      )}

      <div className="flex flex-col gap-0.5">
        <h1 className="m-0 text-[28px] font-medium leading-tight">{site.name}</h1>
        <p className="m-0 text-lg font-light text-muted">{site.handle}</p>
      </div>

      <p className="m-0 font-light text-soft">{site.bio}</p>

      <div className="flex items-center gap-2 rounded-full border border-line bg-panel px-3.5 py-2.5 text-sm">
        <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
        <span>{site.status}</span>
      </div>

      <div className="flex flex-col gap-2">
        <a
          href={site.links.bookCall}
          className="press block rounded-full bg-accent px-4 py-3 text-center text-[15px] font-semibold text-ink! hover:brightness-110"
        >
          Book a call
        </a>
       {/* <a
          href={site.cvPath}
          download
          className="press block rounded-full border border-line-strong bg-panel px-4 py-3 text-center text-[15px] font-medium text-fg! hover:border-accent"
        >
          Download CV
        </a> */ }
      </div>

      <ul className="m-0 flex list-none flex-col gap-2.5 border-t border-line p-0 pt-4 text-sm text-soft">
        <li className="flex items-center gap-2.5">
          <GitHub className="text-muted" />
          <a href={site.links.github}>{site.links.github.replace("https://", "")}</a>
        </li>
        <li className="flex items-center gap-2.5">
          <LinkedIn className="text-muted" />
          <a href={site.links.linkedin}>in/anthony-ude</a>
        </li>
      </ul>

      <div className="flex flex-col gap-3 border-t border-line pt-4">
        <h2 className="m-0 text-sm font-medium text-soft">Stack</h2>
        {stack.map((g) => (
          <div key={g.group} className="flex flex-col gap-1.5">
            <span className="text-[11px] uppercase tracking-[0.12em] text-muted">{g.group}</span>
            <div className="flex flex-wrap gap-1.5">
              {g.items.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
