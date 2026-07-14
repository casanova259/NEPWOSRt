"use client";

import { useState } from "react";
import { site } from "@/config/site";
import { ProjectCard } from "@/components/projects";
import { ArrowLeft, Search } from "lucide-react";
import Link from "next/link";

type FilterType = "all" | "Fullstack" | "Frontend" | "Backend";

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredProjects = site.projects.filter((p) => {
    // text query match
    const matchesQuery = 
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.blurb.toLowerCase().includes(query.toLowerCase()) ||
      p.stack.some((tech) => tech.toLowerCase().includes(query.toLowerCase()));

    // category filter match
    if (filter !== "all") {
      return matchesQuery && p.categories?.includes(filter);
    }
    return matchesQuery;
  });

  const countAll = site.projects.length;
  const countFullstack = site.projects.filter(p => p.categories?.includes("Fullstack")).length;
  const countFrontend = site.projects.filter(p => p.categories?.includes("Frontend")).length;
  const countBackend = site.projects.filter(p => p.categories?.includes("Backend")).length;

  return (
    <div className="mx-auto w-full max-w-content px-6 py-24 sm:py-32">
      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-fg transition-colors"
        >
          <ArrowLeft size={16} /> back to home
        </Link>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          projects archive
        </h1>
        <p className="mt-3 text-muted leading-relaxed">
          A list of things I&apos;ve built, experiments I&apos;ve designed, and applications I&apos;m currently forging.
        </p>
      </div>

      {/* Filters and Search */}
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Search input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by name, technology..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-full border bg-surface/30 px-9 py-2 text-sm placeholder:text-muted-foreground outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all text-foreground"
          />
        </div>

        {/* Tab filters */}
        <div className="flex flex-wrap gap-2 p-1 border rounded-full sm:rounded-full rounded-2xl bg-surface/10 w-fit">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-full px-4 py-1.5 text-xs font-medium font-mono transition-all cursor-pointer ${
              filter === "all"
                ? "bg-fg text-bg"
                : "text-muted hover:text-fg"
            }`}
          >
            all ({countAll})
          </button>
          <button
            onClick={() => setFilter("Fullstack")}
            className={`rounded-full px-4 py-1.5 text-xs font-medium font-mono transition-all cursor-pointer ${
              filter === "Fullstack"
                ? "bg-fg text-bg"
                : "text-muted hover:text-fg"
            }`}
          >
            fullstack ({countFullstack})
          </button>
          <button
            onClick={() => setFilter("Frontend")}
            className={`rounded-full px-4 py-1.5 text-xs font-medium font-mono transition-all cursor-pointer ${
              filter === "Frontend"
                ? "bg-fg text-bg"
                : "text-muted hover:text-fg"
            }`}
          >
            frontend ({countFrontend})
          </button>
          <button
            onClick={() => setFilter("Backend")}
            className={`rounded-full px-4 py-1.5 text-xs font-medium font-mono transition-all cursor-pointer ${
              filter === "Backend"
                ? "bg-fg text-bg"
                : "text-muted hover:text-fg"
            }`}
          >
            backend ({countBackend})
          </button>
        </div>
      </div>

      {/* Grid List */}
      {filteredProjects.length === 0 ? (
        <div className="rounded-2xl border border-dashed p-12 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            No projects found matching the filter criteria.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {filteredProjects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      )}
    </div>
  );
}
