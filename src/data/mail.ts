import { IconType } from "react-icons";
import {
  FaInstagram,
  FaTelegramPlane,
  FaCodepen,
  FaLinkedin,
  FaGlobe,
  FaGithub,
  FaInbox,
} from "react-icons/fa";
interface SocialLink {
  label: string;
  icon: IconType;
  url: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Email",
    icon: FaInbox,
    url: "#",
  },
  {
    label: "Github",
    icon: FaGithub,
    url: "https://github.com/micodex",
  },
  {
    label: "Linkedin",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/milad-gharibi-9ba94835a",
  },
  {
    label: "Website",
    icon: FaGlobe,
    url: "https://micodex-portfolio.vercel.app",
  },
  {
    label: "Codepen",
    icon: FaCodepen,
    url: "https://codepen.io/mi_codex",
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/web.script/",
  },
  {
    label: "Telegram",
    icon: FaTelegramPlane,
    url: "https://t.me/heyitsmg",
  },
];
