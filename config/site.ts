/* ==========================================================================
 *  YOUR PORTFOLIO — SINGLE SOURCE OF TRUTH
 * ==========================================================================
 *  Everything visible on the site is driven by this one file.
 *  Edit the values below and the whole site updates. Look for  // TODO  marks.
 *  Nothing else in the codebase needs to be touched for normal content edits.
 * ========================================================================== */

export type Project = {
  title: string;
  /** the story / the "why" behind it — 1–2 sentences, this is what makes it human */
  blurb: string;
  /** the problem it solved or the thing you learned */
  story?: string;
  stack: string[];
  year: string;
  links: { live?: string; source?: string };
  /** mark your favourite — gets a highlighted card */
  featured?: boolean;
};

export type Job = {
  company: string;
  role: string;
  period: string;
  blurb: string;
  url?: string;
};

export type Post = {
  title: string;
  summary: string;
  date: string; // e.g. "Mar 2026"
  url: string;
  readingTime?: string;
};

export const site = {
  /* ---------------------------------------------------------------- */
  /*  IDENTITY                                                         */
  /* ---------------------------------------------------------------- */
  name: "Manik Sharma",
  profileImages: [
    "/profile.jpg", // TODO: replace with your actual photo — you said you'd add this later
    "/profile2.png", // TODO: optional second photo, or remove this line
  ],
  initials: "MS",
  role: "Full Stack Developer",
  location: "Sirsa, Haryana, India", // TODO: confirm — pulled from your map pin, let me know if you want it more/less specific
  timezone: "Asia/Kolkata",
  email: "maniksharma79886@gmail.com",
  greeting: "Hey, I'm Manik",
  tagline:
    "I build fast, polished web apps — from real-time collaborative tools to dashboards — and I'm always chasing the next system to understand.",
  about: [
    "Hey, I'm Manik, a full stack developer who likes building things that feel instant — real-time whiteboards, live dashboards, smooth animations. I care as much about how something feels to use as whether it works.",
    "I'm comfortable across the stack, but I've got a soft spot for the frontend — GSAP animations, Tailwind, React internals — while backend and system design are where I'm actively leveling up right now.",
    "Currently a CS undergrad, freelancing on the side, and building projects that force me to learn something new every time — real-time sync, auth, DSA, whatever the project demands.",
  ],
  tldr: [
    "Building real-time & interactive apps.",
    "Learning system design & backend engineering.",
    "Freelancing on client websites.",
    "Always mid-DSA grind.",
  ],

  /* ---------------------------------------------------------------- */
  /*  STATUS — the little "now" widget                                */
  /* ---------------------------------------------------------------- */
  status: {
    available: true,
    availableText: "open to freelance & opportunities",
    nowLearning: "System Design • DSA • Backend Engineering • Motion Design",
    nowBuilding: "LiveSportz — a live-streaming platform for sports",
    nowListening: "TODO: tell me what you're actually listening to", // TODO
  },

  /* ---------------------------------------------------------------- */
  /*  SOCIAL LINKS  (leave a field empty "" to hide it)               */
  /* ---------------------------------------------------------------- */
  socials: {
    github: "https://github.com/casanova259",
    twitter: "https://x.com/mak_madd",
    linkedin: "https://www.linkedin.com/in/manik-sharma-312664283/",
    email: "mailto:maniksharma79886@gmail.com",
    resume: "", // TODO: add later, as discussed
    discord: "", // TODO: add if you have one, else leave hidden
    medium: "https://medium.com/@casanova270407",
  },

  /* ---------------------------------------------------------------- */
  /*  EXPERIENCE                                                       */
  /* ---------------------------------------------------------------- */
  experience: [
    {
      company: "Freelance",
      role: "Freelance Web Developer",
      period: "2026 — Present",
      blurb:
        "Currently revamping two client websites — rebuilding their frontends to be faster, cleaner, and more maintainable.",
      url: "",
    },
  ] as Job[],

  /* ---------------------------------------------------------------- */
  /*  PROJECTS                                                         */
  /* ---------------------------------------------------------------- */
  projects: [
    {
      title: "Boardy",
      blurb:
        "A real-time collaborative whiteboard — a Miro clone — built to figure out what it actually takes to make multiplayer feel instant: live cursors, synced state, zero lag.",
      story:
        "Multi-user presence and synchronised canvas state run on Liveblocks.io and Convex. It ships a full drawing toolkit — text, sticky notes, rectangles, ellipses, freehand pencil — with keyboard shortcuts (T, R, O, Ctrl+N, Ctrl+Shift+P) for a fast workflow. Clerk handles auth, and the whole thing is type-safe end-to-end in TypeScript and Next.js.",
      stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Liveblocks.io", "Clerk", "Convex"],
      year: "2026",
      links: {
        live: "https://miro-jade.vercel.app/",
        source: "", // TODO: add repo link if public
      },
      featured: true,
    },
    {
      title: "The Wild Oasis",
      blurb:
        "A full internal hotel management dashboard — cabins, bookings, guests — built so staff could run the whole guest lifecycle from one place.",
      story:
        "Real-time stats for the last 7/30/90 days (bookings, sales, check-ins, occupancy rate) are visualised with Recharts. The complete booking lifecycle — check-in/check-out, payment confirmation, breakfast add-ons, status filtering — is handled end to end, with employee-only auth and role-based access via Supabase, full dark mode with persistent sessions, and configurable app settings for pricing and stay limits.",
      stack: ["React (Vite)", "React Query", "React Router", "Styled Components", "Supabase", "Recharts", "React Hook Form"],
      year: "2026",
      links: {
        live: "https://the-wild-oasis-mu-six.vercel.app/login",
        source: "", // TODO: add repo link if public
      },
    },
    {
      title: "LiveSportz",
      blurb:
        "A live-streaming platform for sports — built to get hands-on with real-time video delivery and everything that goes on behind the scenes of a stream.",
      story:
        "Still an active build — the live deployment has a few kinks being ironed out, so this one's a work in progress rather than a finished product.",
      stack: [], // TODO: tell me the stack you used and I'll fill this in
      year: "2026",
      links: {
        live: "", // TODO: currently has issues per your note — add once fixed
        source: "https://github.com/casanova259/LiveSportz",
      },
    },
    {
      title: "Spylt",
      blurb:
        "A high-performance product landing page for a protein shake brand — built to prove flashy animation and top Lighthouse scores aren't mutually exclusive.",
      story:
        "GSAP SplitText animations, parallax scrolling, and a horizontal-scroll section showcasing 6 flavours — tuned to hit 92/100 Lighthouse, 95/100 accessibility, and 100/100 Best Practices through lazy loading and semantic, accessible HTML.",
      stack: ["React", "GSAP", "Tailwind CSS", "Vercel"],
      year: "2024",
      links: {
        live: "https://makmad.vercel.app/",
        source: "",
      },
    },
  ] as Project[],

  /* ---------------------------------------------------------------- */
  /*  SKILLS */
  /* ---------------------------------------------------------------- */
  skills: [
    "JavaScript",
    "TypeScript",
    "C++",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "GSAP",
    "Styled Components",
    "React Query",
    "React Hook Form",
    "Recharts",
    "Node.js",
    "Supabase",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "Git",
    "GitHub",
    "Figma",
    "Canva",
    "Vercel",
    "Netlify",
    "Vite",
    "Liveblocks.io",
    "Clerk",
    "Convex",
  ],

  /* ---------------------------------------------------------------- */
  /*  WRITING  (set [] to hide the section entirely)                  */
  /* ---------------------------------------------------------------- */
  writing: [
    {
      title: "DSA - A Never Ending Story",
      summary:
        "A personal take on the endless grind of learning data structures and algorithms.",
      date: "Jun 2026",
      url: "https://medium.com/@casanova270407/dsa-a-never-ending-story-7f60bdb292f4",
      readingTime: "3 min",
    },
  ] as Post[],

  /* ---------------------------------------------------------------- */
  /*  GITHUB — used for the contribution-style graph + stats           */
  /* ---------------------------------------------------------------- */
  github: {
    username: "casanova259",
    contributionsLastYear: "TODO", // TODO: couldn't fetch this — tell me a number or I can leave it hidden
  },

  /* ---------------------------------------------------------------- */
  /*  FOOTER                                                          */
  /* ---------------------------------------------------------------- */
  footerNote: "Built with ❤️ and hardwork "
} as const;

export type Site = typeof site;