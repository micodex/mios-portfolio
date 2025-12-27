import ProjectCard from "./ProjectCard";
import ImageSkeleton from "@/components/ui/ImageSkeleton";

import { DOWNLOADS, MY_SKILLS, PROJECTS } from "@/data/finder";
import { ArrowUpRight } from "lucide-react";

import profilePic from "@/assets/images/profile.jpg";

export const AboutTab = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8 text-gray-500 space-y-4">
      <ImageSkeleton
        src={profilePic}
        alt="profile image"
        className="aspect-square w-28 overflow-hidden rounded-full mb-4"
      />
      <h2 className="text-2xl font-bold text-gray-800">Milad Gharibi</h2>
      <p className="max-w-md">
        I am a creative developer building interfaces that feel alive. Welcome
        to my digital garden.
      </p>
      <button className="flex items-center gap-2 text-blue-500 hover:underline cursor-pointer mt-4">
        Read full bio <ArrowUpRight size={14} />
      </button>
    </div>
  );
};

// ---

export const ProjectsTab = ({ mode }: { mode: "grid" | "list" }) => (
  <div className="space-y-6">
    <div>
      <h2 className="text-gray-500 text-xs font-bold mb-4 px-1">
        2025 Projects
      </h2>
      <div
        className={`${
          mode === "grid" ? "grid grid-cols-4 gap-4 text-center" : "block"
        }`}
      >
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
    <div>
      <h2 className="text-gray-500 text-xs font-bold mb-4 px-1">
        Mini Projects
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 opacity-70">
        {PROJECTS.slice(0, 2).map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  </div>
);

// ---

export const SkillsTab = () => (
  <div className="space-y-6">
    {MY_SKILLS.map(({ category, skills }) => (
      <div key={category}>
        <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">
          {category}
        </h3>

        {/* skills in a category */}
        <div className="grid grid-cols-7">
          {skills.map(({ label, icon, level }) => (
            <div
              key={label}
              className="group flex flex-col gap-2 items-center p-2 rounded-xl
                hover:bg-gray-100 hover:outline outline-gray-200
                transition-colors ease-in"
            >
              <ImageSkeleton
                src={`${import.meta.env.BASE_URL}files/${icon}`}
                alt={`${label} icon`}
                className="w-16 aspect-9/10"
              />
              <div className="text-sm font-medium text-gray-700 text-center">
                <span className="block group-hover:text-blue-600">{label}</span>
                <span className="text-xs text-gray-400">{level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

// ---

export const DownloadTab = ({ mode }: { mode: "grid" | "list" }) => (
  <div
    className={`${
      mode === "grid" ? "grid grid-cols-4 gap-4 text-center" : "flex flex-col"
    }`}
  >
    {/* list view header */}
    {mode === "list" && (
      <div className="flex p-3 pt-0 mb-2">
        <h3 className="flex-3 text-left">Name</h3>
        <h3 className="flex-2">Date</h3>
        <h3 className="flex-1">Size</h3>
        <h3 className="flex-1">Kind</h3>
      </div>
    )}

    {DOWNLOADS.map(({ name, icon: Icon, date, size, kind, link }) => (
      <div
        key={name}
        className={`${
          mode === "grid" ? "" : "flex items-center justify-between gap-3"
        }  p-3 hover:bg-blue-50 rounded-lg cursor-pointer group even:bg-gray-100`}
      >
        {/* icons */}
        <div
          className={`${
            mode === "grid"
              ? "flex flex-col items-center gap-4"
              : "flex-3 flex gap-2"
          }`}
        >
          <Icon
            size={mode == "grid" ? 40 : 20}
            className=" text-gray-400 group-hover:text-blue-500"
          />
          <a href={link} download>
            <span className="text-sm font-bold text-gray-700 hover:text-blue-500 transition-colors">
              {name}
            </span>
          </a>
        </div>

        {/* show only on grid mode */}
        {mode === "list" && (
          <span className="flex-2  text-sm text-gray-500">{date}</span>
        )}
        <span className="flex-1  text-sm text-gray-500">{size}</span>

        {/* show only on grid mode */}
        {mode === "list" && (
          <span className="flex-1   text-sm text-gray-500">{kind}</span>
        )}
      </div>
    ))}
  </div>
);
