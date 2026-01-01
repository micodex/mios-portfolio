import {
  Folder,
  Home,
  Download,
  Briefcase,
  Code,
  User,
  Cloud,
  Tag,
  type LucideIcon,
} from "lucide-react";

export interface SideBarItem {
  category: string;
  items: {
    id: string;
    label: string;
    icon: LucideIcon;
    color: string;
  }[];
}

export const FINDER_SIDEBAR: SideBarItem[] = [
  {
    category: "Favorites",
    items: [
      { id: "about", label: "About Me", icon: User, color: "text-blue-500" },
      {
        id: "projects",
        label: "Projects",
        icon: Briefcase,
        color: "text-purple-500",
      },
      { id: "skills", label: "Skills", icon: Code, color: "text-emerald-500" },
      {
        id: "downloads",
        label: "Downloads",
        icon: Download,
        color: "text-blue-400",
      },
    ],
  },
  {
    category: "iCloud",
    items: [
      { id: "docs", label: "Documents", icon: Folder, color: "text-gray-400" },
      { id: "desktop", label: "Desktop", icon: Home, color: "text-gray-400" },
      {
        id: "drive",
        label: "iCloud Drive",
        icon: Cloud,
        color: "text-blue-400",
      },
    ],
  },
  {
    category: "Tags",
    items: [
      { id: "red", label: "Important", icon: Tag, color: "text-red-400" },
      { id: "orange", label: "Work", icon: Tag, color: "text-orange-400" },
    ],
  },
];

export interface Project {
  id: number;
  title: string;
  desc: string;
  tags: string[];
  image: string;
  github: string;
  demo: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Micodx Portfolio",
    desc: "A modern portfolio website built with Next.js 15 and React 19, The UI is styled with Tailwind CSS 4 and enhanced with AOS and Framer Motion animations for smooth transitions.",
    tags: ["Next.js", "TypeScript", "Motion"],
    image: "projects/project-1.jpg",
    github: "https://github.com/micodex/micodex-portfolio",
    demo: "https://micodex-portfolio.vercel.app/",
  },
  {
    id: 2,
    title: "macOS Portfolio",
    desc: "The operating system you are currently looking at.",
    tags: ["TypeScript", "Vite", "React"],
    image: "projects/project-4.jpg",
    github: "https://github.com/micodex/macOS-portfolio",
    demo: "",
  },
  {
    id: 3,
    title: "Mx Expense Tracker",
    desc: "A lightweight single-page app for tracking and managing income and expense transactions with a Persian (RTL) interface. Built using React, TypeScript, Vite, and Tailwind CSS.",
    tags: ["React", "TypeScript", "Tailwind"],
    image: "projects/project-2.jpg",
    github: "https://github.com/micodex/mx-expense-tracker",
    demo: "https://micodex.github.io/mx-expense-tracker/",
  },
  {
    id: 4,
    title: "Ave Color",
    desc: "A lightweight JavaScript + TypeScript utility to extract the average (dominant) color from any image — perfect for generating matching backgrounds, borders, or shadows automatically in your apps.",
    tags: ["NPM", "TypeScript", "Utility"],
    image: "projects/project-3.jpg",
    github: "https://github.com/micodex/npm-avecolor",
    demo: "https://www.npmjs.com/package/avecolor",
  },
  {
    id: 5,
    title: "EcoTracker",
    desc: "IoT dashboard for monitoring smart city energy.",
    tags: ["Vue", "D3.js", "IoT"],
    image: "",
    github: "",
    demo: "",
  },

  {
    id: 6,
    title: "PixelArt",
    desc: "Browser-based sprite editor for game devs.",
    tags: ["Canvas API", "React"],
    image: "",
    github: "",
    demo: "",
  },
];

export interface Skills {
  category: string;
  skills: {
    label: string;
    icon: string;
    level: string;
  }[];
}

export const MY_SKILLS = [
  {
    category: "frontend",
    skills: [
      { label: "JavaScript.js", icon: "javascript.png", level: "80%" },
      { label: "TypeScript.ts", icon: "typescript.png", level: "70%" },
      { label: "React.js", icon: "react.png", level: "60%" },
      { label: "CSS", icon: "css.png", level: "85%" },
      { label: "Tailwind.css", icon: "less.png", level: "90%" },
    ],
  },
  {
    category: "backend",
    skills: [
      { label: "Node.js", icon: "sh.png", level: "30%" },
      { label: "Express.js", icon: "JSON.png", level: "40%" },
      { label: "Next.js", icon: "javascript.png", level: "55%" },
    ],
  },
  {
    category: "tools",
    skills: [
      { label: "Git", icon: "text.png", level: "50%" },
      { label: "Github", icon: "text.png", level: "60%" },
      { label: "Docker", icon: "text.png", level: "1%" },
      { label: "CI/CD", icon: "sh.png", level: "1%" },
    ],
  },
];

// --- Download tab ---

export interface File {
  id: string;
  name: string;
  size: string;
  date: string;
  kind: string;
  icon: LucideIcon;
  link?: string;
}

export const DOWNLOADS = [
  {
    id: "resume",
    name: "Resume-2025.pdf",
    size: "215 KB",
    date: "Jan 1 2025 at 11:20AM",
    kind: "PDF",
    icon: Download,
    link: "/milad-gharibi-resume.pdf",
  },
  {
    id: "figma",
    name: "macOS Tahoe figma file.fig",
    size: "4MB",
    date: "Dec 25 2025 at 12:18PM",
    kind: "FIG",
    icon: Download,
  },
  {
    id: "music1",
    name: "Twenty-One-Pilots-Stressed-Out.mp3",
    size: "2.39 MB",
    date: "Dec 25 2025 at 12:18PM",
    kind: "MP3",
    icon: Download,
    link: "/audio/Twenty-One-Pilots-Stressed-Out.mp3",
  },
  {
    id: "music2",
    name: "Metro-Boomin-Annihilate.mp3",
    size: "2.70 MB",
    date: "Dec 25 2025 at 12:18PM",
    kind: "MP3",
    icon: Download,
    link: "/audio/Metro-Boomin-Annihilate.mp3",
  },
  {
    id: "iconset",
    name: "macOS-icon-set.zip",
    size: "3.68 MB",
    date: "Jan 1 2025 at 11:30AM",
    kind: "ZIP",
    icon: Download,
    link: "/macOS-icon-set.zip",
  },
  {
    id: "wallpaperlight",
    name: "macOS-26-default-wallpaer-light-4k.jpg",
    size: "898 KB",
    date: "Dec 25 2025 at 12:18PM",
    kind: "JPG",
    icon: Download,
    link: "/wallpaper-light.jpg",
  },

  {
    id: "wallpaperdark",
    name: "macOS-26-default-wallpaer-dark-4k.jpg",
    size: "848 KB",
    date: "Dec 25 2025 at 12:18PM",
    kind: "JPG",
    icon: Download,
    link: "/wallpaper-dark.jpg",
  },
];
