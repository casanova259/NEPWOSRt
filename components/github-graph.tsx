"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/config/site";
import { Reveal, SectionHeader } from "./reveal";
import { GitHubIcon, ArrowUpRight } from "./icons";

type Day = { date: string; count: number; level: number };
type ApiResponse = { total: Record<string, number>; contributions: Day[] };

const SHADES = [
  "bg-fg/[0.06]",
  "bg-accent/25",
  "bg-accent/45",
  "bg-accent/70",
  "bg-accent",
];

/** Group a flat list of days (oldest -> newest) into week columns, Sun-Sat rows */
function toWeeks(days: Day[]) {
  if (days.length === 0) return [];
  const weeks: Day[][] = [];
  let current: Day[] = [];

  // pad the first week so day 0 lands on the correct weekday (0 = Sun)
  const firstDow = new Date(days[0].date).getDay();
  for (let i = 0; i < firstDow; i++) current.push({ date: "", count: -1, level: -1 });

  for (const d of days) {
    current.push(d);
    if (current.length === 7) {
      weeks.push(current);
      current = [];
    }
  }
  if (current.length) {
    while (current.length < 7) current.push({ date: "", count: -1, level: -1 });
    weeks.push(current);
  }
  return weeks;
}

export function GitHubGraph() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!site.github.username) return;
    fetch(`https://github-contributions-api.jogruber.de/v4/${site.github.username}?y=last`)
      .then((res) => {
        if (!res.ok) throw new Error("bad response");
        return res.json();
      })
      .then((json: ApiResponse) => setData(json))
      .catch(() => setError(true));
  }, []);

  if (!site.github.username) return null;
  const profile = `https://github.com/${site.github.username}`;

  const years = data ? Object.keys(data.total) : [];
  const currentYear = years[years.length - 1];
  const total = data && currentYear ? data.total[currentYear] : null;
  const weeks = data ? toWeeks(data.contributions) : [];

  return (
    <section className="mx-auto w-full max-w-content px-6 py-16">
      <SectionHeader id="github" index="05" title="in code" />

      <Reveal>
        <div className="rounded-2xl border bg-surface/30 p-5">
          <div className="mb-4 flex items-center justify-between">
            <a
              href={profile}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
            >
              <GitHubIcon className="h-4 w-4" />
              @{site.github.username}
              <ArrowUpRight className="opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <span className="font-mono text-xs text-muted">
              {error
                ? "couldn't load"
                : total !== null
                ? `${total.toLocaleString()} contributions`
                : "loading…"}
            </span>
          </div>

          <div className="overflow-x-auto pb-1">
            <div className="flex gap-[3px]">
              {error && (
                <p className="font-mono text-xs text-faint">
                  Couldn't reach the GitHub contributions API — it may be rate-limited, try
                  refreshing.
                </p>
              )}

              {!error &&
                weeks.map((week, w) => (
                  <div key={w} className="flex flex-col gap-[3px]">
                    {week.map((day, d) => {
                      if (day.level === -1) {
                        // padding cell, invisible
                        return <span key={d} className="h-[11px] w-[11px] flex-none" />;
                      }
                      return (
                        <motion.span
                          key={d}
                          initial={{ opacity: 0, scale: 0.4 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: (w * 7 + d) * 0.0012, duration: 0.2 }}
                          className={`h-[11px] w-[11px] flex-none rounded-[2px] ${SHADES[day.level]}`}
                          title={`${day.count} contributions on ${day.date}`}
                        />
                      );
                    })}
                  </div>
                ))}
            </div>
          </div>

          <div className="mt-3 flex items-center justify-end gap-1.5 font-mono text-[10px] text-faint">
            less
            {SHADES.map((s, i) => (
              <span key={i} className={`h-[10px] w-[10px] rounded-[2px] ${s}`} />
            ))}
            more
          </div>
        </div>
      </Reveal>
    </section>
  );
}