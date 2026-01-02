import { Download, Star, type LucideIcon } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IconType } from "react-icons";

export interface FaveLink {
  id: string;
  title: string;
  icon: LucideIcon | IconType;
  url: string;
  color: string;
}

export const FAVORITES: FaveLink[] = [
  {
    id: "github",
    title: "GitHub",
    icon: FaGithub,
    url: "github.com/micodex",
    color: "bg-gray-800",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    icon: FaLinkedin,
    url: "linkedin.com/in/micodex",
    color: "bg-blue-700",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    icon: Star,
    url: "micodex.com",
    color: "bg-yellow-500",
  },
  {
    id: "resume",
    title: "Resume",
    icon: Download,
    url: "micodex.com/resume",
    color: "bg-green-600",
  },
];
